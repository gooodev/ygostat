import { LoadingSplash } from '@/components/elements';
import { Suspense, useMemo } from 'react';
import { useRoutes } from 'react-router-dom';
import { RouteMap } from './RouteMap';

export const AppRoutes = () => {
  const routeArray = useMemo(() => Object.values(RouteMap), []);
  const routeElement = useRoutes(routeArray);
  return <Suspense fallback={<LoadingSplash />}>{routeElement}</Suspense>;
};

export const routePaths = (Object.keys(RouteMap) as (keyof typeof RouteMap)[]).reduce(
  (acc, key) => ({ ...acc, [key]: RouteMap[key].path }),
  {} as Record<keyof typeof RouteMap, string>
);
