import { useEffect, useState } from 'react';

const useIntersection = (
  ref,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  }
) => {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === 'function') {
      const handler = entries => setEntry(entries[0]);

      const observer = new IntersectionObserver(handler, options);

      observer.observe(ref.current);

      return () => {
        setEntry(null);
        observer.disconnect();
      };
    }

    return () => {};
  }, [options.threshold, options.root, options.rootMargin, ref.current]);

  return entry;
};

export default useIntersection;
