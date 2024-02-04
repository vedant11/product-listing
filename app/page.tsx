import { fetchMovies } from "@utils";
import { HomeProps } from "@types";
import { yearsOfProduction } from "@constants";
import { MovieCard, ShowMore, CustomFilter, SearchBar } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const page = Number(searchParams.page || 1);
  const allMovies = await fetchMovies({
    page: page,
    year_number: searchParams.year_number,
    search_title: String(searchParams.search_title||''),
  });
  
  const isDataEmpty = !Array.isArray(allMovies) || allMovies.length < 1 || !allMovies;

  return (
    <main className='overflow-hidden'>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>CD Catalogue</h1>
          <p>Explore popular movies you might like</p>
        </div>

        <div className='home__filters'>
        <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='year_number' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__products-wrapper'>
              {allMovies?.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
            <div className='mx-auto flex justify-between items-center'>
              <ShowMore
                pageNumber={page-1}
                title={'Previous'}
                />
              Page{page}
              <ShowMore
                pageNumber={page+1}
                title={'Next'}
                />
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allMovies?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
