export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface Info {
  count: number,
  pages: number,
  next: string | null,
  prev: string | null
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}

export interface GetCharactersProps {
  page: number, 
  status: string, 
  species: string, 
  gender: string
}