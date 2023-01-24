import Model from '../../interface/Model';
import allNavigations from '../../navigation';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from '../context/menucontext';

const AppMenu = () => {
  const model: Model[] = [...allNavigations];

  return (
    <MenuProvider>
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item.separator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
