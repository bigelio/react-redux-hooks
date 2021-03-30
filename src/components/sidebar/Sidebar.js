import "./Sidebar.css"
import {data} from "./SidebarData"
const Sidebar=()=>{
    return (
        <div className="sidebar">
            <ul>
            {data.map((value,key)=>{
                return(<li key={key} className="SideBarList" onClick={()=>window.location.pathname=value.link}>
                    {''}
                    <div>{value.title}</div>
                    {''}
                </li>)
            })}
            </ul>
            
        </div>
    )
}
export default Sidebar 