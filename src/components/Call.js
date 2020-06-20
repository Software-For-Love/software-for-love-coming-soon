import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Call = props => (
  <div className="call">
    <div className="call-box-top">

      <div>
      <strong><label for="email">Enter your email:</label></strong>
      <input type="email" id="email" name="email"></input>
      </div>
    </div>
    {props.button && (
      <div className="call-box-bottom">
        <a className="button">
          <strong> Connect </strong>
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
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Call button={props.button} data={data} />}
  />
);
