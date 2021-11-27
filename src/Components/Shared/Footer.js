import "./Footer.css";

const Footer = (props) => {
  
  return (
    <div id="footerContainer">
      <p>Fortech project</p>
      <p>2021</p>
      <p>
        <b onClick={() => props.ShowModal()}>Policy agreement</b>
      </p>
    </div>
  );
};

export default Footer;
