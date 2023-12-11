
export default function Notfound(props) {
  return <h3 className="min-h-screen bg-slate-600 text-yellow-200 flex justify-center pt-5">The Page {props.id} You're Looking For Was Not 
    <span className="text-red-400 ml-2 underline"> Found</span> <span>{ props.item}</span></h3>
}