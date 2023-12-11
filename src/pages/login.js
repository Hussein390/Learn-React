import { useState } from "react"
import { baseUrl } from "../share";
import { json } from "react-router-dom";

export function Login() {
  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();

  function login(e) {
    e.preventDefault()
    const url = baseUrl + 'api/token/';
    fetch(url, {
      method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        username: userName,
      password: password  
    })}).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
    })
  }
  return (
    <div className="pt-4 absolute left-[50%] translate-x-[-50%]">
    <form onSubmit={login} id="editform" className="bg-white w-[400px]  rounded p-3 ">


      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
          UserName
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={userName}
          onChange={(e) => {
            setuserName(e.target.value)
          }
          } placeholder='UserName' />
      </div>
      <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="Industry">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Industry" type="password" value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder='Password' />
      </div>

      </form>
      <button form='editform' className="bg-fuchsia-400 hover:bg-fuchsia-600 w-[80px] block ml-auto text-white font-bold py-2 mt-3 px-3 rounded focus:outline-none focus:shadow-outline" >Login</button>
      </div>
  )
}