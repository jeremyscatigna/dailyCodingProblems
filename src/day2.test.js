import { productOfAllNumbers } from "./day2";

describe("day2: productOfAllNumbers", () => {
  const inputList = [1, 2, 3, 4, 5];
  const result = [120, 60, 40, 30, 24];

  it(`returns result: '${inputList}'`, () => {
    expect(productOfAllNumbers(inputList)).toEqual(result);
  });

  it(`returns an empty array if input is empty: '${[]}'`, () => {
    expect(productOfAllNumbers([])).toEqual([]);
  });
});
