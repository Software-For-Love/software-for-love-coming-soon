import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
  <form name="contact" method="POST" data-netlify="true">
    <div className="call-box-top">

      {/*<div className="call-phone">
        <strong>Phone: </strong>
        <a href={`tel:${props.data.site.siteMetadata.contact.phone}`}>
        {props.data.site.siteMetadata.contact.phone}
        </a>
      </div>
      <div className="call-email">
        <strong>Email: </strong>
        <a href={`mailto:${props.data.site.siteMetadata.contact.email}`}>
          {props.data.site.siteMetadata.contact.email}
        </a>
      </div>*/}

      <div>
      <strong><label for="email">Enter your email:</label></strong>

      <input type="email" id="email" name="email"></input>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
      <button type="submit" className="button">submit</button>
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
