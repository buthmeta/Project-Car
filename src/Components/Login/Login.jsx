import "./Login.css";

const Login = () => {
  return (
    <div className="login_form">
      <div className="form_login">
        <h1>Buth Meta</h1>

        {/* container */}
        <div className="form_container">
          {/* box img */}
          <div className="form_img">
            <img
              // src="https://png.pngtree.com/png-vector/20220720/ourmid/pngtree-procrastination-abstract-concept-vector-illustration-png-image_6026588.png"
              src="/src/assets/meta.jpeg"
              alt=""
            />
          </div>

          {/* box text */}
          <div className="form_text">
            <h2>Log In</h2>

            <form action="" className="form_input">
              <div className="form_username">
                <input type="text" placeholder="Username" />
                <i className="bx bxs-user"></i>
              </div>

              <div className="form_password">
                <input type="password" placeholder="Password" />
                <i className="bx bxs-lock-alt"></i>
              </div>
            </form>

            <div className="checking_container">
              <div className="check_box">
                <input type="checkbox" />
                <h3>Remember Me</h3>
              </div>

              <div className="check_text">
                <h3 href="#">Forgot Password?</h3>
              </div>
            </div>

            <div className="login_btn">
              <button>Log In</button>
            </div>

            <div className="text_bottom">
              <div className="text">
                <h2>Don't have an account?</h2>
              </div>

              <div className="text two">
                <h2>Create an Account</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
