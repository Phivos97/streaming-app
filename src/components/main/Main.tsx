import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({children}: MainProps) => {
  return (
    <div className='h-full overflow-auto'>{children}</div>
  )
}

export default Main