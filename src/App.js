import logo from './logo.svg';
import './App.css';
import { Father } from './Challenge8/Father';
import TodoApp from './Challenge9-10/components/TodoApp'

import Counter from './Challenge13/Counter'
import { Provider } from 'react-redux'
import store from './Challenge13/store/store'
import Login from './Challenge14/Login';
import Home from './challenge11/components/Home'
import Chat from './challenge11/components/Chat'
import Buy from './challenge11/components/Buy'
import NavComponent from './challenge11/NavComponent';

function App() {
  return (
    <>
      

        <Provider store={store}>

          

            <Login />
            

        </Provider>

      


    </>
  );
}

export default App;
