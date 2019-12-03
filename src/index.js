import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom';

/*
   //First sample example with out component

class StorePicker extends React.Component{
  //ReactDOM.render() {}
    render() {
        return <p>Hello</p>
    }
}

render(<StorePicker/>, document.querySelector('#main'));
*/

import StorePicker from './components/StorePicker';
import './css/style.css';
import App from './components/App';

//import {Miss} from 'react-router';


import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NotFound from './components/NotFound';
//For Routing
// const Root = () =>{
//     return(
//         <BrowserRouter>
//             <div>
//                 <Match exactly  pattern="/" component={StorePicker}/>
//                 <Match  path="/store/:storeId" component={App}/>
                   //<Miss componet="NotFound"/>
//             </div>
//         </BrowserRouter>
//     )
// }
const Root = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={StorePicker}/>
                <Route  path="/store/:storeId" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

//render(<StorePicker/>, document.querySelector('#main'));
//render(<App/>, document.querySelector('#main'));

render(<Root/>, document.querySelector('#main'));