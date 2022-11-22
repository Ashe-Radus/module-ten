const manager = require('../directories/lib/manager');
const employee = require('../directories/lib/employee');
// test for manager office number and role

describe('manager', () => {
    //positive test for office number
    it("should create an object with a 'value' property set to the 'number' argument provided when called with the 'new' value", () => {
        //arrange
        const number = '567';
        //act
        const obj = new manager(value);
        //assert
        expect(obj.value).toEqual(value);
    });
    //exception test for office number
    it("should throw an error if not provided a 'value' value", () =>{
        //arrange
        const cb = () => new manager('');
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
        const role = 'manager';
        //act
        const obj = new manager;
        //assert
        expect(obj.text).toEqual(text);
    });
    //exception test for role
    it("should throw an error if not provided a 'role' text", () => {
        //arrange
        const cb = () => new manager('');
        //act 
        const err = new Error(
            "expected parameter 'text' to be a non empty string"
        );
        //assert
        expect(cb).toThrowError(err); 
    })
})