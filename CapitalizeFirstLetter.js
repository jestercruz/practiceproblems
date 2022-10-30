/* Given a string, capitalize the fist letter of each word */

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(" ");
};

describe("Tests", () => {
  it("test", () => {
    var str = "How can mirrors be real if our eyes aren't real";
    Test.assertEquals(
      str.toJadenCase(),
      "How Can Mirrors Be Real If Our Eyes Aren't Real"
    );
  });
});
