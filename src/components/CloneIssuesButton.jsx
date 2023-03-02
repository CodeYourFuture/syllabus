import React from "react";
import { useLocation } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const SignInButton = () => {
  const { siteConfig } = useDocusaurusContext();
  const location = useLocation();

  const qs = new URLSearchParams({
    client_id: siteConfig.customFields.CLIENT_ID,
    state: JSON.stringify({
      prevPath: location.pathname,
    }),
  });

  const url = `https://github.com/login/oauth/authorize?${qs}`;

  return (
    <a href={url} className="button button--primary">
      Sign In
    </a>
  );
};

const CloneButton = ({ repo, issue, token }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const clone = () => {
    setLoading(true);
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
        setLoading(false);
        setSuccess(data.message);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log(err);
      });
  };

  if (error) {
    return <strong>Something went wrong! See console for details.</strong>;
  }
  if (loading) return <strong>Cloning...</strong>;
  if (success) {
    return <strong>Cloned!</strong>;
  }
  return (
    <button onClick={clone} disabled={state.loading}>
      {issue ? "Clone" : "Clone All Issues"}
    </button>
  );
};

export default function CloneIssuesButton(props) {
  const token = localStorage.getItem("gh-token");
  return token ? <CloneButton {...props} token={token} /> : <SignInButton />;
}
