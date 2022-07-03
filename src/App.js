import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import useStore from "./Store/ClientStore";
import UserHomePage from "./components/User/userHomePage";
import AccountSettings from "./components/User/AccountSettings";
import Accounts from "./components/User/Accounts";

function App() {

  const user = useStore((state) => state.user);



  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {user.type === "user" && <Route path="/user" element={<UserHomePage />} />}
        {user.type === "user" && <Route path="/user/account" element={<AccountSettings />} />}
        {user.type === "user" && <Route path="/user/accounts" element={<Accounts />} />}
        <Route path="*" element={<NotFound />} />

      </Routes>


    </Router>


  );
}

export default App;

