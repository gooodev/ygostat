import { Chip } from '@/components/elements';
import { CardAvatar } from '@/components/models';
import { DecksByUserQuery } from '@/hooks/graphql/codegen';
import { escapseNewline } from '@/utils/string';
import { Box, Flex, ListItem, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

type CardListItemProps = {
  deck: DecksByUserQuery['decks'][number];
};

/** @package */
export const CardListItem = ({
  deck: {
    id,
    name,
    deckTheme: { themeName, mainImgUrl },
    memo,
  },
}: CardListItemProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const handlers = useSwipeable({
    onSwipedLeft: () => setShowMenu(true),
    onSwipedRight: () => setShowMenu(false),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });
  return (
    <ListItem
      key={`deck-${id}`}
      height={20}
      mb={3}
      overflowY="hidden"
      borderBottom="1px"
      borderColor="ActiveBorder"
      {...handlers}
    >
      <Box display="flex" gap={2}>
        <Box>
          <CardAvatar src={mainImgUrl || ''} />
        </Box>
        <Flex direction="column" gap={1}>
          <Flex gap={2}>
            <Chip label={themeName} />
            <Text variant="body1">{name}</Text>
          </Flex>
          <Text
            fontSize={10}
            whiteSpace="pre-wrap"
            display="-webkit-box"
            textOverflow="ellipsis"
            overflow="hidden"
            ml={1}
            sx={{
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {escapseNewline(memo)}
          </Text>
        </Flex>
      </Box>
      <Box position="absolute" left={0} bgColor="Background" hidden={!showMenu}>
        HELLO
      </Box>
    </ListItem>
  );
};
