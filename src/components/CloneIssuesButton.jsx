import React from "react";
import { useLocation } from "@docusaurus/router";

const API_URL = "http://localhost:3001";
const BASE_URL = "https://codeyourfuture.io";
const CLIENT_ID = "Iv1.b36544e8ddc4efc6";

const CloneIssuesButton = ({ repo, issue = null }) => {
  if (!repo) {
    return null;
  }
  const token = localStorage.getItem("gh-token");
  const label = issue ? "Clone" : "Clone All Issues";
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);
  // success is as follows:
  // {
  //   issues: 10, // number of issues cloned
  //   failed: 5, // number of issues that failed to clone
  // }
  //
  const [success, setSuccess] = React.useState({});

  const login = () => {
    const state = JSON.stringify({
      prevURL: `${BASE_URL}${location.pathname}`,
    });
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&state=${state}`;
  };

  const clone = () => {
    setLoading(true);
    const url = issue
      ? `${API_URL}/clone?repo=${repo}&issue=${issue}`
      : `${API_URL}/clone?repo=${repo}`;
    toast.promise(
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setSuccess(data.message);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };

  return loading ? (
    <strong>Cloning...</strong>
  ) : (
    <button onClick={token ? clone : login} disabled={loading}>
      {token ? label : "Sign in With Github"}
    </button>
  );
};

export default CloneIssuesButton;
