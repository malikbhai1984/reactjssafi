
/*
import { useEffect, useState } from "react";
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const Carousel = () => {

    const [data, setData] = useState([]);
    //const [index , setIndex] = useEffect([0]);

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


    return (
        <div>


                    <img src={data[0]} widht="100%" height={400} />

            {
                data.length > 0 &&
                data.map((imgItem, imgIndex) => {
                    return (
                        <img src={imgItem} alt="pic"
                            width={10} />
                    )
                })
            }
            
        </div>
    )


}

export default Carousel;

*/