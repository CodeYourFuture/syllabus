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
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

function Overview() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="CodeYourFuture's Software Web Development Overview"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Syllabus Overview</h1>
          <p className="hero__subtitle">
            An overview of our Software Development Course
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
                The modules that make up the Software Development course (seen
                right)
              </li>
              <li>One-off workshops that have been run by specialists</li>
              <li>Useful guides for our trainees</li>
            </ul>
            <br />
            <h2>How should I use the Syllabus?</h2>
            <h3>As a teacher...</h3>
            <p>
              If you're reading this then you may be looking to attend or teach
              a class in the future. In each of the module sections of this
              website you will find a suggested lesson plan for your lesson. If
              you're new to CodeYourFuture this is a great place to start with
              our teaching.
            </p>
            <p>
              However,{" "}
              <b>
                you are also welcome to change, remix and re-create the content
                you find here as you wish
              </b>
              . Over your time here you will get to know your specific trainees
              and will know what kind of content and teaching they need. We
              encourage you to innovate and experiment with the lesson plans you
              find here.
            </p>
            <p>
              Every lesson has a set of <b>Learning Objectives</b> that we're
              trying to achieve in each lesson, as a teacher your goal to have
              your trainee achieve these goals throughout your lesson and the
              accompanying coursework.
            </p>
            <p>
              Be sure to check out the <b>Teaching Notes</b> attached to every
              lesson for notes, slides and videos from previous teachers.
            </p>
            <h3>As a trainee...</h3>
            <p>
              If you're reading this as a trainee you will find lots of the
              lesson plans that you've been following in your class. You will
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
                "Intro to Digital",
                "Self Paced",
                <div>
                  <p>
                    This online, self-paced course gives trainees a basic
                    understanding of JavaScript, HTML &amp; CSS, unit tests, and
                    guides them to building their first simple website.
                    Completion of this course is required to access the full
                    course.
                  </p>
                </div>,
                <VerticalSplitIcon />,
                "https://introtocoding.codeyourfuture.io/"
              )}
              {getComponent(
                "Fundamentals",
                "3 Weeks",
                <div>
                  <p>
                    This module is a three week immersion into the core
                    principles of digital product development.
                  </p>
                  <p>
                    Trainees work through the key stages of development:
                    Requirements, Iteration, and Delivery. Trainees work in
                    teams to discover requirements and express them as user
                    stories. Trainees iterate on their work and then ship their
                    websites to production.
                  </p>
                </div>,
                <FormatListNumberedIcon />,
                "https://fundamentals.codeyourfuture.io/"
              )}
              {getComponent(
                "Induction and Git",
                "1 Week",
                <div>
                  <p>
                    This week inducts trainees to the Software Development
                    Course and then introduces trainees to Git and Github using
                    Github Desktop. This is a key skill for all developers and
                    is also how we do our coursework at CodeYourFuture.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/induction-week",
                "rgb(176,98,137)",
                "PD"
              )}
              {getComponent(
                "HTML/CSS",
                "4 weeks",
                <div>
                  <p>
                    Introducing Front End. What is frontend? It's another word
                    for the presentational part of a piece of software. In terms
                    of web development we're talking about "what you see" when
                    you go to any website.
                  </p>
                  <p>
                    Think of it like this: if a webpage were a person, the HTML
                    would be the skeleton and CSS the skin and clothing!
                  </p>
                </div>,
                <ViewQuilt />,
                "/html-css",
                "Tech"
              )}
              {getComponent(
                "Building a team",
                "Integrated through HTML/CSS",
                <div>
                  <p>
                    Trainees discover, develop, and deliver a team building
                    project.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-2",
                "PD"
              )}
              {getComponent(
                "JavaScript Core 1",
                "4 weeks",
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
                "/js-core-1",
                "Tech"
              )}
              {getComponent(
                "Communicating in the workplace",
                "Integrated through JS1",
                <div>
                  <p>
                    Trainees will be introduced to important skills needed for
                    the workplace.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-3",
                "PD"
              )}
              {getComponent(
                "JavaScript Core 2",
                "4 weeks",
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
                "/js-core-2",
                "Tech"
              )}
              {getComponent(
                "Presentation Skills",
                "Integrated through JS2",
                <div>
                  <p>
                    Trainees will explore various tools and techniques to
                    develop their presentation skills.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-4",
                "PD"
              )}
              {getComponent(
                "JavaScript Core 3",
                "4 weeks",
                <div>
                  <p>
                    In JavaScript Core 3 you'll learn all about requesting data
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
                "/js-core-3",
                "Tech"
              )}
              {getComponent(
                "Specialisation",
                "1 week",
                <div>
                  <p>
                    After JavaScript Core 3 trainees will reflect with mentors
                    and choose a path of specialisation. After this point,
                    trainees will pursue individualised learning plans based on
                    their aptitudes and interests, broadly on these tracks:
                  </p>
                  <br />
                  <h4>Tracks</h4>
                  <ul>
                    <li>Front End Development</li>
                    <li>Back End Development</li>
                    <li>Full Stack Development</li>
                    <li>Quality Engineering</li>
                    <li>Cloud Engineering</li>
                    <li>Product Development</li>
                  </ul>
                </div>,
                <EmojiPeopleIcon />,
                "https://docs.codeyourfuture.io/course-processes/running-the-course/assessment/milestones",
                "PD"
              )}
              {getComponent(
                "React",
                "4 Weeks",
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
                "/react",
                "Tech"
              )}
              {getComponent(
                "Preparing for the Job Market",
                "Integrated through React",
                <div>
                  <p>
                    Trainees will learn about the CYF process of getting a job
                    and the tools to support getting into a new career.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-5",
                "PD"
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
                "/node",
                "Tech"
              )}
              {getComponent(
                "Interview Skills",
                "Integrated through Node",
                <div>
                  <p>
                    Mock interviews, writing CVs, and creating a professional
                    profile online.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-6",
                "PD"
              )}
              {getComponent(
                "Databases",
                "4 weeks",
                <div>
                  <p>
                    In this module you'll learn how to store your data in a
                    database so that you can persist users data across sessions.
                    You'll learn how to structure and group data so your apps
                    know where to find and store the correct data.
                  </p>
                </div>,
                <Storage />,
                "/db",
                "Tech"
              )}
              {getComponent(
                "Working in Teams",
                "Integrated through DB",
                <div>
                  <p>
                    Trainees will learn about how to work in a cross functional
                    Agile team in preparation for the Final Projects.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-7",
                "PD"
              )}
              {getComponent(
                "Final Projects",
                "4 Weeks",
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
                "/finalproject/intro",
                "Tech"
              )}
              {getComponent(
                "Presentations and Demo Day",
                "Post project",
                <div>
                  <p>
                    The final leg of the course focuses on Presentation skills
                    and preparing for Demo Day.
                  </p>
                </div>,
                <EmojiPeopleIcon />,
                "https://personal-development.codeyourfuture.io/em-modules/pd-session-8",
                "PD"
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

function getComponent(title, length, description, icon, link, type) {
  let rgb;
  if (type === undefined) {
    rgb = "rgb(212,62,62)";
  } else if (type === "Tech") {
    rgb = "rgb(212,62,62)";
  } else {
    rgb = "rgb(176,98,137)";
  }

  let contentType;

  if (type === undefined) {
    contentType = "Combined";
  } else if (type === "Tech") {
    contentType = "Tech";
  } else {
    contentType = "Personal Development";
  }

  return (
    <VerticalTimelineElement
      contentStyle={{ background: rgb, color: "#FFF" }}
      contentArrowStyle={{
        borderRight: "7px solid " + rgb,
      }}
      iconStyle={{ background: rgb, color: "#fff" }}
      icon={icon}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Content Type: {contentType}
      </h4>
      <h4 className="vertical-timeline-element-subtitle">Length: {length}</h4>
      {description}
      <Link
        className={classnames("button button-text mt-1", styles.getStarted)}
        to={link}
      >
        View the module
      </Link>
    </VerticalTimelineElement>
  );
}

export default Overview;
