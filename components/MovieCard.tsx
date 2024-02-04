"use client";

import { useState } from "react";
import Image from "next/image";

import { generateMovieImageUrl } from "@utils";
import { MovieProps } from "@types";
import CustomButton from "./CustomButton";
import MovieDetails from "./MovieDetails";

interface MovieCardProps {
  movie: MovieProps;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const  {title, vote_average: rating, original_language: originalLanguage, release_date: releaseDate} = movie;

  return (
    <div className="product-card group">
      <div className="product-card__content">
        <h2 className="product-card__content-title">
        {title}
        </h2>
      </div>

      <div className='relative w-full h-40 my-3 object-contain'>
        {/* Image */}
        <Image src={generateMovieImageUrl(movie)} alt='product model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            {/* Rating */}
            <Image src='/rating.jpeg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {rating}
            </p>
          </div>
          <div className="product-card__icon">
            {/* Language */}
            <Image src="/language.jpeg" width={20} height={20} alt="seat" />
            <p className="product-card__icon-text">{originalLanguage.toUpperCase()}</p>
          </div>
          <div className="product-card__icon">
            {/* Year of release */}
            <Image src="/year.png" width={20} height={20} alt="seat" />
            <p className="product-card__icon-text">{releaseDate.split('-')[0]}</p>
          </div>
        </div>

        <div className="product-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <MovieDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} movie={movie} />
    </div>
  );
};

export default MovieCard;
