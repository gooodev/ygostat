import { IconButton } from '@/components/elements';
import { LoginOutButton } from '@/components/features';
import { routePaths } from '@/routes';
import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  useColorMode,
} from '@chakra-ui/react';
import { FaBook, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/** @pakcage */
export type NavigationDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

/** @pakcage */
export const NavigationDrawer = ({ isOpen, onClose }: NavigationDrawerProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>
        <DrawerBody>
          <List spacing={3}>
            <Divider />
            <ListItem
              onClick={() => {
                onClose();
                navigate(routePaths.decks, { replace: true });
              }}
              cursor="pointer"
            >
              <ListIcon as={FaBook} />
              デッキリスト
            </ListItem>
            <Divider />
            <ListItem>デュエル結果</ListItem>
          </List>
        </DrawerBody>
        <DrawerFooter display="flex">
          <LoginOutButton />
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
            aria-label="change color theme"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
