import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <p>
              This is the syllabus and course material for{" "}
              <a href="https://codeyourfuture.io/">CodeYourFuture</a> (CYF), a
              not-for-profit volunteer-run coding school for refugees, asylum
              seekers and disadvantaged groups.
            </p>
            <p>
              During the course you will learn a technology stack that helps you
              build anything from a simple website to a powerful database-driven
              web application!
            </p>
            <p>The eight-month course contains:</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>
                Back-end development using{" "}
                <a href="https://nodejs.org">NodeJS</a>
              </li>
              <li>
                Front-end development using{" "}
                <a href="https://reactjs.org/">React</a>
              </li>
            </ul>
            <p>
              We&#39;ll complement the course with workshops on modern software
              methodologies and job interview practices.
            </p>
            <h2 id="documentation">Documentation</h2>
            <p>
              In this Syllabus you&#39;ll find the content that we teach at
              CodeYourFuture. For other operational details you should read{" "}
              <a href="https://docs.codeyourfuture.io">
                our documentation website
              </a>
              .
            </p>
            <h2 id="students">Students</h2>
            <p>
              If you&#39;re interested in joining the program, please{" "}
              <a href="https://codeyourfuture.io/students">
                apply through our website
              </a>
              .
            </p>
            <h2 id="getting-involved">Getting involved</h2>
            <p>We are looking for volunteers in</p>
            <ul>
              <li>London</li>
              <li>Glasgow</li>
              <li>Manchester</li>
              <li>Birmingham</li>
              <li>Rome</li>
              <li>Medellín</li>
              <li>Cape Town</li>
            </ul>
            <p>
              Both coders and non-coders can help out in a variety of ways that
              suit your skills and with varying commitment levels depending on
              how much time you can give.
            </p>
            <p>
              Please{" "}
              <a href="https://codeyourfuture.io/volunteers/">
                contact us to get involved
              </a>
              !
            </p>
            <h2 id="contributing">Contributing</h2>
            <p>
              Please read our <a href="CONTRIBUTING.md">Contributing guide</a>{" "}
              to get started with how you can contribute to the CYF syllabus.
            </p>
            <h2 id="code-of-conduct">Code Of Conduct</h2>
            <p>
              You can find our full{" "}
              <a href="CODE_OF_CONDUCT.md">code of conduct here</a>.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
