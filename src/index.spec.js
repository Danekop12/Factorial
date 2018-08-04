import { factorial } from "./index";

const action = () => {
  expect(factorial(5)).toBe(120);
};

it("test f(5)", action);

describe("factorial testing", () => {
  it("test f(5)", () => {
    expect(factorial(5)).toBe(120);
  });

  it("test f(3)", () => {
    expect(factorial(3)).toBe(6);
  });
  it("test f(4)", () => {
    expect(factorial(4)).not.toBe(624);
  });
  it("test f(4)", () => {
    expect(factorial(4)).toEqual(24);
  });
});
