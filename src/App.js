// import './App.css';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import MusicPlayer from './Components/MusicPlayer';
import SignUp from './Components/SignUp';
import Signinsignup from './Components/Signinsignup';
import PrivateRoute from './Components/Dummy';
import BpclLoginPage from './Components/BpclLoginPage';
import  VerifyBottle from './Components/VerifyBottle'
import PasswordRecovery from './Components/PasswordRecovery';

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route exact path="/"  element={<Signinsignup />} /> */}
           <Route exact path="/MusicPlayer" element={<MusicPlayer />}/> 
          <Route exact path="/SignUp" element={<SignUp/>}/>
          <Route exact path="/" element={<Signinsignup/>}/>
          {/* <Route exact path="/bpcl" element={<BpclLoginPage/>}/> */}
          {/* <Route exact path='/' element={<PasswordRecovery/>}/>
          <Route exact path='/' element={<VerifyBottle/>}/> */}
        </Routes> 
      </Router>
{/* <PrivateRoute element={}/> */}
    </div>



  );
}

export default App;

