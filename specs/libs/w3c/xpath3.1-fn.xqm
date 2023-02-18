(: From https://www.w3.org/TR/2017/REC-xpath-functions-31-20170321/xpath-functions-31.xml :)
module namespace fn = 'http://www.w3.org/2005/xpath-functions';

(:~
    Calling the fn:error function raises an application-defined error.
:)
declare function fn:error() external;

(:~
    Calling the fn:error function raises an application-defined error.
:)
declare function fn:error($code as xs:QName?) external;

(:~
    Calling the fn:error function raises an application-defined error.
:)
declare function fn:error($code as xs:QName?,$description as xs:string) external;

(:~
    Calling the fn:error function raises an application-defined error.
:)
declare function fn:error($code as xs:QName?,$description as xs:string,$error-object as item()*) external;

(:~
    Provides an execution trace intended to be used in debugging queries.
:)
declare function fn:trace($value as item()*) as item()* external;

(:~
    Provides an execution trace intended to be used in debugging queries.
:)
declare function fn:trace($value as item()*,$label as xs:string) as item()* external;

(:~
    Returns the absolute value of $arg.
:)
declare function fn:abs($arg as xs:numeric?) as xs:numeric? external;

(:~
    Rounds $arg upwards to a whole number.
:)
declare function fn:ceiling($arg as xs:numeric?) as xs:numeric? external;

(:~
    Rounds $arg downwards to a whole number.
:)
declare function fn:floor($arg as xs:numeric?) as xs:numeric? external;

(:~
    Rounds a value to a specified number of decimal places, rounding upwards if two such
            values are equally near.
:)
declare function fn:round($arg as xs:numeric?) as xs:numeric? external;

(:~
    Rounds a value to a specified number of decimal places, rounding upwards if two such
            values are equally near.
:)
declare function fn:round($arg as xs:numeric?,$precision as xs:integer) as xs:numeric? external;

(:~
    Rounds a value to a specified number of decimal places, rounding to make the last digit
            even if two such values are equally near.
:)
declare function fn:round-half-to-even($arg as xs:numeric?) as xs:numeric? external;

(:~
    Rounds a value to a specified number of decimal places, rounding to make the last digit
            even if two such values are equally near.
:)
declare function fn:round-half-to-even($arg as xs:numeric?,$precision as xs:integer) as xs:numeric? external;

(:~
    Returns the value indicated by $arg or, if $arg is not
            specified, the context item after atomization, converted to an xs:double.
         
:)
declare function fn:number() as xs:double external;

(:~
    Returns the value indicated by $arg or, if $arg is not
            specified, the context item after atomization, converted to an xs:double.
         
:)
declare function fn:number($arg as xs:anyAtomicType?) as xs:double external;

(:~
    Formats an integer according to a given picture string, using the conventions of a given
            natural language if specified.
:)
declare function fn:format-integer($value as xs:integer?,$picture as xs:string) as xs:string external;

(:~
    Formats an integer according to a given picture string, using the conventions of a given
            natural language if specified.
:)
declare function fn:format-integer($value as xs:integer?,$picture as xs:string,$lang as xs:string?) as xs:string external;

(:~
    Returns a string containing a number formatted according to a given picture string,
            taking account of decimal formats specified in the static context.
:)
declare function fn:format-number($value as xs:numeric?,$picture as xs:string) as xs:string external;

(:~
    Returns a string containing a number formatted according to a given picture string,
            taking account of decimal formats specified in the static context.
:)
declare function fn:format-number($value as xs:numeric?,$picture as xs:string,$decimal-format-name as xs:string?) as xs:string external;

(:~
    Returns a random number generator, which can be used to generate sequences of random numbers.
:)
declare function fn:random-number-generator() as map(xs:string, item()) external;

(:~
    Returns a random number generator, which can be used to generate sequences of random numbers.
:)
declare function fn:random-number-generator($seed as xs:anyAtomicType?) as map(xs:string, item()) external;

(:~
    Returns an xs:string whose characters have supplied codepoints.
:)
declare function fn:codepoints-to-string($arg as xs:integer*) as xs:string external;

(:~
    Returns the sequence of codepoints that constitute an
               xs:string value. 
:)
declare function fn:string-to-codepoints($arg as xs:string?) as xs:integer* external;

(:~
    Returns -1, 0, or 1, depending on whether $comparand1 collates before,
            equal to, or after $comparand2 according to the rules of a selected
            collation.
:)
declare function fn:compare($comparand1 as xs:string?,$comparand2 as xs:string?) as xs:integer? external;

(:~
    Returns -1, 0, or 1, depending on whether $comparand1 collates before,
            equal to, or after $comparand2 according to the rules of a selected
            collation.
:)
declare function fn:compare($comparand1 as xs:string?,$comparand2 as xs:string?,$collation as xs:string) as xs:integer? external;

(:~
    Returns true if two strings are equal, considered codepoint-by-codepoint.
:)
declare function fn:codepoint-equal($comparand1 as xs:string?,$comparand2 as xs:string?) as xs:boolean? external;

(:~
    Given a string value and a collation, generates an internal value called a collation key, with the property that
            the matching and ordering of collation keys reflects the matching and ordering of strings under the specified collation.
:)
declare function fn:collation-key($key as xs:string) as xs:base64Binary external;

(:~
    Given a string value and a collation, generates an internal value called a collation key, with the property that
            the matching and ordering of collation keys reflects the matching and ordering of strings under the specified collation.
:)
declare function fn:collation-key($key as xs:string,$collation as xs:string) as xs:base64Binary external;

(:~
    Determines whether or not any of the supplied strings, when tokenized at whitespace boundaries, contains the supplied token,
            under the rules of the supplied collation.
:)
declare function fn:contains-token($input as xs:string*,$token as xs:string) as xs:boolean external;

(:~
    Determines whether or not any of the supplied strings, when tokenized at whitespace boundaries, contains the supplied token,
            under the rules of the supplied collation.
:)
declare function fn:contains-token($input as xs:string*,$token as xs:string,$collation as xs:string) as xs:boolean external;

(:~
    Returns the concatenation of the string values of the arguments.
:)
declare function fn:concat($arg1 as xs:anyAtomicType?,$arg2 as xs:anyAtomicType?) as xs:string external;

(:~
    Returns a string created by concatenating the items in a sequence, with a defined
            separator between adjacent items.
:)
declare function fn:string-join($arg1 as xs:anyAtomicType*) as xs:string external;

(:~
    Returns a string created by concatenating the items in a sequence, with a defined
            separator between adjacent items.
:)
declare function fn:string-join($arg1 as xs:anyAtomicType*,$arg2 as xs:string) as xs:string external;

(:~
    Returns the portion of the value of $sourceString beginning at the position
            indicated by the value of $start and continuing for the number of characters indicated by the value of
            $length.
:)
declare function fn:substring($sourceString as xs:string?,$start as xs:double) as xs:string external;

(:~
    Returns the portion of the value of $sourceString beginning at the position
            indicated by the value of $start and continuing for the number of characters indicated by the value of
            $length.
:)
declare function fn:substring($sourceString as xs:string?,$start as xs:double,$length as xs:double) as xs:string external;

(:~
    Returns the number of characters in a string.
:)
declare function fn:string-length() as xs:integer external;

(:~
    Returns the number of characters in a string.
:)
declare function fn:string-length($arg as xs:string?) as xs:integer external;

(:~
    Returns the value of $arg with leading and trailing whitespace removed, and
            sequences of internal whitespace reduced to a single space character.
:)
declare function fn:normalize-space() as xs:string external;

(:~
    Returns the value of $arg with leading and trailing whitespace removed, and
            sequences of internal whitespace reduced to a single space character.
:)
declare function fn:normalize-space($arg as xs:string?) as xs:string external;

(:~
    Returns the value of $arg after applying Unicode normalization.
:)
declare function fn:normalize-unicode($arg as xs:string?) as xs:string external;

(:~
    Returns the value of $arg after applying Unicode normalization.
:)
declare function fn:normalize-unicode($arg as xs:string?,$normalizationForm as xs:string) as xs:string external;

(:~
    Converts a string to upper case.
:)
declare function fn:upper-case($arg as xs:string?) as xs:string external;

(:~
    Converts a string to lower case.
:)
declare function fn:lower-case($arg as xs:string?) as xs:string external;

(:~
    Returns the value of $arg modified by replacing or removing individual
            characters. 
:)
declare function fn:translate($arg as xs:string?,$mapString as xs:string,$transString as xs:string) as xs:string external;

(:~
    Returns true if the string $arg1 contains $arg2 as a
            substring, taking collations into account.
:)
declare function fn:contains($arg1 as xs:string?,$arg2 as xs:string?) as xs:boolean external;

(:~
    Returns true if the string $arg1 contains $arg2 as a
            substring, taking collations into account.
:)
declare function fn:contains($arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string) as xs:boolean external;

(:~
    Returns true if the string $arg1 contains $arg2 as a leading
            substring, taking collations into account.
:)
declare function fn:starts-with($arg1 as xs:string?,$arg2 as xs:string?) as xs:boolean external;

(:~
    Returns true if the string $arg1 contains $arg2 as a leading
            substring, taking collations into account.
:)
declare function fn:starts-with($arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string) as xs:boolean external;

(:~
    Returns true if the string $arg1 contains $arg2 as a trailing
            substring, taking collations into account.
:)
declare function fn:ends-with($arg1 as xs:string?,$arg2 as xs:string?) as xs:boolean external;

(:~
    Returns true if the string $arg1 contains $arg2 as a trailing
            substring, taking collations into account.
:)
declare function fn:ends-with($arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string) as xs:boolean external;

(:~
    Returns the part of $arg1 that precedes the first occurrence of
               $arg2, taking collations into account.
:)
declare function fn:substring-before($arg1 as xs:string?,$arg2 as xs:string?) as xs:string external;

(:~
    Returns the part of $arg1 that precedes the first occurrence of
               $arg2, taking collations into account.
:)
declare function fn:substring-before($arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string) as xs:string external;

(:~
    Returns the part of $arg1 that follows the first occurrence of
               $arg2, taking collations into account.
:)
declare function fn:substring-after($arg1 as xs:string?,$arg2 as xs:string?) as xs:string external;

(:~
    Returns the part of $arg1 that follows the first occurrence of
               $arg2, taking collations into account.
:)
declare function fn:substring-after($arg1 as xs:string?,$arg2 as xs:string?,$collation as xs:string) as xs:string external;

(:~
    Returns true if the supplied string matches a given regular expression.
:)
declare function fn:matches($input as xs:string?,$pattern as xs:string) as xs:boolean external;

(:~
    Returns true if the supplied string matches a given regular expression.
:)
declare function fn:matches($input as xs:string?,$pattern as xs:string,$flags as xs:string) as xs:boolean external;

(:~
    Returns a string produced from the input string by replacing any substrings that match a
            given regular expression with a supplied replacement string.
:)
declare function fn:replace($input as xs:string?,$pattern as xs:string,$replacement as xs:string) as xs:string external;

(:~
    Returns a string produced from the input string by replacing any substrings that match a
            given regular expression with a supplied replacement string.
:)
declare function fn:replace($input as xs:string?,$pattern as xs:string,$replacement as xs:string,$flags as xs:string) as xs:string external;

(:~
    Returns a sequence of strings constructed by splitting the input wherever a separator is
            found; the separator is any substring that matches a given regular expression.
:)
declare function fn:tokenize($input as xs:string?) as xs:string* external;

(:~
    Returns a sequence of strings constructed by splitting the input wherever a separator is
            found; the separator is any substring that matches a given regular expression.
:)
declare function fn:tokenize($input as xs:string?,$pattern as xs:string) as xs:string* external;

(:~
    Returns a sequence of strings constructed by splitting the input wherever a separator is
            found; the separator is any substring that matches a given regular expression.
:)
declare function fn:tokenize($input as xs:string?,$pattern as xs:string,$flags as xs:string) as xs:string* external;

(:~
    Analyzes a string using a regular expression, returning an XML structure that identifies
            which parts of the input string matched or failed to match the regular expression, and
            in the case of matched substrings, which substrings matched each capturing group in the
            regular expression.
:)
declare function fn:analyze-string($input as xs:string?,$pattern as xs:string) as element(fn:analyze-string-result) external;

(:~
    Analyzes a string using a regular expression, returning an XML structure that identifies
            which parts of the input string matched or failed to match the regular expression, and
            in the case of matched substrings, which substrings matched each capturing group in the
            regular expression.
:)
declare function fn:analyze-string($input as xs:string?,$pattern as xs:string,$flags as xs:string) as element(fn:analyze-string-result) external;

(:~
    Returns the xs:boolean value true.
:)
declare function fn:true() as xs:boolean external;

(:~
    Returns the xs:boolean value false.
:)
declare function fn:false() as xs:boolean external;

(:~
    Computes the effective boolean value of the sequence $arg.
:)
declare function fn:boolean($arg as item()*) as xs:boolean external;

(:~
    Returns true if the effective boolean value of $arg is
               false, or false if it is true.
:)
declare function fn:not($arg as item()*) as xs:boolean external;

(:~
    Returns the number of years in a duration.
:)
declare function fn:years-from-duration($arg as xs:duration?) as xs:integer? external;

(:~
    Returns the number of months in a duration.
:)
declare function fn:months-from-duration($arg as xs:duration?) as xs:integer? external;

(:~
    Returns the number of days in a duration.
:)
declare function fn:days-from-duration($arg as xs:duration?) as xs:integer? external;

(:~
    Returns the number of hours in a duration.
:)
declare function fn:hours-from-duration($arg as xs:duration?) as xs:integer? external;

(:~
    Returns the number of minutes in a duration.
:)
declare function fn:minutes-from-duration($arg as xs:duration?) as xs:integer? external;

(:~
    Returns the number of seconds in a duration.
:)
declare function fn:seconds-from-duration($arg as xs:duration?) as xs:decimal? external;

(:~
    Returns an xs:dateTime value created by combining an xs:date
            and an xs:time.
:)
declare function fn:dateTime($arg1 as xs:date?,$arg2 as xs:time?) as xs:dateTime? external;

(:~
    Returns the year component of an xs:dateTime.
:)
declare function fn:year-from-dateTime($arg as xs:dateTime?) as xs:integer? external;

(:~
    Returns the month component of an xs:dateTime.
:)
declare function fn:month-from-dateTime($arg as xs:dateTime?) as xs:integer? external;

(:~
    Returns the day component of an xs:dateTime.
:)
declare function fn:day-from-dateTime($arg as xs:dateTime?) as xs:integer? external;

(:~
    Returns the hours component of an xs:dateTime.
:)
declare function fn:hours-from-dateTime($arg as xs:dateTime?) as xs:integer? external;

(:~
    Returns the minute component of an xs:dateTime.
:)
declare function fn:minutes-from-dateTime($arg as xs:dateTime?) as xs:integer? external;

(:~
    Returns the seconds component of an xs:dateTime.
:)
declare function fn:seconds-from-dateTime($arg as xs:dateTime?) as xs:decimal? external;

(:~
    Returns the timezone component of an xs:dateTime.
:)
declare function fn:timezone-from-dateTime($arg as xs:dateTime?) as xs:dayTimeDuration? external;

(:~
    Returns the year component of an xs:date.
:)
declare function fn:year-from-date($arg as xs:date?) as xs:integer? external;

(:~
    Returns the month component of an xs:date.
:)
declare function fn:month-from-date($arg as xs:date?) as xs:integer? external;

(:~
    Returns the day component of an xs:date.
:)
declare function fn:day-from-date($arg as xs:date?) as xs:integer? external;

(:~
    Returns the timezone component of an xs:date.
:)
declare function fn:timezone-from-date($arg as xs:date?) as xs:dayTimeDuration? external;

(:~
    Returns the hours component of an xs:time.
:)
declare function fn:hours-from-time($arg as xs:time?) as xs:integer? external;

(:~
    Returns the minutes component of an xs:time.
:)
declare function fn:minutes-from-time($arg as xs:time?) as xs:integer? external;

(:~
    Returns the seconds component of an xs:time.
:)
declare function fn:seconds-from-time($arg as xs:time?) as xs:decimal? external;

(:~
    Returns the timezone component of an xs:time.
:)
declare function fn:timezone-from-time($arg as xs:time?) as xs:dayTimeDuration? external;

(:~
    Adjusts an xs:dateTime value to a specific timezone, or to no timezone at
            all.
:)
declare function fn:adjust-dateTime-to-timezone($arg as xs:dateTime?) as xs:dateTime? external;

(:~
    Adjusts an xs:dateTime value to a specific timezone, or to no timezone at
            all.
:)
declare function fn:adjust-dateTime-to-timezone($arg as xs:dateTime?,$timezone as xs:dayTimeDuration?) as xs:dateTime? external;

(:~
    Adjusts an xs:date value to a specific timezone, or to no timezone at all;
            the result is the date in the target timezone that contains the starting instant of the
            supplied date.
:)
declare function fn:adjust-date-to-timezone($arg as xs:date?) as xs:date? external;

(:~
    Adjusts an xs:date value to a specific timezone, or to no timezone at all;
            the result is the date in the target timezone that contains the starting instant of the
            supplied date.
:)
declare function fn:adjust-date-to-timezone($arg as xs:date?,$timezone as xs:dayTimeDuration?) as xs:date? external;

(:~
    Adjusts an xs:time value to a specific timezone, or to no timezone at
            all.
:)
declare function fn:adjust-time-to-timezone($arg as xs:time?) as xs:time? external;

(:~
    Adjusts an xs:time value to a specific timezone, or to no timezone at
            all.
:)
declare function fn:adjust-time-to-timezone($arg as xs:time?,$timezone as xs:dayTimeDuration?) as xs:time? external;

(:~
    Returns a string containing an xs:dateTime value formatted for display.
:)
declare function fn:format-dateTime($value as xs:dateTime?,$picture as xs:string) as xs:string? external;

(:~
    Returns a string containing an xs:dateTime value formatted for display.
:)
declare function fn:format-dateTime($value as xs:dateTime?,$picture as xs:string,$language as xs:string?,$calendar as xs:string?,$place as xs:string?) as xs:string? external;

(:~
    Returns a string containing an xs:date value formatted for display.
:)
declare function fn:format-date($value as xs:date?,$picture as xs:string) as xs:string? external;

(:~
    Returns a string containing an xs:date value formatted for display.
:)
declare function fn:format-date($value as xs:date?,$picture as xs:string,$language as xs:string?,$calendar as xs:string?,$place as xs:string?) as xs:string? external;

(:~
    Returns a string containing an xs:time value formatted for display.
:)
declare function fn:format-time($value as xs:time?,$picture as xs:string) as xs:string? external;

(:~
    Returns a string containing an xs:time value formatted for display.
:)
declare function fn:format-time($value as xs:time?,$picture as xs:string,$language as xs:string?,$calendar as xs:string?,$place as xs:string?) as xs:string? external;

(:~
    Parses a string containing the date and time in IETF format, returning the corresponding
               xs:dateTime value.
:)
declare function fn:parse-ietf-date($value as xs:string?) as xs:dateTime? external;

(:~
    Returns an xs:QName value (that is, an expanded-QName) by taking an
               xs:string that has the lexical form of an xs:QName (a
            string in the form "prefix:local-name" or "local-name") and resolving it using the
            in-scope namespaces for a given element.
:)
declare function fn:resolve-QName($qname as xs:string?,$element as element()) as xs:QName? external;

(:~
    Returns an xs:QName value formed using a supplied namespace URI and lexical QName.
:)
declare function fn:QName($paramURI as xs:string?,$paramQName as xs:string) as xs:QName external;

(:~
    Returns the prefix component of the supplied QName.
:)
declare function fn:prefix-from-QName($arg as xs:QName?) as xs:NCName? external;

(:~
    Returns the local part of the supplied QName.
:)
declare function fn:local-name-from-QName($arg as xs:QName?) as xs:NCName? external;

(:~
    Returns the namespace URI part of the supplied QName.
:)
declare function fn:namespace-uri-from-QName($arg as xs:QName?) as xs:anyURI? external;

(:~
    Returns the namespace URI of one of the in-scope namespaces for $element,
            identified by its namespace prefix.
:)
declare function fn:namespace-uri-for-prefix($prefix as xs:string?,$element as element()) as xs:anyURI? external;

(:~
    Returns the prefixes of the in-scope namespaces for an element node.
:)
declare function fn:in-scope-prefixes($element as element()) as xs:string* external;

(:~
    Returns true if the argument is the empty sequence.
:)
declare function fn:empty($arg as item()*) as xs:boolean external;

(:~
    Returns true if the argument is a non-empty sequence.
:)
declare function fn:exists($arg as item()*) as xs:boolean external;

(:~
    Returns the first item in a sequence. 
:)
declare function fn:head($arg as item()*) as item()? external;

(:~
    Returns all but the first item in a sequence. 
:)
declare function fn:tail($arg as item()*) as item()* external;

(:~
    Returns a sequence constructed by inserting an item or a sequence of items at a given
            position within an existing sequence.
:)
declare function fn:insert-before($target as item()*,$position as xs:integer,$inserts as item()*) as item()* external;

(:~
    Returns a new sequence containing all the items of $target except the item
            at position $position.
:)
declare function fn:remove($target as item()*,$position as xs:integer) as item()* external;

(:~
    Reverses the order of items in a sequence. 
:)
declare function fn:reverse($arg as item()*) as item()* external;

(:~
    Returns the contiguous sequence of items in the value of $sourceSeq
            beginning at the position indicated by the value of $startingLoc and
            continuing for the number of items indicated by the value of $length. 
:)
declare function fn:subsequence($sourceSeq as item()*,$startingLoc as xs:double) as item()* external;

(:~
    Returns the contiguous sequence of items in the value of $sourceSeq
            beginning at the position indicated by the value of $startingLoc and
            continuing for the number of items indicated by the value of $length. 
:)
declare function fn:subsequence($sourceSeq as item()*,$startingLoc as xs:double,$length as xs:double) as item()* external;

(:~
    Returns the items of $sourceSeq in an implementation-dependent order.
:)
declare function fn:unordered($sourceSeq as item()*) as item()* external;

(:~
    Returns the values that appear in a sequence, with duplicates eliminated.
:)
declare function fn:distinct-values($arg as xs:anyAtomicType*) as xs:anyAtomicType* external;

(:~
    Returns the values that appear in a sequence, with duplicates eliminated.
:)
declare function fn:distinct-values($arg as xs:anyAtomicType*,$collation as xs:string) as xs:anyAtomicType* external;

(:~
    Returns a sequence of positive integers giving the positions within the sequence
               $seq of items that are equal to $search.
:)
declare function fn:index-of($seq as xs:anyAtomicType*,$search as xs:anyAtomicType) as xs:integer* external;

(:~
    Returns a sequence of positive integers giving the positions within the sequence
               $seq of items that are equal to $search.
:)
declare function fn:index-of($seq as xs:anyAtomicType*,$search as xs:anyAtomicType,$collation as xs:string) as xs:integer* external;

(:~
     This function assesses whether two sequences are deep-equal to each other. To be
            deep-equal, they must contain items that are pairwise deep-equal; and for two items to
            be deep-equal, they must either be atomic values that compare equal, or nodes of the
            same kind, with the same name, whose children are deep-equal,
               or maps with matching entries, or arrays with matching members.
:)
declare function fn:deep-equal($parameter1 as item()*,$parameter2 as item()*) as xs:boolean external;

(:~
     This function assesses whether two sequences are deep-equal to each other. To be
            deep-equal, they must contain items that are pairwise deep-equal; and for two items to
            be deep-equal, they must either be atomic values that compare equal, or nodes of the
            same kind, with the same name, whose children are deep-equal,
               or maps with matching entries, or arrays with matching members.
:)
declare function fn:deep-equal($parameter1 as item()*,$parameter2 as item()*,$collation as xs:string) as xs:boolean external;

(:~
    Returns $arg if it contains zero or one items. Otherwise, raises an
            error.
:)
declare function fn:zero-or-one($arg as item()*) as item()? external;

(:~
    Returns $arg if it contains one or more items. Otherwise, raises an error.
         
:)
declare function fn:one-or-more($arg as item()*) as item()+ external;

(:~
    Returns $arg if it contains exactly one item. Otherwise, raises an error.
         
:)
declare function fn:exactly-one($arg as item()*) as item() external;

(:~
    Returns the number of items in a sequence.
:)
declare function fn:count($arg as item()*) as xs:integer external;

(:~
    Returns the average of the values in the input sequence $arg, that is, the
            sum of the values divided by the number of values.
:)
declare function fn:avg($arg as xs:anyAtomicType*) as xs:anyAtomicType? external;

(:~
    Returns a value that is equal to the highest value appearing in the input sequence.
:)
declare function fn:max($arg as xs:anyAtomicType*) as xs:anyAtomicType? external;

(:~
    Returns a value that is equal to the highest value appearing in the input sequence.
:)
declare function fn:max($arg as xs:anyAtomicType*,$collation as xs:string) as xs:anyAtomicType? external;

(:~
    Returns a value that is equal to the lowest value appearing in the input sequence.
:)
declare function fn:min($arg as xs:anyAtomicType*) as xs:anyAtomicType? external;

(:~
    Returns a value that is equal to the lowest value appearing in the input sequence.
:)
declare function fn:min($arg as xs:anyAtomicType*,$collation as xs:string) as xs:anyAtomicType? external;

(:~
    Returns a value obtained by adding together the values in $arg.
:)
declare function fn:sum($arg as xs:anyAtomicType*) as xs:anyAtomicType external;

(:~
    Returns a value obtained by adding together the values in $arg.
:)
declare function fn:sum($arg as xs:anyAtomicType*,$zero as xs:anyAtomicType?) as xs:anyAtomicType? external;

(:~
    Returns the sequence of element nodes that have an ID value matching the
            value of one or more of the IDREF values supplied in $arg.
:)
declare function fn:id($arg as xs:string*) as element()* external;

(:~
    Returns the sequence of element nodes that have an ID value matching the
            value of one or more of the IDREF values supplied in $arg.
:)
declare function fn:id($arg as xs:string*,$node as node()) as element()* external;

(:~
     Returns the sequence of element nodes that have an ID value matching the
            value of one or more of the IDREF values supplied in $arg.
:)
declare function fn:element-with-id($arg as xs:string*) as element()* external;

(:~
     Returns the sequence of element nodes that have an ID value matching the
            value of one or more of the IDREF values supplied in $arg.
:)
declare function fn:element-with-id($arg as xs:string*,$node as node()) as element()* external;

(:~
    Returns the sequence of element or attribute nodes with an IDREF value
            matching the value of one or more of the ID values supplied in
               $arg.
:)
declare function fn:idref($arg as xs:string*) as node()* external;

(:~
    Returns the sequence of element or attribute nodes with an IDREF value
            matching the value of one or more of the ID values supplied in
               $arg.
:)
declare function fn:idref($arg as xs:string*,$node as node()) as node()* external;

(:~
    This function returns a string that uniquely identifies a given node. 
:)
declare function fn:generate-id() as xs:string external;

(:~
    This function returns a string that uniquely identifies a given node. 
:)
declare function fn:generate-id($arg as node()?) as xs:string external;

(:~
    Retrieves a document using a URI supplied as an xs:string, and returns the
            corresponding document node.
:)
declare function fn:doc($uri as xs:string?) as document-node()? external;

(:~
    The function returns true if and only if the function call fn:doc($uri)
            would return a document node.
:)
declare function fn:doc-available($uri as xs:string?) as xs:boolean external;

(:~
    Returns a sequence of items identified by a
            collection URI; or a default collection if no URI is supplied.
:)
declare function fn:collection() as item()* external;

(:~
    Returns a sequence of items identified by a
            collection URI; or a default collection if no URI is supplied.
:)
declare function fn:collection($arg as xs:string?) as item()* external;

(:~
    Returns a sequence of xs:anyURI values representing the URIs in a URI
            collection.
:)
declare function fn:uri-collection() as xs:anyURI* external;

(:~
    Returns a sequence of xs:anyURI values representing the URIs in a URI
            collection.
:)
declare function fn:uri-collection($arg as xs:string?) as xs:anyURI* external;

(:~
    The fn:unparsed-text function reads an external resource (for example, a
            file) and returns a string representation of the resource.
:)
declare function fn:unparsed-text($href as xs:string?) as xs:string? external;

(:~
    The fn:unparsed-text function reads an external resource (for example, a
            file) and returns a string representation of the resource.
:)
declare function fn:unparsed-text($href as xs:string?,$encoding as xs:string) as xs:string? external;

(:~
    The fn:unparsed-text-lines function reads an external resource (for
            example, a file) and returns its contents as a sequence of strings, one for each line of
            text in the string representation of the resource.
:)
declare function fn:unparsed-text-lines($href as xs:string?) as xs:string* external;

(:~
    The fn:unparsed-text-lines function reads an external resource (for
            example, a file) and returns its contents as a sequence of strings, one for each line of
            text in the string representation of the resource.
:)
declare function fn:unparsed-text-lines($href as xs:string?,$encoding as xs:string) as xs:string* external;

(:~
    Because errors in evaluating the fn:unparsed-text function are
            non-recoverable, these two functions are provided to allow an application to determine
            whether a call with particular arguments would succeed.
:)
declare function fn:unparsed-text-available($href as xs:string?) as xs:boolean external;

(:~
    Because errors in evaluating the fn:unparsed-text function are
            non-recoverable, these two functions are provided to allow an application to determine
            whether a call with particular arguments would succeed.
:)
declare function fn:unparsed-text-available($href as xs:string?,$encoding as xs:string) as xs:boolean external;

(:~
    Returns the value of a system environment variable, if it exists.
:)
declare function fn:environment-variable($name as xs:string) as xs:string? external;

(:~
    Returns a list of environment variable names that are suitable for passing to
               fn:environment-variable, as a (possibly empty) sequence of strings.
:)
declare function fn:available-environment-variables() as xs:string* external;

(:~
    This function takes as input an XML document represented as a string, and returns the
            document node at the root of an XDM tree representing the parsed document.
:)
declare function fn:parse-xml($arg as xs:string?) as document-node(element(*))? external;

(:~
    This function takes as input an XML external entity represented as a string, and returns
            the document node at the root of an XDM tree representing the parsed document
            fragment.
:)
declare function fn:parse-xml-fragment($arg as xs:string?) as document-node()? external;

(:~
    This function serializes the supplied input sequence $arg as described in
               , returning the serialized representation
            of the sequence as a string.
:)
declare function fn:serialize($arg as item()*) as xs:string external;

(:~
    This function serializes the supplied input sequence $arg as described in
               , returning the serialized representation
            of the sequence as a string.
:)
declare function fn:serialize($arg as item()*,$params as item()?) as xs:string external;

(:~
    Returns the function having a given name and arity, if there is one.
:)
declare function fn:function-lookup($name as xs:QName,$arity as xs:integer) as function(*)? external;

(:~
    Returns the name of the function identified by a function item.
:)
declare function fn:function-name($func as function(*)) as xs:QName? external;

(:~
    Returns the arity of the function identified by a function item.
:)
declare function fn:function-arity($func as function(*)) as xs:integer external;

(:~
    Applies the function item $action to every item from the sequence $seq
            in turn, returning the concatenation of the resulting sequences in order.
:)
declare function fn:for-each($seq as item()*,$action as function(item()) as item()*) as item()* external;

(:~
    Returns those items from the sequence $seq for which the supplied function
               $f returns true.
:)
declare function fn:filter($seq as item()*,$f as function(item()) as xs:boolean) as item()* external;

(:~
    Processes the supplied sequence from left to right, applying the supplied function
            repeatedly to each item in turn, together with an accumulated result value.
:)
declare function fn:fold-left($seq as item()*,$zero as item()*,$f as function(item()*, item()) as item()*) as item()* external;

(:~
    Processes the supplied sequence from right to left, applying the supplied function
            repeatedly to each item in turn, together with an accumulated result value.
:)
declare function fn:fold-right($seq as item()*,$zero as item()*,$f as function(item(), item()*) as item()*) as item()* external;

(:~
    Applies the function item $action to successive pairs of items taken one from
               $seq1 and one from $seq2, returning the concatenation of the
            resulting sequences in order.
:)
declare function fn:for-each-pair($seq1 as item()*,$seq2 as item()*,$action as function(item(), item()) as item()*) as item()* external;

(:~
    Sorts a supplied sequence, based on the value of a sort key supplied as a function.
:)
declare function fn:sort($input as item()*) as item()* external;

(:~
    Sorts a supplied sequence, based on the value of a sort key supplied as a function.
:)
declare function fn:sort($input as item()*,$collation as xs:string?) as item()* external;

(:~
    Sorts a supplied sequence, based on the value of a sort key supplied as a function.
:)
declare function fn:sort($input as item()*,$collation as xs:string?,$key as function(item()) as xs:anyAtomicType*) as item()* external;

(:~
    Makes a dynamic call on a function with an argument list supplied in the form of an array.
:)
declare function fn:apply($function as function(*),$array as array(*)) as item()* external;

(:~
    Provides access to the public functions and global variables of a dynamically-loaded XQuery library module.
:)
declare function fn:load-xquery-module($module-uri as xs:string) as map(*) external;

(:~
    Provides access to the public functions and global variables of a dynamically-loaded XQuery library module.
:)
declare function fn:load-xquery-module($module-uri as xs:string,$options as map(*)) as map(*) external;

(:~
    Invokes a transformation using a dynamically-loaded XSLT stylesheet.
:)
declare function fn:transform($options as map(*)) as map(*) external;

(:~
    Parses a string supplied in the form of a JSON text, returning the results typically in the form
            of a map or array.
:)
declare function fn:parse-json($json-text as xs:string?) as item()? external;

(:~
    Parses a string supplied in the form of a JSON text, returning the results typically in the form
            of a map or array.
:)
declare function fn:parse-json($json-text as xs:string?,$options as map(*)) as item()? external;

(:~
    Reads an external resource containing JSON, and returns the result of parsing the resource as JSON.
:)
declare function fn:json-doc($href as xs:string?) as item()? external;

(:~
    Reads an external resource containing JSON, and returns the result of parsing the resource as JSON.
:)
declare function fn:json-doc($href as xs:string?,$options as map(*)) as item()? external;

(:~
    Parses a string supplied in the form of a JSON text, returning the results in the form
            of an XML document node.
:)
declare function fn:json-to-xml($json-text as xs:string?) as document-node()? external;

(:~
    Parses a string supplied in the form of a JSON text, returning the results in the form
            of an XML document node.
:)
declare function fn:json-to-xml($json-text as xs:string?,$options as map(*)) as document-node()? external;

(:~
    Converts an XML tree, whose format corresponds to the XML representation of JSON defined
            in this specification, into a string conforming to the JSON grammar.
:)
declare function fn:xml-to-json($input as node()?) as xs:string? external;

(:~
    Converts an XML tree, whose format corresponds to the XML representation of JSON defined
            in this specification, into a string conforming to the JSON grammar.
:)
declare function fn:xml-to-json($input as node()?,$options as map(*)) as xs:string? external;