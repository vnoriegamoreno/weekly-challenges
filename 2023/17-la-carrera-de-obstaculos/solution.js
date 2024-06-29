const evaluateAthleteCourse = (athlActs, obstacleCourse) => {
  if (
    !athlActs ||
    typeof obstacleCourse !== "string" ||
    athlActs.length !== obstacleCourse.length
  ) {
    return { pass: false, obstacleCourse: {} };
  }

  const athlActsMap = {
    correctCases: { jump: "|", run: "_" },
    wrongCases: { jump: "/", run: "x" },
  };

  let transformedCourse = "";
  let pass = true;

  for (let i = 0; i < athlActs.length; i++) {
    const athlAction = athlActs[i];
    const actionSymbol = athlActsMap.correctCases[athlAction];
    const obstacleCourseSymbol = obstacleCourse[i];

    if (actionSymbol === obstacleCourseSymbol && (pass || i === 0)) {
      transformedCourse += obstacleCourseSymbol;
    } else {
      pass = false;
      transformedCourse += athlActsMap.wrongCases[athlAction];
    }
  }

  return {
    pass,
    obstacleCourse: transformedCourse,
  };
};

module.exports = evaluateAthleteCourse;
