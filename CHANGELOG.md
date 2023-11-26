# [0.5.0] 2023-11-26
* change Marker definition (code,level)
* more xquery extensions 
## [0.4.6] 2023-11-20
* add support for otherwise / ?: #58
## [0.4.4] 2023-10-16
* add missing types
## [0.4.3] 2023-10-14
* type completions 
## [0.4.1] 2023-10-05
* [fix] parse error position reporting
## [0.4.0] 2023-10-05
* [fix] parse error position reporting
* [mod] upgrade xq-catalog to 0.1.1
* [add] Types list, for future completion use
* [mod] printAST XML defaults to no indent
* [add] Expand and corrrect typescript definitions
## [0.3.3] 2023-08-26
* [fix] passing cmdline args e.g `xqlint lint -pbasex-9 .` or `xqlint lint . --processor basex-10`
* [mod] no warning for unused fun/var if starts with _ #42
* [fix] ArrowExpr unused name reporting #41
* [mod] update xq-catalogs to 0.0.6
## [0.3.2] 2023-08-12
* [fix] defaultfunction namespace issue #38
## [0.3.0] 2023-08-10
* [mod] use xq-catalogs for module library handling
* [fix] xq outline 
* [add] typescript definitions supplied in package `lib/xqlint.d.ts`
## [0.2.4] 2023-07-17
* [fix] wiki scraping for basex v10
* [add] `processors.json` 
* [add] getProcessors() on XQLint. 
* [mod] parser generator task now a npm script, replacing grunt task.
* [mod] replace dev use of "q" library with native promise. 
* [mod] fix some eslint reports
* [mod] Node version min now 16
* [mod] upgrade dependancies
## [0.2.3] 2023-05-15
* [mod] update npm dependancies
* [fix] handling of default function namespace #24 
* [fix] module level xqdoc comments #25
* [add] documentLink support

## [0.2.2] 2023-04-22
* [xqdoc] vars and functions have .comments created from xqdoc style comments

## [0.2.1] 2023-02-26
function library, available namespaces progress.

## [0.2.0] 2023-02-19
reorg, function library progress.

## [0.1.2] 2023-02-09
replace update-notifier

## [0.1.1] 
Align xqlint pos with vscode Position new(line:Int, character:Int)
https://vshaxe.github.io/vscode-extern/vscode/Position.html

## [0.1.0] 
`getAST(pos)` and `getSctx(pos)` replace `getNode`

## [0.0.18] 
add `getNode` (2023-01-28)

## [0.0.17] 
revert attempts to load function library
 
## [0.0.16] 
FIX index.json (2022-10-05)
## [0.0.14]
(https://github.com/Quodatum/xqlint/compare/v0.0.9..v0.0.14) (2022-10-05)
Added changelog.
