import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
  const [name, setName] = useState('');
  const [industry, setindustry] = useState('');



  return (
    <>
      <button onClick={props.toggleShow} className="block mx-auto mt-3 px-4 py-1 text-sm  font-semibold rounded-full border border-purple-200 text-white hover:bg-purple-600 bg-purple-400 hover:border-transparent focus:outline-none ">+Add Employee</button>

      <Modal
        show={props.show}
        onHide={props.toggleShow}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="w-full max-w-xs">
            <form onSubmit={(e) => {
              setName('');
              setindustry('');

              e.preventDefault();
              props.newCustomer( name, industry);
              props.toggleShow();
            }} id="editform" className="bg-white  rounded px-8 pt-2  ">

              
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                  name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }
                  } placeholder='Computing' />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="Industry">
                  Industry
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Industry" type="text" value={industry}
                  onChange={(e) => {
                    setindustry(e.target.value);
                  }} placeholder='Google' />
              </div>
              
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.toggleShow} className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Close</button>
          <button form='editform' className="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" >Add</button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
}

