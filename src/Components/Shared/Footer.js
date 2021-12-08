import "./Footer.css";
import { useState,useEffect } from "react";

const Footer = (props) => {
  const [year, setYear] = useState()
  
  useEffect(() => {
    let date = new Date;
    setYear(date.getFullYear())
  }, [])

  return (
    <div id="footerContainer">
      <p>Fortech project</p>
      <p>{year}</p>
      <p>
        <b style={{cursor:"pointer"}} onClick={() => props.ShowModal()}>Policy agreement</b>
      </p>
    </div>
  );
};

export default Footer;
