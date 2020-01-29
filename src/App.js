import React from 'react';
import './App.css';
import Main from './components/main';
import { Provider} from 'react-redux';
import store from './components/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
