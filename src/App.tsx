import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import routes from './config/routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
