(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> extends the <a href="https://docs.basex.org/wiki/Full-Text">Full-Text</a> features of BaseX: The index can be directly accessed, full-text results can be marked with additional elements, or the relevant parts can be extracted. Moreover, the score value, which is generated by the <code>contains text</code> expression, can be explicitly requested from items.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Full-Text_Module
 :)
module namespace ft = "http://basex.org/modules/ft";

(:~ 
 : Returns all text nodes from the full-text index of the database <code>$db</code> that contain the specified <code>$terms</code>.<br/>The options used for tokenizing the input and building the full-text will also be applied to the search terms. As an example, if the index terms have been stemmed, the search string will be stemmed as well. <p>The <code>$options</code> argument can be used to control full-text processing. The following options are supported (the introduction on <a href="https://docs.basex.org/wiki/Full-Text">Full-Text</a> processing gives you equivalent expressions in the XQuery Full-Text notation): </p> <ul> <li> <code>mode</code>: determine the mode how tokens are searched. Allowed values are <code>any</code>, <code>any word</code>, <code>all</code>, <code>all words</code>, and <code>phrase</code>. <code>any</code> is the default search mode.</li> <li> <code>wildcards</code>: turn wildcard querying on or off. Allowed values are <code>true</code> and <code>false</code>. By default, wildcard querying is turned off.</li> <li> <code>fuzzy</code>: turn fuzzy querying on or off. Allowed values are <code>true</code> and <code>false</code>. By default, fuzzy querying is turned off.</li> <li> <code>errors</code>: control the maximum number of tolerated errors for fuzzy querying. By default, <code>0</code> is assigned (see <a href="https://docs.basex.org/wiki/Full-Text#Fuzzy_Querying">Fuzzy Querying</a> for more details).</li> <li> <code>ordered</code>: indicate if all tokens must occur in the order in which they are specified. Allowed values are <code>true</code> and <code>false</code>. The default is <code>false</code>.</li> <li> <code>content</code>: specify that the matched tokens need to occur at the beginning or end of a searched string, or need to cover the entire string. Allowed values are <code>start</code>, <code>end</code>, and <code>entire</code>. By default, the option is turned off.</li> <li> <code>scope</code>: define the scope in which tokens must be located. The option has following sub options: <ul> <li> <code>same</code>: can be set to <code>true</code> or <code>false</code>. It specifies if tokens need to occur in the same or different units.</li> <li> <code>unit</code>: can be <code>sentence</code> or <code>paragraph</code>. It specifies the unit for finding tokens.</li> </ul> </li> <li> <code>window</code>: set up a window in which all tokens must be located. By default, the option is turned off. It has following sub options: <ul> <li> <code>size</code>: specify the size of the window in terms of <i>units</i>.</li> <li> <code>unit</code>: can be <code>sentences</code>, <code>sentences</code> or <code>paragraphs</code>. The default is <code>words</code>.</li> </ul> </li> <li> <code>distance</code>: specify the distance in which tokens must occur. By default, the option is turned off. It has following sub options: <ul> <li> <code>min</code>: specify the minimum distance in terms of <i>units</i>. The default is <code>0</code>.</li> <li> <code>max</code>: specify the maximum distance in terms of <i>units</i>. The default is <code>∞</code>.</li> <li> <code>unit</code>: can be <code>words</code>, <code>sentences</code> or <code>paragraphs</code>. The default is <code>words</code>.</li> </ul> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $terms value of type item()*
 : @return value of type text()*
 : @error db:get The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 : @error ft:options the fuzzy and wildcard option cannot be both specified.
 :)
declare function ft:search($db as xs:string, $terms as item()*) as text()* external;

