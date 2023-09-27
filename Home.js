import './Home.css';
function Home() {
  return (
      <>
      <div >
        Hello from Home
        <div className="main-content">

          <div className="du-campus-img mt-2">
            <img src="https://darshan.ac.in/Content/media/bg/bg_1.jpg" />
          </div>

          <div className="menu3">
            <div><a href="#"> <img src={require('./image/apply-now.png')}/> Apply now</a></div>
            <div><a href="#"> <img src={require('./image/360-virtual-tour.png')}/> Campus tour</a></div>
            <div><a href="#"> <img src={require('./image/brochure.png')}/> e-brochures</a></div>
            <div><a href="#"> <img src={require('./image/inquiry.png')}/> Inquiry</a></div>
          </div>

          <div className="why-du">
            <div className="why-du-1">
              <h1>Why study at Darshan University?</h1> <br/>
              <h1>1
                Dedicated Faculties</h1><br/>
                We proudly hold the record of lowest attrition rate till date to accomplish dedication.<br/>
              <br/>
              <h1>2
              Disciplined Environment</h1><br/>
              Mobile App for parents to track the progression of students. Mobile phones and related gadgets are strictly prohibited for students within the institute premises.<br/>
              <br/>
              <h1>3
              Skill Development Activities</h1><br/>
              We address the opportunities and challenges to encounter new demands of changing global and innovative technologies.<br/>
              <br/>
              <h1>4
              Industry Interaction & Consultancy Work</h1><br/>
              We possess Civil Consultancy Cell, Energy Management Cell & ASWDC that provide a platform for students to enhance their technical & industrial skills.<br/>
              <br/>
              <h1>5
              Excellent Placement Record</h1><br/>
              We proudly hold a good placement record and assure that each eligible student gets an opportunity to be placed in a recognized firm.<br/>
              <h1>6
              Extra-curricular</h1><br/>
              We provide a platform for the cultural fest Udaan (Annual day), Thanganaat (Navratri Festival), Frolic (Technical Fest), Sprint (Annual Sports week), etc.<br/>
              <br/>
            </div>
            <div className="why-du-2">
              <div>
                <h1>Programs Offered</h1> <br/>
                <h1>Institute of Engineering and Technology</h1><br/><br/>
                B.Tech. (CSE, Civil, Mechanical, Electrical), M.Tech. (Software, Structural, Transportation, 	Thermal, Electrical, Advanced Design & Manufacturing), Ph.D. (CSE, Civil, Mechanical)
                <h1>Institute of Engineering and Technology for Diploma Studies</h1><br/><br/>
                Diploma (Computer, Civil, Electrical, Mechanical)
                <h1>Institute of Computer Application</h1><br/><br/>
                BCA , MCA , B.Sc. (IT), Ph.D. (Computer Science)
                <h1>Institute of Management</h1><br/><br/>
                BBA , BBA Honors , MBA , B.Com. , Ph.D. (Management, Commerce)
                <h1>Institute of Science</h1><br/><br/>
                  B.Sc. (Microbiology), M.Sc. (Microbiology), Ph.D. (Microbiology)
              </div>
              <div style={{border: "lightgrey solid"+ 5+"px", padding: 10+"px", marginTop: 10+"px"}}>
                <h3>Admission 2023-24</h3>
                Direct Admission for all programs has already started. Kindly apply online on DU Direct Admission Portal.<br/>
                  <b>For admission regarding query:</b><br/>
                    +91-7096979952, +91-7096979962
              </div>
            </div>
          </div>
          <div className="s-f-p-a">
            <table>
              <tr>
                <th className="s-f-p-a-s float-left" style={{margin: 0+"px" +40+"px", width:25+"%", padding: 0+"px" +40+"px" , textAlign: "center"}}>
                  <h1>s</h1>
                  <b>9800</b>+ <br/>
                    Students Shown Faith in us
                </th>
                <th className="s-f-p-a-f float-left" style={{margin: 0+"px" +40+"px", width:25+"%", padding: 0+"px" +40+"px" , textAlign: "center"}}>
                  <h1>f</h1>
                  <b>22 Acre</b><br/>
                    World className Infrastructure
                </th>
                <th className="s-f-p-a-p float-left" style={{margin: 0+"px" +40+"px", width:25+"%", padding: 0+"px" +40+"px" , textAlign: "center"}}>
                  <h1>p</h1>
                  <b>125</b> +<br/>
                    Consultancy / Research Projects
                </th>
                <th className="s-f-p-a-a float-left" style={{margin: 0+"px" +40+"px", width:25+"%", padding: 0+"px" +40+"px" , textAlign: "center"}}>
                  <h1>a</h1>
                  <b>20</b> +<br/>
                    Courses Offered in UG / PG / Diploma
                </th>
              </tr>
            </table>
          </div>
        </div>
      </div>
  </>
  );
  }
export default Home;