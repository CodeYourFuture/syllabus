// Work around https://github.com/CodeYourFuture/syllabus/issues/121 by stripping trailing slashes from paths.
//
// See https://github.com/CodeYourFuture/syllabus/issues/121 and https://github.com/CodeYourFuture/syllabus/pull/254 and https://github.com/facebook/docusaurus/issues/2394 and https://github.com/facebook/docusaurus/issues/3372 for more context.

// This workaround was borrowed from https://github.com/facebook/docusaurus/issues/2394#issuecomment-630638096
if (window && window.location && window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
  window.history.replaceState('', '', window.location.pathname.substr(0, window.location.pathname.length - 1))
}
