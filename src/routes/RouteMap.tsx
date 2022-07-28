import {
  LazyDeckDetailPage,
  LazyDeckListPage,
  LazyDuelRecordsPage,
  LazyLandingPage,
} from '@/components/pages';
import { Navigate } from 'react-router-dom';

/** @package */
export const RouteMap = {
  root: {
    path: '/',
    element: <LazyLandingPage />,
  },
  records: {
    path: '/records',
    element: <LazyDuelRecordsPage />,
  },
  decks: {
    path: '/decks',
    element: <LazyDeckListPage />,
  },
  deck: {
    path: '/deck',
    children: [
      {
        path: ':id',
        element: <LazyDeckDetailPage />,
      },
    ],
  },
  other: {
    path: '*',
    element: <Navigate to="/" />,
  },
};
