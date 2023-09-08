



import axios from 'axios'
import { useEffect, useState } from 'react';


import './ServicesAdmin.css'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

const ListAdmins = () => {

    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('type') !== 'ADMIN'){
            navigate('/admin/dashboard')
        }
    },[])

    useEffect(() => {
        axios.get('http://localhost:5000/admin/admins')
            .then(res => {
                console.log(res.data)
                setAdmins(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>

            <div className="admin-card" >
                <Link to='/admin/add'>ADD ADMINS </Link>

                {
                    admins.length > 0 &&
                    admins.map((adminItem, adminIndex) => {
                        return (
                            <div calssName="flex">



                                <Table striped bordered hover>
                                    <thead className="thead">
                                        <tr>
                                            <th>{adminIndex}</th>
                                            <th>First Name</th>
                                            <th>Password</th>
                                            <th>Admin/SubAdmin</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>{adminItem.userName}</td>
                                            <td>{adminItem.password}</td>
                                            <td>{adminItem.type}</td>
                                            <td>{adminItem.status}</td>
                                            <td>{adminItem.date}</td>
                                        </tr>
                                       
                                       
                                    </tbody>
                                </Table>

                            </div>

                        )
                    })

                }

            </div>
        </>
    )
}

export default ListAdmins;