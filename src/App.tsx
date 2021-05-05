import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Upload } from './components/Upload';
// import { ReactQueryDevtools } from 'react-query-devtools';
import ErrorBoundary from './components/ErrorBoundary';
import { Home } from './components/Home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ErrorBoundary>
        <Router>
          <QueryClientProvider client={queryClient}>
            <div className="flex flex-column top-0">
              <header className=" sans-serif bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
                <nav className="f6 fw6 ttu tracked">
                  <a className="link dim white dib mr3" href="/" title="Home">
                    Home
                  </a>
                  <a className="link dim white dib mr3" href="/upload" title="Upload">
                    Upload
                  </a>
                </nav>
              </header>
              <div>
                <Switch>
                  <Route path="/upload">
                    <Upload />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </div>
          </QueryClientProvider>
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
