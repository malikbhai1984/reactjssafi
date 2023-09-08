


import axios from 'axios'
import { useEffect, useState } from 'react';
import './Cources.css'


const Cources = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/services')
            .then(res => {
                console.log(res.data)
                setData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, []);

    return (
        <div className="flex service-sides" >

            {
                data.length > 0 ?
                    data.map((serviceItme, serviceIndex) => {
                        return (
                            <div className="cou-card">
                                <div className='c-title'>{serviceItme?.title} </div>
                                <div className="desc">{serviceItme?.description} </div>


                            </div>
                        )
                    }) :
                    'No Data Found'
            }

        </div>
    )
}

export default Cources;