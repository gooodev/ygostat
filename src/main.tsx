import { AppProviders } from '@/components/providers';
import { AppRoutes } from '@/routes';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');
if (!root) throw new Error('Failed to find the root element');

createRoot(root).render(
  <AppProviders>
    <Router>
      <AppRoutes />
    </Router>
  </AppProviders>
);
