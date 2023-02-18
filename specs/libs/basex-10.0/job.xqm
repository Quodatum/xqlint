(:~ 
 : <font color="orangered">Updated with Version 10:</font> Renamed from <i>Jobs Module</i> to <i>Job Module</i>. The namespace URI has been updated as well.
 :
 : @author BaseX Team
 : @see https://docs.basex.org/wiki/Job_Module
 :)
module namespace job = "http://basex.org/modules/job";

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> (<code>xs:string</code>, or of type <code>xs:anyURI</code>, pointing to a resource), and returns a query ID. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and the context value can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li>The result will be cached in main-memory until it is fetched via <code> <a href="https://docs.basex.org/wiki/Job_Module#job:result">job:result</a> </code>, or until <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded.</li> <li>If the query raises an error, it will be cached and returned instead.</li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time, dateTime or integer can be specified to delay the execution of the query: <ul> <li>If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples of valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified.</li> <li>If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past.</li> <li>If a time is specified, the query will be executed at this time of the day. Examples of valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day.</li> <li>An integer will be interpreted as minutes. If the specified number is greater than the elapsed minutes of the current hour, the query will be executed one hour later.</li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same ID is still running, it will be skipped.</li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time.</li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job ID. The ID must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> <li> <code>service</code>: additionally registers the job as <a href="https://docs.basex.org/wiki/Job_Module#Services">service</a>. Registered services must have no variable bindings.</li> <li> <code>log</code>: writes the specified string to the <a href="https://docs.basex.org/wiki/Logging">database logs</a>. Two log entries are stored, one at the beginning and another one after the execution of the job.</li> </ul>
 :
 : @param $query value of type xs:anyAtomicType
 : @return value of type xs:string
 : @error job:overflow Query execution is rejected because too many jobs are queued or being executed. <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error job:range A specified time or duration is out of range.
 : @error job:id The specified ID is invalid or has already been assigned.
 : @error job:options The specified options are conflicting.
 :)
declare function job:eval($query as xs:anyAtomicType) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> (<code>xs:string</code>, or of type <code>xs:anyURI</code>, pointing to a resource), and returns a query ID. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and the context value can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li>The result will be cached in main-memory until it is fetched via <code> <a href="https://docs.basex.org/wiki/Job_Module#job:result">job:result</a> </code>, or until <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded.</li> <li>If the query raises an error, it will be cached and returned instead.</li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time, dateTime or integer can be specified to delay the execution of the query: <ul> <li>If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples of valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified.</li> <li>If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past.</li> <li>If a time is specified, the query will be executed at this time of the day. Examples of valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day.</li> <li>An integer will be interpreted as minutes. If the specified number is greater than the elapsed minutes of the current hour, the query will be executed one hour later.</li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same ID is still running, it will be skipped.</li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time.</li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job ID. The ID must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> <li> <code>service</code>: additionally registers the job as <a href="https://docs.basex.org/wiki/Job_Module#Services">service</a>. Registered services must have no variable bindings.</li> <li> <code>log</code>: writes the specified string to the <a href="https://docs.basex.org/wiki/Logging">database logs</a>. Two log entries are stored, one at the beginning and another one after the execution of the job.</li> </ul>
 :
 : @param $query value of type xs:anyAtomicType
 : @param $bindings value of type map(*)?
 : @return value of type xs:string
 : @error job:overflow Query execution is rejected because too many jobs are queued or being executed. <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error job:range A specified time or duration is out of range.
 : @error job:id The specified ID is invalid or has already been assigned.
 : @error job:options The specified options are conflicting.
 :)
