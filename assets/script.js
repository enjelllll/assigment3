
async function fetchDataAndUpdate(country) {
  const url = `https://covid-193.p.rapidapi.com/countries=${country}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f4df887c42msh6457430bc96393dp19da7cjsn9d85c310ce87',
      'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    console.log(response)
    const result = await response.text();
    const obj = JSON.parse(result);
    const kasusAktif = obj.response[0].cases.active;

    document.getElementById('activeCases').textContent = `Active Cases = ${kasusAktif}`;
    document.getElementById('newCase').textContent = `New Cases = ${obj.response[0].cases.new}`;
    document.getElementById('recoveredCases').textContent = `Recovered Cases = ${obj.response[0].cases.recovered}`;
    document.getElementById('totalCases').textContent = `Total Cases = ${obj.response[0].cases.total}`;
    document.getElementById('totalDeaths').textContent = `Total Deaths = ${obj.response[0].deaths.total}`;
    document.getElementById('totalTests').textContent = `Total Tests = ${obj.response[0].tests.total}`;
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('countryInput').addEventListener('submit', function (event) {
  event.preventDefault();
  const countryInput = document.getElementById('negara').value;
  fetchDataAndUpdate(countryInput);
});

fetchDataAndUpdate('indonesia');

