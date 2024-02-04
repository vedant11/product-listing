import { MouseEventHandler } from "react";

export interface MovieProps {
  title: string;
  poster_path: string;
  vote_average: number;
  original_language: string;
  release_date: string;
}

export interface MovieCardProps {
}

export interface FilterProps {
  page: number;
  year_number: string;
  search_title: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  title: string;
}
