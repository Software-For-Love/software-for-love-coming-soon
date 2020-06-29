import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import linkedin from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg';
import gmail from '../images/gmail.svg';
import logo from '../images/softwareforlove1.svg';
import { Link } from 'gatsby';

const SubFooter = props => (
  <div className="sub-footer-strip">

    <div className="container">

    <div className="img1">
            <img alt="logo" src={logo} />
          </div>
   
    <div className="linkedin">
            <a href="https://www.linkedin.com/company/software-for-love/" target="_blank"><img alt="Linkedin" src={linkedin} /></a>
            </div>
    <div className="twitter">
            <a href="https://twitter.com/softwareforlove" target="_blank"><img alt="Twitter" src={twitter} /></a>
            </div>
    <div className="facebook">
            <a href="https://m.facebook.com/softwareforlove/" target="_blank"><img alt="Facebook" src={facebook} /></a>
            </div>
     <div className="mail">
            <a href="mailto:team@softwareforlove.com" target="_blank"><img alt="Gmail" src={gmail} /></a>
            </div>
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
