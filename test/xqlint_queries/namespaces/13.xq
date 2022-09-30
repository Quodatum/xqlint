import module namespace user = "http://apps.28.io/user";
import module namespace session = "http://apps.28.io/session";
import module namespace api = "http://apps.28.io/api";
import module namespace archives = "http://apps.28.io/archives";

session:validate("users_list"),

let $results :=
  for $user in collection($user:collection)
  let $foo := 1
  return project($user, ("_id", "firstname", "lastname", "email", "status"))
  
return api:success(map{ results : [ $results ]}) 
