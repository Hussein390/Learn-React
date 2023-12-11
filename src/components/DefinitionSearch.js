import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DefinitionSearch() {
  const [word, setWord] = useState('');
  const navigate = useNavigate();

  return (
    <form onSubmit={() => {
      navigate(`/dictionary/${word}`)
    }} className="flex justify-center items-start gap-x-2  p-4">
      <input type="text" className="p-2 outline-none" onChange={(e) => {
        setWord(e.target.value);
      }} />
      <button className="bg-fuchsia-400 hover:bg-fuchsia-600 text-white font-bold py-2 px-3
      focus:outline-none focus:shadow-outline">Search</button>
    </form>
  )
}