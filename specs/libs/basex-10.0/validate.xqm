(:~ 
 : This <a href="https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to perform validations against DTDs, XML Schema and RelaxNG. The documentation further describes how to use Schematron validation with BaseX.
 :
 : @author quodatum/xqlint 2023-07-03T15:34:32.165+01:00
 : @see https://docs.basex.org/wiki/Validation_Module
 :)
module namespace validate = "http://basex.org/modules/validate";

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns an empty sequence or an error.
 :
 : @param  validate:dtd($input value of type item()
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd($input as item()) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns an empty sequence or an error.
 :
 : @param  validate:dtd($input value of type item()
 : @param $schema value of type xs:string?
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd($input as item(), $schema as xs:string?) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors in a string sequence.
 :
 : @param  validate:dtd-info($input value of type item()
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd-info($input as item()) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors in a string sequence.
 :
 : @param  validate:dtd-info($input value of type item()
 : @param $schema value of type xs:string?
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd-info($input as item(), $schema as xs:string?) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors as XML.
 :
 : @param  validate:dtd-report($input value of type item()
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd-report($input as item()) as element(report)  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors as XML.
 :
 : @param  validate:dtd-report($input value of type item()
 : @param $schema value of type xs:string?
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no DTD validator is available.
 :)
declare function  validate:dtd-report($input as item(), $schema as xs:string?) as element(report)  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>. The supported <code>$options</code> are: <ul><li><code>cache</code>: Generated schemas are cached and reused.</li><li>All other options are handled as features and passed on to the validator.</li></ul>
 :
 : @param  validate:xsd($input value of type item()
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd($input as item()) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>. The supported <code>$options</code> are: <ul><li><code>cache</code>: Generated schemas are cached and reused.</li><li>All other options are handled as features and passed on to the validator.</li></ul>
 :
 : @param  validate:xsd($input value of type item()
 : @param $schema value of type item()?
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd($input as item(), $schema as item()?) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>. The supported <code>$options</code> are: <ul><li><code>cache</code>: Generated schemas are cached and reused.</li><li>All other options are handled as features and passed on to the validator.</li></ul>
 :
 : @param  validate:xsd($input value of type item()
 : @param $schema value of type item()?
 : @param $options value of type map(*)?
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd($input as item(), $schema as item()?, $options as map(*)?) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors in a string sequence. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-info($input value of type item()
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-info($input as item()) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors in a string sequence. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-info($input value of type item()
 : @param $schema value of type item()?
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-info($input as item(), $schema as item()?) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors in a string sequence. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-info($input value of type item()
 : @param $schema value of type item()?
 : @param $options value of type map(*)?
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-info($input as item(), $schema as item()?, $options as map(*)?) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors as XML. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-report($input value of type item()
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-report($input as item()) as element(report)  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors as XML. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-report($input value of type item()
 : @param $schema value of type xs:string?
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-report($input as item(), $schema as xs:string?) as element(report)  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code> and returns warnings, errors and fatal errors as XML. See <code><a href="https://docs.basex.org/wiki/Validation_Module#validate:xsd">validate:xsd</a></code> for more information of the <code>$options</code> parameter.
 :
 : @param  validate:xsd-report($input value of type item()
 : @param $schema value of type xs:string?
 : @param $options value of type map(*)
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found no XML Schema validator is available.
 :)
declare function  validate:xsd-report($input as item(), $schema as xs:string?, $options as map(*)) as element(report)  external;

(:~ 
 : Returns the name of the applied XSD processor.
 :
 : @param  validate:xsd-processor( value of type 
 : @return value of type xs:string 
 :)
declare function  validate:xsd-processor() as xs:string  external;

(:~ 
 : Returns the supported version of XSD Schema.
 :
 : @param  validate:xsd-version( value of type 
 : @return value of type xs:string 
 :)
declare function  validate:xsd-version() as xs:string  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation.
 :
 : @param  validate:rng($input value of type item()
 : @param $schema value of type item()
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found the RelaxNG validator is not available.
 :)
declare function  validate:rng($input as item(), $schema as item()) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation.
 :
 : @param  validate:rng($input value of type item()
 : @param $schema value of type item()
 : @param $compact value of type xs:boolean?
 : @return value of type empty-sequence() 
 : @error validate:error the validation fails.
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found the RelaxNG validator is not available.
 :)
declare function  validate:rng($input as item(), $schema as item(), $compact as xs:boolean?) as empty-sequence()  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation, and returns warnings, errors and fatal errors in a string sequence.
 :
 : @param  validate:rng-info($input value of type item()
 : @param $schema value of type item()
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found the RelaxNG validator is not available.
 :)
declare function  validate:rng-info($input as item(), $schema as item()) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation, and returns warnings, errors and fatal errors in a string sequence.
 :
 : @param  validate:rng-info($input value of type item()
 : @param $schema value of type item()
 : @param $compact value of type xs:boolean?
 : @return value of type xs:string* 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found the RelaxNG validator is not available.
 :)
declare function  validate:rng-info($input as item(), $schema as item(), $compact as xs:boolean?) as xs:string*  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation, and returns warnings, errors and fatal errors as XML.
 :
 : @param  validate:rng-report($input value of type item()
 : @param $schema value of type xs:string
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found The RelaxNG validator is not available.
 :)
declare function  validate:rng-report($input as item(), $schema as xs:string) as element(report)  external;

(:~ 
 : Validates the XML <code>$input</code> document against a <code>$schema</code>, using the XML or <code>$compact</code> notation, and returns warnings, errors and fatal errors as XML.
 :
 : @param  validate:rng-report($input value of type item()
 : @param $schema value of type xs:string
 : @param $compact value of type xs:boolean?
 : @return value of type element(report) 
 : @error validate:init the validation process cannot be started.
 : @error validate:not-found The RelaxNG validator is not available.
 :)
declare function  validate:rng-report($input as item(), $schema as xs:string, $compact as xs:boolean?) as element(report)  external;
