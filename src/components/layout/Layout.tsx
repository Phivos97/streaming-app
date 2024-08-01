import { ReactNode } from 'react';
import BackdropContainer from './BackdropContainer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div className='bg-hero-pattern  bg-cover h-full bg-no-repeat'>
      <BackdropContainer>
        {children}
      </BackdropContainer>
    </div>
  )
}

export default Layout