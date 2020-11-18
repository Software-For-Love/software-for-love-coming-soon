import React from 'react'
import Layout from '../../layouts/index';
import SEO from '../../components/SEO';
import {Link} from 'gatsby';
import { Helmet } from 'react-helmet';

const RegistrationPage = props => (
    <Layout bodyClass = "page-registration">
        <SEO title="Register" />
        <div className="intro intro-small">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Sign Up</h1>
                        <p>Please enter your information below and we will contact you at a later time.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="icons">
            <div className="sign-up-forms">
                <a href="" target="_blank">
                    <svg id="Capa_1" enable-background="new 0 0 5 5" height="50" viewBox="0 0 500 500" width="50" xmlns="http://www.w3.org/2000/svg"><g><g id="Forms_4_"><g><g><g><g><g><path d="m451 135-105-30-30-105h-210c-24.853 0-45 20.147-45 45v422c0 24.853 20.147 45 45 45h300c24.853 0 45-20.147 45-45z" fill="#734bbd"/></g></g></g></g></g><g><circle cx="136" cy="256" fill="#fff5f5" r="15"/></g><g><circle cx="136" cy="316" fill="#fff5f5" r="15"/></g><g><circle cx="136" cy="376" fill="#fff5f5" r="15"/></g></g><g id="Forms_1_"><g><g><path d="m451 135v332c0 24.853-20.147 45-45 45h-150v-512h60l30 105z" fill="#5f45a9"/></g></g></g><g><g><path d="m346 271h-150c-8.291 0-15-6.709-15-15s6.709-15 15-15h150c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g></g><g><path d="m346 331h-150c-8.291 0-15-6.709-15-15s6.709-15 15-15h150c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g><path d="m346 391h-150c-8.291 0-15-6.709-15-15s6.709-15 15-15h150c8.291 0 15 6.709 15 15s-6.709 15-15 15z" fill="#fff5f5"/></g><g fill="#e3e7ea"><path d="m256 391h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z"/><path d="m256 331h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z"/><path d="m256 271h90c8.291 0 15-6.709 15-15s-6.709-15-15-15h-90z"/></g><path d="m451 135h-105c-16.5 0-30-13.5-30-30v-105c3.9 0 7.8 1.5 10.499 4.501l120 120c3.001 2.699 4.501 6.599 4.501 10.499z" fill="#9b7ed0"/></g></svg>
                </a>
                <div className="sign-up-forms">
                    <p>Click here to go to the sign up sheet</p>
                </div>
            </div>
            <div className="twitter">
                <a href="https://twitter.com/softwareforlove" target="_blank">
                    <svg enable-background="new 0 0 24 24" height="50" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m21.552 7.749c0-.217-.008-.428-.018-.636.976-.693 1.797-1.558 2.466-2.554v-.001c-.893.391-1.843.651-2.835.777 1.02-.609 1.799-1.566 2.165-2.719-.951.567-2.001.967-3.12 1.191-.903-.962-2.19-1.557-3.594-1.557-2.724 0-4.917 2.211-4.917 4.921 0 .39.033.765.114 1.122-4.09-.2-7.71-2.16-10.142-5.147-.424.737-.674 1.58-.674 2.487 0 1.704.877 3.214 2.186 4.089-.791-.015-1.566-.245-2.223-.606v.054c0 2.391 1.705 4.377 3.942 4.835-.752.206-1.678.198-2.221.078.637 1.948 2.447 3.381 4.597 3.428-1.674 1.309-3.8 2.098-6.101 2.098-.403 0-.79-.018-1.177-.067 2.18 1.405 4.762 2.208 7.548 2.208 9.054 0 14.004-7.5 14.004-14.001z" fill="#8FCEED" /></svg></a>
            </div>
        </div>
    </Layout>
);

export default RegistrationPage;

export default function Home() {
    return (
      <div>
        <Link to="/contact/">Contact</Link>
      </div>
    )
}