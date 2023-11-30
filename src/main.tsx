import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App3 } from './app/app3';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode> <App3  /></StrictMode>
);