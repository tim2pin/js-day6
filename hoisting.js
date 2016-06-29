// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value'

(function() { 
    console.assert(myvar === undefined)
    var myvar = 'local value';
})()

//IIFE 

// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {

    console.assert(message === undefined );
    var message = 'Foo bar';
}
saySomething()

// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === 'Hello world')
    message = 'Foo bar'
    console.assert(message === 'Foo bar')
}
saySomething()

// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a === undefined );
    console.assert(foo() === 2 ); //function hoisting

    var a = 1;
    function foo() {
        return 2;
    }
}
test()

// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
(function() {
    console.assert(bar === undefined)
    console.assert(foo() === 'undefined - :)') //hoisting foo

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()

