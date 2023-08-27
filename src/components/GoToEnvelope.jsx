import { Link } from "react-router-dom"

function GoToEnvelope({name, key}) {
  return (
    <>
      <Link to="/selectenvelope">
        <div key={key} className="w-full h-full flex justify-center items-center font-extrabold">
          {name}
        </div>
      </Link>
    </>
  )
}

export default GoToEnvelope