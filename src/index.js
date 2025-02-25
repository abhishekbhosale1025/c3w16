import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './Components/context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
      <AuthContextProvider>

                        <App />
      </AuthContextProvider>
     
</BrowserRouter>
);
