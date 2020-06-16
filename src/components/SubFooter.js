import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import gmail from '../images/gmail.svg';
import logo from '../images/PlaceHolder-Logo.png';
import { Link } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">
     <div className="img1">
            <img alt="logo" src={logo} />
    </div>
    <div className="container">
   

            <a href="https://www.linkedin.com/company/software-for-love/" target="_blank"><img alt="Linkedin" src={linkedin} /></a>

            <a href="https://twitter.com/softwareforlove" target="_blank"><img alt="Twitter" src={twitter} /></a>

            <a href="https://m.facebook.com/softwareforlove/" target="_blank"><img alt="Facebook" src={facebook} /></a>

            <a href="mailto:team@softwareforlove.com" target="_blank"><img alt="Gmail" src={gmail} /></a>
        
    </div>
  </div>
);

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <SubFooter data={data} />}
  />
);
