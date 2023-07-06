(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to process binary data, including extracting subparts, searching, basic binary operations and conversion between binary and structured forms.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Binary_Module
 :)
module namespace bin = "http://expath.org/ns/binary";

(:~ 
 : Returns the binary form of the set of octets written as a sequence of (ASCII) hex digits ([0-9A-Fa-f]).<br/> <code>$in</code> will be effectively zero-padded from the left to generate an integral number of octets, i.e. an even number of hexadecimal digits. If <code>$in</code> is an empty string, then the result will be an <code>xs:base64Binary</code> with no embedded data. Byte order in the result follows (per-octet) character order in the string. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:string?
 : @return value of type xs:base64Binary?
 : @error bin:non-numeric-character the input cannot be parsed as a hexadecimal number.
 :)
declare function bin:hex($in as xs:string?) as xs:base64Binary? external;

(:~ 
 : Returns the binary form of the set of octets written as a sequence of (8-wise) (ASCII) binary digits ([01]).<br/> <code>$in</code> will be effectively zero-padded from the left to generate an integral number of octets. If <code>$in</code> is an empty string, then the result will be an <code>xs:base64Binary</code> with no embedded data. Byte order in the result follows (per-octet) character order in the string. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:string?
 : @return value of type xs:base64Binary?
 : @error bin:non-numeric-character the input cannot be parsed as a binary number.
 :)
declare function bin:bin($in as xs:string?) as xs:base64Binary? external;

(:~ 
 : Returns the binary form of the set of octets written as a sequence of (ASCII) octal digits ([0-7]).<br/> <code>$in</code> will be effectively zero-padded from the left to generate an integral number of octets. If <code>$in</code> is an empty string, then the result will be an <code>xs:base64Binary</code> with no embedded data. Byte order in the result follows (per-octet) character order in the string. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:string?
 : @return value of type xs:base64Binary?
 : @error bin:non-numeric-character the input cannot be parsed as an octal number.
 :)
declare function bin:octal($in as xs:string?) as xs:base64Binary? external;

(:~ 
 : Returns binary data as a sequence of octets.<br/>If <code>$in</code> is a zero length binary data then the empty sequence is returned. Octets are returned as integers from 0 to 255.
 :
 : @param $in value of type xs:base64Binary
 : @return value of type xs:integer*
 :)
declare function bin:to-octets($in as xs:base64Binary) as xs:integer* external;

(:~ 
 : Converts a sequence of octets into binary data.<br/>Octets are integers from 0 to 255. If the value of <code>$in</code> is the empty sequence, the function returns zero-sized binary data.
 :
 : @param $in value of type xs:integer*
 : @return value of type xs:base64Binary
 : @error bin:octet-out-of-range one of the octets lies outside the range 0 - 255.
 :)
declare function bin:from-octets($in as xs:integer*) as xs:base64Binary external;

(:~ 
 : Returns the size of binary data in octets.
 :
 : @param $in value of type xs:base64Binary
 : @return value of type xs:integer
 :)
declare function bin:length($in as xs:base64Binary) as xs:integer external;

(:~ 
 : Returns a section of binary data starting at the <code>$offset</code> octet.<br/>If <code>$size</code> is specified, the size of the returned binary data is <code>$size</code> octets. If <code>$size</code> is absent, all remaining data from <code>$offset</code> is returned. The <code>$offset</code> is zero based. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $offset value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 :)
declare function bin:part($in as xs:base64Binary?, $offset as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns a section of binary data starting at the <code>$offset</code> octet.<br/>If <code>$size</code> is specified, the size of the returned binary data is <code>$size</code> octets. If <code>$size</code> is absent, all remaining data from <code>$offset</code> is returned. The <code>$offset</code> is zero based. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 :)
declare function bin:part($in as xs:base64Binary?, $offset as xs:integer, $size as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns an <code>xs:base64Binary</code> created by concatenating the items in the sequence <code>$in</code>, in order. If the value of <code>$in</code> is the empty sequence, the function returns a binary item containing no data bytes.
 :
 : @param $in value of type xs:base64Binary*
 : @return value of type xs:base64Binary
 :)
declare function bin:join($in as xs:base64Binary*) as xs:base64Binary external;

