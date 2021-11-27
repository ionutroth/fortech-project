import "./ModalPolicy.css";

const ModalPolicy = (props) => {
  let maxheight = document.body.clientHeight
  return (
    <>
      <div className={props.ModalVisibility ? 'modalPolicyBackground' : 'modalPolicyBackgroundClosed'} onClick={props.HideModal} style={{height:maxheight}}></div>
      <div className={props.ModalVisibility ? 'modalPolicyDiv' : 'modalPolicyDivClosed'}>
        <h1>Modal title</h1>
        <p>By using this app you agree with sharing private information such as passwords, PII and and company data.</p>
        <hr/>
        <p>I am afraid that there is no turning back now. Step back and enjoy.</p>
        <hr/>
        <button onClick={props.HideModal}>Fine.</button>
      </div>
    </>
  );
};

export default ModalPolicy;
