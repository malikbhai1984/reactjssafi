
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/image1.jpg'
import img2 from '../images/image2.jpg'
import img3 from '../images/image3.jpg'
import img5 from '../images/image5.jpg'

//import { useEffect, useState } from "react";
//import axios from 'axios';
//import Carousel from 'react-bootstrap/Carousel';

//import image2 from "../image/image2.jpg"
//import image1 from "../image/image1.jpg";
//import image4 from "../image/image4.jpg";
//import image3 from "../image/image3.jpg";
//import image5 from "../image/image5.jpg";



const Slider =() => {



  

  
   /*
    const [data, setData] = useState([]);
    const [selectedImage, setSelectedImage] = useState(0);
    const [allImages, setAllImages] = useState([image1, image2, image3, image4, image5 ])
    //const [image, setImage] = useEffect([]);

    /*useEffect(() => {
      setInterval(() => {
        setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
      }, 4000)
    }, [])

    
   useEffect(() => {

        axios.get('http://localhost:5000/api/slider')
            .then((res) => {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

*/

    return(
        <div>

<div className='slide'>
<Carousel>
      <Carousel.Item>
        <img
          className="d-bloc w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-bloc w-100"
          src={img5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
       
       {/*
                data.length > 0 &&
                data.map((imgItem, imgIndex) => {
                    return (
                      <img src={data[selectedImage]} width={150} height={350} />  
                                          
                    )
                })
            }
       
          {<img src={allImages[selectedImage]} width="70%" height={350} />  }

          <button
        onClick={() => {
          if (selectedImage < data.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      >NEXT</button>

<button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      >PREV</button>


{ <button
          onClick={()=>{
            if (selectedImage > 0 )
            setSelectedImage(selectedImage -1)
          }}>Previues</button> }
        
          <div className="slider">
      {
        
        allImages.map((img)=>{
          return  <img src={img} 
          onClick={()=>{
            setSelectedImage(img)
          }}
          width={100} height={50}
          style={img === selectedImage ? {border: " 5px solid red" , height: "40"} : {} } />
        })
         </div> yeh div neche tha
      */
      }
          
           
        </div>
    )
}

export default Slider;