import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '../image/logo.jpg';

export default function Footer() {
  return (
    <>
      <div className="container-fluid background-color-footer new-Comp-top-margin">
        <div className="container className='short-com-top-margin">
          <div className="row short-com-top-margin ">
            <div className="col">
              <div className='margin-left'>
              <a>
                <img src={logo} alt="Logo" /></a></div>
                <a><span className="fs-5 footer-h1 navbar-brand "><h1><u>Intense Group</u></h1></span>
              </a>
              
                <div >Stay Connected</div>
              
            

            {/* Facebook, Twitter, LinkedIn */}
            <div className='row '>
              <span className='col widget_img _size' ><FontAwesomeIcon icon={faFacebook} /></span>
              <span className='col'><FontAwesomeIcon icon={faYoutube} /></span>
              <span className='col'><FontAwesomeIcon icon={faInstagram} /></span>
              <span className='col'><FontAwesomeIcon icon={faLinkedin} /></span>
            </div>
            

            
            
              <div className="container ">
                <div className="row widget-text-align"> 
                  <div className='col'><FontAwesomeIcon icon={faPhone} /></div>
                  <div className='col text-left'>9423810400</div>
                  
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className='col'><FontAwesomeIcon icon={faEnvelope} /></div>
                  <div className='col'>archanasankpal@gmail.com</div>
                  
                </div>
              </div>

              
            
            </div>

            {/* Business Links */}
            <div className="col">
              <h5>Businesses Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/docs/5.3/getting-started/">Intense Technologies</a></li>
                <li className="mb-2"><a href="/docs/5.3/examples/starter-template/">Intense Fire Industries</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/webpack/">Intense Foods</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/parcel/">Intense Art</a></li>
                <li className="mb-2"><a href="/docs/5.3/getting-started/vite/">Intense Enterprises</a></li>
              </ul>
            </div>

            {/* Links */}
            <div className="col">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/docs/5.3/">About</a></li>
                <li className="mb-2"><a href="/docs/5.3/examples/">Companies</a></li>
                <li className="mb-2"><a href="https://icons.getbootstrap.com/">Contact</a></li>
                <li className="mb-2"><a href="https://blog.getbootstrap.com/">Blog</a></li>
                <li className="mb-2"><a href="https://cottonbureau.com/people/bootstrap" target="_blank" rel="noopener">Store</a></li>
              </ul>
            </div>

            {/* Community Links */}
            <div className="col">
              <h5>Community</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/issues" target="_blank" rel="noopener">Issues</a></li>
                <li className="mb-2"><a href="https://github.com/twbs/bootstrap/discussions" target="_blank" rel="noopener">Discussions</a></li>
                <li className="mb-2"><a href="https://github.com/sponsors/twbs" target="_blank" rel="noopener">Corporate sponsors</a></li>
                <li className="mb-2"><a href="https://opencollective.com/bootstrap" target="_blank" rel="noopener">Open Collective</a></li>
                <li className="mb-2"><a href="https://stackoverflow.com/questions/tagged/bootstrap-5" target="_blank" rel="noopener">Stack Overflow</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
