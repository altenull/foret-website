import { useCallback, useEffect, useState } from 'react';

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 64 && !isScrolled) {
      setIsScrolled(true);
    }

    if (window.scrollY <= 64 && isScrolled) {
      setIsScrolled(false);
    }
  }, [isScrolled]);

  useEffect(() => {
    // Check whether scrolling or not at initial load to cover change locale event.
    handleScroll();

    if (document != null) {
      document.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return isScrolled;
};

export default useIsScrolled;
