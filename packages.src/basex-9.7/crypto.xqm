(:~ 
 : This <a href="https://web.archive.org/web/20220623230943/https://docs.basex.org/web/20220623231031/https://docs.basex.org/wiki/Module_Library">XQuery Module</a> contains functions to perform cryptographic operations in XQuery. The cryptographic module is based on an early draft of the <a href="https://web.archive.org/web/20220623231031/http://expath.org/spec/crypto/20110810">EXPath Cryptographic Module</a> and provides the following functionality: creation of message authentication codes (HMAC), encryption and decryption, and creation and validation of XML Digital Signatures.
 :
 : @author BaseX Team
 : @see https://web.archive.org/web/20220623231014/https://docs.basex.org/wiki/Cryptographic_Module
 :)
module namespace crypto = "http://expath.org/ns/crypto";
declare namespace experr = "http://expath.org/ns/error";

(:~ 
 : Creates an authentication code for the specified <code>$data</code> via a cryptographic hash function: <ul> <li> <code>$key</code> must not be empty.</li> <li> <code>$algorithm</code> describes the hash algorithm which is used for encryption. Currently supported are <code>md5</code>, <code>sha1</code>, <code>sha256</code>, <code>sha384</code>, <code>sha512</code>. Default is <code>md5</code>.</li> <li> <code>$encoding</code> must either be <code>hex</code> or <code>base64</code>; it specifies the encoding of the returned authentication code. Default is <code>base64</code>.</li> </ul>
 :
 : @param $data value of type xs:anyAtomicType
 : @param $key value of type xs:anyAtomicType
 : @param $algorithm value of type xs:string
 : @return value of type xs:string
 : @error experr:CX0013 the specified hashing algorithm is not supported.
 : @error experr:CX0014 the specified encoding method is not supported.
 : @error experr:CX0019 the specified secret key is invalid.
 :)
declare function crypto:hmac($data as xs:anyAtomicType, $key as xs:anyAtomicType, $algorithm as xs:string) as xs:string external;

(:~ 
 : Creates an authentication code for the specified <code>$data</code> via a cryptographic hash function: <ul> <li> <code>$key</code> must not be empty.</li> <li> <code>$algorithm</code> describes the hash algorithm which is used for encryption. Currently supported are <code>md5</code>, <code>sha1</code>, <code>sha256</code>, <code>sha384</code>, <code>sha512</code>. Default is <code>md5</code>.</li> <li> <code>$encoding</code> must either be <code>hex</code> or <code>base64</code>; it specifies the encoding of the returned authentication code. Default is <code>base64</code>.</li> </ul>
 :
 : @param $data value of type xs:anyAtomicType
 : @param $key value of type xs:anyAtomicType
 : @param $algorithm value of type xs:string
 : @param $encoding value of type xs:string
 : @return value of type xs:string
 : @error experr:CX0013 the specified hashing algorithm is not supported.
 : @error experr:CX0014 the specified encoding method is not supported.
 : @error experr:CX0019 the specified secret key is invalid.
 :)
declare function crypto:hmac($data as xs:anyAtomicType, $key as xs:anyAtomicType, $algorithm as xs:string, $encoding as xs:string) as xs:string external;

(:~ 
 : Encrypts data with the specified key: <ul> <li> <code>$data</code> must be a string or binary item.</li> <li> <code>$type</code> must be <code>symmetric</code>.</li> <li> <code>$key</code> is the secret key which is used for both encryption and decryption of input data. It must be a string or binary item. Its length is fixed and depends on the chosen algorithm: 8 bytes for <code>DES</code>, 16 bytes for <code>AES</code>.</li> <li> <code>$algorithm</code> must either be <code>DES</code> or <code>AES</code>. Default is <code>DES</code>.</li> </ul>
 :
 : @param $data value of type xs:anyAtomicType
 : @param $type value of type xs:string
 : @param $key value of type xs:anyAtomicType
 : @param $algorithm value of type xs:string
 : @return value of type xs:base64Binary
 : @error experr:CX0016 padding problems arise.
 : @error experr:CX0017 padding is incorrect.
 : @error experr:CX0018 the encryption type is not supported.
 : @error experr:CX0019 the secret key is invalid.
 : @error experr:CX0020 the block size is incorrect.
 : @error experr:CX0021 the specified encryption algorithm is not supported.
 :)
declare function crypto:encrypt($data as xs:anyAtomicType, $type as xs:string, $key as xs:anyAtomicType, $algorithm as xs:string) as xs:base64Binary external;

