import { useState } from 'react';
// import './store.css';
import IconSwitch from './components/IconSwitch/IconSwitch';
import CardsView from './components/CardsView/CardsView';
import ListView from './components/ListView/ListView';
import products from './components/products';

export default function Store() {
  const [icon, setIcon] = useState('view_list');

  const onSwitch = () => {
    setIcon(icon === 'view_list' ? 'view_module' : 'view_list');
  };

  return (
    <div className={'store'}>
      <header className={'store__header'}>
        <h1>2. Состояние компонентов</h1>
        <h2>2.2 Расположение товаров</h2>
        <nav className={'store__menu'}>
          <IconSwitch
            icon={icon}
            onSwitch={onSwitch}
          />
        </nav>
      </header>
      <div className={'store__body'}>
        <ul className={'store__products' +
          `${icon === 'view_list' ? ' store__products_cards-view' : ' store__products_list-view'}`}>
          {icon === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} />}
        </ul>
      </div>
    </div>
  );
};
