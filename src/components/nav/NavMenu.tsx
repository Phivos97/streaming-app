import { ReactNode } from 'react';

interface NavMenurProps {
  children: ReactNode;
}

const NavMenu = ({children} :NavMenurProps) => {
  return (
    <div className='col-start-2 flex w-full justify-between gap-20'>{children}</div>
  )
}

export default NavMenu