
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const DashBoard  = () =>{

    return (
        <>
        <h1>Admin DashBoard </h1>

        <div className="continer-fluie mt-5">
            <div className='row'>
                <div className='col-md-3'>
                <div className='text-left'>
        <ListGroup className=''>
        <ListGroup.Item >  {<Link to="/add/category"> Create Category</Link>}</ListGroup.Item>
      <ListGroup.Item >  {<Link to="/admin/services"> Create Services</Link>}</ListGroup.Item>
      <ListGroup.Item >  {<Link to="/admin/add"> Create Users</Link>}</ListGroup.Item>
      
    </ListGroup>
        </div>

                </div>

            </div>


            <div className='col-md-3'>

                </div>

        </div>

      

      


        </>
    )
}

export default DashBoard;