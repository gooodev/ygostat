import { AppProviders } from '@/components/providers';
import { AppRoutes } from '@/routes';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => (
  <AppProviders>
    <Router>
      <AppRoutes />
    </Router>
  </AppProviders>
);
