import { addUpToK } from "./day1";

describe("day1: addUpToK", () => {
  const inputListThatAddToK = [10, 15, 3, 7];
  const inputListThatNotAddToK = [10, 15, 3, 9];
  const k = 17;

  it(`returns true if numbers add up to k: '${inputListThatAddToK}'`, () => {
    expect(addUpToK(inputListThatAddToK, k)).toEqual(true);
  });

  it(`returns false if no combination of two numbers that add to k: '${inputListThatNotAddToK}'`, () => {
    expect(addUpToK(inputListThatNotAddToK, k)).toEqual(false);
  });
});
