import Body from "../Shared/Body";
import ProfileImg from "../../Assets/user_image.png"
import EjobsImage from '../../Assets/ejobs-image.png';
import LinkedInImage from '../../Assets/linkedin-image.png';
import InstagramImage from '../../Assets/instagram-image.png';
import TwitterImage from '../../Assets/twitter-image.png';
import FaceBookImage from '../../Assets/facebook-image.png';
import './ContactPage.css';

const ContactPage = () => {

    return (
        <Body>

            <div className="contactRow">
                <div className="contactColumnLeft">
                    <img src={ProfileImg} alt="Profile picture" id="contactProfilePicture" />
                </div>
                <div className="contactColumnRight">
                    
                    <h2>Contact information</h2>
                    <h4>Phone number: 0724935408</h4>
                    <h4>Email address: rothionut@mail.com</h4>
                    <h4>Address: SomeCity, SomeStreet SomeNumber, SomeCountry</h4>
                </div>

            </div>

            <hr/>

            <div className="contactRow">
                <div className="contactColumnLeft" id="contactPlatformColumn">
                <img src={EjobsImage} className="contactImage" alt="Ejobs logo" />
                <img src={TwitterImage} className="contactImage" alt="Twitter logo"/>
                <img src={FaceBookImage} className="contactImage" alt="Facebook logo" />
                <img src={InstagramImage} className="contactImage" alt="Instagram logo" />
                <img src={LinkedInImage} className="contactImage" alt="Linkedin logo" />
                </div>
                <div className="contactColumnRight">
                    <h2>Find out more about me at</h2>
                    <h4>GitHub: <a target="_blank" href="https://github.com/ionutroth">check out my projects so far</a></h4>
                    <h4>LinkedIn: <a target="_blank" href="www.linkedin.com/in/roth-ionut-45039920b">check out my activity here</a></h4>
                    <h4>eJobs: <a target="_blank" href="https://www.ejobs.ro">check out my CV</a></h4>
                    <h4>Instagram: <i>No account added yet</i></h4>
                    <h4>Facebook: <i>No account added yet</i></h4>
                    <h4>Twitter: <i>No account added yet</i></h4>
                </div>

            </div>

            <hr/>

            <div className="contactRow">
                <div className="contactColumnLeft">
                    
                </div>
                <div className="contactColumnRight">
                    <h2>Interests:</h2>
                    <h4>I am currently interested in web development technologyes, in specialy in different JavaScript frameworks. I am currently a begginer developer in React and Vue </h4>
                    <h4>I am also interested in Python development</h4>
                </div>
            </div>
        </Body>
    );
}

export default ContactPage;