

import { useEffect, useState } from 'react';
import './Service.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useDispatch, useSelector } from 'react-redux';
import {getServices} from '../reducers/serviceReducer'
//import axios from 'axios';



const SingleServicesPage = (props) =>{


   
    const dispatch = useDispatch();
    const state = useSelector( state => state.serviceReducer);

    console.log(state, 13)
    //const [data, setData] = useState([]);
    const [filter, setFilter] = useState('')
   

    //yeh wala code neche useEffect k ander tha
     /*axios.get('http://localhost:5000/api/services')
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })*/

    useEffect(() => {
     
       dispatch(getServices())   
         
    }, []);


   


    return(
        <div>
            <h1>Single Services Page</h1>


            {!props.hideSearchBar &&  ( <input className="filter" 
            placeholder="Search Box"
             value={filter} 
             onChange={(e) => setFilter(e.target.value)} /> )}  



            <div className="flex service-sides" >
                {
                    state && 
                    state.servicesData &&
                    state.servicesData.length > 0 ?
                    state.servicesData
                            .sort((a, b) => a.title > b.title ? 1 : -1)
                            .filter(item => {
                                return item.title.toLowerCase().includes(filter.toLocaleLowerCase()) || item.description.toLowerCase().includes(filter.toLocaleLowerCase())
                            })
                            .map((serviceItme, serviceIndex) => {
                                return (

                                    <Card className="flow" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={`http://localhost:5000/${serviceItme?.imageUrl}`} />
                                        
                                        <Card.Body>
                                            <Card.Title className='title'>{serviceItme?.title}</Card.Title>
                                            <Card.Text className="desc">
                                                {serviceItme?.description}
                                            </Card.Text>
                                            <Button variant="primary" className="card-btn" >Go somewhere</Button>
                                        </Card.Body>
                                    </Card>

                                )
                            }) :
                        'No Data Found'
                }

                { /*
                data.length > 0 ?
                    data.map((serviceItme, serviceIndex) => {
                        return (
                            <div className="card grid-container">
                                <div className='title'>{serviceItme?.title} </div>
                                <div className="desc">{serviceItme?.description} </div>


                            </div>
                        )
                    }) :
                    'No Data Found'
                */ }

            </div>


        </div>
    )
}

export default SingleServicesPage;