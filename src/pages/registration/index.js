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
        </div>
    </Layout>
);

export default RegistrationPage;