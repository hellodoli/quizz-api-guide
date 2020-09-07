const fetch = {};
// prettier-ignore
fetch.responseText = `.then((response) =&gt; response.json())
  .then((json) =&gt; console.log(json))`;

fetch.outputQuizz = `{
    id: 1,
    questions: '[...]',
    ...
  }`;

fetch.outputQuizzs = `[{ id: 1, questions: '[...]' /* ... */ },
  /* ... */
  { id: 100, questions: '[...]' /* ... */ }]`;

fetch.params = (method) => {
  const body =
    method === 'POST' || method === 'PATCH'
      ? `{
      questions: '[...]',
      ...
    }`
      : `{
      id: 1,
      questions: '[...]',
      ...
    }`;

  return `{
    method: '${method}',
    body: JSON.stringify(${body}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }`;
};

fetch.filter = ``;

export default fetch;
