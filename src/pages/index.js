import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CodeYourFuture's Full Stack Web Development Syllabus"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className={styles.mainContainer}>
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
              Please read our{" "}
              <a href="./contributing/overview">Contributing guide</a> to get
              started with how you can contribute to the CodeYourFuture
              Syllabus.
            </p>
            <h2 id="code-of-conduct">Code Of Conduct</h2>
            <p>
              You can find our full{" "}
              <a href="https://codeyourfuture.io/about/code-of-conduct/">
                code of conduct here
              </a>
              .
            </p>
            <h2 id="contributing">Creative Commons Open-Source License</h2>
            <p>
              This work is licensed under a{" "}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
              >
                Creative Commons Attribution-ShareAlike 4.0 International
                License
              </a>
              .
            </p>
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
            >
              <img
                src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png"
                alt="Creative Commons Open-Source License"
                width="200px"
              />
            </a>
          </div>
        </section>
        <section className={styles.features}>
          <VerticalTimeline
            layout="1-column"
            className="vertical-timeline-custom-line"
          >
            <VerticalTimelineElement
              contentStyle={{ background: "#f4f7f6", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(212,62,62)",
              }}
              date="Pre-Course"
              iconStyle={{ background: "rgb(212,62,62)", color: "#000" }}
              //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Intro to Coding
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2010 - 2011"
              contentStyle={{ background: "rgb(212,62,62)", color: "#FFF" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(212,62,62)",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              //icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              //icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              //icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              //icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              //icon={<StarIcon />}
            />
          </VerticalTimeline>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
