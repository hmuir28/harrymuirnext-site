import React from 'react';
import Head from 'next/head';

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
        {/* <Header name={authorName} contactEmail="harry182894@gmail.com" /> */}
        <div className="content-container container mx-auto">
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

console.log(HomePage);

export default HomePage;
