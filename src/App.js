
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Cources from './components/Cources';
import Services from './components/Services';
import ServicesAdmin from './components/admin/ServicesAdmin';
import ListAdmins from './components/admin/ListAdmins';
import AddAdmins from './components/admin/AddAdmins';
import LoginAdmin from './components/admin/LoginAdmin';
import SinglePage from './components/SingleServicesPage'
import DashBoard from './components/admin/DashBoard';
import AddCategory from './components/admin/AddCategory';



import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import AdminDesh from './components/admin/AdminDesh';

import {Provider} from 'react-redux';
import store from './store';
import AddPdf from './components/admin/AddPdf';
import PdfList from './components/PdfList';
import Video from './components/Video';
import DisplayVideo from './components/DisplayVideo';


function App() {
  return (
    <div className="App">
      
<Provider store={store}>
<BrowserRouter>

<NavBar />
    {/*
      !localStorage.getItem('token') ?
      <h1>ADMIN PANEL</h1>
      :
      <NavBar />
  */}


<Routes>
  <Route path="/home" element={ <Home />} />
  <Route path="/about" element={ <About /> } />
  <Route path="/contact" element={ <Contact /> } />
  <Route path="/cources" element={ <Cources /> } />
  <Route path="/services" element={ <Services /> } />
  <Route path="/pdf" element={ <PdfList /> } />
  <Route path="/display/video" element={ <DisplayVideo /> } />
  <Route path="/posts" element={ <Services /> } />
  <Route path="/admin/services" element={<ServicesAdmin />} />
  <Route path="/add/pdf" element={<AddPdf />} />
  <Route path="/admin/list" element={<ListAdmins />} />
  <Route path="/admin/add" element={<AddAdmins />} />
  <Route path="/add/video" element={<Video />} />
  <Route path="/admin/login" element={<LoginAdmin />} />
  <Route path="/admin/dashboard" element={<AdminDesh />} />
  <Route path="/single" element={<SinglePage />} />
  <Route path="/deashboard" element={<DashBoard />} />
  <Route path="/add/category" element={<AddCategory />} />
  
  
  </Routes>

    {/*
      localStorage.getItem('token') ?
      <h1>ADMIN FOOTER</h1>
      :
      <Footer />
  */}

<Footer />

</BrowserRouter>

</Provider>



    </div>
  );
}

export default App;
