import React, { useState, useEffect } from 'react';
import './Calc.css';

function Calc({ dataCalc }) {
    const [fromCurrency, setFromCurrency] = useState('UAH');
    const [toCurrency, setToCurrency] = useState('USD');
    const [amount, setAmount] = useState('');
    const [result, setResult] = useState('');

    // Функция конвертации валют
    const convertCurrency = () => {
        let result = 0;
        // Конвертация из UAH в иностранную валюту
        if (fromCurrency === 'UAH' && toCurrency !== 'UAH') {
            result = amount / dataCalc[toCurrency].pur;
        }
        // Конвертация из иностранной валюты в UAH
        else if (fromCurrency !== 'UAH' && toCurrency === 'UAH') {
            result = amount * dataCalc[fromCurrency].sale;
        }
        // Конвертация между иностранными валютами
        else if (fromCurrency !== 'UAH' && toCurrency !== 'UAH') {
            const rate = dataCalc[fromCurrency].sale / dataCalc[toCurrency].pur;
            result = amount * rate;
        }
        // Конвертация внутри одной и той же валюты
        else {
            result = amount;
        }
        setResult(result.toFixed(2));
    };

    useEffect(() => {
        if (amount && fromCurrency && toCurrency && dataCalc[fromCurrency] && dataCalc[toCurrency]) {
            convertCurrency();
        }
    }, [amount, fromCurrency, toCurrency, dataCalc]);
    
    return (
    <div>
        <div className='row'>
            <div className='col-md-12'>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Сумма"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <select className="form-control" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                        <option value="UAH">Українська гривня</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <select className="form-control" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                        <option value="UAH">Українська гривня</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        value={result}
                        readOnly
                    />
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12'>
                <div className="input-group mb-3">
                    <input type='number' className='form-control' value={amount} onChange={handleAmountChange} />
                    <span className="input-group-text" id="basic-addon2">
                        {'='}
                    </span>
                    <input type='text' className='form-control' value={result} readOnly/>
                </div>
            </div>
        </div>
        

    </div>
  );
}

export default Calc;