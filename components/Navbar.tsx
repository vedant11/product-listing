import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className='w-full'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='contribute'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
        // handleClick={() => // go to a new tab
        //   window.open('https://www.notion.so/Contribute-4b1c9b8e6a8d4b6f9e5b4c0e5f6f5b9b', '_blank'
        //   )} 
      />
    </nav>
  </header>
);

export default NavBar;
