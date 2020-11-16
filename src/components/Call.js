import React from 'react';
import { StaticQuery, graphql, navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

//HANDLE SUBMIT WITH A REDUX FORM  
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

const Call = props => (
  <div>
    <form className="call" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/thankyou" onSubmit={() => handleSubmit}>
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
          <input type="email"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            id="email-input"
            className="email-input"
            name="email"
            placeholder="Email address"
            autoComplete="off"
            required
          />
        </div>
      </div>
      {props.button && (
        <div className="call-box-bottom">
          <input
            className="button"
            type="submit"
            value="Notify Me"
            style={{ border: "none" }}
          />
        </div>
      )}
    </form>
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
