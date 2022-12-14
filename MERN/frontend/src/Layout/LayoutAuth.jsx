import {Outlet} from "react-router-dom"

const LayoutAuth=()=>{
    return (
        <div className="h-screen">
            <div className="flex h-screen">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default LayoutAuth;