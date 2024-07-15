import { ReactNode } from 'react';

interface MenuScreenProps {
  children: ReactNode;
}

const Main = ({children}: MenuScreenProps) => {
  return (
    <div className='content-center justify-center  h-full grid grid-cols-[1fr,3fr] grid-rows-[2fr_minmax(300px,1fr)] w-full gap-x-10 gap-y-6'>{children}</div>
  )
}

export default Main