import React from "react";
import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import RedirectWithTimeout from "../components/RedirectWithTimeout";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const stateString = params.get("state");
  let redirectURL = "/";

  if (stateString) {
    const state = JSON.parse(stateString);
    redirectURL = state.prevPath;
  }

  // if no code is present, redirect to home page in 3 seconds
  if (!params.get("code")) {
    return (
      <RedirectWithTimeout url={redirectURL} timeoutSeconds={3}>
        <h4 style={{ textAlign: "center", padding: "20px" }}>
          Authentication failed. Redirecting...
        </h4>
      </RedirectWithTimeout>
    );
  }

  return <Authenticate code={params.get("code")} redirectURL={redirectURL} />;
};

const Authenticate = ({ code, redirectURL }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const { siteConfig } = useDocusaurusContext();

  React.useEffect(() => {
    fetch(`${siteConfig.customFields.API_URL}/auth?code=${code}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("gh-token", data.token);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        localStorage.removeItem("gh-token");
        console.log(err);
      });
  }, [code]);

  if (error) {
    return (
      <h4 style={{ textAlign: "center", padding: "20px" }}>
        Something went wrong. See console for details.
      </h4>
    );
  }

  if (loading) {
    return (
      <h4 style={{ textAlign: "center", padding: "20px" }}>
        Authenticating...
      </h4>
    );
  }

  return (
    <RedirectWithTimeout url={redirectURL} timeoutSeconds={2}>
      <h4 style={{ textAlign: "center", padding: "20px" }}>
        Authentication successful. Redirecting...
      </h4>
    </RedirectWithTimeout>
  );
};

const AuthWithLayout = () => (
  <Layout title="Authentication in progress">
    <Auth />
  </Layout>
);

export default AuthWithLayout;
