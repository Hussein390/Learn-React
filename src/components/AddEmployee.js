import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [img, setImg] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="block mx-auto mt-3 px-4 py-1 text-sm  font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600 bg-purple-400 hover:border-transparent focus:outline-none ">+Add Employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="w-full max-w-xs">
            <form onSubmit={(e) => {
              setImg('');
              setName('');
              setRole('');

              e.preventDefault();
              props.newEmployee( name, role, img);
              handleClose();
            }} id="editform" className="bg-white  rounded px-8 pt-2  ">

              
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                    localStorage.setItem('name',name)
                  }
                  } placeholder='UserName' />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
                  Role
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                    localStorage.setItem('role',role)
                  }} placeholder='Your Role' />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="img">
                  Image URL
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="img" type="text" value={img}
                  onChange={(e) => {
                    setImg(e.target.value)
                    localStorage.setItem('img',img)
                  
                  }} placeholder='Img URL' />
              </div>
              
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Close</button>
          <button form='editform' className="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Add</button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

export default AddEmployee;