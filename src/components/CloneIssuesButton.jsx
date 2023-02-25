import React from "react";
import { useLocation } from "@docusaurus/router";
import { API_URL, CLIENT_ID } from "../constants";

const SignInButton = () => {
  const location = useLocation();
  const login = () => {
    const state = JSON.stringify({
      prevPath: `${location.pathname}`,
    });
    window.open(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=${state}`,
      "_self"
    );
  };

  return <button onClick={login}>Sign In</button>;
};

const CloneButton = ({ repo, issue = null, token = null }) => {
  if (!repo || !token) {
    return null;
  }
  const [state, setState] = React.useState({
    loading: false,
    error: false,
    result: null,
  });

  const label = issue ? "Clone" : "Clone All Issues";

  const clone = () => {
    setState({ ...state, loading: true });
    const url = issue
      ? `${API_URL}/clone?repo=${repo}&issue=${issue}`
      : `${API_URL}/clone?repo=${repo}`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setState({ loading: false, success: true, result: data });
      })
      .catch((err) => {
        setState({ loading: false, error: true, result: err });
        console.log(err);
      });
  };

  if (state.loading) return <strong>Cloning...</strong>;
  if (!state.loading && !state.error && state.result) {
    return <strong>Cloned!</strong>;
  }
  if (state.error) return <strong>Something went wrong!</strong>;
  return (
    <button onClick={clone} disabled={state.loading}>
      {label}
    </button>
  );
};

export default (props) => {
  const token = localStorage.getItem("gh-token");
  return token ? <CloneButton {...props} token={token} /> : <SignInButton />;
};
