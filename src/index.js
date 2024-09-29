<<<<<<< HEAD
import {createRoot} from 'react-dom/client';
import App from './app';
import Store from './store';
import {StoreContext} from './store/context';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

=======
import { createRoot } from 'react-dom/client';
import App from './app';
import Store from './store';
import { StoreContext } from './store/context';
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969

const store = new Store();

const root = createRoot(document.getElementById('root'));

// Первый рендер приложения
root.render(
<<<<<<< HEAD
  <Router>
    <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>
  </Router>
=======
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
>>>>>>> b5bf9380d97043e17bc3b5ea839ac797cd957969
);
