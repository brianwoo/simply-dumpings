import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

const store = ConfigureStore();

function App() {

  return (    
    <Provider store={store}>
      {/* <HashRouter> */}
      <BrowserRouter>
        <div >
          <Main/>
        </div>
      </BrowserRouter>
      {/* </HashRouter> */}
    </Provider>
  );
}

export default App;
