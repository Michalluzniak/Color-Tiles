import { useEffect, useState } from 'react';

export const useIsMobile = (size: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= size);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // set initial state

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};
