import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import {RootStore} from "./app/state/root-store";
import App from './app/app';

const rootStore = new RootStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode> <App rootStore={rootStore} /></StrictMode>
  /*<StrictMode> <App3  /></StrictMode>*/
);