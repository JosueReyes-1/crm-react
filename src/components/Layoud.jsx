import { Outlet } from "react-router-dom"

function Layoud() {
  return (
    <div>
        <h1 className="text-6xl font-bold">CRM - React</h1>
        <Outlet/>
    </div>
  )
}

export default Layoud