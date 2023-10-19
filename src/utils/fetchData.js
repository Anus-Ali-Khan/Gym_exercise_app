export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "80a1dbbe6bmsha2adc0d2e3ae3a2p1c2afcjsn4849e010d214",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
