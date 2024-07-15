import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const container = ({children}: ContainerProps) => {
  return (
    <div className='flex flex-auto rounded-3xl bg-opacity-20 bg-gray-400 overflow-hidden h-full'>{children}</div>
  )
}

export default container