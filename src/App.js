import {Route,Switch} from 'react-router-dom'
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
        <Route path="/saman" render={() => <h1>saman</h1>} />
      </Switch>
    </MailLayouts>
  );
}

export default App;
