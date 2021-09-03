import {Route,Switch} from 'react-router-dom'
import Authentication from './Components/Authentication/Authentication';
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
      </Switch>
    </MailLayouts>
  );
}

export default App;
