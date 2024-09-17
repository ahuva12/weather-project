export const fetchWeatherData = async () => {
  const cities = ['Eilat', 'London', 'New York', 'Alaska'];
  const apiKey = '8ee633956bad6ae1965b557a94ecfcba';

  const data = await Promise.all(
    cities.map(async (city) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`
        );

        if (!response.ok) { 
          const errorData = await response.json(); 
          const errorMessage = errorData.message || 'Unknown error';
          throw new Error(`Error ${response.status}: ${errorMessage}`);
        }

        return response.json();

      } catch (error) {
        console.error(`Error fetching data for ${city}: ${error.message}`);
        throw error;
      }
    })
  );

  return data;
};
