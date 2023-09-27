import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {
  // var Student1 = [
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107121---11-05-2022-10-07-57.JPG",
  //       name: "KATHAN LUNAGARIYA",
  //       pack: " 20.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107007---11-05-2022-10-47-38.JPG",
  //       name: "DHAVAL BERA",
  //       pack: "10.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107085---11-05-2022-10-20-13.JPG",
  //       name: "SOHAM JOSHI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107030---11-05-2022-10-25-24.JPG",
  //       name: "IKSHIKA CHOTAI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107005---25-06-2022-05-56-49.JPG",
  //       name: "DRASHTI ATKOTIYA",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107181---22-06-2022-04-13-35.JPG",
  //       name: "MIRAL SANGANI",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107106---12-07-2022-07-59-44.JPG",
  //       name: "SWAPNIL KATHIRIYA",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107116---11-05-2022-10-17-37.JPG",
  //       name: "SURAJ KUSHVAHA",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107007---11-05-2022-10-47-38.JPG",
  //       name: "DHAVAL BERA",
  //       pack: "10.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107085---11-05-2022-10-20-13.JPG",
  //       name: "SOHAM JOSHI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107030---11-05-2022-10-25-24.JPG",
  //       name: "IKSHIKA CHOTAI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107005---25-06-2022-05-56-49.JPG",
  //       name: "DRASHTI ATKOTIYA",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107181---22-06-2022-04-13-35.JPG",
  //       name: "MIRAL SANGANI",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107106---12-07-2022-07-59-44.JPG",
  //       name: "SWAPNIL KATHIRIYA",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107116---11-05-2022-10-17-37.JPG",
  //       name: "SURAJ KUSHVAHA",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107007---11-05-2022-10-47-38.JPG",
  //       name: "DHAVAL BERA",
  //       pack: "10.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107085---11-05-2022-10-20-13.JPG",
  //       name: "SOHAM JOSHI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107030---11-05-2022-10-25-24.JPG",
  //       name: "IKSHIKA CHOTAI",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107005---25-06-2022-05-56-49.JPG",
  //       name: "DRASHTI ATKOTIYA",
  //       pack: "8.00-9.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107181---22-06-2022-04-13-35.JPG",
  //       name: "MIRAL SANGANI",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107106---12-07-2022-07-59-44.JPG",
  //       name: "SWAPNIL KATHIRIYA",
  //       pack: "6.00-7.00 Lac"
  //     },
  //     {
  //       img: "https://darshan.ac.in/U01/Student-Photo/190540107116---11-05-2022-10-17-37.JPG",
  //       name: "SURAJ KUSHVAHA",
  //       pack: "6.00-7.00 Lac"
  //     }

  //   ];

  const [Student, setStudent] = useState([])
  const [StudentCopy, setStudentCopy] = useState([])


  useEffect(() => {
    fetch('https://64e334d4bac46e480e78629e.mockapi.io/Students')
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setStudent(res)
        setStudentCopy(res)
      })
  }, [])

  function deleteData(id) {
    fetch(`https://64e334d4bac46e480e78629e.mockapi.io/Students/` + id,
      { method: "delete" })
      .then((res) => {
        return setStudent(Student.filter((res) => { return res.id !== id }))
      })
  }

  let StudentCard = Student.map((Student, index) => {
    return (
      <div class="card col-2 p-1 m-3">
        <img
          class="card-img-top"
          src={Student.StuImg}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{Student.id}: {Student.StuName}</h5>
          <p class="card-text">{Student.StuDepartment}</p>
          <p class="card-text">{Student.StuPackage} Lac</p>

          <button className="btn btn-primary" onClick={() => { deleteData(Student.id) }}>delete</button>{' '}

          <Link className="btn btn-primary" to={"/student/" + Student.id}>More</Link>{' '}

          <Link className="btn btn-primary" to={"/Student/Edit/" + Student.id}>Edit</Link>

        </div>
      </div>
    )
  });

  return (
    <>
      <div class="container">

          <b>Search Students</b><input className="me-2" type="text" placeholder="Search" aria-label="Search"
            onChange={(e) => {
              
              setStudent(StudentCopy.filter((a) => { return a.StuName.toLowerCase().includes(e.target.value) }))
  }} />
        <div class="row">
          {StudentCard}
        </div>
      </div>
    </>
  );
}
export default Student;