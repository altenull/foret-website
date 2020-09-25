import { useState, useEffect } from 'react';

// Use cases of useIsMounted
// - Determine component is mounted or not to access window or document.
// - When component is mounted and you want to start the animation.
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
};

export default useIsMounted;
