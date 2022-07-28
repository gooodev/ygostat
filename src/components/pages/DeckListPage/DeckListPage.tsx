import { MainLayout } from '@/components/layouts';
import { Suspense } from 'react';
import { FaBookMedical } from 'react-icons/fa';
import { DeckList } from './DeckList';

/** @pakcage */
export type DeckListPageProps = {};

/** @pakcage */
export default function DeckListPage(_props: DeckListPageProps) {
  return (
    <MainLayout pageTitle="Deck List" fabIcon={<FaBookMedical />}>
      <Suspense fallback={<>Loading...</>}>
        <DeckList />
      </Suspense>
    </MainLayout>
  );
}
