import { range } from "../range";

test("range", () => {
  const r1 = range(0);
  expect(r1).toEqual([]);
  expect(() => range(-1)).toThrow();
  expect(() => range(0.5)).toThrow();
  const r2 = range(5);
  expect(r2).toEqual([0, 1, 2, 3, 4]);
});