(:~ 
 : Returns all text nodes from the full-text index of the database <code>$db</code> that contain the specified <code>$terms</code>.<br/>The options used for tokenizing the input and building the full-text will also be applied to the search terms. As an example, if the index terms have been stemmed, the search string will be stemmed as well. <p>The <code>$options</code> argument can be used to control full-text processing. The following options are supported (the introduction on <a href="https://docs.basex.org/wiki/Full-Text">Full-Text</a> processing gives you equivalent expressions in the XQuery Full-Text notation): </p> <ul> <li> <code>mode</code>: determine the mode how tokens are searched. Allowed values are <code>any</code>, <code>any word</code>, <code>all</code>, <code>all words</code>, and <code>phrase</code>. <code>any</code> is the default search mode.</li> <li> <code>wildcards</code>: turn wildcard querying on or off. Allowed values are <code>true</code> and <code>false</code>. By default, wildcard querying is turned off.</li> <li> <code>fuzzy</code>: turn fuzzy querying on or off. Allowed values are <code>true</code> and <code>false</code>. By default, fuzzy querying is turned off.</li> <li> <code>errors</code>: control the maximum number of tolerated errors for fuzzy querying. By default, <code>0</code> is assigned (see <a href="https://docs.basex.org/wiki/Full-Text#Fuzzy_Querying">Fuzzy Querying</a> for more details).</li> <li> <code>ordered</code>: indicate if all tokens must occur in the order in which they are specified. Allowed values are <code>true</code> and <code>false</code>. The default is <code>false</code>.</li> <li> <code>content</code>: specify that the matched tokens need to occur at the beginning or end of a searched string, or need to cover the entire string. Allowed values are <code>start</code>, <code>end</code>, and <code>entire</code>. By default, the option is turned off.</li> <li> <code>scope</code>: define the scope in which tokens must be located. The option has following sub options: <ul> <li> <code>same</code>: can be set to <code>true</code> or <code>false</code>. It specifies if tokens need to occur in the same or different units.</li> <li> <code>unit</code>: can be <code>sentence</code> or <code>paragraph</code>. It specifies the unit for finding tokens.</li> </ul> </li> <li> <code>window</code>: set up a window in which all tokens must be located. By default, the option is turned off. It has following sub options: <ul> <li> <code>size</code>: specify the size of the window in terms of <i>units</i>.</li> <li> <code>unit</code>: can be <code>sentences</code>, <code>sentences</code> or <code>paragraphs</code>. The default is <code>words</code>.</li> </ul> </li> <li> <code>distance</code>: specify the distance in which tokens must occur. By default, the option is turned off. It has following sub options: <ul> <li> <code>min</code>: specify the minimum distance in terms of <i>units</i>. The default is <code>0</code>.</li> <li> <code>max</code>: specify the maximum distance in terms of <i>units</i>. The default is <code>∞</code>.</li> <li> <code>unit</code>: can be <code>words</code>, <code>sentences</code> or <code>paragraphs</code>. The default is <code>words</code>.</li> </ul> </li> </ul>
 :
 : @param $db value of type xs:string
 : @param $terms value of type item()*
 : @param $options value of type map(*)?
 : @return value of type text()*
 : @error db:get The addressed database does not exist or could not be opened.
 : @error db:no-index the index is not available.
 : @error ft:options the fuzzy and wildcard option cannot be both specified.
 :)
declare function ft:search($db as xs:string, $terms as item()*, $options as map(*)?) as text()* external;

(:~ 
 : Returns all full-text tokens stored in the index of the database <code>$db</code>, along with their numbers of occurrences.<br/>If <code>$prefix</code> is specified, the returned nodes will be refined to the strings starting with that prefix. The prefix will be tokenized according to the full-text used for creating the index.
 :
 : @param $db value of type xs:string
 : @return value of type element(value)*
 : @error db:get The addressed database does not exist or could not be opened.
 : @error db:no-index the full-text index is not available.
 :)
declare function ft:tokens($db as xs:string) as element(value)* external;

(:~ 
 : Returns all full-text tokens stored in the index of the database <code>$db</code>, along with their numbers of occurrences.<br/>If <code>$prefix</code> is specified, the returned nodes will be refined to the strings starting with that prefix. The prefix will be tokenized according to the full-text used for creating the index.
 :
 : @param $db value of type xs:string
 : @param $prefix value of type xs:string
 : @return value of type element(value)*
 : @error db:get The addressed database does not exist or could not be opened.
 : @error db:no-index the full-text index is not available.
 :)
