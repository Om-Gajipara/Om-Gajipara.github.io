import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function StudentADD() {

    const navigate=useNavigate();
    const url="https://64e334d4bac46e480e78629e.mockapi.io/Students";

    function addData() {
        fetch(url,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{"Content-Type":"application/json"}
        }).then((res)=>{navigate("/student")})
    }

    const [data, setData] = useState({})
    return (
        <>
            <div className="container">
                <h1>add student</h1> <br />
                    
                name:<input type="text" onChange={(e) => {
                            setData({ ...data, StuName: e.target.value })
                        }} /><br />
                    Enter Img Url:<input type="text" onChange={(e) => {
                            setData({ ...data, StuImg: e.target.value })
                        }} /><br />
                    Enter Department:<input type="text" onChange={(e) => {
                            setData({ ...data, StuDepartment: e.target.value })
                        }} /><br />
                    Enter Package:<input type="text" onChange={(e) => {
                            setData({ ...data, StuPackage: e.target.value })
                        }} /><br/>
                        {data.StuName}{' |'}
                        {data.StuImg}{' |'}
                        {data.StuDepartment}{'| '}
                        {data.StuPackage}{' |'}
                <br />
                <button className="btn btn-primary" onClick={() => { console.log("hello");addData() }}>Add</button>
            </div>
        </>
    )
}