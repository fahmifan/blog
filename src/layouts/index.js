import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media';

import './index.css'
import '../styles/layout-overide.css';

const Header = () => (
  <div
    style={{
      background: '#159957',
      background: '-webkit-linear-gradient(to right, #155799, #159957)',
      background: 'linear-gradient(to right, #155799, #159957)',
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      fontFamily: 'Open Sans, sans-serif'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center', fontSize: '18px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Blog of Uneh
        </Link>
      </h1>
    </div>
  </div>
);

const Sidebar = (props) => (
  <div
    style={{
      border: '2px solid #e6e6e6',
      maxWidth: '980',
      padding: '0.5rem',
      marginBottom: '25px'
    }}
  >
    <strong>{props.title}.</strong>{props.description}
  </div>  
);

const Icon = (props) => {
  return (
    <div style={{width: '50px'}}>
      <a href={props.link} target="_blank">
        <span style={{fill: '#155799'}}>
          {props.children}
        </span>
      </a>
    </div>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      {/*Github*/}
      <Icon link="https://github.com/fahmifan">
        <svg viewBox="0 0 512 512"><path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg>
      </Icon>
      {/*Email*/}
      <Icon link="mailto:fahmiirfan909@gmail.com">
        <svg viewBox="0 0 512 512"><path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"/></svg>
      </Icon>
      {/*Linkedin*/}
      <Icon link="https://linkedin.com/in/fahmifan">
        <svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg>
      </Icon>
    </div>
  );
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100%',
        // padding: '0px 1.0875rem 1.45rem',
        // paddingTop: 0,
      }}
    >
      <Media query={{ maxWidth: 848 }} >
        {matches => 
          matches ? (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: '0 auto',
                maxWidth: 980,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: '100%',
                padding: '25px'
              }}
            >
              <div style={{ flex: 2.5, paddingRight: '30px' }}>
                { children() }
              </div>
              <div
              style={{flex: 1}}>
                <Sidebar 
                  title="Uneh"
                  description="Aritcle on technology and other"
                />
                <Sidebar 
                  title="About author"
                  description="I am a jr frontend developer, currently learning on React"
                />
              </div>
            </div>
          )}
      </Media>
    </div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