declare function ft:tokens($db as xs:string, $prefix as xs:string) as element(value)* external;

(:~ 
 : Checks if the specified <code>$input</code> items contain the specified <code>$terms</code>.<br/>The function does the same as the <a href="https://docs.basex.org/wiki/Full-Text">Full-Text</a> expression <code>contains text</code>, but options can be specified more dynamically. The <code>$options</code> are the same as for <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:search">ft:search</a> </code>, and the following ones exist: <ul> <li> <code>case</code>: determines how character case is processed. Allowed values are <code>insensitive</code>, <code>sensitive</code>, <code>upper</code> and <code>lower</code>. By default, search is case-insensitive.</li> <li> <code>diacritics</code>: determines how diacritical characters are processed. Allowed values are <code>insensitive</code> and <code>sensitive</code>. By default, search is diacritical insensitive.</li> <li> <code>stemming</code>: determines is tokens are stemmed. Allowed values are <code>true</code> and <code>false</code>. By default, stemming is turned off.</li> <li> <code>language</code>: determines the language. This option is relevant for stemming tokens. All language codes are supported. The default language is <code>en</code>.</li> </ul>
 :
 : @param $input value of type item()*
 : @param $terms value of type item()*
 : @return value of type xs:boolean
 : @error ft:options specified options are conflicting.
 :)
declare function ft:contains($input as item()*, $terms as item()*) as xs:boolean external;

(:~ 
 : Checks if the specified <code>$input</code> items contain the specified <code>$terms</code>.<br/>The function does the same as the <a href="https://docs.basex.org/wiki/Full-Text">Full-Text</a> expression <code>contains text</code>, but options can be specified more dynamically. The <code>$options</code> are the same as for <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:search">ft:search</a> </code>, and the following ones exist: <ul> <li> <code>case</code>: determines how character case is processed. Allowed values are <code>insensitive</code>, <code>sensitive</code>, <code>upper</code> and <code>lower</code>. By default, search is case-insensitive.</li> <li> <code>diacritics</code>: determines how diacritical characters are processed. Allowed values are <code>insensitive</code> and <code>sensitive</code>. By default, search is diacritical insensitive.</li> <li> <code>stemming</code>: determines is tokens are stemmed. Allowed values are <code>true</code> and <code>false</code>. By default, stemming is turned off.</li> <li> <code>language</code>: determines the language. This option is relevant for stemming tokens. All language codes are supported. The default language is <code>en</code>.</li> </ul>
 :
 : @param $input value of type item()*
 : @param $terms value of type item()*
 : @param $options value of type map(*)?
 : @return value of type xs:boolean
 : @error ft:options specified options are conflicting.
 :)
declare function ft:contains($input as item()*, $terms as item()*, $options as map(*)?) as xs:boolean external;

(:~ 
 : Returns the number of occurrences of the search terms specified in a full-text expression.
 :
 : @param $nodes value of type node()*
 : @return value of type xs:integer
 :)
declare function ft:count($nodes as node()*) as xs:integer external;

(:~ 
 : Returns the score values (0.0 - 1.0) that have been attached to the specified items. <code>0</code> is returned a value if no score was attached.
 :
 : @param $item value of type item()*
 : @return value of type xs:double*
 :)
declare function ft:score($item as item()*) as xs:double* external;

