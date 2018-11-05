export const nasaApiCall = async () => {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${
      process.env.VUE_APP_NASA_KEY
    }`
  );
  const data = await response.json();
  return data;
};
