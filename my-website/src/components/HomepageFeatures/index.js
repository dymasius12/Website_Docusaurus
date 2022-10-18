import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'I am a programmer',
    Svg: require('@site/static/img/undraw_programming.svg').default,
    description: (
      <>
        I was a software engineer at Kooprime.com or KOOPrime Pte Ltd and was a Data Analyst at Analog Devices Inc. I won 2nd place for UCL Data Science Hackathon 2020+1.
      </>
    ),
  },
  {
    title: 'I am an entrepreneur',
    Svg: require('@site/static/img/undraw_business_plan.svg').default,
    description: (
      <>
        I have experiences as a founder and CEO of my humble businesses. I won TOP 15 out of 655 Team in Shopee Business Case Competition 2021. My mission is to innovate and empower people through technology and social entrepreneurship.
      </>
    ),
  },
  {
    title: 'I am an art enthusiast myself',
    Svg: require('@site/static/img/undraw_sculpting.svg').default,
    description: (
      <>
        I enjoy artistic things. I love music. I am a pianist at local Singapore-Indonesian Church. I also enjoy to integrate technology to art. I won 1st runner-up for NUS Art Competition 2021.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