(:~ 
 : Tokenizes the given <code>$string</code>, using the current default full-text options or the <code>$options</code> specified as second argument, and returns a sequence with the tokenized string. The following options are available: <ul> <li> <code>case</code>: determines how character case is processed. Allowed values are <code>insensitive</code>, <code>sensitive</code>, <code>upper</code> and <code>lower</code>. By default, search is case insensitive.</li> <li> <code>diacritics</code>: determines how diacritical characters are processed. Allowed values are <code>insensitive</code> and <code>sensitive</code>. By default, search is diacritical insensitive.</li> <li> <code>stemming</code>: determines is tokens are stemmed. Allowed values are <code>true</code> and <code>false</code>. By default, stemming is turned off.</li> <li> <code>language</code>: determines the language. This option is relevant for stemming tokens. All language codes are supported. The default language is <code>en</code>.</li> </ul> <p>The <code>$options</code> argument can be used to control full-text processing. </p>
 :
 : @param $string value of type xs:string?
 : @return value of type xs:string*
 :)
declare function ft:tokenize($string as xs:string?) as xs:string* external;

(:~ 
 : Tokenizes the given <code>$string</code>, using the current default full-text options or the <code>$options</code> specified as second argument, and returns a sequence with the tokenized string. The following options are available: <ul> <li> <code>case</code>: determines how character case is processed. Allowed values are <code>insensitive</code>, <code>sensitive</code>, <code>upper</code> and <code>lower</code>. By default, search is case insensitive.</li> <li> <code>diacritics</code>: determines how diacritical characters are processed. Allowed values are <code>insensitive</code> and <code>sensitive</code>. By default, search is diacritical insensitive.</li> <li> <code>stemming</code>: determines is tokens are stemmed. Allowed values are <code>true</code> and <code>false</code>. By default, stemming is turned off.</li> <li> <code>language</code>: determines the language. This option is relevant for stemming tokens. All language codes are supported. The default language is <code>en</code>.</li> </ul> <p>The <code>$options</code> argument can be used to control full-text processing. </p>
 :
 : @param $string value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type xs:string*
 :)
declare function ft:tokenize($string as xs:string?, $options as map(*)?) as xs:string* external;

(:~ 
 : Normalizes the given <code>$string</code>, using the current default full-text options or the <code>$options</code> specified as second argument. The function accepts the same arguments as <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:tokenize">ft:tokenize</a> </code>; special characters and separators will be preserved.
 :
 : @param $string value of type xs:string?
 : @return value of type xs:string
 :)
declare function ft:normalize($string as xs:string?) as xs:string external;

(:~ 
 : Normalizes the given <code>$string</code>, using the current default full-text options or the <code>$options</code> specified as second argument. The function accepts the same arguments as <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:tokenize">ft:tokenize</a> </code>; special characters and separators will be preserved.
 :
 : @param $string value of type xs:string?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 :)
declare function ft:normalize($string as xs:string?, $options as map(*)?) as xs:string external;

(:~ 
 : Looks up a <code>$term</code> in a <a href="https://docs.basex.org/wiki/Full-Text#Thesaurus">Thesaurus Structure</a> supplied by <code>$node</code>. The following <code>$options</code> exist: <ul> <li> <code>relationship</code>: determines the relationship between terms</li> <li> <code>levels</code>: determines the maximum number of levels to traverse</li> </ul>
 :
 : @param $node value of type node()
 : @param $term value of type xs:string
 : @return value of type xs:string*
 :)
declare function ft:thesaurus($node as node(), $term as xs:string) as xs:string* external;

(:~ 
 : Looks up a <code>$term</code> in a <a href="https://docs.basex.org/wiki/Full-Text#Thesaurus">Thesaurus Structure</a> supplied by <code>$node</code>. The following <code>$options</code> exist: <ul> <li> <code>relationship</code>: determines the relationship between terms</li> <li> <code>levels</code>: determines the maximum number of levels to traverse</li> </ul>
 :
 : @param $node value of type node()
 : @param $term value of type xs:string
 : @param $options value of type map(*)?
 : @return value of type xs:string*
 :)
declare function ft:thesaurus($node as node(), $term as xs:string, $options as map(*)?) as xs:string* external;

