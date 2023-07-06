(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20200809115430/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions for executing system commands from XQuery.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module
 :)
module namespace proc = "http://basex.org/modules/proc";

(:~ 
 : Executes the specified command in a separate process and returns the result as string. <code>$cmd</code> is the name of the command, arguments to the command may be specified via <code>$args</code>. The <code>$options</code> parameter contains process options: <ul> <li> <code>encoding</code>: convert result to the specified encoding. If no encoding is supplied, the system’s default encoding is used.</li> <li> <code>timeout</code>: abort process execution after the specified number of seconds.</li> <li> <code>dir</code>: process command in the specified directory.</li> <li> <code>input</code>: standard string input (<code>stdin</code>) to be passed on to the command.</li> </ul>
 :
 : @param $cmd value of type xs:string
 : @return value of type xs:string
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 : @error proc:error the command could not be executed, or an I/O exception was raised.
 : @error proc:code.... If the commands returns an exit code different to 0, an error will be raised. Its code will consist of the letters <code>code</code> and four digits with the exit code.
 :)
declare function proc:system($cmd as xs:string) as xs:string external;

(:~ 
 : Executes the specified command in a separate process and returns the result as string. <code>$cmd</code> is the name of the command, arguments to the command may be specified via <code>$args</code>. The <code>$options</code> parameter contains process options: <ul> <li> <code>encoding</code>: convert result to the specified encoding. If no encoding is supplied, the system’s default encoding is used.</li> <li> <code>timeout</code>: abort process execution after the specified number of seconds.</li> <li> <code>dir</code>: process command in the specified directory.</li> <li> <code>input</code>: standard string input (<code>stdin</code>) to be passed on to the command.</li> </ul>
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @return value of type xs:string
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 : @error proc:error the command could not be executed, or an I/O exception was raised.
 : @error proc:code.... If the commands returns an exit code different to 0, an error will be raised. Its code will consist of the letters <code>code</code> and four digits with the exit code.
 :)
declare function proc:system($cmd as xs:string, $args as xs:string*) as xs:string external;

(:~ 
 : Executes the specified command in a separate process and returns the result as string. <code>$cmd</code> is the name of the command, arguments to the command may be specified via <code>$args</code>. The <code>$options</code> parameter contains process options: <ul> <li> <code>encoding</code>: convert result to the specified encoding. If no encoding is supplied, the system’s default encoding is used.</li> <li> <code>timeout</code>: abort process execution after the specified number of seconds.</li> <li> <code>dir</code>: process command in the specified directory.</li> <li> <code>input</code>: standard string input (<code>stdin</code>) to be passed on to the command.</li> </ul>
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @param $options value of type map(xs:string
 : @param xs:string) value of type 
 : @return value of type xs:string
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 : @error proc:error the command could not be executed, or an I/O exception was raised.
 : @error proc:code.... If the commands returns an exit code different to 0, an error will be raised. Its code will consist of the letters <code>code</code> and four digits with the exit code.
 :)
declare function proc:system($cmd as xs:string, $args as xs:string*, $options as map(xs:string, xs:string)) as xs:string external;

(:~ 
 : Executes the specified command in a separate process and returns the result as element: <ul> <li> <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>.</li> <li>The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a>.</li> <li>Instead of the <code>proc:error</code> error, the error message and process code will be assigned to the returned elements.</li> <li>Instead of the <code>proc:code....</code> error, the error message will be assigned to the returned element (no process code will be returned).</li> </ul> <p>The result has the following structure: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;result&gt;</span> <span class="nt">&lt;output&gt;</span>...output...<span class="nt">&lt;/output&gt;</span> <span class="nt">&lt;error&gt;</span>...error message...<span class="nt">&lt;/error&gt;</span> <span class="nt">&lt;code&gt;</span>...process code...<span class="nt">&lt;/code&gt;</span> <span class="nt">&lt;/result&gt;</span> </pre> </div>
 :
 : @param $cmd value of type xs:string
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 :)
declare function proc:execute($cmd as xs:string) as element(result) external;

