export interface CreateUserDto {
  login: string;
  password: string;
}

export interface CreateStudioDto {
  name: string;
  website: string;
}

export interface CreateChapterDto {
  name: string;
  studioId?: string;
  animeId?: string;
  duration: number;
}

export interface CreateAnimeDto {
  name: string;
  year: number;
  studioId?: string;
}
