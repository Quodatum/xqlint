(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions for performing admin-centric operations such as managing database users and log data.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Admin_Module
 :)
module namespace admin = "http://basex.org/modules/admin";

(:~ 
 : Returns <a href="https://docs.basex.org/wiki/Logging">Logging</a> data compiled by the database or HTTP server: <ul> <li>If no argument is specified, a list of all log files will be returned, including the file size and date.</li> <li>If a <code>$date</code> is specified, the contents of a single log file will be returned.</li> <li>If <code>$merge</code> is set to true, related log entries will be merged. Please note that the merge might not be 100% successful, as log entries may be ambiguous.</li> </ul>
 :
 : @return value of type element(file)*
 :)
declare function admin:logs() as element(file)* external;

(:~ 
 : Returns <a href="https://docs.basex.org/wiki/Logging">Logging</a> data compiled by the database or HTTP server: <ul> <li>If no argument is specified, a list of all log files will be returned, including the file size and date.</li> <li>If a <code>$date</code> is specified, the contents of a single log file will be returned.</li> <li>If <code>$merge</code> is set to true, related log entries will be merged. Please note that the merge might not be 100% successful, as log entries may be ambiguous.</li> </ul>
 :
 : @param $date value of type xs:string
 : @return value of type element(entry)*
 :)
declare function admin:logs($date as xs:string) as element(entry)* external;

(:~ 
 : Returns <a href="https://docs.basex.org/wiki/Logging">Logging</a> data compiled by the database or HTTP server: <ul> <li>If no argument is specified, a list of all log files will be returned, including the file size and date.</li> <li>If a <code>$date</code> is specified, the contents of a single log file will be returned.</li> <li>If <code>$merge</code> is set to true, related log entries will be merged. Please note that the merge might not be 100% successful, as log entries may be ambiguous.</li> </ul>
 :
 : @param $date value of type xs:string
 : @param $merge value of type xs:boolean
 : @return value of type element(entry)*
 :)
declare function admin:logs($date as xs:string, $merge as xs:boolean) as element(entry)* external;

(:~ 
 : Writes a string to the database logs, along with current user data (timestamp, username). An optional log <code>$type</code> can be specified. If omitted, the log type is <code>INFO</code>.<br/>If the function is called from a database client, the IP will be logged. Otherwise, the string <code>SERVER</code> will be logged.
 :
 : @param $text value of type xs:string
 : @error admin:type Type string contains whitespaces.
 :)
declare function admin:write-log($text as xs:string) as empty-sequence() external;

(:~ 
 : Writes a string to the database logs, along with current user data (timestamp, username). An optional log <code>$type</code> can be specified. If omitted, the log type is <code>INFO</code>.<br/>If the function is called from a database client, the IP will be logged. Otherwise, the string <code>SERVER</code> will be logged.
 :
 : @param $text value of type xs:string
 : @param $type value of type xs:string
 : @error admin:type Type string contains whitespaces.
 :)
declare function admin:write-log($text as xs:string, $type as xs:string) as empty-sequence() external;

(:~ 
 : Deletes the log entries from the specified <code>$date</code>
 :
 : @param $date value of type xs:string
 : @error admin:today Today's log file cannot be deleted.
 : @error admin:delete An error occurred while deleting a log file.
 :)
declare function admin:delete-logs($date as xs:string) as empty-sequence() external;

(:~ 
 : Returns an element sequence with all currently opened database sessions, including the username, address (IP:port) and an optionally opened database.<br/>The output of this function and the <code> <a href="https://docs.basex.org/wiki/Commands#SHOW_SESSIONS">SHOW SESSIONS</a> </code> command is similar.
 :
 : @return value of type element(session)*
 :)
declare function admin:sessions() as element(session)* external;
