"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@types";
import { updateSearchParams } from "@utils";
import { CustomButton } from "@components";
import { pageMax } from "@constants";

const ShowMore = ({ pageNumber, title }: ShowMoreProps) => {
  const router = useRouter();
  const nextExists = pageNumber<=pageMax;
  const previousExists = pageNumber>1;
  const handleNavigation = () => {
    const newPathname = updateSearchParams("page_number", `${pageNumber}`);
    
    router.push(newPathname);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {((previousExists && title==='Previous') || (nextExists && title==='Next') ) && (
        <CustomButton
          btnType="button"
          title={title}
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
