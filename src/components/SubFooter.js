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

    <div className="container">

    <div className="img1">
            <img alt="logo" src={logo} />
          </div>
   
    <div className="linkedin">
            <a href="https://www.linkedin.com/company/software-for-love/" target="_blank">
            <svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z"/><path d="m.396 7.977h4.976v16.023h-4.976z"/><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z"/></g></svg></a>
            </div>
    <div className="twitter">
            <a href="https://twitter.com/softwareforlove" target="_blank">
            <svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m21.552 7.749c0-.217-.008-.428-.018-.636.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.752.206-1.678.198-2.221.078.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 9.054 0 14.004-7.5 14.004-14.001z"fill="#FFF"/></svg></a>
            </div>
    <div className="facebook">
            <a href="https://m.facebook.com/softwareforlove/" target="_blank">
              <svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-6.932 0-5.046 7.85-5.322 9h-3.487v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z" fill="#FFF"/></svg></a>
            </div>
     <div className="mail">
            <a href="mailto:team@softwareforlove.com" target="_blank">
              <svg id="Layer_1" height="30" viewBox="0 0 128 128" width="30" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path class="mail1" d="m6.5 24.192h115v79.615h-115z" fill="#f2f2f2"/><path class="mail2" d="m121.5 103.81h-115l57.5-67.59z" fill="#FFF"/><path class="mail3"d="m6.5 24.192 57.5 49.475 57.5-49.475z" fill="#5d9dbb"/></svg></a>
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
