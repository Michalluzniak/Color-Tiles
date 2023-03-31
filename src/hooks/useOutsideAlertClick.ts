import React, { useEffect, useState } from 'react';

export const useOutsideAlertClick = (ref: React.RefObject<HTMLElement>) => {
  const [clickedOutside, setClickedOutside] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setClickedOutside(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return [clickedOutside, setClickedOutside] as const;
};
