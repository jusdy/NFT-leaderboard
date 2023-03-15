import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import AppRoutes from 'routes';
import ErrorPage from 'views/Error';
import store from './store';
import SuspensePage from 'views/Suspense';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={<SuspensePage />}>
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
