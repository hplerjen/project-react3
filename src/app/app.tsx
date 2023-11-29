import { EventList } from "./components/event/event-list";
import ProductList from "./components/product/product-list";
import { RootStore, StoreRootProvider } from "./state/root-store";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./pages/layout";
import { EventDetail } from "./components/event/event-detail";
import { ProductDetail } from "./components/product/product-detail";

const AppObserver = observer(() => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="events" />} />
            <Route path="events" element={<EventList />}>
              <Route path=":id" element={<EventDetail />} />
            </Route>
             <Route path="products" element={<ProductList />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
});

function App({ rootStore }: { rootStore: RootStore }) {
  if (rootStore) {
    return (
      <StoreRootProvider value={rootStore}>
        <AppObserver />
      </StoreRootProvider>
    );
  }
  return <>MISSING ROOTSTORE</>;
}

export default App;