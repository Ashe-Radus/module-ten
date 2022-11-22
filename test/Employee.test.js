//this is the parent test must contain name id and email. 


const Employee = require('../directories/lib/employee');

describe('employee', () => {
    describe('initialization', () => {
        //positive test for name 
        it("should create an object with a 'text' property set to the 'name' argument provided when called with the 'new' keyword", () => {
            //arrange
            const name = 'Jane';
            //act
            const obj = new Employee(text);
            //assert
            expect(obj.text).toEqual(text);
        });
        //exception test for name 
        it("should throw an error if not provided a 'name' text", () => {
            //arrange
            const cb = () => new Employee('');
            //act
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );
            //assert
            expect(cb).toThrowError(err);
        });
        //positive test for ID 
        it("should create an object with a 'value' property set to the 'id' arguement provided when called with the 'new' value", () => {
            //arrange
            const value = 321;
            //act
            const obj = new Employee(value);
            //assert
            expect(obj.value).toEqual(value);
        });
        //exception test for ID 
        it("should throw an error if not provided a 'value' value", () => {
            //arrange
            const cb = () => new Employee('');
            //act
            const err = new Error(
                "expected parameter 'value' to be a non empty string"
            );
            //assert
            expect(cb).toThrowError(err);
        });
        //positive test for email
        it("should create an object with a 'text' property set to the 'email' argument provided when called with the 'new' keyword", () => {
            //arrange
            const email = 'jane@test.com';
            //act
            const obj = new Employee(text);
            //assert
            expect(obj.text).toEqual(text);
        });
        //exception test for email
        it("should throw an error if not provided a 'name' text", () => {
            //arrange
            const cb = () => new Employee('');
            //act
            const err = new Error(
                "Expected parameter 'name' to be a non empty string"
            );
            //assert
            expect(cb).toThrowError(err);

    });
});
});