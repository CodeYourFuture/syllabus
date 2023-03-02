import React from "react";
import { Redirect } from "@docusaurus/router";

const RedirectWithTimeout = ({ url, children, timeoutSeconds }) => {
  const timeout = timeoutSeconds === undefined ? 3 : timeoutSeconds;
  const [count, setCount] = React.useState(timeout);

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

  return count === 0 ? <Redirect to={url} /> : children || null;
};

export default RedirectWithTimeout;
