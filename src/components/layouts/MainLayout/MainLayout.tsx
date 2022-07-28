import { FloatingActionButton, IconButton } from '@/components/elements/';
import { AppBar, NavigationDrawer } from '@/components/features/';
import { routePaths } from '@/routes';
import { Box, Text, useToast } from '@chakra-ui/react';
import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import { FaBars, FaHome } from 'react-icons/fa';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

/** @pakcage */
export type MainLayoutProps = {
  pageTitle: string;
  fabIcon?: ReactElement;
};

/** @pakcage */
export const MainLayout = ({
  pageTitle,
  fabIcon,
  children,
}: PropsWithChildren<MainLayoutProps>) => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchStatus = searchParams.get('status');
    if (searchStatus === null) {
      return;
    }
    if (searchStatus === 'login') {
      toast({
        title: 'ログイン完了',
        status: 'success',
        duration: 900,
      });
    } else if (searchStatus === 'logout') {
      toast({
        title: 'ログアウト完了',
        status: 'success',
        duration: 900,
      });
    }
    navigate(location.pathname);
  }, [navigate, searchParams]);

  return (
    <Box as="main">
      <AppBar height={12}>
        <IconButton
          onClick={() => navigate(routePaths.root)}
          icon={<FaHome />}
          aria-label="go home"
        />
        <Text as="h2" fontSize="xl" fontWeight="bold" flexGrow={1} textAlign="center">
          {pageTitle}
        </Text>
        <IconButton aria-label="menu" icon={<FaBars />} onClick={() => setOpenDrawer(true)} />
      </AppBar>
      <Box as="section" mx={4} mt={16}>
        {children}
      </Box>
      {fabIcon && <FloatingActionButton fabIcon={fabIcon} />}
      <NavigationDrawer isOpen={isOpenDrawer} onClose={() => setOpenDrawer(false)} />
    </Box>
  );
};
