import React from 'react';
import { getFunName } from '../helpers'


class StorePicker extends React.Component{
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }
    goToStore(event) {
        event.preventDefault();
        console.log("U changed the URL");
        //First Grab the text from the box
        const storeId = this.storeInput.value;
        //console.log('Going to ${storeId}');
        
        //Second we are going to transition from / to /store/:storeId
        //this.context.router.transitionTo('/store/${storeId}');
        window.location.assign(`/store/${storeId}`)
    }
    render() {
          //return <p>Hello</p>
          //return React.createElement('p', {className: 'Testing'}, 'How are You');
          return (
              /*<form className="store-selector"onSubmit={this.goToStore.bind(this)}>*/
               <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                {/* <p>Hello</p> */} 
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
                <button type="submit">Visit Store -></button>
              </form>
              
          )
      }
  }


// StorePicker.contextTypes = {
//     router: React.PropTypes.object
// }

// Button.contextTypes = {
//    color: PropTypes.string
// };
  export default StorePicker;