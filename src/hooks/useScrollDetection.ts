import { useEffect, useRef, useState } from 'react';

type Props = {
  onScrollDown?: () => void;
  onScrollUp?: () => void;
  threshold?: number;
};

export const useScrollDirection = ({ onScrollDown, onScrollUp, threshold }: Props) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const blocking = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= (threshold || 10)) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up';
        setScrollDirection(newScrollDirection);
        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDirection]);

  useEffect(() => {
    if (scrollDirection === 'up' && onScrollUp != null) {
      onScrollUp();
    } else if (scrollDirection === 'down' && onScrollDown != null) {
      onScrollDown();
    }
  }, [scrollDirection]);
  return scrollDirection;
};
