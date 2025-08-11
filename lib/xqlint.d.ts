
declare module '@quodatum/xqlint' {
  import { Position } from "vscode";
  export class XQLint {
    constructor(source: string, opts?: XQLintOptions);

    public getCompletions(pos: Position): XQLintCompletion[];
    public getXQDoc(withPos?: boolean): XQDoc;
    public getSymbols(): Symbol[];
    public getAST(pos?: Position): Ast;
    public printAST(indent?: string): string; // XML string
    public getSctx(pos?: Position): any;

    public getMarkers(): Marker[];
    public getErrors(): Marker[];
    public getWarnings(): Marker[];

    public getNamespaces(): Namespaces;
    public getDocLinks(): DocLink[];

    public getProcessor(): string;
    public getLibrary(): object[];

    public hasSyntaxError(): boolean;
    public resolver1(uri: string, ats: string[]): object[];
  }
  export function profiles(): Profile[];
  export function XQueryLexer(): any;
  export function createStaticContext(processor: string, fileName?: string): any;
  export function CodeFormatter(ast: object): any;
  export function CodeFormatter(ast: object, newLinesEnabled: boolean, DEBUG: any): any;

  export class XQLintOptions {
    processor: string;
    fileName?: string; // full path
    styleCheck?: boolean;
  }
  export class XQLintCompletion {
    name: string;
    value: string;
    meta: string; //eg type
    priority?: number;
    identifierRegex?: string; // nameCharRegExp,
    snippet?: string // snippets[name]
  }
  // 
  export class Marker {
    pos: LintRange;
    code: string; // error code 
    level: string; //error,warning,info
    message: string; // '[code] ...'
  }

  // 

  export class LintRange {
    sl: number;
    sc: number;
    el: number;
    ec: number;
  }
  export class Symbol {
    key: string;
    type: string;
    range: LintRange;
    selectionRange: LintRange;
  }
  export class XQDoc {
    ns: string;
    prefixes: string[];
    description: string;
    variables: VarDecl[];
    functions: FunDecl[];
    queryBody?: LintRange;
  }

  // abstract syntax tree
  export interface Ast {
    name: string;
    children: Ast[];
    getParent: Ast | null;
    pos: LintRange;
    value?: string;
    [propName: string]: any;
  }

  // static context
  export interface Sctx {
    resolveQName: (value: string, pos: Position) => QName;
    getVariable: (qname: QName) => any;
    getFunction: (qname: QName, arity: number) => any;
    [propName: string]: any;
  }
  export interface QName {
    uri: string;
    prefix: string;
    name: string;
  }

  export interface VarDecl {
    name: string;
    type: string;
    description?: string;
    //comments: Comment;
    pos: LintRange;
  }

  export interface FunDecl {
    name: string;
    arity: number;
    params: string[]; // name
    description?: string;
    pos: LintRange;
  }
  export interface Comment {
    description: string;
    params: object;
    errors: string[];
    others: string[];
  }
  export interface Profile {
    id: string;
    description: string;
    modules: string[];
  }
  export type Namespaces = {
    [uri: string]: Namespace;
  }
  export interface Namespace {
    type: string; //declare or module
    prefixes: string[] // 
    override?: boolean;
    pos: LintRange;
    ats?: AtLocation[];
    uri?: string; //set by getnamespace from prefix
  }
  export interface AtLocation {
    url: string; // path to import, maybe relative eg 'page.xqm'
    pos: LintRange; // range of uri string
    baseUri?: string; // base URI of source
  }
  export interface DocLink {
    ns: string;   // namespace
    path: string; // full path to import 
    pos: LintRange; // range of uri string
  }
} 