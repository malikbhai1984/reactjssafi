import axios from 'axios';
import { useState } from 'react'
import './addAdmin.css'
import { useNavigate } from 'react-router-dom';


const AddAdmins = () => {

    const navigate = useNavigate();

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const [type, setType] = useState("");


    const handleClick = () => {
        console.log(userName, password, type, status)
        axios.post('http://localhost:5000/admin/add', {
            userName, password, status, type, date: new Date()
        }).then((res) => {
            console.log(res.data)
            navigate('/admin/list')
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="card-admin">
            <h1 className="heading">ADD Admin</h1>

            <input value={userName}
                onChange={(e) => setUsername(e.target.value)} placeholder='Add User Name' className="input-admin" type="text" /><br></br>

            <input value={password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Add Password" className="input-admin" type="password" />

            <select value={status}
                onChange={(e) => setStatus(e.target.value)} className="select-admin">
                <option>ACTIVE</option>
                <option>BLOCK</option>
                <option>DELETE</option>
            </select>

            <select value={type}
                onChange={(e) => setType(e.target.value)} className="select-admin">
                <option>ADMIN</option>
                <option>SUBADMIN</option>
            </select>

            <button onClick={handleClick} className="submit-btn">SUBMIT</button>
        </div>
    )
}

export default AddAdmins;