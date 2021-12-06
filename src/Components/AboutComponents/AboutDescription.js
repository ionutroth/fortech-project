import { useEffect, useState } from "react";
import './AboutDescription.css'
import game_image from '../../Assets/game_image.png'
import react_image from '../../Assets/react_image.png'
import user_image from '../../Assets/user_image.png'
import firebase_image from "../../Assets/firebase_image.png"

const AboutDescription = (props) => {

    const info = {
        frontend: {
            title: "The frontend",
            description: "For this project I used React. One of the most popular JS frameworks, developed by Facebook. In this project it was used mostly Vanilla React with some ReactBootstrap components.",
            image: react_image
        },
        backend: {
            title: "The backend",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: firebase_image
        },
        theme: {
            title: "The project theme",
            description: "The theme of this project is a simple 2D turnbase strategy game. Buy heroes, build an awesome party, and prove yourself in the arena. Try it out, it is free, but you must sign up first.",
            image: game_image
        },
        owner: {
            title: "The owner",
            description: "Hello, I am Roth Ionut Alexandru and I am both the owner and the developer of this project. I am a graduate student at 'Transylvania University' from Brasov, at 'Electrical Engineering and Computer Science' faculty and Information Technology department. I am interested in web development technologyes(I hope that one day I will be fluent in most of the most used JS frameworks), python scripting as it can be very easy to fast prototype and read.",
            image: user_image
        }
    }

    const [currentInfo, setCurrentInfo] = useState({
        currentTitle: "",
        currentDescription: "",
        currentImage: ""
    })

    useEffect(() => {
        if (props.selectedOption === "frontend") {
            setCurrentInfo(() => {
                return {
                    currentTitle: info.frontend.title,
                    currentDescription: info.frontend.description,
                    currentImage:info.frontend.image
                }
            })
            console.log(currentInfo)
        }
        if (props.selectedOption === "theme") {
            setCurrentInfo(() => {
                return {
                    currentTitle: info.theme.title,
                    currentDescription: info.theme.description,
                    currentImage:info.theme.image
                }
            })
            console.log(currentInfo)
        }
        if (props.selectedOption === "owner") {
            setCurrentInfo(() => {
                return {
                    currentTitle: info.owner.title,
                    currentDescription: info.owner.description,
                    currentImage:info.owner.image
                }
            })
            console.log(currentInfo)
        }
        if (props.selectedOption === "backend") {
            setCurrentInfo(() => {
                return {
                    currentTitle: info.backend.title,
                    currentDescription: info.backend.description,
                    currentImage:info.backend.image
                }
            })
            console.log(currentInfo)
        }
    }, [props])

    return (
        <div id="aboutDescription">
            {currentInfo.currentTitle &&
                <div>
                    <hr />
                    <h1 id="descriptionTitle">{currentInfo.currentTitle}</h1>
                    <img src={currentInfo.currentImage} id="descriptionImage"/>
                    <hr />
                    <p id="description">{currentInfo.currentDescription}</p>
                    <hr />
                </div>
            }
        </div>
    );
}

export default AboutDescription;