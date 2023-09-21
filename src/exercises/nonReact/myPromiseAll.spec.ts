import { myPromiseAll } from "./myPromiseAll";

describe("myPromiseAll", () => {
  it("resolves with an array of resolved values", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.resolve(2),
      Promise.resolve(3),
    ];
    const result = await myPromiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });

  it("rejects if any of the promises reject", async () => {
    const promises = [
      Promise.resolve(1),
      Promise.reject(new Error("error")),
      Promise.resolve(3),
    ]; // <-- Updated here
    await expect(myPromiseAll(promises)).rejects.toThrow("error"); // <-- Updated this block to handle rejection assertion
  });

  it("resolves an empty array when given no promises", async () => {
    const result = await myPromiseAll([]);
    expect(result).toEqual([]);
  });

  it("maintains the order of resolved values", async () => {
    const delay = (ms: number, value: any) =>
      new Promise((resolve) => setTimeout(() => resolve(value), ms));

    const promises = [delay(30, 1), delay(10, 2), delay(20, 3)];
    const result = await myPromiseAll(promises);
    expect(result).toEqual([1, 2, 3]);
  });
});
