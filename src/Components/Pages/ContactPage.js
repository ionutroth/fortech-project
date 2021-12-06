import Body from "../Shared/Body";
import ProfileImg from "../../Assets/user_image.png";
import EjobsImage from "../../Assets/ejobs-image.png";
import LinkedInImage from "../../Assets/linkedin-image.png";
import InstagramImage from "../../Assets/instagram-image.png";
import TwitterImage from "../../Assets/twitter-image.png";
import FaceBookImage from "../../Assets/facebook-image.png";
import Vue from "../../Assets/vue_image.png";
import Angular from "../../Assets/angular_image.png";
import React from "../../Assets/react_image.png";
import Nodejs from "../../Assets/nodejs_image.png";
import "./ContactPage.css";
import { useState } from "react";

const ContactPage = () => {
  const [imagesVisibility, setImagesVisibility] = useState({
    linkedinVisibility: "block",
    twitterVisibility: "block",
    instagramVisibility: "block",
    facebookVisibility: "block",
    vueVisibility: "block",
    angularVisibility: "block",
    reactVisibility: "block",
    portretVisibility: "block",
    nodejsVisibility: "block",
  });

  return (
    <Body>
      <div className="contactRow">
        <div className="contactColumnLeft">
          <img
            src={ProfileImg}
            alt="Profile picture"
            className="contactImage"
          />
        </div>
        <div className="contactColumnRight">
          <h2>Contact information</h2>
          <h4>Phone number: 0724935408</h4>
          <h4>Email address: rothionut@mail.com</h4>
          <h4>Address: SomeCity, SomeStreet SomeNumber, SomeCountry</h4>
        </div>
      </div>

      <hr />

      <div className="contactRow">
        <div className="contactColumnLeft" id="contactPlatformColumn">
          <img
            src={EjobsImage}
            className="contactImage"
            alt="Ejobs logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  instagramVisibility: "block",
                  facebookVisibility: "block",
                  twitterVisibility: "block",
                  linkedinVisibility: "block",
                };
              })
            }
          />
          <img
            src={TwitterImage}
            className="contactImage"
            alt="Twitter logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  twitterVisibility: "none",
                };
              })
            }
            style={{ display: imagesVisibility.twitterVisibility }}
          />
          <img
            src={FaceBookImage}
            className="contactImage"
            alt="Facebook logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  facebookVisibility: "none",
                };
              })
            }
            style={{ display: imagesVisibility.facebookVisibility }}
          />
          <img
            src={InstagramImage}
            className="contactImage"
            alt="Instagram logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  instagramVisibility: "none",
                };
              })
            }
            style={{ display: imagesVisibility.instagramVisibility }}
          />
          <img
            src={LinkedInImage}
            className="contactImage"
            alt="Linkedin logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  linkedinVisibility: "none",
                };
              })
            }
            style={{ display: imagesVisibility.linkedinVisibility }}
          />
        </div>
        <div className="contactColumnRight">
          <h2>Find out more about me at</h2>
          <h4>
            GitHub:{" "}
            <a target="_blank" href="https://github.com/ionutroth">
              check out my projects so far
            </a>
          </h4>
          <h4>
            LinkedIn:{" "}
            <a target="_blank" href="www.linkedin.com/in/roth-ionut-45039920b">
              check out my activity here
            </a>
          </h4>
          <h4>
            eJobs:{" "}
            <a target="_blank" href="https://www.ejobs.ro">
              check out my CV
            </a>
          </h4>
          <h4>
            Instagram: <i>No account added yet</i>
          </h4>
          <h4>
            Facebook: <i>No account added yet</i>
          </h4>
          <h4>
            Twitter: <i>No account added yet</i>
          </h4>
        </div>
      </div>

      <hr />

      <div className="contactRow">
        <div className="contactColumnLeft">
          <img src={Vue} className="contactImage" alt="VueJs logo" 
          
          onClick={() =>
            setImagesVisibility((prevState) => {
              return {
                ...prevState,
                nodejsVisibility: "block",
                angularVisibility: "block",
                vueVisibility:"block",
                nodejsVisibility:"block"
              };
            })
          }
          />
          <img src={Angular} className="contactImage" alt="AngularJs logo"
          
          onClick={() =>
            setImagesVisibility((prevState) => {
              return {
                ...prevState,
                angularVisibility: "none",
              };
            })
          }
          style={{ display: imagesVisibility.angularVisibility }}

          />
          <img src={React} className="contactImage" alt="ReactJs logo"
          
          onClick={() =>
            setImagesVisibility((prevState) => {
              return {
                ...prevState,
                reactVisibility: "none",
              };
            })
          }
          style={{ display: imagesVisibility.reactVisibility }}

          />
          <img
            src={Nodejs}
            className="contactImage"
            alt="NodeJs logo"
            onClick={() =>
              setImagesVisibility((prevState) => {
                return {
                  ...prevState,
                  nodejsVisibility: "none",
                };
              })
            }
            style={{ display: imagesVisibility.nodejsVisibility }}
          />
        </div>
        <div className="contactColumnRight">
          <h2>Interests:</h2>
          <h4>
            I am currently interested in web development, and by this I refer to
            both frontend and backend frameworks.{" "}
          </h4>
          <hr />
          <h4>
            Regarding frontend, I am at an intermediate level on React.js
            library and Vue.js(version 3) framework, and at a begginer level on
            Angular.js.
          </h4>
          <hr />
          <h4>
            Regarding backend, I am interested in learning different backend
            frameworks such as NodeJs and Django which are relatively easy and
            not error prone(at least on the configuration and versioning side).
          </h4>
          <hr />
          <h4>
            My carrer goal is to be fluent in React, Vue and Angular(and maybe
            one or two other javascript frameworks) and to be able to connect
            with ease a project made in each of those mediums to a backend REST
            or SOAP API which will use either a SQL or NoSQL database.
          </h4>
          <hr />
          <h4>
            I am also interested in python, after all it was the programing
            language in which I made my first big project. What I like most
            about python is the lack of versioning and configuration errors, the
            the clean and easy to learn syntax, and the Python Zen(which I try
            to follow as much as I can in any project, no matter the language).
          </h4>
        </div>
      </div>
    </Body>
  );
};

export default ContactPage;
