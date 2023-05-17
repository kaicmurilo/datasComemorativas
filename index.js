const axios = require("axios");

//API GERADA NO SITE https://calendarific.com/account
const apiKey = "api_key";
//SIGLA DO PAIS, PODE SER OBTIDO NA DOCUMENTAÇÃO
const country = "BR";

axios
  .get(
    `https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=${country}&year=2023`
  )
  .then((response) => {
    const holidays = response.data.response.holidays;
    holidays.forEach((holiday) => {
      console.log(holiday.name + " - " + holiday.date.iso);
    });
  })
  .catch((error) => {
    console.error(error);
  });
