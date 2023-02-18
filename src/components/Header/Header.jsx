import "./Header.css";
import logo from "../../img/clarusway.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="clarusway-logo" />
      </div>

      <h1 className="title">Lesson Reminder</h1>
    </div>
  );
};

export default Header;
