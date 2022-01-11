const axios = require('axios');

exports.getPolandData = async () => {
  try {
    const polandData = await axios.get('https://api.adzuna.com/v1/api/jobs/de/histogram?app_id=4096e35d&app_key=41a281941d706b90b0f3aa4aee05fd42&content-type=application/json');
    return { result: polandData };
  } catch (e) {
    return { error: e.message };
  }
};
exports.getFranceData = async () => {
  try {
    const franceData = await axios.get('https://api.adzuna.com/v1/api/jobs/fr/histogram?app_id=4096e35d&app_key=41a281941d706b90b0f3aa4aee05fd42&content-type=application/json');
    return { result: franceData };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getAustriaData = async () => {
  try {
    const austriaData = await axios.get('https://api.adzuna.com/v1/api/jobs/at/histogram?app_id=4096e35d&app_key=41a281941d706b90b0f3aa4aee05fd42&content-type=application/json');
    return { result: austriaData };
  } catch (e) {
    return { error: e.message };
  }
};