declare function job:eval($query as xs:anyAtomicType, $bindings as map(*)?) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> (<code>xs:string</code>, or of type <code>xs:anyURI</code>, pointing to a resource), and returns a query ID. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and the context value can be declared via <code>$bindings</code> (see <code> <a href="https://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> </code> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li>The result will be cached in main-memory until it is fetched via <code> <a href="https://docs.basex.org/wiki/Job_Module#job:result">job:result</a> </code>, or until <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded.</li> <li>If the query raises an error, it will be cached and returned instead.</li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time, dateTime or integer can be specified to delay the execution of the query: <ul> <li>If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples of valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified.</li> <li>If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past.</li> <li>If a time is specified, the query will be executed at this time of the day. Examples of valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day.</li> <li>An integer will be interpreted as minutes. If the specified number is greater than the elapsed minutes of the current hour, the query will be executed one hour later.</li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same ID is still running, it will be skipped.</li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time.</li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>.</li> <li> <code>id</code>: sets a custom job ID. The ID must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists.</li> <li> <code>service</code>: additionally registers the job as <a href="https://docs.basex.org/wiki/Job_Module#Services">service</a>. Registered services must have no variable bindings.</li> <li> <code>log</code>: writes the specified string to the <a href="https://docs.basex.org/wiki/Logging">database logs</a>. Two log entries are stored, one at the beginning and another one after the execution of the job.</li> </ul>
 :
 : @param $query value of type xs:anyAtomicType
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 : @error job:overflow Query execution is rejected because too many jobs are queued or being executed. <code> <a href="https://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error job:range A specified time or duration is out of range.
 : @error job:id The specified ID is invalid or has already been assigned.
 : @error job:options The specified options are conflicting.
 :)
declare function job:eval($query as xs:anyAtomicType, $bindings as map(*)?, $options as map(*)?) as xs:string external;

(:~ 
 : Returns the cached result of a job with the specified job <code>$id</code>: <ul> <li>If the original job has raised an error, the cached error will be raised instead.</li> <li>The cached result or error will be dropped after it has been retrieved.</li> <li>If the result has not been cached or if it has been dropped, an empty sequence is returned.</li> </ul> <p>The following <code>$options</code> can be supplied: </p> <ul> <li> <code>keep</code>: Keep the cached result or error after retrieval.</li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type item()*
 :)
declare function job:result($id as xs:string) as item()* external;

(:~ 
 : Returns the cached result of a job with the specified job <code>$id</code>: <ul> <li>If the original job has raised an error, the cached error will be raised instead.</li> <li>The cached result or error will be dropped after it has been retrieved.</li> <li>If the result has not been cached or if it has been dropped, an empty sequence is returned.</li> </ul> <p>The following <code>$options</code> can be supplied: </p> <ul> <li> <code>keep</code>: Keep the cached result or error after retrieval.</li> </ul>
 :
 : @param $id value of type xs:string
 : @param $options value of type map(*)
 : @return value of type item()*
 :)
declare function job:result($id as xs:string, $options as map(*)) as item()* external;

(:~ 
 : Triggers the cancelation of a job with the specified <code>$id</code>, cancels a scheduled job or removes a cached result. Unknown IDs are ignored. All jobs are gracefully stopped; it is up to the process to decide when it is safe to shut down. The following <code>$options</code> can be supplied: <ul> <li> <code>service</code>: additionally removes the job from the <a href="https://docs.basex.org/wiki/Job_Module#Services">job services</a> list.</li> </ul>
 :
 : @param $id value of type xs:string
 :)
declare function job:remove($id as xs:string) as empty-sequence() external;

(:~ 
 : Triggers the cancelation of a job with the specified <code>$id</code>, cancels a scheduled job or removes a cached result. Unknown IDs are ignored. All jobs are gracefully stopped; it is up to the process to decide when it is safe to shut down. The following <code>$options</code> can be supplied: <ul> <li> <code>service</code>: additionally removes the job from the <a href="https://docs.basex.org/wiki/Job_Module#Services">job services</a> list.</li> </ul>
 :
 : @param $id value of type xs:string
 : @param $options value of type map(*)?
 :)
declare function job:remove($id as xs:string, $options as map(*)?) as empty-sequence() external;

