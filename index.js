module.exports = async function dsAppLabels(request, response, next) {
  require("dotenv").config();
  const { default: generateRequestID } = require("./utils/generateRequestID");

  const serviceLabel = process.env.DS_SERVICE_LABEL;
  const requestID = generateRequestID();
  request["appLabel"] = serviceLabel;
  request["requestID"] = requestID;
  next();
};
