const httpMocks = require('node-mocks-http');

const TodoController = require('../../controlles/todo.controller');
const TodoModel = require('../../models/todo.model');
const newMockData = require('../mocks/todo.mocks.json');

TodoModel.create = jest.fn(); // to spy the calling

let req, res, next
beforeEach(()=>{
    req = httpMocks.createRequest;
    res = httpMocks.createResponse;
    next = null;
})

describe("todoController.createTodo", ()=>{
    beforeEach(()=>{
        req.body = newMockData;
    });

    it("Should have a create todo function", ()=>{
        expect(typeof TodoController.createTodo).toBe("function");
    });

    it("Should Call TodoModel.Create", ()=>{
        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newMockData);
    });

    it("Should return 201 status", ()=>{
        TodoController.createTodo(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled).toBeTruthy();
    });
});