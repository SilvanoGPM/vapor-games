import { useEffect } from 'react';
import { debounce } from 'utils/debounce';

export function useResizeEffect(fn: () => void) {
  useEffect(() => {
    const handleResize = debounce(fn, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [fn]);
}
