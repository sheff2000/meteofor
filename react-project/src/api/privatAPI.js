import axios from 'axios';

const getExchangeRates = async () => {
    // Форматирование текущей даты в формат dd.mm.yyyy
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0].split('-').reverse().join('.');
  
    try {
        const response = await axios.get(`https://api.privatbank.ua/p24api/exchange_rates?json&date=${formattedDate}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        const result = response.data; 
        console.log('API SEBND  --- ', result); 
        return result; 
    } catch (error) {
        console.error('Ошибка при запросе к API:', error);
        return false;
    }
  }

  const privatAPI = {
    getExchangeRates,
  }

export default privatAPI;