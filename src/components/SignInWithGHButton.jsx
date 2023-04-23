import React from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const SignInWithGHButton = ({ signoutCb }) => {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  const [token, setToken] = React.useState(localStorage.getItem("gh-token"));

  const qs = new URLSearchParams({
    client_id: siteConfig.customFields.CLIENT_ID,
    state: JSON.stringify({
      prevPath: location.pathname,
    }),
    scope: ["project", "repo"],
  });

  const url = `https://github.com/login/oauth/authorize?${qs}`;

  const signOut = () => {
    localStorage.removeItem("gh-token");
    setToken(null);
    if (signoutCb) {
      signoutCb();
    }
  };

  return !token ? (
    <a href={url} className="button button--primary">
      Sign In
    </a>
  ) : (
    <button onClick={signOut} className="button button--success">
      Sign Out
    </button>
  );
};

export default SignInWithGHButton;
