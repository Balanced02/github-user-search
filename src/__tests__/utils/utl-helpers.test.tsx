import { objectToQueryString } from "../../utils";

describe("url-helpers", () => {
  describe("objectToQueryString", () => {
    it("should convert object to query string correctly", () => {
      expect(
        objectToQueryString({ q: "query", pageSize: 20, limit: 5 })
      ).toEqual("q=query&pageSize=20&limit=5");
    });
  });
});
