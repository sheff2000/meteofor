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
        if (fromCurrency === 'UAH' && toCurrency !== 'UAH') {
            result = amount / dataCalc[toCurrency]?.pur;
        } else if (fromCurrency !== 'UAH' && toCurrency === 'UAH') {
            result = amount * dataCalc[fromCurrency]?.sale;
        } else if (fromCurrency !== 'UAH' && toCurrency !== 'UAH') {
            const rate = dataCalc[fromCurrency]?.sale / dataCalc[toCurrency]?.pur;
            result = amount * rate;
        } else {
            result = amount; // Этот случай, когда fromCurrency и toCurrency одинаковы, можно обрабатывать по-разному
        }
        setResult(result.toFixed(2));
    };

    // Обработчик изменения суммы для конвертации
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    useEffect(() => {
        convertCurrency();
    }, [amount, fromCurrency, toCurrency, dataCalc]);

    return (
        <div>
            <div className='col-md-12'>
                <div className="input-group mb-3">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Сумма"
                        value={amount}
                        onChange={handleAmountChange}
                    />
                    <select className="form-control" value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
                        <option value="UAH">Українська гривня</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <span className="input-group-text">{'<->'}</span>
                    <select className="form-control" value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                        <option value="UAH">Українська гривня</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        value={`${result} ${toCurrency}`}
                        readOnly
                    />
                </div>
            </div>
        </div>
    );
}

export default Calc;
