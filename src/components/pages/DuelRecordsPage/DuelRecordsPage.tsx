import { MainLayout } from '@/components/layouts';
import { Box } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

/** @pakcage */
export type DuelRecordsPageProps = {};

/** @pakcage */
export default function DuelRecordsPage(props: DuelRecordsPageProps) {
  console.log(props);
  return (
    <MainLayout pageTitle="Home" fabIcon={<FaPlus />}>
      <Box as="main">HELLO</Box>
    </MainLayout>
  );
}
