const axios = require('axios');

var CovidService={
  getMexico: function(){
    return axios({
      "method":"GET",
      "url":"https://covid-19-data.p.rapidapi.com/report/country/name",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
      "x-rapidapi-key":"3c7e554628msh610c7945d926a7dp1e7f29jsnfc83e59709f4",
      "useQueryString":true
      },"params":{
      
      "date":"2020-06-10",
      "name":"Mexico",
      "date-format":"YYYY-MM-DD",
      "format":"json"
      }
    })
  }
}

export { CovidService as default };