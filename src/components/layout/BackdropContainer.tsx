import { ReactNode } from 'react';

interface BackdropContainerProps {
  children: ReactNode;
}

const BackdropContainer = ({children}: BackdropContainerProps) => {
  return (
    <div className='backdrop-blur-lg bg-gray-600 bg-opacity-50  flex flex-col pt-4 px-6 h-full overflow-auto gap-10'>{children}</div>
  )
}

export default BackdropContainer