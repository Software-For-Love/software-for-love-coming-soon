import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

var emailFeedBack = "";

/* function validateEmail(){
  var text = document.querySelector("email-input");
  var regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log(text); // debuging
  if (regx.test(text)){
    document.querySelector("email-input").style.borderBottom="1px solid green";
    emailFeedBack = "Thank you for signing up!";
  } else {
    document.querySelector("email-input").style.borderBottom="1px solid red";
    emailFeedBack = "Email Invalid. Please try again";
    console.log("false");
  }
} */

const Call = props => (
  <div className="call">
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
        className="email-input"
        name="email"
        placeholder="Enter Your Email"
        autoComplete="off"
        style={{borderBottom : "1px solid red"}}
        />
        <div id="Invalid Email"
        style={ {color: "red"}, {fontSize: 10}}
        >{emailFeedBack}</div>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a 
        className="button"
        type="submit"
        /* onClick={validateEmail()} */>
          Submit
        </a>
      </div>
    )}
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
