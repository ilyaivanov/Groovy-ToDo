/// <reference path="../typings/tsd.d.ts" />
describe("Shell", function(){
    var shell;

    beforeEach(module("app"));

    beforeEach(inject(function ($controller) {
        shell = $controller("ShellController");
    }));

    it("should have a text", function(){
        expect(shell.text).toBe("hello");
    });
});