import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../share";
import AddCustomer from "../components/AddCustomer";

export default function Customers() {
  const [customers, steCustomers] = useState();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [show, steShow] = useState(false);

  function toggleShow() {
    setShow(!show)
  }
  useEffect(() => {
    fetch(baseUrl + 'api/customers/').then(res => {
      if (res.status === 500) {
        navigate('/login')
      }
      return res.json()
    })
      .then(data => {
        steCustomers(data.customers)
      })
  }, []);
  function newCustomer(name, industry) {
    const url = baseUrl + 'api/customers/';
    const data = { name: name, industry: industry };
    fetch(url, {
      method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)
    }).then((response) => {
      if (!response.ok) {
        throw new Error('somting went wrong');
      }
      return response.json();
    }).then((data) => {
      toggleShow();
      steCustomers([...customers, data.customer])
    }).catch((e) => {
      console.log(e)
    })
  }
  return (
    <>

      <h1 className="text-emerald-500 p-2 text-center">Customers</h1>

      <div className="flex items-center gap-3 bg-slate-300 p-3 ">
      {customers ? customers.map(customer => {
        return (
          <div className="" key={customer.id}>
            <Link to={"/customers/" + customer.id}><button
              className="py-1 ml-2 px-2 bg-red-400 hover:bg-red-600 text-white rounded">{customer.name}</button></Link>
          </div>
        )
      }) : null}
    </div>

      <AddCustomer newCustomer={newCustomer} show={show} toggleShow={toggleShow} />
    </>
  )
}