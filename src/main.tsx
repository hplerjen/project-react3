import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventList from './app/pages/event-list';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode> 
  /*<StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<EventList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>*/
);
