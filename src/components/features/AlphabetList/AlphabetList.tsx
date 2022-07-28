import { Box } from '@chakra-ui/react';
import { ReactNode, useCallback, useMemo, useRef, useState } from 'react';
import { ListItem } from './ListItem';

/** @pakcage */
export type AlphabetListProps<T extends Record<string, unknown>, K extends keyof T> = {
  listItems: Array<T>;
  targetItemPropName: T[K] extends string ? K : never; // Only use porps in which value is string
  renderListItem: (item: T, index: number) => ReactNode;
};

/** @pakcage */
export const AlphabetList = <T extends Record<string, unknown>, K extends keyof T>({
  renderListItem,
  targetItemPropName,
  listItems: listItemWords,
}: AlphabetListProps<T, K>) => {
  // Use map instead of object because of its search speed
  const [initialsPosMap, setInitialsPosMap] = useState<Map<string, number>>(new Map());
  const registerFirstCharPosMap = useCallback(
    (key: string, pos: number) => {
      setInitialsPosMap((map) => new Map(map.set(key, pos)));
    },
    [setInitialsPosMap]
  );

  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  const handleFirstCharClick = (char: string) => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollTo(0, initialsPosMap.get(char) || 0);
    }
  };

  const firstCharWordsMap = useMemo(() => {
    const map = new Map<string, Array<T>>();
    listItemWords.forEach((item) => {
      const itemString = item[targetItemPropName] as string;
      const initialChar = itemString[0].toUpperCase();
      const array = map.get(initialChar) || [];
      array.push(item);
      map.set(initialChar, array);
    });
    return map;
  }, [listItemWords]);

  const firstChars = useMemo(() => {
    return Array.from(firstCharWordsMap.keys()).sort();
  }, [firstCharWordsMap]);

  return (
    <Box bgColor="grey" position="relative" overflowY="scroll" maxH="70vh" ref={scrollTargetRef}>
      <Box width="100%" height="100%" overflowY="auto">
        {firstChars.map((firstChar) => {
          const words = firstCharWordsMap.get(firstChar);
          if (words == null) {
            return null;
          }
          return (
            <ListItem
              id={`${firstChar}`}
              suffix={` (${words.length})`}
              key={firstChar}
              registerPos={registerFirstCharPosMap}
            >
              {firstCharWordsMap.get(firstChar)?.map((item, index) => {
                return renderListItem(item, index);
              })}
            </ListItem>
          );
        })}
      </Box>
      <Box position="absolute" top={0} right={10} height="100%">
        <Box position="fixed" color="#AAA" height="100%">
          {firstChars.map((item) => {
            return (
              <Box
                key={item}
                fontSize={15}
                verticalAlign="top"
                cursor="pointer"
                color="#AAA"
                onClick={() => handleFirstCharClick(item)}
              >
                {item}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
