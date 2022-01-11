const axios = require('axios');

exports.getGermanyData = async () => {
  try {
    const germanyData = await axios.get('https://api.adzuna.com/v1/api/jobs/de/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: germanyData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getFranceData = async () => {
  try {
    const franceData = await axios.get('https://api.adzuna.com/v1/api/jobs/fr/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: franceData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getItalyData = async () => {
  try {
    const italyData = await axios.get('https://api.adzuna.com/v1/api/jobs/it/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: italyData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getAustriaData = async () => {
  try {
    const austriaData = await axios.get('https://api.adzuna.com/v1/api/jobs/at/histogram?app_id=4096e35d&app_key=06a286d8ef272b6786e474f17649fe41&content-type=application/json');
    return { result: austriaData };
  } catch (e) {
    return { error: e.message };
  }
};
