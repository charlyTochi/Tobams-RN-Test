import {Cart} from '../../screens/Cart/Cart';
import Home from '../../screens/Home/Home';
import {ViewItem} from '../../screens/Item/ViewItem';
import routes from '../routes';

const appRouter = [
  {
    route: routes.home,
    component: Home,
  },
  {
    route: routes.viewItem,
    component: ViewItem,
  },
  {
    route: routes.cart,
    component: Cart,
  },
];

export default appRouter;
