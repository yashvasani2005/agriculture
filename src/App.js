
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import { Routes , Route} from 'react-router-dom';
import Allbox from './components/Allseed';
import Allfertilizer from './components/Allfertilizer';
import Allpesticide from './components/Allpesticide';
import Alltool from './components/Alltool';
import Allanimal from './components/Allanimal';
import Allseedselling from './components/Allseedselling';
import Alltoolselling from './components/Alltoolselling';
import Allanimalselling from './components/Allanimalselling';
import Allsell from './components/Allsell';
import Cardsell from './components/Cardsell';
import Cardselltool from './components/Cardselltool';
import Cardsellanimal from './components/Cardsellanimal';
import Login from './login/Login/Login';
import Signup from './signup/Signup';
import EmailVerify from './signup/EmailVerify';
import PaymentSuccess from './payment fronted/PaymentSuccess';
// import Cart from './components/Cart';
// import Cardsell from './components/Cardsell';


function App() {
  return (
   <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Seed" element={<Allbox/> } />
        <Route path="/Fertilizers" element={<Allfertilizer/>} />
        <Route path="/Pesticides" element={<Allpesticide/> }/>
        <Route path="/Tool" element={<Alltool />} />
        <Route path="/Animalfeed" element={<Allanimal/> }/>
        <Route path="/Seedselling" element={<Allseedselling/>} />
        <Route path="/Toolselling" element={<Alltoolselling/>} />
        <Route path="/Animalbyproduct" element={<Allanimalselling/>} />
        <Route path="/SellNow" element={<Allsell/>} />
        <Route path="/SellNow/:id" element={<Cardsell/>} />
        <Route path="/SellNowtool/:id" element={<Cardselltool/>} />
        <Route path="/Sellnowanimalproduct/:id" element={<Cardsellanimal/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/verify-email" element={<EmailVerify/>} />
        <Route path="/paymentsuccess/:id" element={<PaymentSuccess/>}/>
        {/* <Route path="/get-user-cart" element={<Cart/>}/> */}




      </Routes>

      
   </>
  );
}

export default App;
