
export const fetchWeatherData = async () => {
    const cities = ['Eilat', 'London', 'New York', 'Alaska'];
    const apiKey = '8ee633956bad6ae1965b557a94ecfcba';
  
    const data = await Promise.all(
      cities.map(async (city) => {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`
        );
        if (response.status === 429) {
          throw new Error('429 - Too many requests');
        }
        return response.json();
      })
    );
  
    return data;
  };
  