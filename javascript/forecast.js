const apiKey = "SMcB2A7UQUoAEeU503VMVUKxzx4zLRSH";

const getCityInfo = async (city) => {
	const baseurl = "http://dataservice.accuweather.com/locations/v1/cities/search";
	const query = `?apikey=${apiKey}&q=${city}`;
	const cityInfo = await fetch(baseurl + query);
	const data = await cityInfo.json();
	// console.log(data);
	return data[0];
};

getCityInfo("Lahore");

const getWeather = async (id) => {
	const baseurl = "http://dataservice.accuweather.com/currentconditions/v1/";
	const query = `${id}?apikey=${apiKey}`;
	const weather = await fetch(baseurl + query);
	const data = await weather.json();
	// console.log(data);
	return data[0];
};

getWeather("260622");
