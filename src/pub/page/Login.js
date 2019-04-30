import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <main className="login">
        <div className="login-inner">
          <h1>
            <img
              src="https://via.placeholder.com/217x215"
              alt="로그인 더미 로고"
            />
          </h1>
          <section>
            <div>
              <div className="form-group">
                <i className="ico-users" />
                <input
                  type="text"
                  name="user_id"
                  id="user_id"
                  placeholder="아이디를 입력해주십시오."
                  title="아이디"
                  className="form-input"
                />
                <p className="form-Feedback">
                  아이디를 확인 후 다시 시도해 주세요
                </p>
              </div>
              <div className="form-group">
                <i className="ico-lock" />
                <input
                  type="password"
                  name="user_pwd"
                  id="user_pwd"
                  placeholder="비밀번호를 입력해주십시오."
                  title="비밀번호"
                  className="form-input"
                />
                <p className="form-Feedback">
                  비밀번호를 확인 후 다시 시도해 주세요
                </p>
              </div>
            </div>
            <div>
              <button href="#/" className="btn btn-info full">
                <i className="ico-user-check" />
                <span>로그인</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    );
  }
}

export default Login;
