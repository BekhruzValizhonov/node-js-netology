const http = require("http");

const getWeatherData = (queryParam) => {
  try {
    const api = `http://api.weatherstack.com/current?access_key=${process.env.ACCESS_KEY}&query=${queryParam}`;

    http.get(api, (res) => {
      const { statusCode } = res;

      if (statusCode !== 200) {
        console.log(statusCode);
        return;
      }

      res.setEncoding("utf8");

      let rowData = "";

      res.on("data", (chunk) => (rowData = chunk));

      res.on("end", () => {
        let parseData = JSON.parse(rowData);
        console.log(parseData.current);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

getWeatherData(process.argv.slice(2).join(" "));
