function getData(countryURL) {
  fetch(countryURL)
    .then(function (response) {
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData);
      let country = countryData[0];
      onCountryDataReceived(country);
    })
    .catch((error) => console.log(error));
}

function onCountryDataReceived(country) {
  addCountryName(country);
  addCountryCapital(country);
  addNameInOtherLanguages(country);
}

// This function should take the JSON for the country and put a H1 tag on the screen containing its name
function addCountryName(countryData) {
  let content = getContentDiv();
  let title = document.createElement("h1");
  title.innerText = countryData.name;
  content.appendChild(title);
}

// This function should take the JSON for the country and put a H2 tag on the screen containing its capital city
function addCountryCapital(countryData) {
  let content = getContentDiv();
  let title = document.createElement("h2");
  title.innerText = "Capital City: " + countryData.capital;
  content.appendChild(title);
}

// This function should take the JSON for the country and put UL and LI tags on the screen with the countries name translated into other languages
function addNameInOtherLanguages(countryData) {
  let content = getContentDiv();
  let unorderedList = document.createElement("ul");
  let translations = countryData.translations;

  Object.values(translations).forEach((element) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = element;
    unorderedList.appendChild(listItem);
  });

  content.appendChild(unorderedList);
}

function getContentDiv() {
  return document.querySelector("#content");
}

function onLoad() {
  getData(
    "https://restcountries.eu/rest/v2/name/Great%20Britain?fullText=true"
  );

  /** Remove this line when you have completed the task

  getData("https://restcountries.eu/rest/v2/name/France?fullText=true");

  getData("https://restcountries.eu/rest/v2/name/Germany?fullText=true");

  getData("https://restcountries.eu/rest/v2/name/Spain?fullText=true");

  getData("https://restcountries.eu/rest/v2/name/Portugal?fullText=true");

  getData("https://restcountries.eu/rest/v2/name/Hungary?fullText=true");

  getData("https://restcountries.eu/rest/v2/name/Russia?fullText=true");

  */ // Remove this line when you have completed the task
}

window.onload = onLoad;
