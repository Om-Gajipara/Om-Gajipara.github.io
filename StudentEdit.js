import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function StudentEdit(){
    
    const url="https://64e334d4bac46e480e78629e.mockapi.io/Students";
    const { id } = useParams()
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://64e334d4bac46e480e78629e.mockapi.io/Students/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setData(res)
            })
    }, [])

    function editData() {
            fetch(url,{
                method:"PUT",
                body:JSON.stringify(data),
                headers:{"Content-Type":"application/json"}
            }).then((res)=>{navigate("/student/"+id)})
        }
        console.log(data)
    return(
        <>
        <div className="container">
                <h1>add student</h1> <br />
                    
                name:<input type="text" value={data.StuName} onChange={(e) => {
                            setData({ ...data, StuName: e.target.value })
                        }} /><br />
                    Enter Img Url:<input type="text" value={data.StuImg} onChange={(e) => {
                            setData({ ...data, StuImg: e.target.value })
                        }} /><br />
                    Enter Department:<input type="text" value={data.StuDepartment} onChange={(e) => {
                            setData({ ...data, StuDepartment: e.target.value })
                        }} /><br />
                    Enter Package:<input type="text" value={data.StuPackage} onChange={(e) => {
                            setData({ ...data, StuPackage: e.target.value })
                        }} /><br/>
                <br />
                <button className="btn btn-primary" onClick={() => {editData()}}>Save</button>
            </div>
        </>
    )
}