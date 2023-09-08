


import './NavBar.css'
import { Link, useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {

    const navigate = useNavigate();
    return (
        <div className='flex justify-content-space-between bg-navbar plr-10 ptb-20'>
            <div className='logo'>University</div>

            <div className='flex nav-bar'>

                <Navbar expand="lg " className='menu' >

                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <div className="pl-3 nav-links menu"> <Link className='link' to="/home">Home</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/about">About</Link></div>

                                <div className="pl-3 nav-links"><Link className='link' to="/cources">Cources</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/services">Services</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/display/video">Video Display</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/pdf">Student Thesis</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/add/video">Video Section</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/contact">Contact</Link></div>
                                <div className="pl-3 nav-links"><Link className='link' to="/single">Single Page</Link></div>
                               
                                <NavDropdown title="NEWS & MEDIA" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>


                                {
                                    localStorage.getItem('token') &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/admin/services">Add Services</Link></div>
                                }

                                {
                                    localStorage.getItem('token') &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/add/category">Add Category</Link></div>
                                }

                                
                                {
                                    localStorage.getItem('token') &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/add/pdf">Add Students Thesis</Link></div>
                                }



                                {
                                    localStorage.getItem('token') &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/deashboard">DeashBoard</Link></div>
                                }


                                {
                                    localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/admin/list">LIST ADMINS </Link></div>
                                }
                                  {
                                    localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&

                                    <div className="pl-5 nav-links"><Link className='link' to="/admin/add">ADD ADMINS </Link></div>
                                }


                                {
                                    localStorage.getItem('token') ?
                                        <button onClick={() => {
                                            localStorage.clear()
                                            navigate('/admin/dashboard')
                                        }}>LOGOUT</button> :
                                        <button onClick={() => {
                                            navigate('/admin/login')
                                        }}>LOGIN</button>
                                }




                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>










            </div>

        </div>
    )
}

export default NavBar;



















/*
import './NavBar.css'
import {Link, useNavigate} from 'react-router-dom'
const NavBar =() =>{ 

    const navigate = useNavigate();
    return(
        <div className='flex justify-content-space-between bg-navbar plr-10 ptb-20'>
            <div className='logo'>University</div>
            <div className='flex nav-bar'>
                <div className="pl-5 nav-links"> <Link className='link' to="/home">Home</Link></div>
                <div className="pl-5 nav-links"><Link className='link' to="/about">About</Link></div>
               
                <div className="pl-5 nav-links"><Link className='link' to="/cources">Cources</Link></div>
                <div className="pl-5 nav-links"><Link className='link' to="/services">Services</Link></div>
                <div className="pl-5 nav-links"><Link className='link' to="/contact">Contact</Link></div>

        {
            localStorage.getItem('token') &&

            <div className="pl-5 nav-links"><Link className='link' to="/admin/services">Add Services</Link></div>
        }

{
            localStorage.getItem('token') && localStorage.getItem('type') === 'ADMIN' &&

            <div className="pl-5 nav-links"><Link className='link' to="/admin/list">LIST ADMINS </Link></div>
        }

        {
            localStorage.getItem('token') ?
            <button onClick={()=>{
                localStorage.clear()
                navigate('/admin/dashboard')
            }}>LOGOUT</button> :
            <button onClick={()=>{
                navigate('/admin/login')
            }}>LOGIN</button>
        }

            </div>

        </div>
    )
}

export default NavBar;


*/