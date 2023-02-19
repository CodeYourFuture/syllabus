import React from "react";
import { useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";

const API_URL = "http://localhost:3001";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [count, setCount] = React.useState(3);

  let redirectURL = "/";

  const stateString = params.get("state");

  if (stateString) {
    const state = JSON.parse(stateString);
    redirectURL = state.prevURL;
  }

  // if no code is present, redirect to home page in 3 seconds
  if (!params.get("code")) {
    setTimeout(() => {
      window.location.href = redirectURL;
    }, 3000);

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

      // redirect to previous page
      window.location.href = redirectURL;
    })
    .catch((err) => {
      console.log(err);
    });

  return null;
};

const AuthWithLayout = () => (
  <Layout title="Authentication in progress">
    <Auth />
  </Layout>
);

export default AuthWithLayout;
