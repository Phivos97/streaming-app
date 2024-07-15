import { ReactNode } from 'react';

interface BackdropContainerProps {
  children: ReactNode;
}

const BackdropContainer = ({children}: BackdropContainerProps) => {
  return (
    <div className='backdrop-blur-lg bg-gray-600 bg-opacity-50 flex flex-col h-full py-4 px-6 justify-between gap-10'>{children}</div>
  )
}

export default BackdropContainer