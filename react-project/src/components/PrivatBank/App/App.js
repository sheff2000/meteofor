import React, { useState, useEffect } from 'react';
import './App.css';
import Kurs from '../Kurs/Kurs';
import Calc from '../Calc/Calc';
import privatAPI from '../../../api/privatAPI';

function AppPrivat() {
    const [error, setError] = useState(null);
    const [exchangeRates, setExchangeRates] = useState({
        USD: {
                sale: null,
                pur: null,
            },
        EUR: {
                sale: null,
                pur: null,
        },
        PLZ: {
            sale: null,
            pur: null,
        },
    });
    useEffect(() => {
        const fetchExchangeRates = async () => {
            const data = await privatAPI.getExchangeRates();
            if (!data) {
                setError('Error in API');
            } else { 
                const rates = ['USD', 'EUR', 'PLZ'].reduce((acc, currency) => {
                    const rate = data.exchangeRate.find(rate => rate.currency === currency);
                    if (rate) {
                        acc[currency] = {
                            sale: rate.saleRate,
                            pur: rate.purchaseRate,
                        };
                    }
                    return acc;
                }, {});
    
                setExchangeRates(rates);
                setError(null);
            }
        };
        fetchExchangeRates();
    }, []);
    
  return (
    <div>
        <h1>Privat Bank</h1>
        <div className='row'>
            <div className='col-md-4'>
                {error ? <div>{error}</div> : <Kurs exchangeRates={exchangeRates} />}
            </div>
            <div className='col-md-8'>
                <Calc dataCalc={exchangeRates}/>
            </div>
        </div>
        курси різних валют можуть відрізнятися
    </div>
  );
}

export default AppPrivat;