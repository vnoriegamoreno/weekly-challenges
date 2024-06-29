const evaluateAthleteCourse = require("./solution");

describe("evaluateAthleteCourse function", () => {
  it("when athlete successfully completes the obstacle course.", () => {
    let athleteActions = ["run", "jump", "run", "jump", "run", "jump", "run"];
    let obstacleCourse = "_|_|_|_";
    expect(evaluateAthleteCourse(athleteActions, obstacleCourse)).toStrictEqual(
      {
        pass: true,
        obstacleCourse,
      },
    );

    athleteActions = ["run", "run", "jump", "run", "run"];
    obstacleCourse = "__|__";
    expect(evaluateAthleteCourse(athleteActions, obstacleCourse)).toStrictEqual(
      {
        pass: true,
        obstacleCourse,
      },
    );
  });
  it("when athlete not complete the obstacle course.", () => {
    let athleteActions = ["run", "run"];
    let obstacleCourse = "_|";
    let obstacleCourseWrong = "_x";
    expect(evaluateAthleteCourse(athleteActions, obstacleCourse)).toStrictEqual(
      {
        pass: false,
        obstacleCourse: obstacleCourseWrong,
      },
    );

    athleteActions = ["run", "run", "jump"];
    obstacleCourse = "_|_";
    obstacleCourseWrong = "_x/";
    expect(evaluateAthleteCourse(athleteActions, obstacleCourse)).toStrictEqual(
      {
        pass: false,
        obstacleCourse: obstacleCourseWrong,
      },
    );
  });
  describe("given unexpected parameters", () => {
    describe("when do not received any parameter", () => {
      it("should return empty obstacleCourse object", () => {
        expect(evaluateAthleteCourse()).toStrictEqual({
          pass: false,
          obstacleCourse: {},
        });
      });
    });
    describe("when actions and obstacles have different length size", () => {
      it("should return empty obstacleCourse object", () => {
        expect(evaluateAthleteCourse(["run", "run"], "_")).toStrictEqual({
          pass: false,
          obstacleCourse: {},
        });
      });
    });
    describe("when actions is undefined", () => {
      it("should return empty obstacleCourse object", () => {
        expect(evaluateAthleteCourse(undefined, "_")).toStrictEqual({
          pass: false,
          obstacleCourse: {},
        });
      });
    });
    describe("when obstacle course is undefined", () => {
      it("should return empty obstacleCourse object", () => {
        expect(evaluateAthleteCourse(["run"], undefined)).toStrictEqual({
          pass: false,
          obstacleCourse: {},
        });
      });
    });
    describe("when obstacle course is not a string", () => {
      it("should return empty obstacleCourse object", () => {
        expect(evaluateAthleteCourse(["run"], 1)).toStrictEqual({
          pass: false,
          obstacleCourse: {},
        });
      });
    });
  });
});
