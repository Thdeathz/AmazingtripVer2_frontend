import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { publicRoutes, privateRoutes } from './router';
import RequireAuth from './features/Auth/RequireAuth';

function App() {

  return (
    <Router>
      <div className="App">
        <ToastContainer autoClose={2000} style={{ fontSize: '16px' }}/>
        <Routes>
        { publicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Page />
                  } 
                />
              );
            })}
          <Route element={<RequireAuth />}>
            { privateRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={
                    <Page />
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
