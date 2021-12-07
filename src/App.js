import AboutPage from "./Components/Pages/AboutPage.js";
import { useState } from "react";
import Toolbar from "./Components/Shared/Toolbar.js";
import "./Context/Credentials";
import Credentials from "./Context/Credentials";
import SignUpOrIn from "./Components/Pages/SignUpOrIn.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import GamePage from "./Components/Pages/GamePage";
import AccountPage from "./Components/Pages/AccountPage";
import HomePage from "./Components/Pages/HomePage";
import ContactPage from "./Components/Pages/ContactPage";
import Footer from "./Components/Shared/Footer.js";
import ModalPolicy from "./Components/Shared/ModalPolicy.js";
import ReactDOM from "react-dom";
import ModalWarning from "./Components/Shared/ModalWarning.js";
import GameMainMenuPage from "./Components/GamePages/GameMainMenuPage.js";
import GameSettingsPage from "./Components/GamePages/GameSettingsPage.js";
import GameInventoryPage from "./Components/GamePages/GameInventoryPage.js";
import GameShopPage from "./Components/GamePages/GameShopPage.js";
import GameAccountPage from "./Components/GamePages/GameAccountPage.js";
import GameMenuWrapper from "./Components/GameComponents/GameMenuWrapper.js";
import GamePlayPage from "./Components/GamePages/GamePlayPage.js";
import GameLeaderBoard from "./Components/GamePages/GameLeaderBoard.js";
import GameNewsPage from "./Components/GamePages/GameNewsPage";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
  doc,
  orderBy,
  limit,
} from "@firebase/firestore";
import { db, auth } from "./Firebase";
import { signOut } from "firebase/auth";
import AdminPage from "./Components/Pages/AboutPage.js";
import GameTeamPage from "./Components/GamePages/GameTeamPage.js";
import EasyLevel from "./Components/GameLevels/EasyLevel";

function App() {
  const [showModalPolicy, setShowModalPolicy] = useState(false);
  const [showModalWarning, setShowModalWarning] = useState(false);

  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const [currentUsername, setCurrentUsername] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentCreationDate, setCurrentCreationDate] = useState("");
  const [currentFunds, setCurrentFunds] = useState(0);
  const [currentHeroesNumber, setCurrentHeroesNumber] = useState(0);
  const [currentHighscoreEasy, setCurrentHighscoreEasy] = useState(0);
  const [currentHighscoreNormal, setCurrentHighscoreNormal] = useState(0);
  const [currentHighscoreHard, setCurrentHighscoreHard] = useState(0);
  const [currentTeam, setCurrentTeam] = useState([]);

  const ShowModalPolicy = () => {
    setShowModalPolicy(true);
    console.log(showModalPolicy);
  };

  const HideModalPolicy = () => {
    setShowModalPolicy(false);
    console.log(showModalPolicy);
  };

  const ShowModalWarning = () => {
    setShowModalWarning(true);
  };

  const HideModalWarning = () => {
    setShowModalWarning(false);
  };

  const Logout = async () => {
    setUserLoggedIn(false);
    setCurrentFunds(0);
    setCurrentUsername("");
    setCurrentEmail("");
    setCurrentUser("");
    setCurrentHeroesNumber("");
    setCurrentUser("");
    await signOut(auth);
  };

  return (
    <Credentials.Provider
      value={{
        userLoggedIn: userLoggedIn,
        currentTeam: currentTeam,
        currentUser: currentUser,
        currentUsername: currentUsername,
        currentFunds: currentFunds,
        currentEmail: currentEmail,
        currentCreationDate: currentCreationDate,
        currentHeroesNumber: currentHeroesNumber,
        currentHighscoreEasy: currentHighscoreEasy,
        currentHighscoreNormal: currentHighscoreNormal,
        currentHighscoreHard: currentHighscoreHard,
        Logout: Logout,
        login: async (useremail) => {
          const usersRef = await collection(db, "Users");
          const userQuery = await query(
            usersRef,
            where("email", "==", useremail)
          );
          const userdetails = await getDocs(userQuery);

          const leaderboardRef = await collection(db, "Leaderboards");
          const leaderboardQueryEasy = await query(
            leaderboardRef,
            where("User", "==", useremail),
            where("Difficulty", "==", "Easy"),
            orderBy("Score", "desc"),
            limit(1)
          );
          const leaderboardEasyScore = await getDocs(leaderboardQueryEasy);
          leaderboardEasyScore.forEach((doc)=>{

            setCurrentHighscoreEasy(doc.data().Score);
          })
          
          setCurrentHighscoreNormal(0);
          setCurrentHighscoreHard(0);

          userdetails.forEach((doc) => {
            setUserLoggedIn(true);
            setCurrentFunds(doc.data().funds);
            setCurrentUsername(doc.data().username);
            setCurrentUser(doc.data().name);
            setCurrentEmail(doc.data().email);
            setCurrentCreationDate(doc.data().creationDate);
            setCurrentHeroesNumber(doc.data().heroesNumber);
            
            
            console.log(doc.id, doc.data());
          });
        },
        UpdateFunds: async (amount) => {
          const userRef = doc(db, "Users", currentEmail);
          const updatedFunds = parseInt(currentFunds - amount);
          console.log(updatedFunds, currentFunds, amount);
          await updateDoc(userRef, {
            funds: updatedFunds,
          });
          setCurrentFunds(updatedFunds);
        },
        SaveTeam: (team) => {
          setCurrentTeam(team);
        },
        UpdateHeroesNumber: (amount) => {
          setCurrentHeroesNumber(currentHeroesNumber + amount);
        },
      }}
    >
      <Router>
        <Toolbar ShowModalWarning={ShowModalWarning} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/authentification" element={<SignUpOrIn />} />
          <Route path="/game/*" element={<GamePage />}>
            <Route path="menu/" element={<GameMenuWrapper />}>
              <Route path="" element={<GameMainMenuPage />} />
              <Route path="inventory" element={<GameInventoryPage />} />
              <Route path="shop" element={<GameShopPage />} />
              <Route path="team" element={<GameTeamPage />} />
              <Route path="leaderboard" element={<GameLeaderBoard />} />
              <Route path="play" element={<GamePlayPage />} />
              <Route path="news" element={<GameNewsPage />} />
              <Route path="easy" element={<EasyLevel />} />
            </Route>
            <Route path="" element={<Navigate replace to="menu" />} />
            <Route path="settings" element={<GameSettingsPage />} />
            <Route path="account" element={<GameAccountPage />} />
          </Route>
          <Route exact path="/account" element={<AccountPage />} />
          <Route exact path="/administrate" element={<AdminPage />} />
        </Routes>
        {ReactDOM.createPortal(
          <ModalPolicy
            ModalVisibility={showModalPolicy}
            HideModal={HideModalPolicy}
          />,
          document.getElementById("overlay")
        )}
        {ReactDOM.createPortal(
          <ModalWarning
            ModalWarningVisibility={showModalWarning}
            HideModal={HideModalWarning}
          />,
          document.getElementById("overlay")
        )}
        <Footer ShowModal={ShowModalPolicy} />
      </Router>
    </Credentials.Provider>
  );
}

export default App;
