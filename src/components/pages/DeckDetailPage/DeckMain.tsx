import { useDeckByIdQuery } from '@/hooks/graphql/codegen';
import { DeckForm } from './DeckForm';

type Props = {
  deckId?: number;
};

export const DeckMain = ({ deckId }: Props) => {
  if (deckId == null) {
    return <DeckForm />;
  }
  const [{ data }] = useDeckByIdQuery({ variables: { id: deckId } });
  return <DeckForm defaultValues={data?.decksByPk || undefined} />;
};
