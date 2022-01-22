declare %updating function local:update-message(
	$message as xs:string
)
{
 admin:write-log($message)
};
local:update-message("hello")