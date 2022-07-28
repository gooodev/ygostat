import { Chip } from '@/components/elements/';
import { CardAvatar } from '@/components/models';
import { useAuth } from '@/hooks';
import { useDecksByUserQuery } from '@/hooks/graphql/codegen';
import { routePaths } from '@/routes';
import { escapseNewline } from '@/utils/string';
import { Box, Flex, IconButton, List, ListItem, Text } from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/** @pakcage */
export const DeckList = () => {
  const { userId } = useAuth();
  const [{ data }] = useDecksByUserQuery({ variables: { userId } });
  const navigate = useNavigate();
  if (data == null || data.decks.length === 0) {
    return <Text>Not found</Text>;
  }
  return (
    <List>
      {data?.decks.map(({ id, name, deckTheme: { themeName, mainImgUrl }, memo }) => (
        <ListItem
          key={`deck-${id}`}
          height={20}
          mb={3}
          overflowY="hidden"
          borderBottom="1px"
          borderColor="ActiveBorder"
        >
          <Flex gap={2}>
            <Box>
              <CardAvatar src={mainImgUrl || ''} />
            </Box>
            <Flex direction="column" gap={1} w="100%">
              <Flex gap={2}>
                <Chip label={themeName} />
                <Text variant="body1" flexGrow={1}>
                  {name}
                </Text>
                <IconButton
                  aria-label="edit"
                  icon={<FaEdit />}
                  borderRadius="full"
                  bgColor="transparent"
                  fontSize={16}
                  color="HighlightText"
                  h={6}
                  w={4}
                  onClick={() => {
                    navigate(`${routePaths.deck}/${id}`);
                  }}
                />
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
          </Flex>
        </ListItem>
      ))}
    </List>
  );
};
