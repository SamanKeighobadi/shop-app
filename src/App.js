import {Route,Switch} from 'react-router-dom'
//? Import Mainlayouts
import MailLayouts from './Components/layouts/MailLayouts'

function App() {

  
  return (
    <MailLayouts>
      <Switch>
        <Route path="/" exact render={() => <h1>home</h1>} />
        <Route path="/about" render={() => <h1>about</h1>} />
        <Route path="/saman" render={() => <h1>saman</h1>} />
      </Switch>
    </MailLayouts>
  );
}

export default App;
