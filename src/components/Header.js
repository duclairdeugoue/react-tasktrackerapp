import { PropTypes } from "prop-types";
import { Button } from "./Button";

const Header = ({ title, onAdd, btnToggleForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        text={btnToggleForm ? "Close" : "Add"}
        color={btnToggleForm ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// adding dynamic css in js
// const headingStyle = {
// }

export default Header;
