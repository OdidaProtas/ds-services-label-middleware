module.exports = async function dsAppLabels(request, response, next) {
  require("dotenv").config();

  const serviceLabel = process.env.DS_SERVICE_LABEL;

  request["appLabel"] = serviceLabel;
};
