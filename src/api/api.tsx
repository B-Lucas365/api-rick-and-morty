import axios from "axios"

const urlCharacters = "https://rickandmortyapi.com/api/character"
const urlEpisodes = "https://rickandmortyapi.com/api/episode"



export const getCharacters = async (page: number, status: string, species: string, gender: string) => {
  return axios({
    method: "get",
    url: `${urlCharacters}/?page=${page}&status=${status}&species=${species}&gender=${gender}`,
  }).then((response) => {
    return response.data;
  })
};

export const getEpisodes = async (episode: number) => {
  return axios({
    method: "get",
    url: `${urlEpisodes}/${episode}`,
  }).then((response) => {
    return response.data;
  })
};

export const getManyCharacters = async () => {
  const result = await axios.get(urlCharacters)
  return result.data.results
}

export const getEpsodes = async () => {
    const result = await axios.get(urlEpisodes)
    return result.data.results
}


