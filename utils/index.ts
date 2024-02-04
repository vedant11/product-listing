import {  FilterProps, MovieProps } from "@types";


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchMovies(filters: FilterProps) {
  const pageNumber = filters.page_number;
  const headers: HeadersInit = {
    "Authorization": `Bearer ${process.env.TMDB_API_READ_ACCESS_TOKEN}`,
    "accept": "application/json",
  };

  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=\
    false&include_video=false&language=en-US&page=${pageNumber}&sort_by=primary_release_date.asc&primary_release_year=${filters.year_number||2024}`,
    {
      headers: headers,
    }
  );
  const result = (await response.json()).results;
  return result
}

export const generateMovieImageUrl = (movie: MovieProps, angle?: string) => {
  const {  poster_path: posterPath } = movie;
  const url = new URL(`https://image.tmdb.org/t/p/w500/${posterPath}`);

  return `${url}`;
} 
