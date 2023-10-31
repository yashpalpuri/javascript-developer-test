const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  const results = [];
  const promises = [];
  urls.forEach(url => {
    promises.push(httpGet(url));
  });
  const responses = await Promise.all(promises);
  responses.forEach(response => {
    if (response.status === 200) {
      results.push({ 'Arnie Quote': JSON.parse(response.body).message });
    } else {
      results.push({ 'FAILURE': JSON.parse(response.body).message });
    }
  });
  return results;
};

module.exports = {
  getArnieQuotes,
};
