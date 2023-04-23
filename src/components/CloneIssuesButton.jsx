import React, { useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { CircularProgress } from "@material-ui/core";

const CloneButton = ({ module, issue, token, setError }) => {
  const { siteConfig } = useDocusaurusContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const clone = () => {
    setLoading(true);
    const url = issue
      ? `${siteConfig.customFields.API_URL}/github/clone/${module}/${issue}111`
      : `${siteConfig.customFields.API_URL}/github/clone/${module}`;

    fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setLoading(false);
        setSuccess(data.message);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
        console.log(err);
      });
  };

  const btnText = success ? "Cloned!" : issue ? "Clone" : "Clone All Issues";

  return (
    <button
      onClick={clone}
      disabled={loading || success}
      className="button button--outline button--info issues-table__clone-all"
    >
      {loading ? <CircularProgress size="1rem" thickness={10} /> : null}
      {btnText}
    </button>
  );
};

export default function CloneIssuesButton(props) {
  const token = localStorage.getItem("gh-token");
  return token ? (
    <CloneButton {...props} token={token} />
  ) : (
    <SignInWithGHButton />
  );
}
