/// <reference path="../typings/tsd.d.ts" />

class Shell {
    text:string = "hello"
}

angular
    .module("app")
    .controller("ShellController", Shell);