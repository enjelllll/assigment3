async function fetchDataByCountry(country) {
  // clearDataElement();
  const baseUrl = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f4df887c42msh6457430bc96393dp19da7cjsn9d85c310ce87',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(baseUrl, options);
    const result = await response.text();
    const obj = JSON.parse(result);
    const data = obj.response[0];

    const kasusAktif = data["cases"]["recovered"];
    const kasusBaru = data["cases"]["new"];
    const kasusPulih = data["cases"]["recovered"];
    const totalKasus = data["cases"]["total"];
    const totalKematian = data["deaths"]["total"];
    const totalTest = data["tests"]["total"];

    document.getElementById('activeCases').textContent = `${kasusAktif}`;
    document.getElementById('newCases').textContent = `${kasusBaru}`;
    document.getElementById('recoveredCases').textContent = `${kasusPulih}`;
    document.getElementById('totalCases').textContent = `${totalKasus}`;
    document.getElementById('totalDeaths').textContent = `${totalKematian}`;
    document.getElementById('totalTests').textContent = `${totalTest}`;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const countryInput = document.getElementById('negara').value;

  if (countryInput == "") {
    alert("please input country name!")
  } else {
    fetchDataByCountry(countryInput);
  }
})