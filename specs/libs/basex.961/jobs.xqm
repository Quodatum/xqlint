(:~ 
 : This <a href="http://docs.basex.org/wiki/Module_Library">XQuery Module</a> provides functions for organizing scheduled, queued, running and cached jobs. Jobs can be commands, queries, client or HTTP requests.
 :
 : @author BaseX Team
 : @see /wiki/Jobs_Module
 :)
module namespace jobs = "http://basex.org/modules/jobs";

(:~ 
 : Returns the id of the current job.
 :
 : @return value of type xs:string
 :)
declare function jobs:current() as xs:string external;

(:~ 
 : Returns the ids of all jobs that are currently registered. The list includes scheduled, queued, running, stopped, and finished jobs with cached results.
 :
 : @return value of type xs:string*
 :)
declare function jobs:list() as xs:string* external;

(:~ 
 : Returns information on all jobs that are currently registered, or on a job with the specified <code>$id</code> (or an empty sequence if this job is not found). The list includes scheduled, queued, running jobs, and cached jobs. A string representation of the job, or its URI, will be returned as value. The returned elements have additional attributes: <ul> <li> <code>id</code>: job id </li> <li> <code>type</code>: type of the job (command, query, REST, RESTXQ, etc.) </li> <li> <code>state</code>: current state of the job (scheduled, queued, running, or cached) </li> <li> <code>user</code>: the user who started the job </li> <li> <code>duration</code>: evaluation time (for running and cached jobs) </li> <li> <code>start</code>: dateTime string with next start (for jobs that will be executed repeatedly) </li> </ul>
 :
 : @return value of type element(job)*
 :)
declare function jobs:list-details() as element(job)* external;

(:~ 
 : Returns information on all jobs that are currently registered, or on a job with the specified <code>$id</code> (or an empty sequence if this job is not found). The list includes scheduled, queued, running jobs, and cached jobs. A string representation of the job, or its URI, will be returned as value. The returned elements have additional attributes: <ul> <li> <code>id</code>: job id </li> <li> <code>type</code>: type of the job (command, query, REST, RESTXQ, etc.) </li> <li> <code>state</code>: current state of the job (scheduled, queued, running, or cached) </li> <li> <code>user</code>: the user who started the job </li> <li> <code>duration</code>: evaluation time (for running and cached jobs) </li> <li> <code>start</code>: dateTime string with next start (for jobs that will be executed repeatedly) </li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type element(job)*
 :)
declare function jobs:list-details($id as xs:string) as element(job)* external;

(:~ 
 : Indicates if the evaluation of an already running job with the specified <code>$id</code> has finished. As the ids of finished jobs will usually be discarded, unless caching is enabled, the function will also return <code>true</code> for unknown jobs. <ul> <li> <code>false</code> indicates that the job id is scheduled, queued, or currently running. </li> <li> <code>true</code> will be returned if the job has either finished, or if the id is unknown (because the ids of all finished jobs will not be cached). </li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type xs:boolean
 :)
declare function jobs:finished($id as xs:string) as xs:boolean external;

(:~ 
 : Returns a list of all jobs that have been persistently registered as <a href="/wiki/Jobs_Module#Services">Services</a>.
 :
 : @return value of type element(job)*
 : @error jobs:services Registered services cannot be parsed.
 :)
