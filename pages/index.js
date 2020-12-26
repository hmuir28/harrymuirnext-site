import React from 'react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Footer from '../components/Footer/Footer';
import client from '../config/contentful.config';

const HomePage = ({ portfolio }) => {
  const imageProfile = portfolio.fields.imageProfile.fields;

  const {
    authorName,
    authorDescription
  } = portfolio.fields;

  return (
    <>
      <Head title={authorName} description={authorDescription} />
      <div className="app-container">
        <Header name={authorName} contactEmail={process.env.CONTACT_EMAIL} />
        <div className="content-container">
          <Home
            imageProfile={imageProfile.file.url}
            name={authorName}
            paragraph={authorDescription}
          />
        </div>
      </div>
      <Footer position="absolute" />
    </>
  )
};

HomePage.getInitialProps = async () => {
  const searchTitle = 'Harry Muir';
  const landing = await client.getEntries({
    content_type: 'portfolio',
    'fields.authorName': searchTitle,
  });
  return {
    portfolio: landing.items[0],
  };
};

export default HomePage;
