import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';

var feedback = "Thank you for signing up!"

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

function handleSubmit(e) {
  e.preventDefault()
  const form = e.target
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': form.getAttribute('name')
    }),
  })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
}

/* function textAppear() {
  var text = document.getElementById("feedback-message");
  text.style.display = "block";
} */

/* function checkIfValid() {
  var inpObj = document.getElementById("email-input");
  if (inpObj.checkValidity()) {
    textAppear();
  }
} */

const Call = props => (
  <div>
    <form className="call" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/" onSubmit={() => handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div className="call-box-top">
        {/*<div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
        {props.data.site.siteMetadata.contact.phone}
        </a>
      </div>*/}
        <div className="call-email">
          {/* <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a> */}
        <strong><label htmlFor="email">Email :</label></strong>
        <input type="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        id="email-input"
        className="email-input"
        name="email"
        placeholder="Email address"
        autoComplete="off"
        required
        />
      </div>
      {props.button && (
        <div className="call-box-bottom">
          <input
            className="button"
            type="submit"
            value="Submit"
            style={{ border: "none" }}
          // onsubmit={"return checkIfValid()"}
          />
        </div>
      )}
    </form>
    <div id="feedback-message"
      style={{ display: "none" }}>
      {/* {feedback} */}
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            description
            contact {
              phone
              email
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
