const urlHost = 'https://quizzs.herokuapp.com';
const apiKey = 'key=YOUR_API_KEY';
const url = {
  getResource: `${urlHost}/api/v1/quizzs/QUIZZ_ID?${apiKey}`,
  getAllResource: `${urlHost}/api/v1/quizzs?${apiKey}`,
  createResource: `${urlHost}/api/v1/quizzs?${apiKey}`,
  filterResource: (filter) => `${urlHost}/api/v1/quizzs${filter}&${apiKey}`,
};

export default url;
