import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      const scrollToElement = (el) => {
        const yOffset = -90; // offset to account for sticky navbar height
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      };

      if (element) {
        scrollToElement(element);
      } else {
        // Fallback: If element is not in DOM yet, wait briefly and try again
        const timer = setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            scrollToElement(el);
          }
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
