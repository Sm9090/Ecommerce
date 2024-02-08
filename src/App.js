import Router from './Config/Router';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import {store,persistor} from './store'
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