(:~ 
 : Waits for the completion of a job with the specified <code>$id</code>: <ul> <li>The function will terminate immediately if the job ID is unknown. This is the case if a future job has not been queued yet, or if the ID has already been discarded after job evaluation.</li> <li>If the function is called with the ID of a queued job, or repeatedly executed job, it may stall and never terminate.</li> </ul>
 :
 : @param $id value of type xs:string
 : @error job:self The current job is addressed.
 :)
declare function job:wait($id as xs:string) as empty-sequence() external;

(:~ 
 : Returns the ID of the current job.
 :
 : @return value of type xs:string
 :)
declare function job:current() as xs:string external;

(:~ 
 : Returns the IDs of all jobs that are currently registered. The list includes scheduled, queued, running, stopped, and finished jobs with cached results.
 :
 : @return value of type xs:string*
 :)
declare function job:list() as xs:string* external;

(:~ 
 : Returns information on all jobs that are currently registered, or on a job with the specified <code>$id</code> (or an empty sequence if this job is not found). The list includes scheduled, queued, running jobs, and cached jobs. A string representation of the job, or its URI, will be returned as a value. The returned elements have additional attributes: <ul> <li> <code>id</code>: job ID</li> <li> <code>type</code>: type of the job (command, query, REST, RESTXQ, etc.)</li> <li> <code>state</code>: current state of the job: <code>scheduled</code>, <code>queued</code>, <code>running</code>, <code>cached</code> </li> <li> <code>user</code>: user who started the job</li> <li> <code>duration</code>: evaluation time (included if a job is running or if the result was cached)</li> <li> <code>start</code>: next start of job (included if a job will be executed repeatedly)</li> <li> <code>time</code>: time when job was registered</li> </ul>
 :
 : @return value of type element(job)*
 :)
declare function job:list-details() as element(job)* external;

(:~ 
 : Returns information on all jobs that are currently registered, or on a job with the specified <code>$id</code> (or an empty sequence if this job is not found). The list includes scheduled, queued, running jobs, and cached jobs. A string representation of the job, or its URI, will be returned as a value. The returned elements have additional attributes: <ul> <li> <code>id</code>: job ID</li> <li> <code>type</code>: type of the job (command, query, REST, RESTXQ, etc.)</li> <li> <code>state</code>: current state of the job: <code>scheduled</code>, <code>queued</code>, <code>running</code>, <code>cached</code> </li> <li> <code>user</code>: user who started the job</li> <li> <code>duration</code>: evaluation time (included if a job is running or if the result was cached)</li> <li> <code>start</code>: next start of job (included if a job will be executed repeatedly)</li> <li> <code>time</code>: time when job was registered</li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type element(job)*
 :)
declare function job:list-details($id as xs:string) as element(job)* external;

(:~ 
 : Returns the variable bindings of an existing job with the specified <code>$id</code>. If no variables have been bound to this job, an empty map is returned.
 :
 : @param $id value of type xs:string
 : @return value of type map(*)
 :)
declare function job:bindings($id as xs:string) as map(*) external;

(:~ 
 : Indicates if the evaluation of an already running job with the specified <code>$id</code> has finished. As the IDs of finished jobs will usually be discarded, unless caching is enabled, the function will also return <code>true</code> for unknown jobs. <ul> <li> <code>false</code> indicates that the job ID is scheduled, queued, or currently running.</li> <li> <code>true</code> will be returned if the job has either finished, or if the ID is unknown (because the IDs of all finished jobs will not be cached).</li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type xs:boolean
 :)
declare function job:finished($id as xs:string) as xs:boolean external;

(:~ 
 : Returns a list of all jobs that have been persistently registered as <a href="https://docs.basex.org/wiki/Job_Module#Services">Services</a>.
 :
 : @return value of type element(job)*
 : @error job:services Registered services cannot be parsed.
 :)
declare function job:services() as element(job)* external;
