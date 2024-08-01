import { ReactNode } from 'react';

interface NavbarProps {
  children: ReactNode;
}

const Navbar = ({children}: NavbarProps) => {
  return (
    <nav className='text-white grid grid-cols-[1fr,3fr] grid-rows-[3rem] gap-x-20'>{children}</nav>
  )
}

export default Navbar