(:~ 
 : Puts a marker element around the resulting <code>$nodes</code> of a full-text request.<br/>The default name of the marker element is <code>mark</code>. An alternative name can be chosen via the optional <code>$name</code> argument.<br/>Please note that: <ul> <li>The full-text expression that computes the token positions must be specified as argument of the <code>ft:mark()</code> function, as all position information is lost in subsequent processing steps. You may need to specify more than one full-text expression if you want to use the function in a FLWOR expression, as shown in Example 2.</li> <li>The supplied node must be a <a href="https://docs.basex.org/wiki/Database_Module#Database_Node">Database Node</a>. As shown in Example 3, <code>update</code> or <code>transform</code> can be utilized to convert a fragment to the required internal representation.</li> </ul>
 :
 : @param $nodes value of type node()*
 : @return value of type node()*
 :)
declare function ft:mark($nodes as node()*) as node()* external;

(:~ 
 : Puts a marker element around the resulting <code>$nodes</code> of a full-text request.<br/>The default name of the marker element is <code>mark</code>. An alternative name can be chosen via the optional <code>$name</code> argument.<br/>Please note that: <ul> <li>The full-text expression that computes the token positions must be specified as argument of the <code>ft:mark()</code> function, as all position information is lost in subsequent processing steps. You may need to specify more than one full-text expression if you want to use the function in a FLWOR expression, as shown in Example 2.</li> <li>The supplied node must be a <a href="https://docs.basex.org/wiki/Database_Module#Database_Node">Database Node</a>. As shown in Example 3, <code>update</code> or <code>transform</code> can be utilized to convert a fragment to the required internal representation.</li> </ul>
 :
 : @param $nodes value of type node()*
 : @param $name value of type xs:string
 : @return value of type node()*
 :)
declare function ft:mark($nodes as node()*, $name as xs:string) as node()* external;

(:~ 
 : Extracts and returns relevant parts of full-text results. It puts a marker element around the resulting <code>$nodes</code> of a full-text index request and chops irrelevant sections of the result.<br/>The default element name of the marker element is <code>mark</code>. An alternative element name can be chosen via the optional <code>$name</code> argument.<br/>The default length of the returned text is <code>150</code> characters. An alternative length can be specified via the optional <code>$length</code> argument. Note that the effective text length may differ from the specified text due to formatting and readibility issues.<br/>For more details on this function, please have a look at <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:mark">ft:mark</a> </code>.
 :
 : @param $nodes value of type node()*
 : @return value of type node()*
 :)
declare function ft:extract($nodes as node()*) as node()* external;

(:~ 
 : Extracts and returns relevant parts of full-text results. It puts a marker element around the resulting <code>$nodes</code> of a full-text index request and chops irrelevant sections of the result.<br/>The default element name of the marker element is <code>mark</code>. An alternative element name can be chosen via the optional <code>$name</code> argument.<br/>The default length of the returned text is <code>150</code> characters. An alternative length can be specified via the optional <code>$length</code> argument. Note that the effective text length may differ from the specified text due to formatting and readibility issues.<br/>For more details on this function, please have a look at <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:mark">ft:mark</a> </code>.
 :
 : @param $nodes value of type node()*
 : @param $name value of type xs:string
 : @return value of type node()*
 :)
declare function ft:extract($nodes as node()*, $name as xs:string) as node()* external;

(:~ 
 : Extracts and returns relevant parts of full-text results. It puts a marker element around the resulting <code>$nodes</code> of a full-text index request and chops irrelevant sections of the result.<br/>The default element name of the marker element is <code>mark</code>. An alternative element name can be chosen via the optional <code>$name</code> argument.<br/>The default length of the returned text is <code>150</code> characters. An alternative length can be specified via the optional <code>$length</code> argument. Note that the effective text length may differ from the specified text due to formatting and readibility issues.<br/>For more details on this function, please have a look at <code> <a href="https://docs.basex.org/wiki/Full-Text_Module#ft:mark">ft:mark</a> </code>.
 :
 : @param $nodes value of type node()*
 : @param $name value of type xs:string
 : @param $length value of type xs:integer
 : @return value of type node()*
 :)
declare function ft:extract($nodes as node()*, $name as xs:string, $length as xs:integer) as node()* external;
