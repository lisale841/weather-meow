import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: 'orlando'},
  headers: {
    'X-RapidAPI-Key': '8f721108famsh92bceea2f2d9673p14fc63jsn9e143d1c4aa7',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export const search = async (search) => {
  options.params.q = search;
  const request = await axios.request(options);
  return request.data
}

