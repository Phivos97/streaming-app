import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({children}: MainProps) => {
  return (
    <div className=' '>{children}</div>
  )
}

export default Main