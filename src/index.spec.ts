import shuffle from "./";

describe("Easy Shuffle", () => {
  it("should shuffle array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(shuffle(array)).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should have the same length", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(array).length).toBe(array.length);
  });

  it("should have the same elements", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(shuffle(array)).toContain(1);
    expect(shuffle(array)).toContain(2);
    expect(shuffle(array)).toContain(3);
    expect(shuffle(array)).toContain(4);
    expect(shuffle(array)).toContain(5);
    expect(shuffle(array)).toContain(6);
    expect(shuffle(array)).toContain(7);
    expect(shuffle(array)).toContain(8);
  });
});
