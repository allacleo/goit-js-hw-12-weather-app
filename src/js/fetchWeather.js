// dc66446195534889876100922191907 my Key
  
const fetchWeather = query => {
    const options = {
      baseUrl: 'https://api.apixu.com/v1/current.json',
      apiKey: 'dc66446195534889876100922191907',
    };
  
    const requestParams = `?key=${options.apiKey}&q=${query}`;
  
    return fetch(options.baseUrl + requestParams).then(responce =>
      responce.json(),
    );
  };
  
  export default fetchWeather;