import "./GameNewsArticle.css"

const GameNewsArticle = (props) =>{
    return (
        <div id="article">
            <h2>{props.Title}</h2>
            <p>{props.Content}</p>
            <button id="articleLink">Read more</button>
        </div>
    );
}

export default GameNewsArticle;