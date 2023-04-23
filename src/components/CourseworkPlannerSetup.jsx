import React, { useState, useEffect } from "react";
import SignInWithGHButton from "./SignInWithGHButton";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { CircularProgress } from "@material-ui/core";

const STEPS_TEXT = {
  signedIn: "You have signed in with github",
  repoCreated: "Default repository has been created",
  projectBoardCopied: "You have copied the project board",
};

const CourseworkPlannerSetup = () => {
  const { siteConfig } = useDocusaurusContext();
  const [status, setStatus] = useState({
    signedIn: false,
    repoCreated: null,
    projectBoardCopied: null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [token, setToken] = useState(localStorage.getItem("gh-token"));

  useEffect(() => {
    setStatus((status) => ({ ...status, signedIn: !!token }));
  }, [token]);

  const signOutCb = () => {
    setToken(null);
  };

  const checkSteps = () => {
    setLoading(true);
    fetch(`${siteConfig.customFields.API_URL}/github/initial-setup`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("gh-token");
          setToken(null);
        }

        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setStatus(data.setupStatus);
          throw new Error(data.error);
        }
        setStatus(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };

  return (
    <>
      <ol>
        <li className="padding-top--md">
          <h4>Copy project board from template</h4>
          We have created a&nbsp;
          <a
            href="https://github.com/orgs/CodeYourFuture/projects/82"
            target="_blank"
          >
            project board template
          </a>
          &nbsp;that you must copy to your account. Issues you clone will be
          associated with this project board. You can customize this project to
          your liking, but please ensure name of the board contains
          <strong>"Coursework Planner"</strong>
          <br />
          <strong>Guide: </strong>
          <a
            href="https://docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/copying-an-existing-project"
            target="_blank"
          >
            Copying an existing project
          </a>
        </li>
        <li className="padding-top--md">
          <h4>Sign in with github</h4>
          Please authenticate on this website using your github account. <br />
          <div className="margin-top--sm">
            <SignInWithGHButton signoutCb={signOutCb} />
          </div>
        </li>
        <li className="padding-top--md">
          <h4>Check Setup (must be signed in)</h4>
          This step will help you verify that you have completed the previous
          steps correctly.
          <ul>
            {Object.keys(STEPS_TEXT).map((step) => {
              return (
                <Step
                  key={step}
                  status={status[step]}
                  text={STEPS_TEXT[step]}
                  loading={loading}
                />
              );
            })}
          </ul>
          <button
            className="button button--primary margin-top--md"
            disabled={loading || !token}
            onClick={checkSteps}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            {loading ? <CircularProgress size="1rem" thickness={10} /> : null}
            Run Checks
          </button>
        </li>
      </ol>

      {error && (
        <div className="alert alert--warning" role="alert">
          <button
            aria-label="Close"
            className="clean-btn close"
            type="button"
            onClick={() => setError(null)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {error}
        </div>
      )}
    </>
  );
};

const ICONS = {
  true: "✅",
  false: "❎",
  null: "🟨",
};

const Step = ({ loading, status, text }) => {
  return (
    <li style={{ listStyle: "none" }}>
      {loading ? "⏳" : ICONS[`${status}`]} &nbsp;
      {text}
    </li>
  );
};

export default CourseworkPlannerSetup;
