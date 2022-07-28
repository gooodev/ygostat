import { IconButton } from '@/components/elements';
import { MainLayout } from '@/components/layouts';
import { CloseIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { Suspense } from 'react';
import { FaBookMedical } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { DeckMain } from './DeckMain';

/** @pakcage */
export type DeckDetailPageProps = {};

/** @pakcage */
export default function DeckDetailPage(_props: DeckDetailPageProps) {
  const { id } = useParams<{ id: string }>();
  const deckId = Number(id) || undefined;
  const navigate = useNavigate();
  return (
    <MainLayout pageTitle="Deck List" fabIcon={<FaBookMedical />}>
      <IconButton
        aria-label="Close"
        icon={<CloseIcon />}
        onClick={() => navigate(-1)}
        position="absolute"
        right={4}
        top={0}
      />
      <Box pt={8}>
        <Suspense fallback={<>Loading...</>}>
          <DeckMain deckId={deckId} />
        </Suspense>
      </Box>
    </MainLayout>
  );
}
