import Body from "../Shared/Body.js";
import { useState } from "react";
import "./SignUpOrIn.css";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { db, auth } from "../../Firebase.js";
import { setDoc, doc } from "@firebase/firestore";
// import {useNavigate} from "react-router-dom"
import { useContext } from "react";
import Credentials from "../../Context/Credentials.js";
import { useNavigate } from "react-router";

const SignUpOrIn = (props) => {
  const [emailSignin, setEmailSignin] = useState("");
  const [passwordSignin, setPasswordSignin] = useState("");
  const [firstNameSignUp, setFirstNameSignUp] = useState("");
  const [lastNameSignUp, setLastNameSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [userNameSignUp, setUserNameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmedSignUp, setPasswordConfirmedSignUp] = useState("");
  const [terms, setTerms] = useState(true);
  const [invalidFirstName, setInvalidFirstName] = useState(false);
  const [invalidLastName, setInvalidLastName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidUserName, setInvalidUserName] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [invalidConfirmedPassword, setInvalidConfirmedPassword] =
    useState(false);
  const [validCredentials, setValidCredentials] = useState(true);
  const ctx = useContext(Credentials);

  let navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    if (
      firstNameSignUp.trim() === "" ||
      firstNameSignUp.trim().match(/[^a-z]/i) !== null
    ) {
      setInvalidFirstName(true);
      setValidCredentials(false);
    } else {
      setInvalidFirstName(false);
    }
    if (
      lastNameSignUp.trim() === "" ||
      lastNameSignUp.trim().match(/[^a-z]/i) !== null
    ) {
      setInvalidLastName(true);
      setValidCredentials(false);
    } else {
      setInvalidLastName(false);
    }
    if (
      userNameSignUp.trim() === "" ||
      userNameSignUp.trim().match(/[^a-z0-9]/i) !== null
    ) {
      setInvalidUserName(true);
      setValidCredentials(false);
    } else {
      setInvalidUserName(false);
    }
    if (
      passwordSignUp.trim().length === "" ||
      passwordSignUp.trim().match(/[^a-z0-9]/i) !== null
    ) {
      setInvalidPassword(true);
      setValidCredentials(false);
    } else {
      setInvalidPassword(false);
    }
    if (
      passwordConfirmedSignUp.trim() === "" ||
      passwordConfirmedSignUp.trim() !== passwordSignUp.trim()
    ) {
      setInvalidConfirmedPassword(true);
      setValidCredentials(false);
    } else {
      setInvalidConfirmedPassword(false);
    }
    if (
      emailSignUp.trim() === "" ||
      emailSignUp.trim().match(/[^a-z0-9@.]/i) !== null
    ) {
      setInvalidEmail(true);
      setValidCredentials(false);
    } else {
      setInvalidEmail(false);
    }

    if (validCredentials) {
      try {
        const fullName = firstNameSignUp + " " + lastNameSignUp;
        const today = new Date();
        const userDate =
          today.getFullYear() + "/" + today.getMonth() + "/" + today.getDate();
        await createUserWithEmailAndPassword(auth, emailSignUp, passwordSignUp);
        alert("User created succesfully");
        await signOut(auth);
        await setDoc(doc(db, "Users", emailSignUp), {
          name: fullName,
          username: userNameSignUp,
          funds: 0,
          creationDate: userDate,
          highscoreEasy: 0,
          highscoreNormal: 0,
          highscoreHard: 0,
          heroesNumber: 0,
          email: emailSignUp,
        });
        navigate("/");
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  };

  const handleAuthentification = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, emailSignin, passwordSignin).then(
        ctx.login(emailSignin)
      );
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const AcceptTerms = () => {
    setTerms(!terms);
    console.log(invalidFirstName);
  };

  const sliderInfo = {
    sliderSignUp: {
      title: "Sign up!",
      description:
        "Welcome! Sign up today to play the game and acces other various parts of this website.",
      change: "I already have an account.",
    },
    sliderSignIn: {
      title: "Sign in!",
      description: "Welcome back! Sign in and continue to the main site.",
      change: "I do not have an account.",
    },
  };

  const GoRight = () => {
    setsliderPsition({ left: "50%" });
    setsliderDescriptionText(sliderInfo.sliderSignIn.description);
    setsliderTitleText(sliderInfo.sliderSignIn.title);
    setsliderChangeText(sliderInfo.sliderSignIn.change);
  };
  const GoLeft = () => {
    setsliderPsition({ left: "0%" });
    setsliderDescriptionText(sliderInfo.sliderSignUp.description);
    setsliderTitleText(sliderInfo.sliderSignUp.title);
    setsliderChangeText(sliderInfo.sliderSignUp.change);
  };

  const Slide = () => {
    if (sliderPosition.left === "0%") {
      GoRight();
    } else if (sliderPosition.left === "50%") {
      GoLeft();
    }
  };

  const [sliderTitleText, setsliderTitleText] = useState(
    sliderInfo.sliderSignUp.title
  );
  const [sliderDescriptionText, setsliderDescriptionText] = useState(
    sliderInfo.sliderSignUp.description
  );
  const [sliderChangeText, setsliderChangeText] = useState(
    sliderInfo.sliderSignUp.change
  );
  const [sliderPosition, setsliderPsition] = useState({ left: "0%" });

  return (
    <Body>
      <div id="splitRow">
        <div id="slider" style={sliderPosition}>
          <p className="sliderTitle">{sliderTitleText}</p>
          <p id="sliderDescription">{sliderDescriptionText}</p>
          <div id="changeOption" onClick={Slide}>
            <p id="changeOptionText">{sliderChangeText}</p>
          </div>
        </div>

        <div className="halfRow">
          <p className="sliderTitle">Sign in</p>
          <form onSubmit={handleAuthentification}>
            <label className="fieldName">UserName:</label>
            <input
              className="fieldText"
              type="text"
              value={emailSignin}
              onChange={(e) => setEmailSignin(e.target.value)}
            />
            <br />
            <small className="inputWarning" style={{ display: "none" }}>
              Incorrect credentials
            </small>
            <br />
            <label className="fieldName">Password:</label>
            <input
              className="fieldText"
              type="text"
              value={passwordSignin}
              onChange={(e) => setPasswordSignin(e.target.value)}
            />
            <br />
            <small className="inputWarning" style={{ display: "none" }}>
              Incorrect credentials
            </small>
            <input type="submit" className="submitButton" />
          </form>
        </div>

        <div className="halfRow">
          <p className="sliderTitle">Sign up</p>
          <form onSubmit={handleRegister}>
            <label className="fieldName">First name:</label>
            <input
              className="fieldText"
              type="text"
              value={firstNameSignUp}
              onChange={(e) => setFirstNameSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              id="firstNameSubtext"
              style={{ display: invalidFirstName ? "block" : "none" }}
            >
              First name can contain only letters.
            </small>
            <br />
            <label className="fieldName">Last name:</label>
            <input
              className="fieldText"
              type="text"
              value={lastNameSignUp}
              onChange={(e) => setLastNameSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              style={{ display: invalidLastName ? "block" : "none" }}
            >
              Last name can contain only letters.
            </small>
            <br />
            <label className="fieldName">Email:</label>
            <input
              className="fieldText"
              type="text"
              value={emailSignUp}
              onChange={(e) => setEmailSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              style={{ display: invalidEmail ? "block" : "none" }}
            >
              First name can contain only letters.
            </small>
            <br />
            <label className="fieldName">User name:</label>
            <input
              className="fieldText"
              type="text"
              value={userNameSignUp}
              onChange={(e) => setUserNameSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              style={{ display: invalidUserName ? "block" : "none" }}
            >
              First name can contain only letters.
            </small>
            <br />
            <label className="fieldName">Password:</label>
            <input
              className="fieldText"
              type="text"
              value={passwordSignUp}
              onChange={(e) => setPasswordSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              style={{ display: invalidPassword ? "block" : "none" }}
            >
              Please try another password
            </small>
            <br />
            <label className="fieldName">Confirm password:</label>
            <input
              className="fieldText"
              type="text"
              value={passwordConfirmedSignUp}
              onChange={(e) => setPasswordConfirmedSignUp(e.target.value)}
            />
            <br />
            <small
              className="inputWarning"
              style={{ display: invalidConfirmedPassword ? "block" : "none" }}
            >
              Passwords do not match.
            </small>
            <br />
            <label className="fieldName">
              I agree with terms and conditions.
            </label>
            <input
              className="fieldCheckbox"
              type="checkbox"
              value={terms}
              onChange={AcceptTerms}
            />
            <br />
            <input type="submit" className="submitButton" disabled={terms} />
          </form>
        </div>
      </div>
    </Body>
  );
};

export default SignUpOrIn;
