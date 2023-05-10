const capitalize = require("./capitalize");

test("capitalizes the first letter of a string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});
