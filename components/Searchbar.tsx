"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { updateSearchParams } from "@utils";


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses} b-1`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTitle.trim() === "") {
      return alert("Please provide some input");
    }
    router.push(updateSearchParams("search_title", searchTitle.toLowerCase()));
    return;
  };


  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <input
          type='text'
          name='model'
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder='Write movie name...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='' />
      </div>
    </form>
  );
};

export default SearchBar;
