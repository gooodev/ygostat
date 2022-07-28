import { PropsWithChildren, useEffect, useRef } from 'react';

type Props = {
  id: string;
  suffix: string;
  registerPos: (id: string, offset: number) => void;
};

/** @package */
export const ListItem = ({ id, suffix, registerPos, children }: PropsWithChildren<Props>) => {
  const fix = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (fix.current == null) {
      return;
    }
    registerPos(id, fix.current.offsetTop);
  }, []);
  return (
    <div style={{ textAlign: 'left' }} ref={fix}>
      <div
        style={{
          color: 'white',
        }}
      >
        {`${id}${suffix}`}
      </div>
      <div
        style={{
          marginTop: 4,
          marginBottom: 8,
        }}
      >
        {children}
      </div>
    </div>
  );
};
