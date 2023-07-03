(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for computing random values. All functions except for <code><a href="https://docs.basex.org/wiki/Random_Module#random:seeded-double">random:seeded-double</a></code> and <code><a href="https://docs.basex.org/wiki/Random_Module#random:seeded-integer">random:seeded-integer</a></code> are non-deterministic, i. e., they return different values for each call.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Random_Module
 :)
module namespace random = "http://basex.org/modules/random";

(:~ 
 : Returns a double value between 0.0 (inclusive) and 1.0 (exclusive).<br/>
 :
 : @param  random:double( value of type 
 : @return value of type xs:double 
 :)
declare function  random:double() as xs:double  external;

(:~ 
 : Returns an integer value, either in the whole integer range or between 0 (inclusive) and the given maximum (exclusive)<br/>
 :
 : @param  random:integer( value of type 
 : @return value of type xs:integer 
 : @error random:bounds the maximum value is out of bounds.
 :)
declare function  random:integer() as xs:integer  external;

(:~ 
 : Returns an integer value, either in the whole integer range or between 0 (inclusive) and the given maximum (exclusive)<br/>
 :
 : @param  random:integer($max value of type xs:integer
 : @return value of type xs:integer 
 : @error random:bounds the maximum value is out of bounds.
 :)
declare function  random:integer($max as xs:integer) as xs:integer  external;

(:~ 
 : Returns a sequence with <code>$num</code> double values between 0.0 (inclusive) and 1.0 (exclusive). The random values are created using the initial seed given in <code>$seed</code>.<br/>
 :
 : @param  random:seeded-double($seed value of type xs:integer
 : @param $num value of type xs:integer
 : @return value of type xs:double* 
 :)
declare function  random:seeded-double($seed as xs:integer, $num as xs:integer) as xs:double*  external;

(:~ 
 : Returns a sequence with <code>$num</code> integer values, either in the whole integer range or between 0 (inclusive) and the given maximum (exclusive). The random values are created using the initial seed given in <code>$seed</code>.<br/>
 :
 : @param  random:seeded-integer($seed value of type xs:integer
 : @param $num value of type xs:integer
 : @return value of type xs:integer* 
 : @error random:bounds the maximum value is out of bounds.
 : @error random:negative the number of values to be returned is negative.
 :)
declare function  random:seeded-integer($seed as xs:integer, $num as xs:integer) as xs:integer*  external;

(:~ 
 : Returns a sequence with <code>$num</code> integer values, either in the whole integer range or between 0 (inclusive) and the given maximum (exclusive). The random values are created using the initial seed given in <code>$seed</code>.<br/>
 :
 : @param  random:seeded-integer($seed value of type xs:integer
 : @param $num value of type xs:integer
 : @param $max value of type xs:integer
 : @return value of type xs:integer* 
 : @error random:bounds the maximum value is out of bounds.
 : @error random:negative the number of values to be returned is negative.
 :)
declare function  random:seeded-integer($seed as xs:integer, $num as xs:integer, $max as xs:integer) as xs:integer*  external;

(:~ 
 : Returns a sequence with <code>$num</code> double values. The random values are Gaussian (i.e. normally) distributed with the mean 0.0. and the derivation 1.0.<br/>
 :
 : @param  random:gaussian($num value of type xs:integer
 : @return value of type xs:double* 
 :)
declare function  random:gaussian($num as xs:integer) as xs:double*  external;

(:~ 
 : Returns a random permutation of the specified <code>$items</code>. The random order is created using the initial seed given in <code>$seed</code>.<br/>
 :
 : @param  random:seeded-permutation($seed value of type xs:integer
 : @param $items value of type item()*
 : @return value of type item()* 
 :)
declare function  random:seeded-permutation($seed as xs:integer, $items as item()*) as item()*  external;

(:~ 
 : Creates a random universally unique identifier (UUID), represented as 128-bit value.
 :
 : @param  random:uuid( value of type 
 : @return value of type xs:string 
 :)
declare function  random:uuid() as xs:string  external;
