import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { publicRoutes, privateRoutes } from './router';
import RequireAuth from './components/RequireAuth';

function App() {

  return (
    <Router>
      <div className="App">
        <ToastContainer autoClose={2000} style={{ fontSize: '16px' }}/>
        <Routes>
        { publicRoutes.map((route, index) => {
              const Page = route.component;
              const Provider = route.provider || Fragment;
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Provider>
                        <Page />
                    </Provider>
                  } 
                />
              );
            })}
          <Route element={<RequireAuth />}>
            { privateRoutes.map((route, index) => {
              const Page = route.component;
              const Provider = route.provider || Fragment;
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Provider>
                        <Page />
                    </Provider>
                  } 
                />
              );
            })}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
