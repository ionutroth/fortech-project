import './Body.css'

const Body = (props) => {
    return(
        <div id="bodyWrapper">
            {props.children}
        </div>
    );
}

export default Body;