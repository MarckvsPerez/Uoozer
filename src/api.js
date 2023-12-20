import axios from 'axios';

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchData = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

async function getPlaylists() {
  const url = '/chart/0/playlists'; // Utiliza la URL relativa, ya que ya configuramos la base URL
  return await fetchData(url);
}

async function getPlaylist(q) {
  const url = `/playlist/${q}`;
  return await fetchData(url);
}

async function getTracks(q) {
  const url = `/search/track?q=${q}`;
  return await fetchData(url);
}

async function getAlbums(q) {
  const url = `/search/album?q=${q}`;
  return await fetchData(url);
}

async function getArtists(q) {
  const url = `/search/artist?q=${q}`;
  return await fetchData(url);
}

export {getPlaylists, getPlaylist, getTracks, getAlbums, getArtists};
