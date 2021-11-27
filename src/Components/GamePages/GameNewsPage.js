import './GameNewsPage.css';
import GameNewsArticle from '../GameComponents/GameNewsArticle.js'

let demo_article = [
    {
        title:"ceva1",
        content:"ceva1"
    },
    {
        title:"ceva1",
        content:"ceva1"
    },
    {
        title:"ceva1",
        content:"ceva1"
    },
    {
        title:"ceva1",
        content:"ceva1"
    }
];



const GameNewsPage = () =>{
    return (
        <div id="gameNewsPage">
            {
                demo_article.map((article, index) =>{
                    return <GameNewsArticle Title={article.title} Content={article.content} key={index}/>
                })
            }
            ceva
        </div>
    );
}

export default GameNewsPage;