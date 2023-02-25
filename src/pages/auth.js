import React from "react";
import { useLocation, Redirect } from "@docusaurus/router";
import Layout from "@theme/Layout";
import { API_URL } from "../constants";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [count, setCount] = React.useState(3);
  const [loading, setLoading] = React.useState(true);

  const stateString = params.get("state");

  const redirect = (url) => <Redirect to={url} />;

  let redirectURL = "/";

  if (stateString) {
    const state = JSON.parse(stateString);
    redirectURL = state.prevPath;
  }

  // if no code is present, redirect to home page in 3 seconds
  if (!params.get("code")) {
    setTimeout(() => {}, 3000);

    React.useEffect(() => {
      const interval = setInterval(() => {
        if (count <= 0) {
          clearInterval(interval);
          return;
        }
        setCount((count) => count - 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <h4 style={{ textAlign: "center", padding: "20px" }}>
        Something went wrong... Redirecting in {count} seconds
        {count === 0 ? redirect(redirectURL) : null}
      </h4>
    );
  }

  // get token and store it in local storage

  fetch(`${API_URL}/auth?code=${params.get("code")}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("gh-token", data.token);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });

  return loading ? (
    <h4 style={{ textAlign: "center", padding: "20px" }}>Authenticating...</h4>
  ) : (
    redirect(redirectURL)
  );
};

const AuthWithLayout = () => (
  <Layout title="Authentication in progress">
    <Auth />
  </Layout>
);

export default AuthWithLayout;
