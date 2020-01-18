import React, {
  Component
} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//CSS
import './App.css';

//Pages
import Navbar from './components/layout/Navbar';
//import Landing from './components/layout/Landing';
import Dashboard from './components/layout/Dashboard';
import Footer from './components/layout/Footer';
import NeuNutzer from './components/neuForm/neuerNutzer';
import NeuKunde from './components/neuForm/neuerKunde';
import bearbeitenNutzer from './components/bearbeitenForm/bearbeitenNutzer';
import bearbeitenKunden from './components/bearbeitenForm/bearbeitenKunde';
import nutzerAuftraege from './components/auftraege/zeigeNutzerAuftraege';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Navbar />

        <Route exact path="/" component={Dashboard} />

        <div className="container-fluid backend">
         <Route exact path="/neu-nutzer" component={NeuNutzer} />
         <Route exact path="/neu-kunde" component={NeuKunde} />
         <Route exact path="/postedit/:id" component={bearbeitenNutzer} />
         <Route exact path="/kundenedit/:id" component={bearbeitenKunden} />
         <Route exact path="/nutzerauftraege/:code" component={nutzerAuftraege} />

          
        
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
  );
}}

export default App;
