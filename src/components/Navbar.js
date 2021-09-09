import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const currentUser = null;
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/" style={{ color: "white" }}>
            React Movie App
          </a>
          <div className="buttons">
            {currentUser ? (
              <h3>{currentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                class="ms-2 btn btn-outline-light"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
            )}

            {currentUser ? (
              <button
                type="button"
                class="ms-2 btn btn-outline-light"
                onClick={() => null}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                class="ms-2 btn btn-outline-light"
                onClick={() => history.push("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;