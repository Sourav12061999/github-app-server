const { default: axios } = require("axios");

const addToTeam = async (username, team) => {
  try {
    await axios.put(
      `https://api.github.com/orgs/masai-course/teams/Cohort-${team}/memberships/${username}`,
      {
        method: "PUT",
        headers: {
          Authorization: "Bearer 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",
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
