import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Favoritos from './pages/Favoritos'
 
const Routes = () => {
  return(
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/favoritos" component={Favoritos}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes