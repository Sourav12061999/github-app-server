const { default: axios } = require("axios");

const addToTeam = async (username, team) => {
  try {
    await axios.put(
      `https://api.github.com/orgs/masai-course/teams/Cohort-10/memberships/${username}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer   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",
        },
      }
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = addToTeam;
