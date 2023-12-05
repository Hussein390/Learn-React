import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none">Edit</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body> 

<div className="w-full max-w-xs">
            <form onSubmit={(e) => {
              e.preventDefault();
              props.updateEmployee(props.id, name, role);
              handleClose(); 
            }} id="editform" className="bg-white  rounded px-8 pt-2  ">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={name} onChange={(e) =>setName(e.target.value)} />
        </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="role">
          Role
        </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="role" type="text" value={role}
                  onChange={(e) => setRole(e.target.value)}   />
              </div> 
            
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Close</button>
          <button form='editform'  className="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;