(:~ 
 : Returns binary data consisting sequentially of the data from <code>$in</code> up to and including the <code>$offset - 1</code> octet, followed by all the data from <code>$extra</code>, and then the remaining data from <code>$in</code>.<br/>The <code>$offset</code> is zero based. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $offset value of type xs:integer
 : @param $extra value of type xs:base64Binary?
 : @return value of type xs:base64Binary?
 : @error bin:index-out-of-range the specified offset is out of range.
 :)
declare function bin:insert-before($in as xs:base64Binary?, $offset as xs:integer, $extra as xs:base64Binary?) as xs:base64Binary? external;

(:~ 
 : Returns an <code>xs:base64Binary</code> created by padding the input with <code>$size</code> octets in front of the input. If <code>$octet</code> is specified, the padding octets each have that value, otherwise they are zero.<br/>If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $size value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:octet-out-of-range the specified octet lies outside the range 0-255.
 :)
declare function bin:pad-left($in as xs:base64Binary?, $size as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns an <code>xs:base64Binary</code> created by padding the input with <code>$size</code> octets in front of the input. If <code>$octet</code> is specified, the padding octets each have that value, otherwise they are zero.<br/>If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $size value of type xs:integer
 : @param $octet value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:octet-out-of-range the specified octet lies outside the range 0-255.
 :)
declare function bin:pad-left($in as xs:base64Binary?, $size as xs:integer, $octet as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns an <code>xs:base64Binary</code> created by padding the input with <code>$size</code> octets after the input. If <code>$octet</code> is specified, the padding octets each have that value, otherwise they are zero.<br/>If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $size value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:octet-out-of-range the specified octet lies outside the range 0-255.
 :)
declare function bin:pad-right($in as xs:base64Binary?, $size as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns an <code>xs:base64Binary</code> created by padding the input with <code>$size</code> octets after the input. If <code>$octet</code> is specified, the padding octets each have that value, otherwise they are zero.<br/>If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $size value of type xs:integer
 : @param $octet value of type xs:integer
 : @return value of type xs:base64Binary?
 : @error bin:negative-size the specified size is negative.
 : @error bin:octet-out-of-range the specified octet lies outside the range 0-255.
 :)
declare function bin:pad-right($in as xs:base64Binary?, $size as xs:integer, $octet as xs:integer) as xs:base64Binary? external;

(:~ 
 : Returns the first location of the binary search sequence in the input, or if not found, the empty sequence.<br/>The <code>$offset</code> and the returned location are zero based. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $offset value of type xs:integer
 : @param $search value of type xs:base64Binary
 : @return value of type xs:integer?
 : @error bin:index-out-of-range the specified offset + size is out of range.
 :)
declare function bin:find($in as xs:base64Binary?, $offset as xs:integer, $search as xs:base64Binary) as xs:integer? external;

(:~ 
 : Decodes binary data as a string in a given <code>$encoding</code>.<br/>If <code>$offset</code> and <code>$size</code> are provided, the <code>$size</code> octets from <code>$offset</code> are decoded. If <code>$offset</code> alone is provided, octets from <code>$offset</code> to the end are decoded.If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $encoding value of type xs:string
 : @return value of type xs:string?
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-encoding the specified encoding is unknown.
 : @error bin:conversion-error an error or malformed input occurred during decoding the string.
 :)
declare function bin:decode-string($in as xs:base64Binary?, $encoding as xs:string) as xs:string? external;

(:~ 
 : Decodes binary data as a string in a given <code>$encoding</code>.<br/>If <code>$offset</code> and <code>$size</code> are provided, the <code>$size</code> octets from <code>$offset</code> are decoded. If <code>$offset</code> alone is provided, octets from <code>$offset</code> to the end are decoded.If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $encoding value of type xs:string
 : @param $offset value of type xs:integer
 : @return value of type xs:string?
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-encoding the specified encoding is unknown.
 : @error bin:conversion-error an error or malformed input occurred during decoding the string.
 :)
declare function bin:decode-string($in as xs:base64Binary?, $encoding as xs:string, $offset as xs:integer) as xs:string? external;

