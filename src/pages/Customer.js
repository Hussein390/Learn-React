import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import Notfound from "../components/Notfound";
import { baseUrl } from "../share";

export default function Customer() {
  const { id } = useParams();
  const [Customer, setCustomer] = useState();
  const [tempCustomer, setTempCustomer] = useState();
  const [notfound, setNotFound] = useState();
  const [changed, setChange] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Customer) return
    if (!tempCustomer) return
    let equal = true;
    if (Customer.name !== tempCustomer.name) equal = false;
    if (Customer.industry !== tempCustomer.industry) equal = false;
    if (equal) setChange(false)
  },)


  useEffect(() => {
    fetch(baseUrl + 'api/customers/' + id).then((res) => {

      if (res.status === 404) {
        setNotFound(true)
      } else if (res.status === 500) {
        navigate('/login')
      }

      if (!res.ok) {
        throw new Error("Somthing went wrong, try again later...")
      }
      return res.json()
    }).then(data => {
      setCustomer(data.customer)
      setTempCustomer(data.customer)
      setError(undefined)
    })
  }, [])
  function updateCustomer(e) {
    e.preventDefault()
    const url = baseUrl + 'api/customers/' + id;
    fetch(url, {
      method: "POST", headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tempCustomer)
    })
      .then(res => {
        console.log('res', res)
        if (!res.ok) throw new Error("Somthing went wrong...")
        return res.json()
      }).then(data => {
        setCustomer(data.customer)
        setChange(false)
        setError(undefined)
      }).catch(e => {
        setError(e.message)
      })
  }
  return (
    <div className="min-h-screen bg-slate-400">
      {notfound ?
        <>

          <Notfound id={id} item={<Link to="/customers" >Go Back To Customers</Link>} />
        </> : null}
      {Customer ?
        <div className="p-5 " >

          <p className="pt-1 px-2 block text-lg text-stone-200 mx-2" >ID : {tempCustomer.id}</p>
          <form id="customer" className="w-full max-w-xs">
            <div className="flex items-center justify-center">
            <label for='name' className="mr-[12px] text-slate-200">Name:</label>
            <input id='name' className="pt-1 px-2 border block border-stone-500 border-solid text-lg outline-none text-green-400 m-2" type="text" value={tempCustomer.name} onChange={e => {
              setChange(true)
              setTempCustomer({ ...tempCustomer, name: e.target.value })
            }} />
            </div>
            <div className="flex items-center justify-center mt-3">

              <label for='industry' className="text-slate-200">Industry:</label>
            <input id='industry' className="pt-1 px-2 border block border-stone-500 border-solid text-lg outline-none text-blue-400 mx-2" type="text" value={tempCustomer.industry} onChange={e => {
              setChange(true)
              setTempCustomer({ ...tempCustomer, industry: e.target.value })
            }} />
            </div>
          </form>
          {changed ? <div className="mt-2"><button onClick={() => { setTempCustomer({ ...Customer }); setChange(false) }} className="py-1 ml-5  px-2 bg-red-400 hover:bg-red-600 text-white rounded">Cancel</button>
            <button form='customer' onClick={updateCustomer} className="py-1 ml-5 mt-2 px-2 bg-green-400 hover:bg-green-600 text-white rounded">Save</button> </div> : null}

          <button className="py-1 ml-5 my-3 px-2 bg-red-400 hover:bg-red-600 text-white rounded" onClick={((e) => {
            const url = baseUrl + "api/customers/" + id;
            fetch(url, {
              method: "DELETE", headers: {
                "Content-Type": 'application/json'
              }
            }).then(res => {
              if (!res.ok) {
                throw new Error('Something went wrong')
              }
              navigate('/customers')
            }).catch(e => {
              setError(e.message)
            })
          })}>Delete</button>
        </div>
        : null}
      {error ? <p>Somthing went wrong</p> : ''}
      
      <Link to="/customers" className="no-underline   py-1 px-2 hover:bg-slate-100 bg-slate-300 rounded ml-5 font-bold hover:text-black text-red-500">← Go Back</Link>
    </div>
  )
}