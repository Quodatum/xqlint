
declare module '@quodatum/xqlint' {
  import { Position } from "vscode";
  export class XQLint {
    constructor(source: string, opts?: XQLintOptions);
    public getCompletions(pos: Position): object[];
    public getXQDoc(withPos?: boolean): XQDoc;
    public getAST(pos?: Position): Ast;
    public printAST(indent?: string): string; // XML string
    public getSctx(pos?: Position): any;

    public getMarkers(): Marker[];
    public getErrors(): Marker[];
    public getWarnings(): Marker[];

    public getDocLinks(): DocLink[];

    public getProcessor(): string;
    public getLibrary(): object[];

    public hasSyntaxError(): boolean;
    public resolver1(uri: string, ats: string[]): object[];
  }
  export function profiles(): any;
  export function XQueryLexer(): any;
  export function createStaticContext(processor: string, fileName?: string): any;
  export function CodeFormatter(ast: object): any;
  export function CodeFormatter(ast: object, newLinesEnabled: boolean, DEBUG: any): any;
  export class XQLintOptions {
    processor: string;
    fileName?: string; // full path
    styleCheck?: boolean;
  }
  // 
  export class Marker {
    pos: LintRange;
    type: string; // error,warning
    level: string; //same as type??
    message: string; // '[code] ...'
  }
  export class DocLink {
    range: LintRange;
    uri: string; // uri after at    
  }
  export class LintRange {
    sl: number;
    sc: number;
    el: number;
    ec: number;
  }

  export class XQDoc {
    moduleNamespace: string;
    description: string;
    variables: VarDecl[];
    functions: FunDecl[];
    queryBody?: LintRange;
  }
  export interface Ast {
    name: string;
    children: Ast[];
    getParent: Ast | null;
    pos: LintRange;
    value?: string;
    [propName: string]: any;
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
} 