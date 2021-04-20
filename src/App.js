import './App.css';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';

const store = ConfigureStore();

function App() {

  return (    
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
        <div >
          <Main/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
