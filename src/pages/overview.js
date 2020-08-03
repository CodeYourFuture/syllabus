import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";

function Overview() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CodeYourFuture's Full Stack Web Development Syllabus"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Syllabus Overview</h1>
          <p className="hero__subtitle">
            An overview of our Full Stack Web Development Course
          </p>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <VerticalTimeline className="vertical-timeline-custom-line">
            <VerticalTimelineElement
              contentStyle={{ background: "rgb(212,62,62)", color: "#FFF" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(212,62,62)",
              }}
              iconStyle={{ background: "rgb(212,62,62)", color: "#fff" }}
              icon={<VerticalSplitIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Intro to Coding
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Length: Self-paced
              </h4>
              <p>
                This online, self-paced course gives students a basic
                understanding of HTML & CSS and guides them to building their
                first simple website. Completion of this course is required
                because continuing onto the full course.
              </p>
              <Link
                className={classnames(
                  "button button--outline button--secondary",
                  styles.getStarted
                )}
                to="https://introtocoding.codeyourfuture.io/"
              >
                Find out more
              </Link>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              contentStyle={{ background: "rgb(212,62,62)", color: "#FFF" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(212,62,62)",
              }}
              iconStyle={{ background: "rgb(212,62,62)", color: "#fff" }}
              icon={<FormatListNumberedIcon />}
            >
              <h3 className="vertical-timeline-element-title">Fundamentals</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Length: 4 Weeks
              </h4>
              <p>
                This module aims to give students a grounding in algorithmic
                thinking, breaking down problems and an introduction to
                JavaScript before they continue onto the full course.
              </p>
              <p>
                Before writing any code, students use block-based programming to
                solve technical challenges. Students are then exposed to
                JavaScript for the first time and given projects using
                Processing.js to experiment with.
              </p>
              <Link
                className={classnames(
                  "button button--outline button--secondary button-text",
                  styles.getStarted
                )}
                to="https://fundamentals.codeyourfuture.io/"
              >
                Find out more
              </Link>
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

export default Overview;
