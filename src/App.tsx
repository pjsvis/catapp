import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Upload } from './components/Upload';
import { ReactQueryDevtools } from 'react-query/devtools';
import ErrorBoundary from './components/ErrorBoundary';
import { Home } from './components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavHeader } from './components/NavHeader';
import { About } from './components/About';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-column top-0 sans-serif">
              <NavHeader />
              <div>
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/upload">
                    <Upload />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
