import { useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Notfound from "../components/Notfound";

export default function Definition() {
  const [word, setWord] = useState();
  const [notfound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true);
        } else if (res.status === 401) {
          navigate('/login')
        } else if (res.status === 500) {
          // srtServerError(true);
        }

        if (!res.ok) {
          setError(true);
          throw new Error("Something went wrong")
        }
        return res.json();

    })   
      .then((data) => {
        setWord(data[0].meanings)
      }).catch((e) => {
        console.log(e.message)
      })
  })
  if (notfound === true) {
    return (
      <>
        <Notfound />
        <Link to='/dictionary' className="text-3xl bg-slate-400 p-2 no-underline rounded  text-black hover:bg-yellow-300 absolute top-[200px] left-[45%]">Search Aother</Link>
      </>
    )
  }
  if (error === true) {
    return (
      <>
        <p className="flex justify-center text-2xl text-red-300 pt-2"> Something went wrong</p>
        <Link to='/dictionary' className="text-3xl bg-slate-400 p-2 no-underline rounded  text-black hover:bg-yellow-300 absolute top-[200px] left-[45%]">Search Aother</Link>
      </>
    )
}
  return (
    <div className="p-5 mx-auto md:w-[40%] bg-slate-300 text-center">
    
      <h1>definition</h1>
 
      {word?
        <>
          {word.map((meaning) => {
            
            return (
              <div className="shadow my-3 ">
                <p key={uuidv4()}  className="p-2 bg-slate-500 rounded my-2 text-white">{meaning.definitions[0].definition}</p>
              </div>
           ) }
          )}</>
          : <p>mess</p>} 
    </div>
  )
}
