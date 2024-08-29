import { ReactNode } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { ErrorBoundary } from '@sentry/react';

import Home from './pages/home/home';
import Register from './pages/register/register';

import SentryRoutes from '~components/SentrySetup/SentrySetup';

import './styles/base.scss';

// TODO: Fazer o projeto DEIXAR de ser monorepo
function App(): ReactNode {
  return (
    <ErrorBoundary fallback={<p>Ocorreu um erro inesperado!</p>}>
      <div>
        <Router>
          <SentryRoutes>
            <Route element={<Home />} path="/" />
            <Route element={<Register />} path="/register" />
          </SentryRoutes>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
