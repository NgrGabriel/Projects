import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { Layout } from './components/Layout';
import { UserPage } from './pages/UserPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
        <Route path='/user' element={<UserPage></UserPage>}></Route>
        {/* Route with params */}
        {/* <Route path='/user/:id' element={<UserPage></UserPage>}></Route>  */}
      </Routes>
    </Layout>
  );
}

export default App;
