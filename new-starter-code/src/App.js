import React, { Component } from 'react';
import Signup from './components/Signup';
import 'bulma/css/bulma.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faIgloo} from '@fortawesome/free-solid-svg-icons'


library.add(faIgloo)

class App extends Component {
  render() {
    return (
      <div className='container'>
      
        <Signup/>
      </div>
    );
  }
}

export default App;