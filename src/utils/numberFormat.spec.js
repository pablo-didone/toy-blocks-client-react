import {
  getCurrencyFormattedNumber,
  isInt,
  scrubFormatting,
  getFormattedNumber,
  zeroFill,
} from "./numberFormat";

describe("Number Formatter", () => {
  describe("getCurrencyFormattedNumber", () => {
    it("returns $5.50 when passed 5.5", () => {
      expect(getCurrencyFormattedNumber(5.5)).toEqual("$5.50");
    });
  });

  describe("isInt", () => {
    it("returns true when passed 0", () => {
      expect(isInt(0)).toEqual(true);
    });

    it("returns false when passed an empty string", () => {
      expect(isInt("")).toEqual(false);
    });

    it("returns true when passed int as a string", () => {
      expect(isInt("5")).toEqual(true);
    });
  });

  describe("scrubFormatting", () => {
    it("strips commas and decimals", () => {
      expect(scrubFormatting("1,234.56")).toEqual("123456");
    });
  });

  describe("getFormattedNumber", () => {
    it("returns 0 if passed 0", () => {
      expect(getFormattedNumber(0)).toEqual(0);
    });

    it("returns empty string if passed empty string", () => {
      expect(getFormattedNumber("")).toEqual("");
    });
  });

  describe("zeroFill", () => {
    it("returns 001 if passed 1", () => {
      expect(zeroFill(1, 3)).toEqual("001");
    });

    it("returns 123 if passed 123", () => {
      expect(zeroFill(123, 3)).toEqual("123");
    });
  });
});
