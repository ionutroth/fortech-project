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
import GamePlayPage from "./Components/GamePages/GamePlayPage.js"
import GameLeaderBoard from "./Components/GamePages/GameLeaderBoard.js";
import GameNewsPage from "./Components/GamePages/GameNewsPage"


function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [user, setUser] = useState("nope");
  const [option, setOption] = useState("signup");
  const [showModalPolicy, setShowModalPolicy] = useState(false);
  const [showModalWarning, setShowModalWarning] = useState(false);

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

  return (
    <Credentials.Provider value={{ userLoggedIn: userLoggedIn, user: user }}>
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
              <Route path="team" element={<GameMainMenuPage />} />
              <Route path="leaderboard" element={<GameLeaderBoard />} />
              <Route path="play" element={<GamePlayPage />} />
              <Route path="news" element={<GameNewsPage />} />
            </Route>
            <Route path="" element={<Navigate replace to="menu" />} />
            <Route path="settings" element={<GameSettingsPage />} />
            <Route path="account" element={<GameAccountPage />} />
          </Route>

          <Route exact path="/account" element={<AccountPage />} />
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
