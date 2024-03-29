
(: try-catch with multiple catch clauses showing catch clause precedence :)
try {
    3 + 2 lt "30"
} catch err:XQDY0004 {
    "Some random error that does not occur"
} catch * {
    concat("Caught ", $err:code)
} catch err:XPTY0004 {
    "This is the error throw. But it should be caught in the catch clause above"
}