(:~ 
 : Executes the specified command in a separate process and returns the result as element: <ul> <li> <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>.</li> <li>The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a>.</li> <li>Instead of the <code>proc:error</code> error, the error message and process code will be assigned to the returned elements.</li> <li>Instead of the <code>proc:code....</code> error, the error message will be assigned to the returned element (no process code will be returned).</li> </ul> <p>The result has the following structure: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;result&gt;</span> <span class="nt">&lt;output&gt;</span>...output...<span class="nt">&lt;/output&gt;</span> <span class="nt">&lt;error&gt;</span>...error message...<span class="nt">&lt;/error&gt;</span> <span class="nt">&lt;code&gt;</span>...process code...<span class="nt">&lt;/code&gt;</span> <span class="nt">&lt;/result&gt;</span> </pre> </div>
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 :)
declare function proc:execute($cmd as xs:string, $args as xs:string*) as element(result) external;

(:~ 
 : Executes the specified command in a separate process and returns the result as element: <ul> <li> <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>.</li> <li>The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a>.</li> <li>Instead of the <code>proc:error</code> error, the error message and process code will be assigned to the returned elements.</li> <li>Instead of the <code>proc:code....</code> error, the error message will be assigned to the returned element (no process code will be returned).</li> </ul> <p>The result has the following structure: </p> <div class="mw-highlight mw-content-ltr" dir="ltr"> <pre> <span/> <span class="nt">&lt;result&gt;</span> <span class="nt">&lt;output&gt;</span>...output...<span class="nt">&lt;/output&gt;</span> <span class="nt">&lt;error&gt;</span>...error message...<span class="nt">&lt;/error&gt;</span> <span class="nt">&lt;code&gt;</span>...process code...<span class="nt">&lt;/code&gt;</span> <span class="nt">&lt;/result&gt;</span> </pre> </div>
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @param $options value of type map(xs:string
 : @param xs:string) value of type 
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 : @error proc:timeout the specified timeout was exceeded.
 :)
declare function proc:execute($cmd as xs:string, $args as xs:string*, $options as map(xs:string, xs:string)) as element(result) external;

(:~ 
 : Executes the specified command and ignores the result. <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>. The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a> (but the encoding will be ignored).
 :
 : @param $cmd value of type xs:string
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 :)
declare function proc:fork($cmd as xs:string) as element(result) external;

(:~ 
 : Executes the specified command and ignores the result. <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>. The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a> (but the encoding will be ignored).
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 :)
declare function proc:fork($cmd as xs:string, $args as xs:string*) as element(result) external;

(:~ 
 : Executes the specified command and ignores the result. <code>$cmd</code> is the name of the command, and arguments to the command may be specified via <code>$args</code>. The same <code>$options</code> are allowed as for <a href="https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Process_Module#proc:system">proc:system</a> (but the encoding will be ignored).
 :
 : @param $cmd value of type xs:string
 : @param $args value of type xs:string*
 : @param $options value of type map(xs:string
 : @param xs:string) value of type 
 : @return value of type element(result)
 : @error proc:encoding the specified encoding does not exist or is not supported.
 :)
declare function proc:fork($cmd as xs:string, $args as xs:string*, $options as map(xs:string, xs:string)) as element(result) external;

(:~ 
 : Returns the system property, specified by <code>$name</code>, or a context parameter of the <code>web.xml</code> file with that name (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20200809115430/https://docs.basex.org/wiki/Web_Application#Configuration">Web Applications</a>). An empty sequence is returned if the property does not exist. For environment variables of the operating system, please use <a href="https://web.archive.org/web/20200809115430/https://www.w3.org/TR/xpath-functions-30/#func-environment-variable">fn:environment-variable</a>.
 :
 : @param $name value of type xs:string
 : @return value of type xs:string?
 :)
declare function proc:property($name as xs:string) as xs:string? external;

(:~ 
 : Returns the names of all Java system properties and context parameters of the <code>web.xml</code> file (see <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20200809115430/https://docs.basex.org/wiki/Web_Application#Configuration">Web Applications</a>). For environment variables of the operating system, please use <a href="https://web.archive.org/web/20200809115430/https://www.w3.org/TR/xpath-functions-30/#func-available-environment-variables">fn:available-environment-variables</a>.
 :
 : @return value of type xs:string*
 :)
declare function proc:property-names() as xs:string* external;
