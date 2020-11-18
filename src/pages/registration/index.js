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
        
        <div className="header">
            <header>
                <h1>SFL</h1>
                <nav>
                        <li>
                            <Link to = "/"> Home</Link>
                        </li>
                        <li>
                            <Link to = "/team"> Team </Link>           
                        </li>
                        <li>
                            <Link to = "/services"> Services</Link>           
                        </li>
                        <li>
                            <Link to = "/testimonials"> Testimonials</Link> 
                        </li>          
                </nav>
            </header>
            <div className="icons">
                <div className="github">
                    <a href="https://github.com/Software-For-Love/software-for-love-coming-soon" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#8FCEED"/></svg></a>
                </div>
                <div className="linkedln">
                    <a href="https://www.linkedin.com/company/software-for-love/" target="_blank">
                    <svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="#8FCEED"><path d="m23.994 24v-.001h.006v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07v-2.185h-4.773v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243v7.801z" /><path d="m.396 7.977h4.976v16.023h-4.976z" /><path d="m2.882 0c-1.591 0-2.882 1.291-2.882 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909c-.001-1.591-1.292-2.882-2.882-2.882z" /></g></svg></a>
                </div>
                <div className="facebook">
                    <a href="https://facebook.com/softwareforlove/" target="_blank">
                    <svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-6.932 0-5.046 7.85-5.322 9h-3.487v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z" fill="#8FCEED" /></svg></a>
                </div>
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