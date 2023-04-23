import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Skeleton } from "@material-ui/lab";
import ReactMarkdown from "react-markdown";
import Link from "@docusaurus/Link";
import CloneIssuesButton from "./CloneIssuesButton";

const IssuesTable = ({ module, week }) => {
  const { siteConfig } = useDocusaurusContext();
  const [issues, setIssues] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = new URL(`${siteConfig.customFields.API_URL}/github/issues`);
  API_URL.searchParams.append("repo", module);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          throw new Error(data.error);
        }
        setLoading(false);
        setIssues(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className="alert alert--warning" role="alert">
        {error}
      </div>
    );
  }

  return (
    <table className="issues-table">
      <thead>
        <tr>
          <th>Assignment</th>
          <th>Description</th>
          <th>Clone</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td colSpan="4" style={{ textAlign: "center" }}>
            {issues?.length > 0 && <CloneIssuesButton module={module} />}
          </td>
        </tr>
      </tfoot>
      <tbody>
        {loading ? (
          <SkeletonRows />
        ) : (
          issues
            .filter(({ labels }) =>
              labels.find(({ name }) =>
                name.toLowerCase().includes(week.toLowerCase())
              )
            )
            .map((issue) => (
              <Row module={module} issue={issue} key={issue.id} />
            ))
        )}
        <tr>
          <td colSpan="4" style={{ textAlign: "center" }}>
            If you have any problems cloning issues, please ensure the
            coursework helper is set up correctly. Follow{" "}
            <Link href="/coursework-helper-setup">this link</Link> to check
            setup.
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Row = ({ module, issue }) => {
  const [fullBody, setFullBody] = useState(false);
  const [error, setError] = useState(null);
  return (
    <>
      <tr>
        <td>
          <strong>{issue.title}</strong>
        </td>
        <td>
          <ReactMarkdown>{issue.body}</ReactMarkdown>
          Labels:
          {issue.labels.map((label) => (
            <IssueLabel label={label} />
          ))}
        </td>
        <td>
          <CloneIssuesButton
            issue={issue.number}
            module={module}
            setError={setError}
          />
        </td>
      </tr>
      {error && (
        <tr>
          <td colSpan="4">
            <div className="alert alert--warning" role="alert">
              {error}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

const SkeletonRows = () => {
  return [1, 2, 3].map((i) => (
    <tr key={i}>
      {[1, 2, 3].map((j) => (
        <td key={j}>
          <Skeleton animation="wave" variant="text" />
        </td>
      ))}
    </tr>
  ));
};

const IssueLabel = ({ label }) => {
  return (
    <span
      className="issues-table--label"
      style={{
        backgroundColor: `#${label.color}50`,
      }}
    >
      {label.name}
    </span>
  );
};

export default IssuesTable;
