
//import styles from './app.module.scss';

import { Header } from './components/header';
import {EventList} from './components/event/event-list';
import ProductList from './components/product/product-list';
import Counter  from './components/counter';
import { useState } from 'react';
import List from './components/list';

export function App() {
  const [counter, setCounter] = useState<number>(1);
  return (
    <div>
      <Header title={"Project2"} />
      <EventList />
      <ProductList />
      <Counter setCounter={setCounter}>Counter is {counter}</Counter>
      <List items = {["Coffee", "Tacos", "Burger"]} render={(item: string) => <span className="bold">{item}</span>}/>
    </div>
  );
}

export default App;
