const engineer = require('../directories/lib/engineer');
const employee = require('../directories/lib/employee');
// test for manager github username and role

describe('engineer', () => {
    //positive test for github username 
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'text' value", () => {
        //arrange
        const username = 'jane_doe';
        //act
        const obj = new engineer(text);
        //assert
        expect(obj.text).toEqual(text);
    });
    //exception test for github username 
    it("should throw an error if not provided a 'value' value", () =>{
        //arrange
        const cb = () => new engineer('');
        //act
        const err = new Error(
            " expected parameter 'value' to be a non empty string"
        );
        //assert
        expect(cb).toThrowError(err);
    });
    //positive test for role
    it("should create an object with a 'text' property set to the 'role' arguement provided when called with the 'new' text", () => {
        //arrange
        const role = 'engineer';
        //act
        const obj = new engineer;
        //assert
        expect(obj.text).toEqual(text);
    });
    //exception test for role
    it("should throw an error if not provided a 'role' text", () => {
        //arrange
        const cb = () => new engineer('');
        //act 
        const err = new Error(
            "expected parameter 'text' to be a non empty string"
        );
        //assert
        expect(cb).toThrowError(err); 
    })
})