(:~ 
 : Encrypts data with the specified key: <ul> <li> <code>$data</code> must be a string or binary item.</li> <li> <code>$type</code> must be <code>symmetric</code>.</li> <li> <code>$key</code> is the secret key which is used for both encryption and decryption of input data. It must be a string or binary item. Its length is fixed and depends on the chosen algorithm: 8 bytes for <code>DES</code>, 16 bytes for <code>AES</code>.</li> <li> <code>$algorithm</code> must either be <code>DES</code> or <code>AES</code>. Default is <code>DES</code>.</li> </ul>
 :
 : @param $data value of type xs:anyAtomicType
 : @param $type value of type xs:string
 : @param $key value of type xs:anyAtomicType
 : @param $algorithm value of type xs:string
 : @return value of type xs:string
 : @error experr:CX0016 padding problems arise.
 : @error experr:CX0017 padding is incorrect.
 : @error experr:CX0018 the encryption type is not supported.
 : @error experr:CX0019 the secret key is invalid.
 : @error experr:CX0020 the block size is incorrect.
 : @error experr:CX0021 the specified encryption algorithm is not supported.
 :)
declare function crypto:decrypt($data as xs:anyAtomicType, $type as xs:string, $key as xs:anyAtomicType, $algorithm as xs:string) as xs:string external;

(:~ 
 : <code>$canonicalization</code> must either be <code>inclusive-with-comments</code>, <code>inclusive</code>, <code>exclusive-with-comments</code> or <code>exclusive</code>. <b>Default is <code>inclusive-with-comments</code> </b>.<br/> <p> <code>$digest</code> must be one of the following: <code>SHA1</code>, <code>SHA256</code> or <code>SHA512</code>. <b>Default is <code>SHA1</code> </b>.<br/> <code>$signature</code> must either be <code>RSA_SHA1</code> or <code>DSA_SHA1</code>. <b>Default is <code>RSA_SHA1</code> </b>.<br/> <code>$prefix</code> may be empty and prefixes the <code>Signature</code> element accordingly.<br/> <code>$type</code> is the signature type. It must either be <code>enveloped</code> or <code>enveloping</code> (detached signatures are not supported so far). <b>Default is <code>enveloped</code> </b>.<br/> <code>$xpath</code> is an arbitrary XPath expression which specifies a subset of the document that is to be signed.<br/> <code>$certificate</code> is the digitial certificate used to sign the input document.<br/> <code>$ext</code> may either be an <code>$xpath</code> expression or a <code>$certificate</code>.<br/> </p>
 :
 : @param $input value of type node()
 : @param $canonicalization value of type xs:string
 : @param $digest value of type xs:string
 : @param $signature value of type xs:string
 : @param $prefix value of type xs:string
 : @param $type value of type xs:string
 : @return value of type node()
 : @error experr:CX0001 the canonicalization algorithm is not supported.
 : @error experr:CX0002 the digest algorithm is not supported.
 : @error experr:CX0003 the signature algorithm is not supported.
 : @error experr:CX0004 the <code>$xpath-expression</code> is invalid.
 : @error experr:CX0005 the root name of <code>$digital-certificate</code> is not 'digital-certificate.
 : @error experr:CX0007 the key store is null.
 : @error experr:CX0012 the key cannot be found in the specified key store.
 : @error experr:CX0023 the certificate alias is invalid.
 : @error experr:CX0024 an invalid algorithm is specified.
 : @error experr:CX0025 an exception occurs while the signing the document.
 : @error experr:CX0026 an exception occurs during key store initialization.
 : @error experr:CX0027 an IO exception occurs.
 : @error experr:CX0028 the signature type is not supported.
 :)
declare function crypto:generate-signature($input as node(), $canonicalization as xs:string, $digest as xs:string, $signature as xs:string, $prefix as xs:string, $type as xs:string) as node() external;

