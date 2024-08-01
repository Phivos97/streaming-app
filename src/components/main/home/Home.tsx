import { ReactNode } from 'react';

interface HomeProps {
  children: ReactNode;
}

const Main = ({children}: HomeProps) => {
  return (
    <div className='content-start justify-center  h-full grid grid-cols-[1fr,3fr] grid-rows-[0.57fr_minmax(300px,0.4fr)] w-full gap-x-20 gap-y-6 '>{children}</div>
  )
}

export default Main