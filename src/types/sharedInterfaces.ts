export interface User {
  id?: string;
  login: string;
  password: string;
}

export interface Studio {
  id?: string;
  name: string;
  website: string;
}

export interface Chapter {
  id?: string;
  name: string;
  studioId?: string;
  animeId?: string;
  duration: number;
}

export interface Anime {
  id?: string;
  name: string;
  year: number;
  studioId?: string;
}