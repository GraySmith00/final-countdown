export const nasaApiCall = async date => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.VUE_APP_NASA_KEY
    }&date=${date}`
  );
  let data = await response.json();
  return data;
};
