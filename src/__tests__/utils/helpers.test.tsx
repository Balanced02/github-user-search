import { paginationLength } from "../../utils";

describe("helpers", () => {
  describe("paginationLength", () => {
    it("should calculate pagination length correctly", () => {
      expect(paginationLength(100, 5)).toEqual(20);
    });
  });

});
