fetch("./data.json")
    .then((response) => response.json())
    .then((data) => addMember(data));
  const authToken = `Bearer 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`; //
  const org = "masai-course";
  const team = "cohort-31";
  var failed = [];
  var studentsData = [];
  function addMember(userNames) {
    for (let i = 0; i < userNames.length; i++) {
      var res = fetch(
        `https://api.github.com/orgs/masai-course/teams/${team}/memberships/${userNames[i].username}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );

      res
        .then((response) => response.json())
        .then((data) => {
          if (data.state == "pending") {
            studentsData.push({ id: userNames[i].code, status: data.state });
            console.log(studentsData);
          }
        });
    }
  }