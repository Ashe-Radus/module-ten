const intern = require('../directories/lib/intern');
const employee = require('../directories/lib/employee');
// test for manager school and role

describe('intern', () => {
    //positive test for school 
    it("should create an object with a 'text' property set to the 'text' argument provided when called with the 'text' value", () => {
        //arrange
        const school = 'U of A';
        //act
        const obj = new intern(text);
        //assert
        expect(obj.text).toEqual(text);
    });
    //exception test for school
    it("should throw an error if not provided a 'text' value", () =>{
        //arrange
        const cb = () => new intern('');
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
        const role = 'intern';
        //act
        const obj = new intern;
        //assert
        expect(obj.text).toEqual(text);
    });
    //exception test for role
    it("should throw an error if not provided a 'role' text", () => {
        //arrange
        const cb = () => new intern('');
        //act 
        const err = new Error(
            "expected parameter 'text' to be a non empty string"
        );
        //assert
        expect(cb).toThrowError(err); 
    })
})