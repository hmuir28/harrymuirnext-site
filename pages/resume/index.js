import React from 'react';
import Head from 'next/head';

import AboutMe from '../../components/AboutMe/AboutMe';
import AcademicPrep from '../../components/AcademicPrep/AcademicPrep';
import Certificates from '../../components/Certificates/Certificates';
import Contact from '../../components/Contact/Contact';
import client from '../../config/contentful.config';
import Experience from '../../components/Experience/Experience';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Skills from '../../components/Skills/Skills';


const ResumePage = ({ portfolio }) => {
  const {
    aboutMeTitle,
    aboutMeDescription,
    academicPrepTitle,
    academicPrepDegrees,
    authorName,
    authorDescription,
    experienceHistorial,
    experienceTitle,
    otherStudiesTitle,
    otherStudiesCertificates,
    socialMedia,
    skillsProgrammingLang,
    skillsTitle,
  } = portfolio.fields;

  return (
    <>
      <Head title={authorName} description={authorDescription} />
      <div className="app-container">
        <Header name={authorName} contactEmail={process.env.CONTACT_EMAIL} />
        <div className="content-container">
          <AboutMe
            aboutMeTitle={aboutMeTitle}
            aboutMeDescription={aboutMeDescription}
          />
          <Experience
            experienceHistorial={experienceHistorial}
            experienceTitle={experienceTitle}
          />
          <AcademicPrep
            academicPrepTitle={academicPrepTitle}
            academicPrepDegrees={academicPrepDegrees}
          />
          <Certificates
            otherStudiesTitle={otherStudiesTitle}
            otherStudiesCertificates={otherStudiesCertificates}
          />
          <Skills
            skillsProgrammingLang={skillsProgrammingLang}
            skillsTitle={skillsTitle}
          />
          <Contact
            socialMedia={socialMedia}
          />
        </div>
      </div>
      <Footer />
    </>
  )
};

ResumePage.getInitialProps = async () => {
  const searchTitle = 'Harry Muir';
  const portfolio = await client.getEntries({
    content_type: 'portfolio',
    'fields.authorName': searchTitle,
  });
  return {
    portfolio: portfolio.items[0],
  };
};

export default ResumePage;
