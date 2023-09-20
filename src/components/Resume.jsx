import React, { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';

function Resume({formInput}) {
    console.log(formInput);
    
    const nameColor = {
        color: 'firebrick'
    };

    const mailColor = {
      color:'lightskyblue'
    }

    const myStyle = {
      fontFamily: 'Fjalla One'
    }

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
return (
  <div>
    <div className="resume">
    <div className="flex">
            <div className="inner-head">
                <h1><span style={nameColor}>{formInput.fname}</span> {formInput.lname}</h1>
            </div>
            <div className="inner-head">
                <p>{formInput.phone} <br /> {formInput.address} <br /><span style={mailColor}>{formInput.email}@gmail.com</span> </p>
            </div>
        </div>
        <hr />
        <div className="flex">
            <div className="inner-heading">
                <h2>PROFESSIONAL SUMMARY</h2>
            </div>
            <div className="prof">
                <p>{formInput.summary}</p>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>SKILLS</h2>
            </div>
            <div className="skill">
                <ul>
                    <li>{formInput.skill1}</li>
                    <li>{formInput.skill2}</li>
                    <li>{formInput.skill3}</li>
                    <li>{formInput.skill4}</li>
                </ul>
            </div>
            <div className="skill">
                <ul>
                    <li>{formInput.skill5}</li>
                    <li>{formInput.skill6}</li>
                    <li>{formInput.skill7}</li>
                    <li>{formInput.skill8}</li>
                </ul>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>PROFESSIONAL SKILLS</h2>
            </div>
            <div className="pro-skill">
                <p>{formInput.prof1}</p>
                <ul>
                    <li>{formInput.description11}</li>
                    <li>{formInput.description12}</li>
                    <li>{formInput.description13}</li>
                </ul>
                <p>{formInput.prof2}</p>
                <ul>
                    <li>{formInput.description21}</li>
                    <li>{formInput.description22}</li>
                    <li>{formInput.description23}</li>
                    
                </ul>
                <p>Communications</p>
                <ul>
                    <li>{formInput.description31}</li>
                    <li>{formInput.description32}</li>
                    <li>{formInput.description33}</li>
                </ul>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>Work History</h2>
            </div>
            <div className="work">
                <p><span style={myStyle}> {formInput.pos1}</span> &bull; <i> {formInput.company1} </i> <br />{formInput.location1} &bull; {formInput.time1} <br /><br />
                <span style={myStyle}> {formInput.pos2}</span> &bull; <i> {formInput.company2} </i> <br />{formInput.location2} &bull; {formInput.time2} <br /><br />
                <span style={myStyle}> {formInput.pos3}</span> &bull; <i> {formInput.company3} </i> <br />{formInput.location3} &bull; {formInput.time3} <br /><br />
                </p>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>Education</h2>
            </div>
            <div className="work">
                <p><span style={myStyle}> {formInput.deg}</span> &bull; <i> {formInput.college} </i> <br />{formInput.coladd}</p>
            </div>
        </div>
    </div>
    <Button onClick={handlePrint} variant="outline-dark">Export to PDF</Button>

    <div ref={componentRef}>
      <div className="resume">
      <div className="flex">
            <div className="inner-head">
                <h1><span style={nameColor}>{formInput.fname}</span> {formInput.lname}</h1>
            </div>
            <div className="inner-head">
                <p>{formInput.phone} <br /> {formInput.address} <br /><span style={mailColor}>{formInput.email}@gmail.com</span> </p>
            </div>
        </div>
        <hr />
        <div className="flex">
            <div className="inner-heading">
                <h2>PROFESSIONAL SUMMARY</h2>
            </div>
            <div className="prof">
                <p>{formInput.summary}</p>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>SKILLS</h2>
            </div>
            <div className="skill">
                <ul>
                    <li>{formInput.skill1}</li>
                    <li>{formInput.skill2}</li>
                    <li>{formInput.skill3}</li>
                    <li>{formInput.skill4}</li>
                </ul>
            </div>
            <div className="skill">
                <ul>
                    <li>{formInput.skill5}</li>
                    <li>{formInput.skill6}</li>
                    <li>{formInput.skill7}</li>
                    <li>{formInput.skill8}</li>
                </ul>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>PROFESSIONAL SKILLS</h2>
            </div>
            <div className="pro-skill">
                <p>{formInput.prof1}</p>
                <ul>
                    <li>{formInput.description11}</li>
                    <li>{formInput.description12}</li>
                    <li>{formInput.description13}</li>
                </ul>
                <p>{formInput.prof2}</p>
                <ul>
                    <li>{formInput.description21}</li>
                    <li>{formInput.description22}</li>
                    <li>{formInput.description23}</li>
                    
                </ul>
                <p>Communications</p>
                <ul>
                    <li>{formInput.description31}</li>
                    <li>{formInput.description32}</li>
                    <li>{formInput.description33}</li>
                </ul>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>Work History</h2>
            </div>
            <div className="work">
                <p><span style={myStyle}> {formInput.pos1}</span> &bull; <i> {formInput.company1} </i> <br />{formInput.location1} &bull; {formInput.time1} <br /><br />
                <span style={myStyle}> {formInput.pos2}</span> &bull; <i> {formInput.company2} </i> <br />{formInput.location2} &bull; {formInput.time2} <br /><br />
                <span style={myStyle}> {formInput.pos3}</span> &bull; <i> {formInput.company3} </i> <br />{formInput.location3} &bull; {formInput.time3} <br /><br />
                </p>
            </div>
        </div>
        <div className="flex">
            <div className="inner-heading">
                <h2>Education</h2>
            </div>
            <div className="work">
                <p><span style={myStyle}> {formInput.deg}</span> &bull; <i> {formInput.college} </i> <br />{formInput.coladd}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
);
}


export default Resume;