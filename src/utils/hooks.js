import * as React from 'react';

// eslint-disable-next-line
export const useScrollLocker = () => {
  React.useLayoutEffect(() => {
    const initialOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = initialOverflow);
  }, []);
};
