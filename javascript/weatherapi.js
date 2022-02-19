const cityForm = document.querySelector(".city-form");
const icon = document.querySelector(".icon-set");
const card = document.querySelector(".card");

const updateCity = async (city) => {
	const cityDetails = await getCityInfo(city);
	const weather = await getWeather(cityDetails.Key);
	return { cityDetails, weather };
};

cityForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const city = cityForm.city.value.trim();
	cityForm.reset();
	card.classList.remove("d-none");
	updateCity(city)
		.then((data) => updateUI(data))
		.catch((err) => console.log(err));
});

const time = document.querySelector(".time-image");
const details = document.querySelector(".details");
const color = document.querySelector(".color");
const weatherDiv = document.querySelector(".weather-icon");
const updateUI = (data) => {
	const { cityDetails, weather } = data;
	details.innerHTML = `
    <h5 class="my-5">${cityDetails.EnglishName} </h5>
    <div class"my-3">${weather.WeatherText}</div>

    <div class="display-4 my-4">${weather.Temperature.Metric.Value}<span>&deg;C</span> </div>
    `;
	let timeSource = null;
	if (weather.IsDayTime) {
		timeSource = "./images/day.svg";
		color.classList.add("day");
		weatherDiv.classList.add("d");
	} else {
		timeSource = "./images/night.svg";
		color.classList.add("night");
		weatherDiv.classList.add("n");
	}
	time.setAttribute("src", timeSource);
	let iconSource = `./images/icons/${weather.WeatherIcon}.svg`;
	icon.setAttribute("src", iconSource);
};
