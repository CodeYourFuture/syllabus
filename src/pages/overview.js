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
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import Code from "@material-ui/icons/Code";
import Web from "@material-ui/icons/Web";
import Language from "@material-ui/icons/Language";
import AddToQueue from "@material-ui/icons/AddToQueue";
import DNS from "@material-ui/icons/Dns";
import Storage from "@material-ui/icons/Storage";
import Group from "@material-ui/icons/Group";
import Star from "@material-ui/icons/Star";

function Overview() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CodeYourFuture's Full Stack Web Development Overview"
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
        <div className={classnames(styles.flexbox)}>
          <section className={classnames(styles.lefthalf)}>
            <h2>What is the Syllabus?</h2>
            <p>
              The syllabus is a repository of everything that we teach at
              CodeYourFuture. Everything in this syllabus is created, maintained
              and taught by teams of volunteers from across the world.
            </p>
            <p>This website includes:</p>
            <ul>
              <li>
                The modules that make up the Full Stack Web Development course
                (seen right)
              </li>
              <li>One-off workshops that have been run by specialists</li>
              <li>Useful guides for our students</li>
            </ul>
            <br />
            <h2>How should I use the Syllabus?</h2>
            <h3>As a teacher...</h3>
            <p>
              If you're reading this then you may be looking to attend or teach
              a class in the future. In each of the module sections of this
              website you will find a suggested lesson plan for your lesson. If
              you're new to CodeYourFuture this is a great place to to start
              with our teaching.
            </p>
            <p>
              However,{" "}
              <b>
                you are also welcome to change, remix and re-create the content
                you find here as you wish
              </b>
              . Over your time here you will get to know your specific students
              and will know what kind of content and teaching they need. We
              encourage you to innovate and experiment with the lesson plans you
              find here.
            </p>
            <p>
              Every lesson has a set of <b>Learning Objectives</b> that we're
              trying to achieve in each lesson, as a teacher your goal is to aim
              to have your student achieve these goals throughout your lesson
              and the accompanying coursework.
            </p>
            <p>
              Be sure to check out the <b>Teaching Notes</b> attached to every
              lesson for notes, slides and videos from previous teachers.
            </p>
            <h3>As a student...</h3>
            <p>
              If you're reading this as a student you will find lots of the
              lesson plans that you've need following in your class. You will
              also find links to resources that we think you will find useful,
              additional exercises and links to all of the coursework for the
              course.
            </p>
            <br />
            <h2>How do I make a change to the Syllabus?</h2>
            <p>
              Check out the <a href="/contributing/overview">Contributing</a>{" "}
              section to find out how to contribute to the Syllabus. New
              contributors always welcome!
            </p>
          </section>
          <section className={classnames(styles.righthalf)}>
            <VerticalTimeline
              className="vertical-timeline-custom-line"
              layout={"1-column"}
            >
              {getComponent(
                "Intro to Coding",
                "Self Paced",
                <div>
                  <p>
                    This online, self-paced course gives students a basic
                    understanding of HTML & CSS and guides them to building
                    their first simple website. Completion of this course is
                    required because continuing onto the full course.
                  </p>
                </div>,
                <VerticalSplitIcon />,
                "https://introtocoding.codeyourfuture.io/"
              )}
              {getComponent(
                "Fundamentals",
                "4 Weeks",
                <div>
                  <p>
                    This module aims to give students a grounding in algorithmic
                    thinking, breaking down problems and an introduction to
                    JavaScript before they continue onto the full course.
                  </p>
                  <p>
                    Before writing any code, students use block-based
                    programming to solve technical challenges. Students are then
                    exposed to JavaScript for the first time and given projects
                    using Processing.js to experiment with.
                  </p>
                </div>,
                <FormatListNumberedIcon />,
                "https://fundamentals.codeyourfuture.io/"
              )}
              {getComponent(
                "HTML/CSS",
                "3 Weeks",
                <div>
                  <p>
                    The products of HTML and CSS comprise a two-thirds of what
                    is called frontend (the final third is client-side
                    JavaScript, which you will learn about in later modules).
                    What is frontend? It's another word for the presentational
                    part of a piece of software. In terms of web development
                    we're talking about "what you see" when you go to any
                    website.
                  </p>
                  <p>
                    Think of it like this: if a webpage were a person, the HTML
                    would be the skeleton and CSS the skin and clothing!
                  </p>
                </div>,
                <ViewQuilt />,
                "/html-css/index"
              )}
              {getComponent(
                "JavaScript Core 1",
                "3 Weeks",
                <div>
                  <p>
                    In this module you'll make a start into the wonderful world
                    of programming. We will be using the programming language
                    JavaScript to do so. You'll learn about the basic building
                    blocks of programming: loops, functions, control flow and
                    more. Consider these as the ABC's of programming, without
                    them it's impossible to write working software!
                  </p>
                </div>,
                <Code />,
                "/js-core-1/index"
              )}
              {getComponent(
                "JavaScript Core 2",
                "3 Weeks",
                <div>
                  <p>
                    In JavaScript Core 2 you'll learn all about how to use
                    JavaScript within the browser. First, you'll learn about how
                    HTML is structured within your browser: we call this the
                    Document Object Model (DOM).
                  </p>
                  <p>
                    Once you've gotten the hang of that we'll apply JavaScript
                    to it, in order to manipulate the elements and make our
                    pages more interactive. We call this DOM manipulation and
                    it's one of the most interesting things about JavaScript!
                  </p>
                </div>,
                <Web />,
                "/js-core-2/index"
              )}
              {getComponent(
                "JavaScript Core 3",
                "3 Weeks",
                <div>
                  <p>
                    In JavaScript Core 2 you'll learn all about requesting data
                    from over the internet to make your websites talk to each
                    other. This is when programming becomes really exciting as
                    you work with real world data to build interesting, complex
                    projects.
                  </p>
                  <p>
                    In addition to this we introduce you to the world of
                    Debugging and the best techniques to make sure that your
                    code runs as bug free as possible.
                  </p>
                </div>,
                <Language />,
                "/js-core-3/index"
              )}
              {getComponent(
                "React",
                "3 Weeks",
                <div>
                  <p>
                    You'll become more familiar with a frontend technology
                    called React.js, a JavaScript library written and maintained
                    by Facebook.
                  </p>
                  <p>
                    It is mainly used to create dynamic user interfaces,
                    changing the data a user sees depending on their input.
                  </p>
                  <p>
                    In this module you'll learn about how to think about
                    webpages in a radically different way: instead of making
                    seperate pages, you'll be making components of pages.
                    Instead of hardcoded content, you'll make structures that
                    can hold different data.
                  </p>
                </div>,
                <AddToQueue />,
                "/react/index"
              )}
              {getComponent(
                "Node.js",
                "3 Weeks",
                <div>
                  <p>
                    Any software application consists of at least 2 parts: a
                    frontend, which is what the user sees and interacts with,
                    and a backend. This module will expose you to the wonderful
                    world of backend development, where you learn all about
                    where your data goes once you've pressed that submit button.
                    You'll be writing web servers and learn how to send users
                    the right feedback.
                  </p>
                </div>,
                <DNS />,
                "/node/index"
              )}
              {getComponent(
                "Databases",
                "3 Weeks",
                <div>
                  <p>
                    In this module you'll learn how to store your data in a
                    database so that you can persist users data across sessions.
                    You'll learn how to structure and group data so your apps
                    know where to find and store the correct data.
                  </p>
                  <p>
                    Depending on the city that you attend you'll either learn
                    about MongoDB or PostgreSQL. We make sure to teach you the
                    technology that is most important for your local jobs
                    market.
                  </p>
                </div>,
                <Storage />,
                "/mongodb/index"
              )}
              {getComponent(
                "Final Projects",
                "3 Weeks",
                <div>
                  <p>
                    Learning to write code is one matter but learning to do it
                    as a team is a whole other skill. In this module we bring
                    together everything you've learnt over the past six modules
                    to build a complex group project for real world clients.
                  </p>
                  <p>
                    We'll be teaching you about modern project management tools
                    like Scrum and Agile as well as using your soft-skills
                    training to work well together in teams.
                  </p>
                </div>,
                <Group />,
                "/finalproject/intro"
              )}
              <VerticalTimelineElement
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<Star />}
              />
            </VerticalTimeline>
          </section>
        </div>
      </main>
    </Layout>
  );
}

function getComponent(title, length, description, icon, link) {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "rgb(212,62,62)", color: "#FFF" }}
      contentArrowStyle={{
        borderRight: "7px solid  rgb(212,62,62)",
      }}
      iconStyle={{ background: "rgb(212,62,62)", color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">Length: {length}</h4>
      {description}
      <Link
        className={classnames(
          "button button--outline button-text mt-1",
          styles.getStarted
        )}
        to={link}
      >
        View the module
      </Link>
    </VerticalTimelineElement>
  );
}

export default Overview;
