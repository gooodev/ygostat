import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { Suspense } from 'react';
import { DeckThemesView } from './DeckThemeListView';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const DeckThemesModal = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Suspense fallback={<>Loading...</>}>
            <DeckThemesView onThemeClick={(theme) => console.log(theme)} />
          </Suspense>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
