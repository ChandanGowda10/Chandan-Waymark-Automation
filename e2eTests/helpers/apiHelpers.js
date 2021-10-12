import testData from "../constants/testData.json";

const Testrail = require("testrail-api");
const testrail = new Testrail({
  host: testData.testrail.url,
  user: testData.testrail.username,
  password: testData.testrail.password
});

export const addTestRailResult = async (runID, caseID, content) => {
  try {
    const result = await testrail.addResultForCase(runID, caseID, content);
    return result;
  } catch (err) {
    console.log("error", err);
  }
};
