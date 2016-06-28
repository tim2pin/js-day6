// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var myvar = 'my value'

(function() { 
    console.assert(myvar === FILL_ME_IN)
    var myvar = 'local value';
})()


// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === FILL_ME_IN)
}
test()

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === FILL_ME_IN)
    var message = 'Foo bar'
}
saySomething()

// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === FILL_ME_IN)
    message = 'Foo bar'
}
saySomething()

// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a === FILL_ME_IN)
    console.assert(foo() === FILL_ME_IN)

    var a = 1
    function foo() {
        return 2
    }
}
test()

// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
(function() {
    console.assert(bar === FILL_ME_IN)
    console.assert(foo() === FILL_ME_IN)

    function foo() {
        return bar+' - :)'
    }

    var bar = 1
})()

