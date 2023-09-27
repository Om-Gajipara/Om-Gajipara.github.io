import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export function StudentById() {
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
                console.log(res)
            })
    }, [])

    function deleteData() {
        fetch(`https://64e334d4bac46e480e78629e.mockapi.io/Students/${id}`,
            { method: "delete" })
            .then((res) => {
                navigate("/student")
            })
    }
    return (
        <>
            <div className="container">
                <h1>Student data</h1><br />
                <div className="row">
                    <div style={{ width: 20 + "%" }} className="">
                        <img style={{ height: 200 + "px" }} className="border border-grey border-3 rounded" src={data.StuImg} />
                    </div>
                    <div style={{ width: 80 + "%" }} className=" fs-3"><b>Name: </b>{data.StuName}
                        <br /><b>Department: </b>{data.StuDepartment}<br />
                        <b>Package: </b> {data.StuPackage} Lac
                    </div>
                </div>
                <button className="btn btn-primary" onClick={() => { deleteData() }}>delete</button>
            </div>
        </>
    )
}