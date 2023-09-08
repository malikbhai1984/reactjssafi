
import './home.css';
import Services from "./Services";
import Cources from './Cources';
//import Carousel from "./Carousel";
import Slider from "./Slider";
import {Link} from 'react-router-dom'



const Home =() =>{
    return(
        <div>
         
         <Slider />

         <div className="animate">
            <Link to='/posts'>Latest Post</Link>
         </div>
       
         <Services hideSearchBar={true}></Services>
         <Cources></Cources>

        </div>
    )
}

export default Home;