import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NabVar from './components/NavBar/NabVar';
import ItemListContainer from './components/NavBar/ItemListContainer'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ItemDetail from './components/NavBar/ItemDetail';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer';

function App() {
return (
  <Router>

  
  <div className="App">

  <NabVar/>

    <Switch>

  <Route exact path="/">
  <ItemListContainer greeting="Bienvenidos!"/>
  <ItemDetailContainer/>
  </Route>

  <Route exact path="/detalle" component={ItemDetail}></Route>
  </Switch>
  </div>

  </Router>
)
}

export default App;