(:~ 
 : Decodes binary data as a string in a given <code>$encoding</code>.<br/>If <code>$offset</code> and <code>$size</code> are provided, the <code>$size</code> octets from <code>$offset</code> are decoded. If <code>$offset</code> alone is provided, octets from <code>$offset</code> to the end are decoded.If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $encoding value of type xs:string
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @return value of type xs:string?
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-encoding the specified encoding is unknown.
 : @error bin:conversion-error an error or malformed input occurred during decoding the string.
 :)
declare function bin:decode-string($in as xs:base64Binary?, $encoding as xs:string, $offset as xs:integer, $size as xs:integer) as xs:string? external;

(:~ 
 : Encodes a string into binary data using a given <code>$encoding</code>.<br/>If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:string?
 : @param $encoding value of type xs:string
 : @return value of type xs:base64Binary?
 : @error bin:unknown-encoding the specified encoding is unknown.
 : @error bin:conversion-error an error or malformed input occurred during encoding the string.
 :)
declare function bin:encode-string($in as xs:string?, $encoding as xs:string) as xs:base64Binary? external;

(:~ 
 : Returns the 8-octet binary representation of a double value.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified.
 :
 : @param $in value of type xs:double
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:pack-double($in as xs:double) as xs:base64Binary external;

(:~ 
 : Returns the 8-octet binary representation of a double value.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified.
 :
 : @param $in value of type xs:double
 : @param $octet-order value of type xs:string
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:pack-double($in as xs:double, $octet-order as xs:string) as xs:base64Binary external;

(:~ 
 : Returns the 4-octet binary representation of a float value.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified.
 :
 : @param $in value of type xs:float
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:pack-float($in as xs:float) as xs:base64Binary external;

(:~ 
 : Returns the 4-octet binary representation of a float value.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified.
 :
 : @param $in value of type xs:float
 : @param $octet-order value of type xs:string
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:pack-float($in as xs:float, $octet-order as xs:string) as xs:base64Binary external;

(:~ 
 : Returns the twos-complement binary representation of an integer value treated as <code>$size</code> octets long. Any 'excess' high-order bits are discarded.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. Specifying a <code>$size</code> of zero yields an empty binary data.
 :
 : @param $in value of type xs:integer
 : @param $size value of type xs:integer
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 : @error bin:negative-size the specified size is negative.
 :)
declare function bin:pack-integer($in as xs:integer, $size as xs:integer) as xs:base64Binary external;

(:~ 
 : Returns the twos-complement binary representation of an integer value treated as <code>$size</code> octets long. Any 'excess' high-order bits are discarded.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. Specifying a <code>$size</code> of zero yields an empty binary data.
 :
 : @param $in value of type xs:integer
 : @param $size value of type xs:integer
 : @param $octet-order value of type xs:string
 : @return value of type xs:base64Binary
 : @error bin:unknown-significance-order the specified octet order is unknown.
 : @error bin:negative-size the specified size is negative.
 :)
declare function bin:pack-integer($in as xs:integer, $size as xs:integer, $octet-order as xs:string) as xs:base64Binary external;

(:~ 
 : Extracts the double value stored at the particular offset in binary data.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @return value of type xs:double
 : @error bin:index-out-of-range the specified offset is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-double($in as xs:base64Binary, $offset as xs:integer) as xs:double external;

(:~ 
 : Extracts the double value stored at the particular offset in binary data.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $octet-order value of type xs:string
 : @return value of type xs:double
 : @error bin:index-out-of-range the specified offset is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-double($in as xs:base64Binary, $offset as xs:integer, $octet-order as xs:string) as xs:double external;

(:~ 
 : Extracts the float value stored at the particular offset in binary data.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @return value of type xs:float
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-float($in as xs:base64Binary, $offset as xs:integer) as xs:float external;

(:~ 
 : Extracts the float value stored at the particular offset in binary data.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $octet-order value of type xs:string
 : @return value of type xs:float
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-float($in as xs:base64Binary, $offset as xs:integer, $octet-order as xs:string) as xs:float external;

(:~ 
 : Returns a signed integer value represented by the <code>$size</code> octets starting from <code>$offset</code> in the input binary representation. Necessary sign extension is performed (i.e. the result is negative if the high order bit is '1').<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based. Specifying a <code>$size</code> of zero yields the integer <code>0</code>.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @return value of type xs:integer
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-integer($in as xs:base64Binary, $offset as xs:integer, $size as xs:integer) as xs:integer external;

(:~ 
 : Returns a signed integer value represented by the <code>$size</code> octets starting from <code>$offset</code> in the input binary representation. Necessary sign extension is performed (i.e. the result is negative if the high order bit is '1').<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based. Specifying a <code>$size</code> of zero yields the integer <code>0</code>.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @param $octet-order value of type xs:string
 : @return value of type xs:integer
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-integer($in as xs:base64Binary, $offset as xs:integer, $size as xs:integer, $octet-order as xs:string) as xs:integer external;

(:~ 
 : Returns an unsigned integer value represented by the <code>$size</code> octets starting from <code>$offset</code> in the input binary representation.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based. Specifying a <code>$size</code> of zero yields the integer <code>0</code>.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @return value of type xs:integer
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-unsigned-integer($in as xs:base64Binary, $offset as xs:integer, $size as xs:integer) as xs:integer external;

(:~ 
 : Returns an unsigned integer value represented by the <code>$size</code> octets starting from <code>$offset</code> in the input binary representation.<br/>Most-significant-octet-first number representation is assumed unless the <code>$octet-order</code> parameter is specified. The <code>$offset</code> is zero based. Specifying a <code>$size</code> of zero yields the integer <code>0</code>.
 :
 : @param $in value of type xs:base64Binary
 : @param $offset value of type xs:integer
 : @param $size value of type xs:integer
 : @param $octet-order value of type xs:string
 : @return value of type xs:integer
 : @error bin:negative-size the specified size is negative.
 : @error bin:index-out-of-range the specified offset + size is out of range.
 : @error bin:unknown-significance-order the specified octet order is unknown.
 :)
declare function bin:unpack-unsigned-integer($in as xs:base64Binary, $offset as xs:integer, $size as xs:integer, $octet-order as xs:string) as xs:integer external;

(:~ 
 : Returns the "bitwise or" of two binary arguments.<br/>If either argument is the empty sequence, an empty sequence is returned.
 :
 : @param $a value of type xs:base64Binary?
 : @param $b value of type xs:base64Binary?
 : @return value of type xs:base64Binary?
 : @error bin:differing-length-arguments the input arguments are of differing length.
 :)
declare function bin:or($a as xs:base64Binary?, $b as xs:base64Binary?) as xs:base64Binary? external;

(:~ 
 : Returns the "bitwise xor" of two binary arguments.<br/>If either argument is the empty sequence, an empty sequence is returned.
 :
 : @param $a value of type xs:base64Binary?
 : @param $b value of type xs:base64Binary?
 : @return value of type xs:base64Binary?
 : @error bin:differing-length-arguments the input arguments are of differing length.
 :)
declare function bin:xor($a as xs:base64Binary?, $b as xs:base64Binary?) as xs:base64Binary? external;

(:~ 
 : Returns the "bitwise and" of two binary arguments.<br/>If either argument is the empty sequence, an empty sequence is returned.
 :
 : @param $a value of type xs:base64Binary?
 : @param $b value of type xs:base64Binary?
 : @return value of type xs:base64Binary?
 : @error bin:differing-length-arguments the input arguments are of differing length.
 :)
declare function bin:and($a as xs:base64Binary?, $b as xs:base64Binary?) as xs:base64Binary? external;

(:~ 
 : Returns the "bitwise not" of a binary argument.<br/>If the argument is the empty sequence, an empty sequence is returned.
 :
 : @param $in value of type xs:base64Binary?
 : @return value of type xs:base64Binary?
 :)
declare function bin:not($in as xs:base64Binary?) as xs:base64Binary? external;

(:~ 
 : Shifts bits in binary data.<br/>If <code>$by</code> is zero, the result is identical to <code>$in</code>. If <code>$by</code> is positive then bits are shifted to the left. Otherwise, bits are shifted to the right. If the absolute value of <code>$by</code> is greater than the bit-length of <code>$in</code> then an all-zeros result is returned. The result always has the same size as <code>$in</code>. The shifting is logical: zeros are placed into discarded bits. If the value of <code>$in</code> is the empty sequence, the function returns an empty sequence.
 :
 : @param $in value of type xs:base64Binary?
 : @param $by value of type xs:integer
 : @return value of type xs:base64Binary?
 :)
declare function bin:shift($in as xs:base64Binary?, $by as xs:integer) as xs:base64Binary? external;
