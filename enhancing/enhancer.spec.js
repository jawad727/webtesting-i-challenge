const { succeed, fail, repair, get, } = require('./enhancer.js');
// test away!


const item = {
    name: "sword",
    durability: 75,
    enhancement: 15
}

test('Should return durability to 100', () => {
     expect(repair(item)).toEqual({
        name: "sword",
        durability: 100,
        enhancement: 15
    })
})


test("Should return a enhancement + 1", () => {
    expect(succeed(item)).toEqual({
        name: "sword",
        durability: 75,
        enhancement: 16
    })
})

test("Should return a enhancement + 1", () => {
    expect(fail(item)).toEqual({
        name: "sword",
        durability: 65,
        enhancement: 15
    })
})