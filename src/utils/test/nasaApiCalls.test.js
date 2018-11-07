import { nasaApiCall } from '../nasaApiCalls';
import { mockApiCall } from '../mockData';

describe('nasaApiCalls', () => {
  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn();
    nasaApiCall('2018-11-06');
    expect(window.fetch).toHaveBeenCalledWith(
      `https://api.nasa.gov/planetary/apod?api_key=${
        process.env.VUE_APP_NASA_KEY
      }&date=2018-11-06`
    );
  });

  it('should return the correct data', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockApiCall)
      });
    });

    const expected = mockApiCall;
    const result = await nasaApiCall('2018-11-06');

    expect(result).toEqual(expected);
  });
});