(:~ 
 : <code>$canonicalization</code> must either be <code>inclusive-with-comments</code>, <code>inclusive</code>, <code>exclusive-with-comments</code> or <code>exclusive</code>. <b>Default is <code>inclusive-with-comments</code> </b>.<br/> <p> <code>$digest</code> must be one of the following: <code>SHA1</code>, <code>SHA256</code> or <code>SHA512</code>. <b>Default is <code>SHA1</code> </b>.<br/> <code>$signature</code> must either be <code>RSA_SHA1</code> or <code>DSA_SHA1</code>. <b>Default is <code>RSA_SHA1</code> </b>.<br/> <code>$prefix</code> may be empty and prefixes the <code>Signature</code> element accordingly.<br/> <code>$type</code> is the signature type. It must either be <code>enveloped</code> or <code>enveloping</code> (detached signatures are not supported so far). <b>Default is <code>enveloped</code> </b>.<br/> <code>$xpath</code> is an arbitrary XPath expression which specifies a subset of the document that is to be signed.<br/> <code>$certificate</code> is the digitial certificate used to sign the input document.<br/> <code>$ext</code> may either be an <code>$xpath</code> expression or a <code>$certificate</code>.<br/> </p>
 :
 : @param $input value of type node()
 : @param $canonicalization value of type xs:string
 : @param $digest value of type xs:string
 : @param $signature value of type xs:string
 : @param $prefix value of type xs:string
 : @param $type value of type xs:string
 : @param $xpath value of type xs:string
 : @param $certificate value of type node()
 : @return value of type node()
 : @error experr:CX0001 the canonicalization algorithm is not supported.
 : @error experr:CX0002 the digest algorithm is not supported.
 : @error experr:CX0003 the signature algorithm is not supported.
 : @error experr:CX0004 the <code>$xpath-expression</code> is invalid.
 : @error experr:CX0005 the root name of <code>$digital-certificate</code> is not 'digital-certificate.
 : @error experr:CX0007 the key store is null.
 : @error experr:CX0012 the key cannot be found in the specified key store.
 : @error experr:CX0023 the certificate alias is invalid.
 : @error experr:CX0024 an invalid algorithm is specified.
 : @error experr:CX0025 an exception occurs while the signing the document.
 : @error experr:CX0026 an exception occurs during key store initialization.
 : @error experr:CX0027 an IO exception occurs.
 : @error experr:CX0028 the signature type is not supported.
 :)
declare function crypto:generate-signature($input as node(), $canonicalization as xs:string, $digest as xs:string, $signature as xs:string, $prefix as xs:string, $type as xs:string, $xpath as xs:string, $certificate as node()) as node() external;

(:~ 
 : <code>$canonicalization</code> must either be <code>inclusive-with-comments</code>, <code>inclusive</code>, <code>exclusive-with-comments</code> or <code>exclusive</code>. <b>Default is <code>inclusive-with-comments</code> </b>.<br/> <p> <code>$digest</code> must be one of the following: <code>SHA1</code>, <code>SHA256</code> or <code>SHA512</code>. <b>Default is <code>SHA1</code> </b>.<br/> <code>$signature</code> must either be <code>RSA_SHA1</code> or <code>DSA_SHA1</code>. <b>Default is <code>RSA_SHA1</code> </b>.<br/> <code>$prefix</code> may be empty and prefixes the <code>Signature</code> element accordingly.<br/> <code>$type</code> is the signature type. It must either be <code>enveloped</code> or <code>enveloping</code> (detached signatures are not supported so far). <b>Default is <code>enveloped</code> </b>.<br/> <code>$xpath</code> is an arbitrary XPath expression which specifies a subset of the document that is to be signed.<br/> <code>$certificate</code> is the digitial certificate used to sign the input document.<br/> <code>$ext</code> may either be an <code>$xpath</code> expression or a <code>$certificate</code>.<br/> </p>
 :
 : @param $input value of type node()
 : @param $canonicalization value of type xs:string
 : @param $digest value of type xs:string
 : @param $signature value of type xs:string
 : @param $prefix value of type xs:string
 : @param $type value of type xs:string
 : @param $ext value of type item()
 : @return value of type node()
 : @error experr:CX0001 the canonicalization algorithm is not supported.
 : @error experr:CX0002 the digest algorithm is not supported.
 : @error experr:CX0003 the signature algorithm is not supported.
 : @error experr:CX0004 the <code>$xpath-expression</code> is invalid.
 : @error experr:CX0005 the root name of <code>$digital-certificate</code> is not 'digital-certificate.
 : @error experr:CX0007 the key store is null.
 : @error experr:CX0012 the key cannot be found in the specified key store.
 : @error experr:CX0023 the certificate alias is invalid.
 : @error experr:CX0024 an invalid algorithm is specified.
 : @error experr:CX0025 an exception occurs while the signing the document.
 : @error experr:CX0026 an exception occurs during key store initialization.
 : @error experr:CX0027 an IO exception occurs.
 : @error experr:CX0028 the signature type is not supported.
 :)
declare function crypto:generate-signature($input as node(), $canonicalization as xs:string, $digest as xs:string, $signature as xs:string, $prefix as xs:string, $type as xs:string, $ext as item()) as node() external;

(:~ 
 : Checks if the given node contains a <code>Signature</code> element and whether the signature is valid. In this case <code>true</code> is returned. If the signature is invalid the function returns <code>false</code>.
 :
 : @param $input-doc value of type node()
 : @return value of type xs:boolean
 : @error experr:CX0015 the signature element cannot be found.
 : @error experr:CX9994 an unspecified problem occurs during validation.
 : @error experr:CX9996 an IO exception occurs during validation.
 :)
declare function crypto:validate-signature($input-doc as node()) as xs:boolean external;
