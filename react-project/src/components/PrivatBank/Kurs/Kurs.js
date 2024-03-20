import React from 'react';
import './Kurs.css';

function Kurs({ exchangeRates }) {
    return (
    <div>
        <div className='row'>
            <div className='col-md-4 text-gray col-4'>Валюта</div>
            <div className='col-md-4 text-gray col-4'>Купівля</div>
            <div className='col-md-4 text-gray col-4'>Продаж</div>
        </div>
        {['EUR', 'USD', 'PLZ'].map((currency) => (
            <div key={currency} className='row kurs-value'>
                <div className='col-md-4 col-4'>
                    {currency}
                    <span className='text-gray'> UAH</span>
                </div>
                <div className='col-md-4 col-4'>
                    {exchangeRates[currency]?.pur || 'Немає даних'}
                </div>
                <div className='col-md-4 col-4'>
                    {exchangeRates[currency]?.sale || 'Немає даних'}
                </div>
                <hr/>
            </div>
        ))}
    </div>
  );
}

export default Kurs;