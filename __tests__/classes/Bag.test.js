const Bag = require("../../classes/Bag");
let weight = 10;
let id = "123";
const bag = new Bag(weight, id);

describe("Bag class", () => {
  test("should create an instance of the Bag class", () => {
    expect(bag).toBeInstanceOf(Bag);
  });

  test("should have correct weight and id", () => {
    expect(bag.weight).toBe(weight);
    expect(bag.id).toBe(id);
  });

  test("should return initial owner as null", () => {
    expect(bag.getOwner()).toBe(null);
  });

  test("should update owner with a Person assigned to a Bag", () => {
    const person = { name: "John", age: 30 };
    bag.assignOwner(person);
    expect(bag.getOwner()).toBe(person);
  });
});
