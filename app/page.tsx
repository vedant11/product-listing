import { fetchMovies } from "@utils";
import { HomeProps } from "@types";
import { yearsOfProduction } from "@constants";
import { MovieCard, ShowMore, CustomFilter } from "@components";

export default async function Home({ searchParams }: HomeProps) {
  const page_number = searchParams.page_number || 1;
  const allMovies = await fetchMovies({
    page_number: page_number,
  });
  
  const isDataEmpty = !Array.isArray(allMovies) || allMovies.length < 1 || !allMovies;

  return (
    <main className='overflow-hidden'>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>CD Catalogue</h1>
          <p>Explore out movies you might like</p>
        </div>

        <div className='home__filters'>

          <div className='home__filter-container'>
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__products-wrapper'>
              {allMovies?.map((movie) => (
                <MovieCard movie={movie}/>
              ))}
            </div>
            <ShowMore
              pageNumber={page_number-1}
              title={'Previous'}
            />
            <ShowMore
              pageNumber={page_number+1}
              title={'Next'}
            />
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