declare function jobs:services() as element(job)* external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns a query id. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and context items can be declared via <code>$bindings</code> (see <a href="http://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li> The result will be cached in main-memory until it is fetched via <a href="/wiki/Jobs_Module#jobs:result">jobs:result</a>, or until <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded. </li> <li> If the query raises an error, it will be cached and returned instead. </li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time or dateTime can be specified to delay the execution of the query: <ul> <li> If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples for valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified. </li> <li> If a time is specified, the query will be executed at this time of the day. Examples for valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day. </li> <li> If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past. </li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same id is still running, it will be skipped. </li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time. </li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>. </li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists. </li> <li> <code>service</code>: additionally registers the job as <a href="/wiki/Jobs_Module#Services">service</a>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:eval($query as xs:string) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns a query id. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and context items can be declared via <code>$bindings</code> (see <a href="http://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li> The result will be cached in main-memory until it is fetched via <a href="/wiki/Jobs_Module#jobs:result">jobs:result</a>, or until <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded. </li> <li> If the query raises an error, it will be cached and returned instead. </li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time or dateTime can be specified to delay the execution of the query: <ul> <li> If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples for valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified. </li> <li> If a time is specified, the query will be executed at this time of the day. Examples for valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day. </li> <li> If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past. </li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same id is still running, it will be skipped. </li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time. </li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>. </li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists. </li> <li> <code>service</code>: additionally registers the job as <a href="/wiki/Jobs_Module#Services">service</a>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:eval($query as xs:string, $bindings as map(*)?) as xs:string external;

(:~ 
 : Schedules the evaluation of the supplied <code>$query</code> and returns a query id. The query will be queued, and the result will optionally be cached. Queries can be updating. Variables and context items can be declared via <code>$bindings</code> (see <a href="http://docs.basex.org/wiki/XQuery_Module#xquery:eval">xquery:eval</a> for more details). The following <code>$options</code> can be supplied: <ul> <li> <code>cache</code>: indicates if the query result will be cached or ignored (default: <code>false</code>): <ul> <li> The result will be cached in main-memory until it is fetched via <a href="/wiki/Jobs_Module#jobs:result">jobs:result</a>, or until <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> is exceeded. </li> <li> If the query raises an error, it will be cached and returned instead. </li> </ul> </li> <li> <code>start</code>: a dayTimeDuration, time or dateTime can be specified to delay the execution of the query: <ul> <li> If a dayTimeDuration is specified, the query will be queued after the specified duration has passed. Examples for valid values are: <code>P1D</code> (1 day), <code>PT5M</code> (5 minutes), <code>PT0.1S</code> (100 ms). An error will be raised if a negative value is specified. </li> <li> If a time is specified, the query will be executed at this time of the day. Examples for valid times are: <code>02:00:00</code> (2am local time), <code>12:00:00Z</code> (noon, UTC). If the time lies in the past, the query will be executed the next day. </li> <li> If a dateTime is specified, the query will be executed at this date. Examples for valid values are: <code>2018-12-31T23:59:59</code> (New Year's Eve 2018, close to midnight). An error will be raised if the specified time lies in the past. </li> </ul> </li> <li> <code>interval</code>: a dayTimeDuration string can be specified to execute the query periodically. An error is raised if the specified interval is less than one second (<code>PT1S</code>). If the next scheduled call is due, and if a query with the same id is still running, it will be skipped. </li> <li> <code>end</code>: scheduling can be stopped after a given time or duration. The string format is the same as for <code>start</code>. An error is raised if the resulting end time is smaller than the start time. </li> <li> <code>base-uri</code>: sets the <a href="https://www.w3.org/TR/xquery-31/#dt-static-base-uri">base-uri property</a> for the query. This URI will be used when resolving relative URIs, such as with <code>fn:doc</code>. </li> <li> <code>id</code>: sets a custom job id. The id must not start with the standard <code>job</code> prefix, and it can only be assigned if no job with the same name exists. </li> <li> <code>service</code>: additionally registers the job as <a href="/wiki/Jobs_Module#Services">service</a>. </li> </ul>
 :
 : @param $query value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:eval($query as xs:string, $bindings as map(*)?, $options as map(*)?) as xs:string external;

(:~ 
 : Schedules the evaluation of the XQuery expression located at <code>$uri</code> and returns a query id. For further details, see <a href="/wiki/Jobs_Module#jobs:eval">jobs:eval</a>.
 :
 : @param $uri value of type xs:string
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:invoke($uri as xs:string) as xs:string external;

(:~ 
 : Schedules the evaluation of the XQuery expression located at <code>$uri</code> and returns a query id. For further details, see <a href="/wiki/Jobs_Module#jobs:eval">jobs:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:invoke($uri as xs:string, $bindings as map(*)?) as xs:string external;

(:~ 
 : Schedules the evaluation of the XQuery expression located at <code>$uri</code> and returns a query id. For further details, see <a href="/wiki/Jobs_Module#jobs:eval">jobs:eval</a>.
 :
 : @param $uri value of type xs:string
 : @param $bindings value of type map(*)?
 : @param $options value of type map(*)?
 : @return value of type xs:string
 : @error jobs:overflow Query execution is rejected, because too many jobs are queued or being executed. <code> <a href="http://docs.basex.org/wiki/Options#CACHETIMEOUT">CACHETIMEOUT</a> </code> can be decreased if the default setting is too restrictive.
 : @error jobs:range A specified time or duration is out of range.
 : @error jobs:id The specified id is invalid or has already been assigned.
 : @error jobs:options The specified options are conflicting.
 :)
declare function jobs:invoke($uri as xs:string, $bindings as map(*)?, $options as map(*)?) as xs:string external;

(:~ 
 : Returns the cached result of a job with the specified job <code>$id</code>: <ul> <li> Results can only be retrieved once. After retrieval, the cached result will be dropped. </li> <li> If the original job has raised an error, the cached error will be raised instead. </li> </ul>
 :
 : @param $id value of type xs:string
 : @return value of type item()*
 : @error jobs:running the job is still running.
 : @error jobs:unknown the supplied id is unknown: The id is unknown, or the result has already been retrieved.
 :)
declare function jobs:result($id as xs:string) as item()* external;

(:~ 
 : Triggers the cancelation of a job with the specified <code>$id</code>, drops the cached result of a query, or cancels a scheduled job. Unknown ids are ignored. All jobs are gracefully stopped; it is up to the process to decide when it is safe to shut down. The following <code>$options</code> can be supplied: <ul> <li> <code>service</code>: additionally removes the job from the <a href="/wiki/Jobs_Module#Services">job services</a> list. </li> </ul>
 :
 : @param $id value of type xs:string
 :)
declare function jobs:stop($id as xs:string) as empty-sequence() external;

(:~ 
 : Waits for the completion of a job with the specified <code>$id</code>: <ul> <li> The function will terminate immediately if the job id is unknown. This is the case if a future job has not been queued yet, or if the id has already been discarded after job evaluation. </li> <li> If the function is called with the id of a queued job, or repeatedly executed job, it may stall and never terminate. </li> </ul>
 :
 : @param $id value of type xs:string
 : @error jobs:self The current job is addressed.
 :)
declare function jobs:wait($id as xs:string) as empty-sequence() external;
