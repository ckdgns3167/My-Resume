import React from "react";
import PropTypes from "prop-types";

import "./Hello.css";

function Hello({ name, email, github, homeAddress, company, phone, birthDate, avatar_url }) {
  return (
    <section id="hello" className="section">
      <div className="container">
        <div className="row">
          <img
            className="hello__image"
            src={avatar_url}
            alt={name}
            title="My Photo"
            width="300"
            height="380"
          />
          <h1>창훈 | 최고의 웹 개발자가 되겠습니다.</h1>
        </div>
      </div>
    </section>
  );
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  homeAddress: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  birthDate: PropTypes.object.isRequired,
  avatar_url: PropTypes.string.isRequired,
};
export default Hello;
