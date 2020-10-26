import React from 'react'
import Layout from '../../layouts/index';
import SEO from '../../components/SEO';
import Info from '../../components/Info';

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

        <div className="container pt-2">
            <Call button />
        </div>
        {

        }
    </Layout>
);

export default RegistrationPage;