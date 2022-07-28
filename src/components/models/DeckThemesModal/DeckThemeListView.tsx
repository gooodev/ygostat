import { AlphabetList } from '@/components/features';
import { AllDeckThemesQuery, useAllDeckThemesQuery } from '@/hooks/graphql/codegen';
import { Box } from '@chakra-ui/react';

type Props = {
  onThemeClick: (theme: AllDeckThemesQuery['deckThemes'][number]) => void;
};

export const DeckThemesView = ({ onThemeClick }: Props) => {
  const [{ data }] = useAllDeckThemesQuery();
  return (
    <AlphabetList
      listItems={data?.deckThemes || []}
      targetItemPropName="nameKana"
      renderListItem={(item) => <Box onClick={() => onThemeClick(item)}>{item.name}</Box>}
    />
  );
};
