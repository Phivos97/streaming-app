import axios from 'axios';

const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const BASE_URL = 'https://api.myanimelist.net/v2/';

const authenticate = async () => {
  try {
    const response = await axios.post('https://myanimelist.net/v1/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Failed to authenticate:', error);
    throw new Error('Failed to authenticate with MyAnimeList API');
  }
};

const searchAnime = async (query) => {
  try {
    const accessToken = await authenticate();
    const response = await axios.get(`${BASE_URL}anime`, {
      params: {
        q: query,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Failed to fetch anime data:', error);
    throw new Error('Failed to fetch anime data from MyAnimeList API');
  }
};

// Example usage
const query = 'Naruto';
searchAnime(query)
  .then((data) => console.log('Anime search results:', data))
  .catch((error) => console.error('Error searching anime:', error));
