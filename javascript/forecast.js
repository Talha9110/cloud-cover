const apiKey = "Y6fLm0cgSr8dSI43uv5xrTOuR8AAxj1p";

const getCityInfo = async (city) => {
	const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${apiKey}&q=${city}`;
	const cityInfo = await fetch(baseUrl + query);
	const data = await cityInfo.json();
	return data[0];
};

getCityInfo();

const getWeather = async (id) => {
	const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
	const query = `${id}?apikey=${apiKey}`;
	const weather = await fetch(baseUrl + query);
	const data = await weather.json();
	return data[0];
};

getWeather();
