import {Route,Switch} from 'react-router-dom'
import Authentication from './Components/Authentication/Authentication';
import AppCartPage from './Components/Cart/AppCartPage';
//? Import Mainlayouts
import MailLayouts from './Components/layouts/MailLayouts'
import AppShopPage from './Components/Shop/AppShopPage';
//? Import Components

function App() {

  
  return (
    <MailLayouts>
      <Switch>
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/shop" component={AppShopPage} />
        <Route path="/auth" component={Authentication} />
        <Route path='/cart' component={AppCartPage} />
      </Switch>
    </MailLayouts>
  );
}

export default App;
