import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Increment from './routes/Increment';
import Decrement from './routes/Decrement';
import './static/css/index.css';
import App from './App';
import { CountProvider } from "./context/Counter";

ReactDOM.render(
  <React.StrictMode>
    <CountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="increment" element={<Increment />} />
          <Route path="decrement" element={<Decrement />} />
        </Routes>
      </BrowserRouter>
    </CountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);