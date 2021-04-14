import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

function Nav(props) {
  const logged_out_nav = (
    <>
      <Button
        onClick={() => props.display_form("login")}
        variant="outline-primary"
      >
        Login
      </Button>
      <Button
        onClick={() => props.display_form("signup")}
        variant="outline-primary"
      >
        Signup
      </Button>
    </>
  );

  const logged_in_nav = (
    <Button onClick={props.handle_logout} variant="outline-primary">
      Logout
    </Button>
  );

  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired,
};
