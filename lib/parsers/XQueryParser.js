// This file was generated on Tue Jan 4, 2022 16:31 (UTC) by REx v5.54 which is Copyright (c) 1979-2021 by Gunther Rademacher <grd@gmx.net>
// REx command line: XQueryParser.ebnf -ll 2 -backtrack -tree -javascript -a xqlint

                                                            // line 2 "XQueryParser.ebnf"
                                                            var XQueryParser = exports.XQueryParser = function XQueryParser(string, parsingEventHandler)
                                                            {
                                                              init(string, parsingEventHandler);
                                                            // line 9 "XQueryParser.js"
  var thisParser = this;

  this.ParseException = function(b, e, s, o, x)
  {
    var begin = b;
    var end = e;
    var state = s;
    var offending = o;
    var expected = x;

    this.getBegin = function() {return begin;};
    this.getEnd = function() {return end;};
    this.getState = function() {return state;};
    this.getExpected = function() {return expected;};
    this.getOffending = function() {return offending;};
    this.isAmbiguousInput = function() {return false;};

    this.getMessage = function()
    {
      return offending < 0
           ? "lexical analysis failed"
           : "syntax error";
    };
  };

  function init(source, parsingEventHandler)
  {
    eventHandler = parsingEventHandler;
    input = source;
    size = source.length;
    reset(0, 0, 0);
  }

  this.getInput = function()
  {
    return input;
  };

  this.getTokenOffset = function()
  {
    return b0;
  };

  this.getTokenEnd = function()
  {
    return e0;
  };

  function reset(l, b, e)
  {
            b0 = b; e0 = b;
    l1 = l; b1 = b; e1 = e;
    l2 = 0; b2 = 0; e2 = 0;
    end = e;
    ex = -1;
    memo = {};
    eventHandler.reset(input);
  }

  this.reset = function(l, b, e)
  {
    reset(l, b, e);
  };

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? XQueryParser.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = XQueryParser.getTokenSet(- e.getState());
    }
    else
    {
      expected = [XQueryParser.TOKEN[e.getExpected()]];
    }
    return expected;
  };

  this.getErrorMessage = function(e)
  {
    var message = e.getMessage();
    var found = this.getOffendingToken(e);
    var tokenSet = this.getExpectedTokenSet(e);
    var size = e.getEnd() - e.getBegin();
    message += (found == null ? "" : ", found " + found)
            + "\nwhile expecting "
            + (tokenSet.length == 1 ? tokenSet[0] : ("[" + tokenSet.join(", ") + "]"))
            + "\n"
            + (size == 0 || found != null ? "" : "after successfully scanning " + size + " characters beginning ");
    var prefix = input.substring(0, e.getBegin());
    var lines = prefix.split("\n");
    var line = lines.length;
    var column = lines[line - 1].length + 1;
    return message
         + "at line " + line + ", column " + column + ":\n..."
         + input.substring(e.getBegin(), Math.min(input.length, e.getBegin() + 64))
         + "...";
  };

  this.parse_XQuery = function()
  {
    eventHandler.startNonterminal("XQuery", e0);
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Module();
    consume(25);                    // EOF
    eventHandler.endNonterminal("XQuery", e0);
  };

  function parse_Module()
  {
    eventHandler.startNonterminal("Module", e0);
    switch (l1)
    {
    case 200:                       // 'xquery'
      lookahead2W(131);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
                                    // 'castable' | 'div' | 'encoding' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'ne' | 'or' | 'to' |
                                    // 'treat' | 'union' | 'version' | '|' | '||'
      break;
    default:
      lk = l1;
    }
    if (lk == 29128                 // 'xquery' 'encoding'
     || lk == 50376)                // 'xquery' 'version'
    {
      whitespace();
      parse_VersionDecl();
    }
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    switch (l1)
    {
    case 147:                       // 'module'
      lookahead2W(130);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
                                    // 'castable' | 'div' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'namespace' | 'ne' | 'or' | 'to' |
                                    // 'treat' | 'union' | '|' | '||'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 38035:                     // 'module' 'namespace'
      whitespace();
      parse_LibraryModule();
      break;
    default:
      whitespace();
      parse_MainModule();
    }
    eventHandler.endNonterminal("Module", e0);
  }

  function parse_VersionDecl()
  {
    eventHandler.startNonterminal("VersionDecl", e0);
    consume(200);                   // 'xquery'
    lookahead1W(82);                // S^WS | '(:' | 'encoding' | 'version'
    switch (l1)
    {
    case 113:                       // 'encoding'
      consume(113);                 // 'encoding'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      consume(4);                   // StringLiteral
      break;
    default:
      consume(196);                 // 'version'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      consume(4);                   // StringLiteral
      lookahead1W(76);              // S^WS | '(:' | ';' | 'encoding'
      if (l1 == 113)                // 'encoding'
      {
        consume(113);               // 'encoding'
        lookahead1W(19);            // StringLiteral | S^WS | '(:'
        consume(4);                 // StringLiteral
      }
    }
    lookahead1W(30);                // S^WS | '(:' | ';'
    whitespace();
    parse_Separator();
    eventHandler.endNonterminal("VersionDecl", e0);
  }

  function parse_MainModule()
  {
    eventHandler.startNonterminal("MainModule", e0);
    parse_Prolog();
    whitespace();
    parse_QueryBody();
    eventHandler.endNonterminal("MainModule", e0);
  }

  function parse_LibraryModule()
  {
    eventHandler.startNonterminal("LibraryModule", e0);
    parse_ModuleDecl();
    lookahead1W(95);                // S^WS | EOF | '(:' | 'declare' | 'import'
    whitespace();
    parse_Prolog();
    eventHandler.endNonterminal("LibraryModule", e0);
  }

  function parse_ModuleDecl()
  {
    eventHandler.startNonterminal("ModuleDecl", e0);
    consume(147);                   // 'module'
    lookahead1W(50);                // S^WS | '(:' | 'namespace'
    consume(148);                   // 'namespace'
    lookahead1W(124);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where'
    whitespace();
    parse_NCName();
    lookahead1W(31);                // S^WS | '(:' | '='
    consume(60);                    // '='
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    lookahead1W(30);                // S^WS | '(:' | ';'
    whitespace();
    parse_Separator();
    eventHandler.endNonterminal("ModuleDecl", e0);
  }

  function parse_Prolog()
  {
    eventHandler.startNonterminal("Prolog", e0);
    for (;;)
    {
      lookahead1W(174);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      switch (l1)
      {
      case 100:                     // 'declare'
        lookahead2W(135);           // S^WS | EOF | '!' | '!=' | '#' | '%' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' |
                                    // 'base-uri' | 'boundary-space' | 'cast' | 'castable' | 'construction' |
                                    // 'context' | 'copy-namespaces' | 'decimal-format' | 'default' | 'div' | 'eq' |
                                    // 'except' | 'function' | 'ge' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' |
                                    // 'le' | 'lt' | 'mod' | 'namespace' | 'ne' | 'option' | 'or' | 'ordering' | 'to' |
                                    // 'treat' | 'union' | 'variable' | '|' | '||'
        break;
      case 131:                     // 'import'
        lookahead2W(132);           // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' | 'cast' |
                                    // 'castable' | 'div' | 'eq' | 'except' | 'ge' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'module' | 'ne' | 'or' | 'schema' |
                                    // 'to' | 'treat' | 'union' | '|' | '||'
        break;
      default:
        lk = l1;
      }
      if (lk != 21604               // 'declare' 'base-uri'
       && lk != 21860               // 'declare' 'boundary-space'
       && lk != 24164               // 'declare' 'construction'
       && lk != 24676               // 'declare' 'copy-namespaces'
       && lk != 25188               // 'declare' 'decimal-format'
       && lk != 25956               // 'declare' 'default'
       && lk != 37763               // 'import' 'module'
       && lk != 37988               // 'declare' 'namespace'
       && lk != 41316               // 'declare' 'ordering'
       && lk != 44419)              // 'import' 'schema'
      {
        break;
      }
      switch (l1)
      {
      case 100:                     // 'declare'
        lookahead2W(115);           // S^WS | '(:' | 'base-uri' | 'boundary-space' | 'construction' |
                                    // 'copy-namespaces' | 'decimal-format' | 'default' | 'namespace' | 'ordering'
        break;
      default:
        lk = l1;
      }
      if (lk == 25956)              // 'declare' 'default'
      {
        lk = memoized(0, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2;
          try
          {
            try_DefaultNamespaceDecl();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(0, e0, lk);
        }
      }
      switch (lk)
      {
      case -1:
        whitespace();
        parse_DefaultNamespaceDecl();
        break;
      case 37988:                   // 'declare' 'namespace'
        whitespace();
        parse_NamespaceDecl();
        break;
      case 131:                     // 'import'
        whitespace();
        parse_Import();
        break;
      default:
        whitespace();
        parse_Setter();
      }
      lookahead1W(30);              // S^WS | '(:' | ';'
      whitespace();
      parse_Separator();
    }
    for (;;)
    {
      lookahead1W(174);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      switch (l1)
      {
      case 100:                     // 'declare'
        lookahead2W(134);           // S^WS | EOF | '!' | '!=' | '#' | '%' | '(' | '(:' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | 'and' |
                                    // 'cast' | 'castable' | 'context' | 'div' | 'eq' | 'except' | 'function' | 'ge' |
                                    // 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'lt' | 'mod' | 'ne' |
                                    // 'option' | 'or' | 'to' | 'treat' | 'union' | 'variable' | '|' | '||'
        break;
      default:
        lk = l1;
      }
      if (lk != 8292                // 'declare' '%'
       && lk != 24420               // 'declare' 'context'
       && lk != 31588               // 'declare' 'function'
       && lk != 40292               // 'declare' 'option'
       && lk != 50020)              // 'declare' 'variable'
      {
        break;
      }
      switch (l1)
      {
      case 100:                     // 'declare'
        lookahead2W(111);           // S^WS | '%' | '(:' | 'context' | 'function' | 'option' | 'variable'
        break;
      default:
        lk = l1;
      }
      switch (lk)
      {
      case 24420:                   // 'declare' 'context'
        whitespace();
        parse_ContextItemDecl();
        break;
      case 40292:                   // 'declare' 'option'
        whitespace();
        parse_OptionDecl();
        break;
      default:
        whitespace();
        parse_AnnotatedDecl();
      }
      lookahead1W(30);              // S^WS | '(:' | ';'
      whitespace();
      parse_Separator();
    }
    eventHandler.endNonterminal("Prolog", e0);
  }

  function parse_Separator()
  {
    eventHandler.startNonterminal("Separator", e0);
    consume(52);                    // ';'
    eventHandler.endNonterminal("Separator", e0);
  }

  function parse_Setter()
  {
    eventHandler.startNonterminal("Setter", e0);
    switch (l1)
    {
    case 100:                       // 'declare'
      lookahead2W(114);             // S^WS | '(:' | 'base-uri' | 'boundary-space' | 'construction' |
                                    // 'copy-namespaces' | 'decimal-format' | 'default' | 'ordering'
      break;
    default:
      lk = l1;
    }
    if (lk == 25956)                // 'declare' 'default'
    {
      lk = memoized(1, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_DefaultCollationDecl();
          lk = -2;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; end = e2A; }}
            try_EmptyOrderDecl();
            lk = -6;
          }
          catch (p6A)
          {
            lk = -8;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(1, e0, lk);
      }
    }
    switch (lk)
    {
    case 21860:                     // 'declare' 'boundary-space'
      parse_BoundarySpaceDecl();
      break;
    case -2:
      parse_DefaultCollationDecl();
      break;
    case 21604:                     // 'declare' 'base-uri'
      parse_BaseURIDecl();
      break;
    case 24164:                     // 'declare' 'construction'
      parse_ConstructionDecl();
      break;
    case 41316:                     // 'declare' 'ordering'
      parse_OrderingModeDecl();
      break;
    case -6:
      parse_EmptyOrderDecl();
      break;
    case 24676:                     // 'declare' 'copy-namespaces'
      parse_CopyNamespacesDecl();
      break;
    default:
      parse_DecimalFormatDecl();
    }
    eventHandler.endNonterminal("Setter", e0);
  }

  function parse_BoundarySpaceDecl()
  {
    eventHandler.startNonterminal("BoundarySpaceDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(34);                // S^WS | '(:' | 'boundary-space'
    consume(85);                    // 'boundary-space'
    lookahead1W(90);                // S^WS | '(:' | 'preserve' | 'strip'
    switch (l1)
    {
    case 168:                       // 'preserve'
      consume(168);                 // 'preserve'
      break;
    default:
      consume(182);                 // 'strip'
    }
    eventHandler.endNonterminal("BoundarySpaceDecl", e0);
  }

  function parse_DefaultCollationDecl()
  {
    eventHandler.startNonterminal("DefaultCollationDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consume(101);                   // 'default'
    lookahead1W(38);                // S^WS | '(:' | 'collation'
    consume(92);                    // 'collation'
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    eventHandler.endNonterminal("DefaultCollationDecl", e0);
  }

  function try_DefaultCollationDecl()
  {
    consumeT(100);                  // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consumeT(101);                  // 'default'
    lookahead1W(38);                // S^WS | '(:' | 'collation'
    consumeT(92);                   // 'collation'
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    try_URILiteral();
  }

  function parse_BaseURIDecl()
  {
    eventHandler.startNonterminal("BaseURIDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(33);                // S^WS | '(:' | 'base-uri'
    consume(84);                    // 'base-uri'
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    eventHandler.endNonterminal("BaseURIDecl", e0);
  }

  function parse_ConstructionDecl()
  {
    eventHandler.startNonterminal("ConstructionDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(39);                // S^WS | '(:' | 'construction'
    consume(94);                    // 'construction'
    lookahead1W(90);                // S^WS | '(:' | 'preserve' | 'strip'
    switch (l1)
    {
    case 182:                       // 'strip'
      consume(182);                 // 'strip'
      break;
    default:
      consume(168);                 // 'preserve'
    }
    eventHandler.endNonterminal("ConstructionDecl", e0);
  }

  function parse_OrderingModeDecl()
  {
    eventHandler.startNonterminal("OrderingModeDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(54);                // S^WS | '(:' | 'ordering'
    consume(161);                   // 'ordering'
    lookahead1W(89);                // S^WS | '(:' | 'ordered' | 'unordered'
    switch (l1)
    {
    case 160:                       // 'ordered'
      consume(160);                 // 'ordered'
      break;
    default:
      consume(193);                 // 'unordered'
    }
    eventHandler.endNonterminal("OrderingModeDecl", e0);
  }

  function parse_EmptyOrderDecl()
  {
    eventHandler.startNonterminal("EmptyOrderDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consume(101);                   // 'default'
    lookahead1W(53);                // S^WS | '(:' | 'order'
    consume(159);                   // 'order'
    lookahead1W(45);                // S^WS | '(:' | 'empty'
    consume(111);                   // 'empty'
    lookahead1W(84);                // S^WS | '(:' | 'greatest' | 'least'
    switch (l1)
    {
    case 125:                       // 'greatest'
      consume(125);                 // 'greatest'
      break;
    default:
      consume(141);                 // 'least'
    }
    eventHandler.endNonterminal("EmptyOrderDecl", e0);
  }

  function try_EmptyOrderDecl()
  {
    consumeT(100);                  // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consumeT(101);                  // 'default'
    lookahead1W(53);                // S^WS | '(:' | 'order'
    consumeT(159);                  // 'order'
    lookahead1W(45);                // S^WS | '(:' | 'empty'
    consumeT(111);                  // 'empty'
    lookahead1W(84);                // S^WS | '(:' | 'greatest' | 'least'
    switch (l1)
    {
    case 125:                       // 'greatest'
      consumeT(125);                // 'greatest'
      break;
    default:
      consumeT(141);                // 'least'
    }
  }

  function parse_CopyNamespacesDecl()
  {
    eventHandler.startNonterminal("CopyNamespacesDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(41);                // S^WS | '(:' | 'copy-namespaces'
    consume(96);                    // 'copy-namespaces'
    lookahead1W(88);                // S^WS | '(:' | 'no-preserve' | 'preserve'
    whitespace();
    parse_PreserveMode();
    lookahead1W(27);                // S^WS | '(:' | ','
    consume(40);                    // ','
    lookahead1W(85);                // S^WS | '(:' | 'inherit' | 'no-inherit'
    whitespace();
    parse_InheritMode();
    eventHandler.endNonterminal("CopyNamespacesDecl", e0);
  }

  function parse_PreserveMode()
  {
    eventHandler.startNonterminal("PreserveMode", e0);
    switch (l1)
    {
    case 168:                       // 'preserve'
      consume(168);                 // 'preserve'
      break;
    default:
      consume(153);                 // 'no-preserve'
    }
    eventHandler.endNonterminal("PreserveMode", e0);
  }

  function parse_InheritMode()
  {
    eventHandler.startNonterminal("InheritMode", e0);
    switch (l1)
    {
    case 134:                       // 'inherit'
      consume(134);                 // 'inherit'
      break;
    default:
      consume(152);                 // 'no-inherit'
    }
    eventHandler.endNonterminal("InheritMode", e0);
  }

  function parse_DecimalFormatDecl()
  {
    eventHandler.startNonterminal("DecimalFormatDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(80);                // S^WS | '(:' | 'decimal-format' | 'default'
    switch (l1)
    {
    case 98:                        // 'decimal-format'
      consume(98);                  // 'decimal-format'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_EQName();
      break;
    default:
      consume(101);                 // 'default'
      lookahead1W(42);              // S^WS | '(:' | 'decimal-format'
      consume(98);                  // 'decimal-format'
    }
    for (;;)
    {
      lookahead1W(122);             // S^WS | '(:' | ';' | 'NaN' | 'decimal-separator' | 'digit' |
                                    // 'exponent-separator' | 'grouping-separator' | 'infinity' | 'minus-sign' |
                                    // 'pattern-separator' | 'per-mille' | 'percent' | 'zero-digit'
      if (l1 == 52)                 // ';'
      {
        break;
      }
      whitespace();
      parse_DFPropertyName();
      lookahead1W(31);              // S^WS | '(:' | '='
      consume(60);                  // '='
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      consume(4);                   // StringLiteral
    }
    eventHandler.endNonterminal("DecimalFormatDecl", e0);
  }

  function parse_DFPropertyName()
  {
    eventHandler.startNonterminal("DFPropertyName", e0);
    switch (l1)
    {
    case 99:                        // 'decimal-separator'
      consume(99);                  // 'decimal-separator'
      break;
    case 127:                       // 'grouping-separator'
      consume(127);                 // 'grouping-separator'
      break;
    case 133:                       // 'infinity'
      consume(133);                 // 'infinity'
      break;
    case 145:                       // 'minus-sign'
      consume(145);                 // 'minus-sign'
      break;
    case 68:                        // 'NaN'
      consume(68);                  // 'NaN'
      break;
    case 165:                       // 'percent'
      consume(165);                 // 'percent'
      break;
    case 164:                       // 'per-mille'
      consume(164);                 // 'per-mille'
      break;
    case 201:                       // 'zero-digit'
      consume(201);                 // 'zero-digit'
      break;
    case 105:                       // 'digit'
      consume(105);                 // 'digit'
      break;
    case 163:                       // 'pattern-separator'
      consume(163);                 // 'pattern-separator'
      break;
    default:
      consume(118);                 // 'exponent-separator'
    }
    eventHandler.endNonterminal("DFPropertyName", e0);
  }

  function parse_Import()
  {
    eventHandler.startNonterminal("Import", e0);
    switch (l1)
    {
    case 131:                       // 'import'
      lookahead2W(86);              // S^WS | '(:' | 'module' | 'schema'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 44419:                     // 'import' 'schema'
      parse_SchemaImport();
      break;
    default:
      parse_ModuleImport();
    }
    eventHandler.endNonterminal("Import", e0);
  }

  function parse_SchemaImport()
  {
    eventHandler.startNonterminal("SchemaImport", e0);
    consume(131);                   // 'import'
    lookahead1W(56);                // S^WS | '(:' | 'schema'
    consume(173);                   // 'schema'
    lookahead1W(94);                // StringLiteral | S^WS | '(:' | 'default' | 'namespace'
    if (l1 != 4)                    // StringLiteral
    {
      whitespace();
      parse_SchemaPrefix();
    }
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    lookahead1W(75);                // S^WS | '(:' | ';' | 'at'
    if (l1 == 82)                   // 'at'
    {
      consume(82);                  // 'at'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      whitespace();
      parse_URILiteral();
      for (;;)
      {
        lookahead1W(71);            // S^WS | '(:' | ',' | ';'
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(19);            // StringLiteral | S^WS | '(:'
        whitespace();
        parse_URILiteral();
      }
    }
    eventHandler.endNonterminal("SchemaImport", e0);
  }

  function parse_SchemaPrefix()
  {
    eventHandler.startNonterminal("SchemaPrefix", e0);
    switch (l1)
    {
    case 148:                       // 'namespace'
      consume(148);                 // 'namespace'
      lookahead1W(124);             // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where'
      whitespace();
      parse_NCName();
      lookahead1W(31);              // S^WS | '(:' | '='
      consume(60);                  // '='
      break;
    default:
      consume(101);                 // 'default'
      lookahead1W(44);              // S^WS | '(:' | 'element'
      consume(109);                 // 'element'
      lookahead1W(50);              // S^WS | '(:' | 'namespace'
      consume(148);                 // 'namespace'
    }
    eventHandler.endNonterminal("SchemaPrefix", e0);
  }

  function parse_ModuleImport()
  {
    eventHandler.startNonterminal("ModuleImport", e0);
    consume(131);                   // 'import'
    lookahead1W(49);                // S^WS | '(:' | 'module'
    consume(147);                   // 'module'
    lookahead1W(62);                // StringLiteral | S^WS | '(:' | 'namespace'
    if (l1 == 148)                  // 'namespace'
    {
      consume(148);                 // 'namespace'
      lookahead1W(124);             // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where'
      whitespace();
      parse_NCName();
      lookahead1W(31);              // S^WS | '(:' | '='
      consume(60);                  // '='
    }
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    lookahead1W(75);                // S^WS | '(:' | ';' | 'at'
    if (l1 == 82)                   // 'at'
    {
      consume(82);                  // 'at'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      whitespace();
      parse_URILiteral();
      for (;;)
      {
        lookahead1W(71);            // S^WS | '(:' | ',' | ';'
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(19);            // StringLiteral | S^WS | '(:'
        whitespace();
        parse_URILiteral();
      }
    }
    eventHandler.endNonterminal("ModuleImport", e0);
  }

  function parse_NamespaceDecl()
  {
    eventHandler.startNonterminal("NamespaceDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(50);                // S^WS | '(:' | 'namespace'
    consume(148);                   // 'namespace'
    lookahead1W(124);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where'
    whitespace();
    parse_NCName();
    lookahead1W(31);                // S^WS | '(:' | '='
    consume(60);                    // '='
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    eventHandler.endNonterminal("NamespaceDecl", e0);
  }

  function parse_DefaultNamespaceDecl()
  {
    eventHandler.startNonterminal("DefaultNamespaceDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consume(101);                   // 'default'
    lookahead1W(81);                // S^WS | '(:' | 'element' | 'function'
    switch (l1)
    {
    case 109:                       // 'element'
      consume(109);                 // 'element'
      break;
    default:
      consume(123);                 // 'function'
    }
    lookahead1W(50);                // S^WS | '(:' | 'namespace'
    consume(148);                   // 'namespace'
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    whitespace();
    parse_URILiteral();
    eventHandler.endNonterminal("DefaultNamespaceDecl", e0);
  }

  function try_DefaultNamespaceDecl()
  {
    consumeT(100);                  // 'declare'
    lookahead1W(43);                // S^WS | '(:' | 'default'
    consumeT(101);                  // 'default'
    lookahead1W(81);                // S^WS | '(:' | 'element' | 'function'
    switch (l1)
    {
    case 109:                       // 'element'
      consumeT(109);                // 'element'
      break;
    default:
      consumeT(123);                // 'function'
    }
    lookahead1W(50);                // S^WS | '(:' | 'namespace'
    consumeT(148);                  // 'namespace'
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    try_URILiteral();
  }

  function parse_AnnotatedDecl()
  {
    eventHandler.startNonterminal("AnnotatedDecl", e0);
    consume(100);                   // 'declare'
    for (;;)
    {
      lookahead1W(98);              // S^WS | '%' | '(:' | 'function' | 'variable'
      if (l1 != 32)                 // '%'
      {
        break;
      }
      whitespace();
      parse_Annotation();
    }
    switch (l1)
    {
    case 195:                       // 'variable'
      whitespace();
      parse_VarDecl();
      break;
    default:
      whitespace();
      parse_FunctionDecl();
    }
    eventHandler.endNonterminal("AnnotatedDecl", e0);
  }

  function parse_Annotation()
  {
    eventHandler.startNonterminal("Annotation", e0);
    consume(32);                    // '%'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_EQName();
    lookahead1W(106);               // S^WS | '%' | '(' | '(:' | 'function' | 'variable'
    if (l1 == 34)                   // '('
    {
      consume(34);                  // '('
      lookahead1W(105);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
      whitespace();
      parse_Literal();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(105);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
        whitespace();
        parse_Literal();
      }
      consume(37);                  // ')'
    }
    eventHandler.endNonterminal("Annotation", e0);
  }

  function try_Annotation()
  {
    consumeT(32);                   // '%'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_EQName();
    lookahead1W(106);               // S^WS | '%' | '(' | '(:' | 'function' | 'variable'
    if (l1 == 34)                   // '('
    {
      consumeT(34);                 // '('
      lookahead1W(105);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
      try_Literal();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consumeT(40);               // ','
        lookahead1W(105);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral | S^WS | '(:'
        try_Literal();
      }
      consumeT(37);                 // ')'
    }
  }

  function parse_VarDecl()
  {
    eventHandler.startNonterminal("VarDecl", e0);
    consume(195);                   // 'variable'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(101);               // S^WS | '(:' | ':=' | 'as' | 'external'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(74);                // S^WS | '(:' | ':=' | 'external'
    switch (l1)
    {
    case 51:                        // ':='
      consume(51);                  // ':='
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_VarValue();
      break;
    default:
      consume(119);                 // 'external'
      lookahead1W(72);              // S^WS | '(:' | ':=' | ';'
      if (l1 == 51)                 // ':='
      {
        consume(51);                // ':='
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        whitespace();
        parse_VarDefaultValue();
      }
    }
    eventHandler.endNonterminal("VarDecl", e0);
  }

  function parse_VarValue()
  {
    eventHandler.startNonterminal("VarValue", e0);
    parse_ExprSingle();
    eventHandler.endNonterminal("VarValue", e0);
  }

  function parse_VarDefaultValue()
  {
    eventHandler.startNonterminal("VarDefaultValue", e0);
    parse_ExprSingle();
    eventHandler.endNonterminal("VarDefaultValue", e0);
  }

  function parse_ContextItemDecl()
  {
    eventHandler.startNonterminal("ContextItemDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(40);                // S^WS | '(:' | 'context'
    consume(95);                    // 'context'
    lookahead1W(48);                // S^WS | '(:' | 'item'
    consume(138);                   // 'item'
    lookahead1W(101);               // S^WS | '(:' | ':=' | 'as' | 'external'
    if (l1 == 80)                   // 'as'
    {
      consume(80);                  // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_ItemType();
    }
    lookahead1W(74);                // S^WS | '(:' | ':=' | 'external'
    switch (l1)
    {
    case 51:                        // ':='
      consume(51);                  // ':='
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_VarValue();
      break;
    default:
      consume(119);                 // 'external'
      lookahead1W(72);              // S^WS | '(:' | ':=' | ';'
      if (l1 == 51)                 // ':='
      {
        consume(51);                // ':='
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        whitespace();
        parse_VarDefaultValue();
      }
    }
    eventHandler.endNonterminal("ContextItemDecl", e0);
  }

  function parse_FunctionDecl()
  {
    eventHandler.startNonterminal("FunctionDecl", e0);
    consume(123);                   // 'function'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_EQName();
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(65);                // S^WS | '$' | '(:' | ')'
    if (l1 == 31)                   // '$'
    {
      whitespace();
      parse_ParamList();
    }
    consume(37);                    // ')'
    lookahead1W(103);               // S^WS | '(:' | 'as' | 'external' | '{'
    if (l1 == 80)                   // 'as'
    {
      consume(80);                  // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SequenceType();
    }
    lookahead1W(83);                // S^WS | '(:' | 'external' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      whitespace();
      parse_FunctionBody();
      break;
    default:
      consume(119);                 // 'external'
    }
    eventHandler.endNonterminal("FunctionDecl", e0);
  }

  function parse_ParamList()
  {
    eventHandler.startNonterminal("ParamList", e0);
    parse_Param();
    for (;;)
    {
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      whitespace();
      parse_Param();
    }
    eventHandler.endNonterminal("ParamList", e0);
  }

  function try_ParamList()
  {
    try_Param();
    for (;;)
    {
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      try_Param();
    }
  }

  function parse_Param()
  {
    eventHandler.startNonterminal("Param", e0);
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_EQName();
    lookahead1W(99);                // S^WS | '(:' | ')' | ',' | 'as'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    eventHandler.endNonterminal("Param", e0);
  }

  function try_Param()
  {
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_EQName();
    lookahead1W(99);                // S^WS | '(:' | ')' | ',' | 'as'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
  }

  function parse_FunctionBody()
  {
    eventHandler.startNonterminal("FunctionBody", e0);
    parse_EnclosedExpr();
    eventHandler.endNonterminal("FunctionBody", e0);
  }

  function try_FunctionBody()
  {
    try_EnclosedExpr();
  }

  function parse_EnclosedExpr()
  {
    eventHandler.startNonterminal("EnclosedExpr", e0);
    consume(202);                   // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      whitespace();
      parse_Expr();
    }
    consume(206);                   // '}'
    eventHandler.endNonterminal("EnclosedExpr", e0);
  }

  function try_EnclosedExpr()
  {
    consumeT(202);                  // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      try_Expr();
    }
    consumeT(206);                  // '}'
  }

  function parse_OptionDecl()
  {
    eventHandler.startNonterminal("OptionDecl", e0);
    consume(100);                   // 'declare'
    lookahead1W(52);                // S^WS | '(:' | 'option'
    consume(157);                   // 'option'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_EQName();
    lookahead1W(19);                // StringLiteral | S^WS | '(:'
    consume(4);                     // StringLiteral
    eventHandler.endNonterminal("OptionDecl", e0);
  }

  function parse_QueryBody()
  {
    eventHandler.startNonterminal("QueryBody", e0);
    parse_Expr();
    eventHandler.endNonterminal("QueryBody", e0);
  }

  function parse_Expr()
  {
    eventHandler.startNonterminal("Expr", e0);
    parse_ExprSingle();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_ExprSingle();
    }
    eventHandler.endNonterminal("Expr", e0);
  }

  function try_Expr()
  {
    try_ExprSingle();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_ExprSingle();
    }
  }

  function parse_ExprSingle()
  {
    eventHandler.startNonterminal("ExprSingle", e0);
    switch (l1)
    {
    case 122:                       // 'for'
      lookahead2W(156);             // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
                                    // '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'sliding' | 'stable' | 'start' | 'to' | 'treat' | 'tumbling' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    case 188:                       // 'try'
      lookahead2W(154);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 116:                       // 'every'
    case 142:                       // 'let'
    case 178:                       // 'some'
      lookahead2W(152);             // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
                                    // '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 130:                       // 'if'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
      lookahead2W(148);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8058:                      // 'for' '$'
    case 8078:                      // 'let' '$'
    case 45434:                     // 'for' 'sliding'
    case 48506:                     // 'for' 'tumbling'
      parse_FLWORExpr();
      break;
    case 8052:                      // 'every' '$'
    case 8114:                      // 'some' '$'
      parse_QuantifiedExpr();
      break;
    case 8887:                      // 'switch' '('
      parse_SwitchExpr();
      break;
    case 8895:                      // 'typeswitch' '('
      parse_TypeswitchExpr();
      break;
    case 8834:                      // 'if' '('
      parse_IfExpr();
      break;
    case 51900:                     // 'try' '{'
      parse_TryCatchExpr();
      break;
    default:
      parse_OrExpr();
    }
    eventHandler.endNonterminal("ExprSingle", e0);
  }

  function try_ExprSingle()
  {
    switch (l1)
    {
    case 122:                       // 'for'
      lookahead2W(156);             // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
                                    // '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'sliding' | 'stable' | 'start' | 'to' | 'treat' | 'tumbling' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    case 188:                       // 'try'
      lookahead2W(154);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 116:                       // 'every'
    case 142:                       // 'let'
    case 178:                       // 'some'
      lookahead2W(152);             // S^WS | EOF | '!' | '!=' | '#' | '$' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' |
                                    // '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 130:                       // 'if'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
      lookahead2W(148);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8058:                      // 'for' '$'
    case 8078:                      // 'let' '$'
    case 45434:                     // 'for' 'sliding'
    case 48506:                     // 'for' 'tumbling'
      try_FLWORExpr();
      break;
    case 8052:                      // 'every' '$'
    case 8114:                      // 'some' '$'
      try_QuantifiedExpr();
      break;
    case 8887:                      // 'switch' '('
      try_SwitchExpr();
      break;
    case 8895:                      // 'typeswitch' '('
      try_TypeswitchExpr();
      break;
    case 8834:                      // 'if' '('
      try_IfExpr();
      break;
    case 51900:                     // 'try' '{'
      try_TryCatchExpr();
      break;
    default:
      try_OrExpr();
    }
  }

  function parse_FLWORExpr()
  {
    eventHandler.startNonterminal("FLWORExpr", e0);
    parse_InitialClause();
    for (;;)
    {
      lookahead1W(116);             // S^WS | '(:' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' | 'stable' |
                                    // 'where'
      if (l1 == 171)                // 'return'
      {
        break;
      }
      whitespace();
      parse_IntermediateClause();
    }
    whitespace();
    parse_ReturnClause();
    eventHandler.endNonterminal("FLWORExpr", e0);
  }

  function try_FLWORExpr()
  {
    try_InitialClause();
    for (;;)
    {
      lookahead1W(116);             // S^WS | '(:' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' | 'stable' |
                                    // 'where'
      if (l1 == 171)                // 'return'
      {
        break;
      }
      try_IntermediateClause();
    }
    try_ReturnClause();
  }

  function parse_InitialClause()
  {
    eventHandler.startNonterminal("InitialClause", e0);
    switch (l1)
    {
    case 122:                       // 'for'
      lookahead2W(97);              // S^WS | '$' | '(:' | 'sliding' | 'tumbling'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8058:                      // 'for' '$'
      parse_ForClause();
      break;
    case 142:                       // 'let'
      parse_LetClause();
      break;
    default:
      parse_WindowClause();
    }
    eventHandler.endNonterminal("InitialClause", e0);
  }

  function try_InitialClause()
  {
    switch (l1)
    {
    case 122:                       // 'for'
      lookahead2W(97);              // S^WS | '$' | '(:' | 'sliding' | 'tumbling'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8058:                      // 'for' '$'
      try_ForClause();
      break;
    case 142:                       // 'let'
      try_LetClause();
      break;
    default:
      try_WindowClause();
    }
  }

  function parse_IntermediateClause()
  {
    eventHandler.startNonterminal("IntermediateClause", e0);
    switch (l1)
    {
    case 122:                       // 'for'
    case 142:                       // 'let'
      parse_InitialClause();
      break;
    case 198:                       // 'where'
      parse_WhereClause();
      break;
    case 126:                       // 'group'
      parse_GroupByClause();
      break;
    case 97:                        // 'count'
      parse_CountClause();
      break;
    default:
      parse_OrderByClause();
    }
    eventHandler.endNonterminal("IntermediateClause", e0);
  }

  function try_IntermediateClause()
  {
    switch (l1)
    {
    case 122:                       // 'for'
    case 142:                       // 'let'
      try_InitialClause();
      break;
    case 198:                       // 'where'
      try_WhereClause();
      break;
    case 126:                       // 'group'
      try_GroupByClause();
      break;
    case 97:                        // 'count'
      try_CountClause();
      break;
    default:
      try_OrderByClause();
    }
  }

  function parse_ForClause()
  {
    eventHandler.startNonterminal("ForClause", e0);
    consume(122);                   // 'for'
    lookahead1W(23);                // S^WS | '$' | '(:'
    whitespace();
    parse_ForBinding();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      whitespace();
      parse_ForBinding();
    }
    eventHandler.endNonterminal("ForClause", e0);
  }

  function try_ForClause()
  {
    consumeT(122);                  // 'for'
    lookahead1W(23);                // S^WS | '$' | '(:'
    try_ForBinding();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      try_ForBinding();
    }
  }

  function parse_ForBinding()
  {
    eventHandler.startNonterminal("ForBinding", e0);
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(107);               // S^WS | '(:' | 'allowing' | 'as' | 'at' | 'in'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(102);               // S^WS | '(:' | 'allowing' | 'at' | 'in'
    if (l1 == 75)                   // 'allowing'
    {
      whitespace();
      parse_AllowingEmpty();
    }
    lookahead1W(79);                // S^WS | '(:' | 'at' | 'in'
    if (l1 == 82)                   // 'at'
    {
      whitespace();
      parse_PositionalVar();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consume(132);                   // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("ForBinding", e0);
  }

  function try_ForBinding()
  {
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
    lookahead1W(107);               // S^WS | '(:' | 'allowing' | 'as' | 'at' | 'in'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
    lookahead1W(102);               // S^WS | '(:' | 'allowing' | 'at' | 'in'
    if (l1 == 75)                   // 'allowing'
    {
      try_AllowingEmpty();
    }
    lookahead1W(79);                // S^WS | '(:' | 'at' | 'in'
    if (l1 == 82)                   // 'at'
    {
      try_PositionalVar();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consumeT(132);                  // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_AllowingEmpty()
  {
    eventHandler.startNonterminal("AllowingEmpty", e0);
    consume(75);                    // 'allowing'
    lookahead1W(45);                // S^WS | '(:' | 'empty'
    consume(111);                   // 'empty'
    eventHandler.endNonterminal("AllowingEmpty", e0);
  }

  function try_AllowingEmpty()
  {
    consumeT(75);                   // 'allowing'
    lookahead1W(45);                // S^WS | '(:' | 'empty'
    consumeT(111);                  // 'empty'
  }

  function parse_PositionalVar()
  {
    eventHandler.startNonterminal("PositionalVar", e0);
    consume(82);                    // 'at'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    eventHandler.endNonterminal("PositionalVar", e0);
  }

  function try_PositionalVar()
  {
    consumeT(82);                   // 'at'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
  }

  function parse_LetClause()
  {
    eventHandler.startNonterminal("LetClause", e0);
    consume(142);                   // 'let'
    lookahead1W(23);                // S^WS | '$' | '(:'
    whitespace();
    parse_LetBinding();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      whitespace();
      parse_LetBinding();
    }
    eventHandler.endNonterminal("LetClause", e0);
  }

  function try_LetClause()
  {
    consumeT(142);                  // 'let'
    lookahead1W(23);                // S^WS | '$' | '(:'
    try_LetBinding();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      try_LetBinding();
    }
  }

  function parse_LetBinding()
  {
    eventHandler.startNonterminal("LetBinding", e0);
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(73);                // S^WS | '(:' | ':=' | 'as'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(29);                // S^WS | '(:' | ':='
    consume(51);                    // ':='
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("LetBinding", e0);
  }

  function try_LetBinding()
  {
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
    lookahead1W(73);                // S^WS | '(:' | ':=' | 'as'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
    lookahead1W(29);                // S^WS | '(:' | ':='
    consumeT(51);                   // ':='
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_WindowClause()
  {
    eventHandler.startNonterminal("WindowClause", e0);
    consume(122);                   // 'for'
    lookahead1W(92);                // S^WS | '(:' | 'sliding' | 'tumbling'
    switch (l1)
    {
    case 189:                       // 'tumbling'
      whitespace();
      parse_TumblingWindowClause();
      break;
    default:
      whitespace();
      parse_SlidingWindowClause();
    }
    eventHandler.endNonterminal("WindowClause", e0);
  }

  function try_WindowClause()
  {
    consumeT(122);                  // 'for'
    lookahead1W(92);                // S^WS | '(:' | 'sliding' | 'tumbling'
    switch (l1)
    {
    case 189:                       // 'tumbling'
      try_TumblingWindowClause();
      break;
    default:
      try_SlidingWindowClause();
    }
  }

  function parse_TumblingWindowClause()
  {
    eventHandler.startNonterminal("TumblingWindowClause", e0);
    consume(189);                   // 'tumbling'
    lookahead1W(59);                // S^WS | '(:' | 'window'
    consume(199);                   // 'window'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consume(132);                   // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    whitespace();
    parse_WindowStartCondition();
    if (l1 == 114                   // 'end'
     || l1 == 156)                  // 'only'
    {
      whitespace();
      parse_WindowEndCondition();
    }
    eventHandler.endNonterminal("TumblingWindowClause", e0);
  }

  function try_TumblingWindowClause()
  {
    consumeT(189);                  // 'tumbling'
    lookahead1W(59);                // S^WS | '(:' | 'window'
    consumeT(199);                  // 'window'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consumeT(132);                  // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
    try_WindowStartCondition();
    if (l1 == 114                   // 'end'
     || l1 == 156)                  // 'only'
    {
      try_WindowEndCondition();
    }
  }

  function parse_SlidingWindowClause()
  {
    eventHandler.startNonterminal("SlidingWindowClause", e0);
    consume(177);                   // 'sliding'
    lookahead1W(59);                // S^WS | '(:' | 'window'
    consume(199);                   // 'window'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consume(132);                   // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    whitespace();
    parse_WindowStartCondition();
    whitespace();
    parse_WindowEndCondition();
    eventHandler.endNonterminal("SlidingWindowClause", e0);
  }

  function try_SlidingWindowClause()
  {
    consumeT(177);                  // 'sliding'
    lookahead1W(59);                // S^WS | '(:' | 'window'
    consumeT(199);                  // 'window'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consumeT(132);                  // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
    try_WindowStartCondition();
    try_WindowEndCondition();
  }

  function parse_WindowStartCondition()
  {
    eventHandler.startNonterminal("WindowStartCondition", e0);
    consume(180);                   // 'start'
    lookahead1W(110);               // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
    whitespace();
    parse_WindowVars();
    lookahead1W(58);                // S^WS | '(:' | 'when'
    consume(197);                   // 'when'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("WindowStartCondition", e0);
  }

  function try_WindowStartCondition()
  {
    consumeT(180);                  // 'start'
    lookahead1W(110);               // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
    try_WindowVars();
    lookahead1W(58);                // S^WS | '(:' | 'when'
    consumeT(197);                  // 'when'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_WindowEndCondition()
  {
    eventHandler.startNonterminal("WindowEndCondition", e0);
    if (l1 == 156)                  // 'only'
    {
      consume(156);                 // 'only'
    }
    lookahead1W(46);                // S^WS | '(:' | 'end'
    consume(114);                   // 'end'
    lookahead1W(110);               // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
    whitespace();
    parse_WindowVars();
    lookahead1W(58);                // S^WS | '(:' | 'when'
    consume(197);                   // 'when'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("WindowEndCondition", e0);
  }

  function try_WindowEndCondition()
  {
    if (l1 == 156)                  // 'only'
    {
      consumeT(156);                // 'only'
    }
    lookahead1W(46);                // S^WS | '(:' | 'end'
    consumeT(114);                  // 'end'
    lookahead1W(110);               // S^WS | '$' | '(:' | 'at' | 'next' | 'previous' | 'when'
    try_WindowVars();
    lookahead1W(58);                // S^WS | '(:' | 'when'
    consumeT(197);                  // 'when'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_WindowVars()
  {
    eventHandler.startNonterminal("WindowVars", e0);
    if (l1 == 31)                   // '$'
    {
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_CurrentItem();
    }
    lookahead1W(108);               // S^WS | '(:' | 'at' | 'next' | 'previous' | 'when'
    if (l1 == 82)                   // 'at'
    {
      whitespace();
      parse_PositionalVar();
    }
    lookahead1W(104);               // S^WS | '(:' | 'next' | 'previous' | 'when'
    if (l1 == 169)                  // 'previous'
    {
      consume(169);                 // 'previous'
      lookahead1W(23);              // S^WS | '$' | '(:'
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_PreviousItem();
    }
    lookahead1W(87);                // S^WS | '(:' | 'next' | 'when'
    if (l1 == 151)                  // 'next'
    {
      consume(151);                 // 'next'
      lookahead1W(23);              // S^WS | '$' | '(:'
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_NextItem();
    }
    eventHandler.endNonterminal("WindowVars", e0);
  }

  function try_WindowVars()
  {
    if (l1 == 31)                   // '$'
    {
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_CurrentItem();
    }
    lookahead1W(108);               // S^WS | '(:' | 'at' | 'next' | 'previous' | 'when'
    if (l1 == 82)                   // 'at'
    {
      try_PositionalVar();
    }
    lookahead1W(104);               // S^WS | '(:' | 'next' | 'previous' | 'when'
    if (l1 == 169)                  // 'previous'
    {
      consumeT(169);                // 'previous'
      lookahead1W(23);              // S^WS | '$' | '(:'
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_PreviousItem();
    }
    lookahead1W(87);                // S^WS | '(:' | 'next' | 'when'
    if (l1 == 151)                  // 'next'
    {
      consumeT(151);                // 'next'
      lookahead1W(23);              // S^WS | '$' | '(:'
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_NextItem();
    }
  }

  function parse_CurrentItem()
  {
    eventHandler.startNonterminal("CurrentItem", e0);
    parse_EQName();
    eventHandler.endNonterminal("CurrentItem", e0);
  }

  function try_CurrentItem()
  {
    try_EQName();
  }

  function parse_PreviousItem()
  {
    eventHandler.startNonterminal("PreviousItem", e0);
    parse_EQName();
    eventHandler.endNonterminal("PreviousItem", e0);
  }

  function try_PreviousItem()
  {
    try_EQName();
  }

  function parse_NextItem()
  {
    eventHandler.startNonterminal("NextItem", e0);
    parse_EQName();
    eventHandler.endNonterminal("NextItem", e0);
  }

  function try_NextItem()
  {
    try_EQName();
  }

  function parse_CountClause()
  {
    eventHandler.startNonterminal("CountClause", e0);
    consume(97);                    // 'count'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    eventHandler.endNonterminal("CountClause", e0);
  }

  function try_CountClause()
  {
    consumeT(97);                   // 'count'
    lookahead1W(23);                // S^WS | '$' | '(:'
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
  }

  function parse_WhereClause()
  {
    eventHandler.startNonterminal("WhereClause", e0);
    consume(198);                   // 'where'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("WhereClause", e0);
  }

  function try_WhereClause()
  {
    consumeT(198);                  // 'where'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_GroupByClause()
  {
    eventHandler.startNonterminal("GroupByClause", e0);
    consume(126);                   // 'group'
    lookahead1W(35);                // S^WS | '(:' | 'by'
    consume(86);                    // 'by'
    lookahead1W(23);                // S^WS | '$' | '(:'
    whitespace();
    parse_GroupingSpecList();
    eventHandler.endNonterminal("GroupByClause", e0);
  }

  function try_GroupByClause()
  {
    consumeT(126);                  // 'group'
    lookahead1W(35);                // S^WS | '(:' | 'by'
    consumeT(86);                   // 'by'
    lookahead1W(23);                // S^WS | '$' | '(:'
    try_GroupingSpecList();
  }

  function parse_GroupingSpecList()
  {
    eventHandler.startNonterminal("GroupingSpecList", e0);
    parse_GroupingSpec();
    for (;;)
    {
      lookahead1W(118);             // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
                                    // 'stable' | 'where'
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      whitespace();
      parse_GroupingSpec();
    }
    eventHandler.endNonterminal("GroupingSpecList", e0);
  }

  function try_GroupingSpecList()
  {
    try_GroupingSpec();
    for (;;)
    {
      lookahead1W(118);             // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
                                    // 'stable' | 'where'
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      try_GroupingSpec();
    }
  }

  function parse_GroupingSpec()
  {
    eventHandler.startNonterminal("GroupingSpec", e0);
    parse_GroupingVariable();
    lookahead1W(121);               // S^WS | '(:' | ',' | ':=' | 'as' | 'collation' | 'count' | 'for' | 'group' |
                                    // 'let' | 'order' | 'return' | 'stable' | 'where'
    if (l1 == 51                    // ':='
     || l1 == 80)                   // 'as'
    {
      if (l1 == 80)                 // 'as'
      {
        whitespace();
        parse_TypeDeclaration();
      }
      lookahead1W(29);              // S^WS | '(:' | ':='
      consume(51);                  // ':='
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_ExprSingle();
    }
    if (l1 == 92)                   // 'collation'
    {
      consume(92);                  // 'collation'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      whitespace();
      parse_URILiteral();
    }
    eventHandler.endNonterminal("GroupingSpec", e0);
  }

  function try_GroupingSpec()
  {
    try_GroupingVariable();
    lookahead1W(121);               // S^WS | '(:' | ',' | ':=' | 'as' | 'collation' | 'count' | 'for' | 'group' |
                                    // 'let' | 'order' | 'return' | 'stable' | 'where'
    if (l1 == 51                    // ':='
     || l1 == 80)                   // 'as'
    {
      if (l1 == 80)                 // 'as'
      {
        try_TypeDeclaration();
      }
      lookahead1W(29);              // S^WS | '(:' | ':='
      consumeT(51);                 // ':='
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_ExprSingle();
    }
    if (l1 == 92)                   // 'collation'
    {
      consumeT(92);                 // 'collation'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      try_URILiteral();
    }
  }

  function parse_GroupingVariable()
  {
    eventHandler.startNonterminal("GroupingVariable", e0);
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    eventHandler.endNonterminal("GroupingVariable", e0);
  }

  function try_GroupingVariable()
  {
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
  }

  function parse_OrderByClause()
  {
    eventHandler.startNonterminal("OrderByClause", e0);
    switch (l1)
    {
    case 159:                       // 'order'
      consume(159);                 // 'order'
      lookahead1W(35);              // S^WS | '(:' | 'by'
      consume(86);                  // 'by'
      break;
    default:
      consume(179);                 // 'stable'
      lookahead1W(53);              // S^WS | '(:' | 'order'
      consume(159);                 // 'order'
      lookahead1W(35);              // S^WS | '(:' | 'by'
      consume(86);                  // 'by'
    }
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_OrderSpecList();
    eventHandler.endNonterminal("OrderByClause", e0);
  }

  function try_OrderByClause()
  {
    switch (l1)
    {
    case 159:                       // 'order'
      consumeT(159);                // 'order'
      lookahead1W(35);              // S^WS | '(:' | 'by'
      consumeT(86);                 // 'by'
      break;
    default:
      consumeT(179);                // 'stable'
      lookahead1W(53);              // S^WS | '(:' | 'order'
      consumeT(159);                // 'order'
      lookahead1W(35);              // S^WS | '(:' | 'by'
      consumeT(86);                 // 'by'
    }
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_OrderSpecList();
  }

  function parse_OrderSpecList()
  {
    eventHandler.startNonterminal("OrderSpecList", e0);
    parse_OrderSpec();
    for (;;)
    {
      lookahead1W(118);             // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
                                    // 'stable' | 'where'
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_OrderSpec();
    }
    eventHandler.endNonterminal("OrderSpecList", e0);
  }

  function try_OrderSpecList()
  {
    try_OrderSpec();
    for (;;)
    {
      lookahead1W(118);             // S^WS | '(:' | ',' | 'count' | 'for' | 'group' | 'let' | 'order' | 'return' |
                                    // 'stable' | 'where'
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_OrderSpec();
    }
  }

  function parse_OrderSpec()
  {
    eventHandler.startNonterminal("OrderSpec", e0);
    parse_ExprSingle();
    whitespace();
    parse_OrderModifier();
    eventHandler.endNonterminal("OrderSpec", e0);
  }

  function try_OrderSpec()
  {
    try_ExprSingle();
    try_OrderModifier();
  }

  function parse_OrderModifier()
  {
    eventHandler.startNonterminal("OrderModifier", e0);
    if (l1 == 81                    // 'ascending'
     || l1 == 104)                  // 'descending'
    {
      switch (l1)
      {
      case 81:                      // 'ascending'
        consume(81);                // 'ascending'
        break;
      default:
        consume(104);               // 'descending'
      }
    }
    lookahead1W(120);               // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
                                    // 'order' | 'return' | 'stable' | 'where'
    if (l1 == 111)                  // 'empty'
    {
      consume(111);                 // 'empty'
      lookahead1W(84);              // S^WS | '(:' | 'greatest' | 'least'
      switch (l1)
      {
      case 125:                     // 'greatest'
        consume(125);               // 'greatest'
        break;
      default:
        consume(141);               // 'least'
      }
    }
    lookahead1W(119);               // S^WS | '(:' | ',' | 'collation' | 'count' | 'for' | 'group' | 'let' | 'order' |
                                    // 'return' | 'stable' | 'where'
    if (l1 == 92)                   // 'collation'
    {
      consume(92);                  // 'collation'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      whitespace();
      parse_URILiteral();
    }
    eventHandler.endNonterminal("OrderModifier", e0);
  }

  function try_OrderModifier()
  {
    if (l1 == 81                    // 'ascending'
     || l1 == 104)                  // 'descending'
    {
      switch (l1)
      {
      case 81:                      // 'ascending'
        consumeT(81);               // 'ascending'
        break;
      default:
        consumeT(104);              // 'descending'
      }
    }
    lookahead1W(120);               // S^WS | '(:' | ',' | 'collation' | 'count' | 'empty' | 'for' | 'group' | 'let' |
                                    // 'order' | 'return' | 'stable' | 'where'
    if (l1 == 111)                  // 'empty'
    {
      consumeT(111);                // 'empty'
      lookahead1W(84);              // S^WS | '(:' | 'greatest' | 'least'
      switch (l1)
      {
      case 125:                     // 'greatest'
        consumeT(125);              // 'greatest'
        break;
      default:
        consumeT(141);              // 'least'
      }
    }
    lookahead1W(119);               // S^WS | '(:' | ',' | 'collation' | 'count' | 'for' | 'group' | 'let' | 'order' |
                                    // 'return' | 'stable' | 'where'
    if (l1 == 92)                   // 'collation'
    {
      consumeT(92);                 // 'collation'
      lookahead1W(19);              // StringLiteral | S^WS | '(:'
      try_URILiteral();
    }
  }

  function parse_ReturnClause()
  {
    eventHandler.startNonterminal("ReturnClause", e0);
    consume(171);                   // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("ReturnClause", e0);
  }

  function try_ReturnClause()
  {
    consumeT(171);                  // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_QuantifiedExpr()
  {
    eventHandler.startNonterminal("QuantifiedExpr", e0);
    switch (l1)
    {
    case 178:                       // 'some'
      consume(178);                 // 'some'
      break;
    default:
      consume(116);                 // 'every'
    }
    lookahead1W(23);                // S^WS | '$' | '(:'
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      whitespace();
      parse_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consume(132);                   // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consume(40);                  // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_VarName();
      lookahead1W(77);              // S^WS | '(:' | 'as' | 'in'
      if (l1 == 80)                 // 'as'
      {
        whitespace();
        parse_TypeDeclaration();
      }
      lookahead1W(47);              // S^WS | '(:' | 'in'
      consume(132);                 // 'in'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_ExprSingle();
    }
    consume(172);                   // 'satisfies'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("QuantifiedExpr", e0);
  }

  function try_QuantifiedExpr()
  {
    switch (l1)
    {
    case 178:                       // 'some'
      consumeT(178);                // 'some'
      break;
    default:
      consumeT(116);                // 'every'
    }
    lookahead1W(23);                // S^WS | '$' | '(:'
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
    lookahead1W(77);                // S^WS | '(:' | 'as' | 'in'
    if (l1 == 80)                   // 'as'
    {
      try_TypeDeclaration();
    }
    lookahead1W(47);                // S^WS | '(:' | 'in'
    consumeT(132);                  // 'in'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
    for (;;)
    {
      if (l1 != 40)                 // ','
      {
        break;
      }
      consumeT(40);                 // ','
      lookahead1W(23);              // S^WS | '$' | '(:'
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_VarName();
      lookahead1W(77);              // S^WS | '(:' | 'as' | 'in'
      if (l1 == 80)                 // 'as'
      {
        try_TypeDeclaration();
      }
      lookahead1W(47);              // S^WS | '(:' | 'in'
      consumeT(132);                // 'in'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_ExprSingle();
    }
    consumeT(172);                  // 'satisfies'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_SwitchExpr()
  {
    eventHandler.startNonterminal("SwitchExpr", e0);
    consume(183);                   // 'switch'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Expr();
    consume(37);                    // ')'
    for (;;)
    {
      lookahead1W(36);              // S^WS | '(:' | 'case'
      whitespace();
      parse_SwitchCaseClause();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consume(101);                   // 'default'
    lookahead1W(55);                // S^WS | '(:' | 'return'
    consume(171);                   // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("SwitchExpr", e0);
  }

  function try_SwitchExpr()
  {
    consumeT(183);                  // 'switch'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_Expr();
    consumeT(37);                   // ')'
    for (;;)
    {
      lookahead1W(36);              // S^WS | '(:' | 'case'
      try_SwitchCaseClause();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consumeT(101);                  // 'default'
    lookahead1W(55);                // S^WS | '(:' | 'return'
    consumeT(171);                  // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_SwitchCaseClause()
  {
    eventHandler.startNonterminal("SwitchCaseClause", e0);
    for (;;)
    {
      consume(87);                  // 'case'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_SwitchCaseOperand();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consume(171);                   // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("SwitchCaseClause", e0);
  }

  function try_SwitchCaseClause()
  {
    for (;;)
    {
      consumeT(87);                 // 'case'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_SwitchCaseOperand();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consumeT(171);                  // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_SwitchCaseOperand()
  {
    eventHandler.startNonterminal("SwitchCaseOperand", e0);
    parse_ExprSingle();
    eventHandler.endNonterminal("SwitchCaseOperand", e0);
  }

  function try_SwitchCaseOperand()
  {
    try_ExprSingle();
  }

  function parse_TypeswitchExpr()
  {
    eventHandler.startNonterminal("TypeswitchExpr", e0);
    consume(191);                   // 'typeswitch'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Expr();
    consume(37);                    // ')'
    for (;;)
    {
      lookahead1W(36);              // S^WS | '(:' | 'case'
      whitespace();
      parse_CaseClause();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consume(101);                   // 'default'
    lookahead1W(66);                // S^WS | '$' | '(:' | 'return'
    if (l1 == 31)                   // '$'
    {
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_VarName();
    }
    lookahead1W(55);                // S^WS | '(:' | 'return'
    consume(171);                   // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("TypeswitchExpr", e0);
  }

  function try_TypeswitchExpr()
  {
    consumeT(191);                  // 'typeswitch'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_Expr();
    consumeT(37);                   // ')'
    for (;;)
    {
      lookahead1W(36);              // S^WS | '(:' | 'case'
      try_CaseClause();
      if (l1 != 87)                 // 'case'
      {
        break;
      }
    }
    consumeT(101);                  // 'default'
    lookahead1W(66);                // S^WS | '$' | '(:' | 'return'
    if (l1 == 31)                   // '$'
    {
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_VarName();
    }
    lookahead1W(55);                // S^WS | '(:' | 'return'
    consumeT(171);                  // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_CaseClause()
  {
    eventHandler.startNonterminal("CaseClause", e0);
    consume(87);                    // 'case'
    lookahead1W(169);               // URIQualifiedName | QName^Token | S^WS | '$' | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 == 31)                   // '$'
    {
      consume(31);                  // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_VarName();
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consume(80);                  // 'as'
    }
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_SequenceTypeUnion();
    consume(171);                   // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("CaseClause", e0);
  }

  function try_CaseClause()
  {
    consumeT(87);                   // 'case'
    lookahead1W(169);               // URIQualifiedName | QName^Token | S^WS | '$' | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 == 31)                   // '$'
    {
      consumeT(31);                 // '$'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_VarName();
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consumeT(80);                 // 'as'
    }
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_SequenceTypeUnion();
    consumeT(171);                  // 'return'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_SequenceTypeUnion()
  {
    eventHandler.startNonterminal("SequenceTypeUnion", e0);
    parse_SequenceType();
    for (;;)
    {
      lookahead1W(91);              // S^WS | '(:' | 'return' | '|'
      if (l1 != 204)                // '|'
      {
        break;
      }
      consume(204);                 // '|'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SequenceType();
    }
    eventHandler.endNonterminal("SequenceTypeUnion", e0);
  }

  function try_SequenceTypeUnion()
  {
    try_SequenceType();
    for (;;)
    {
      lookahead1W(91);              // S^WS | '(:' | 'return' | '|'
      if (l1 != 204)                // '|'
      {
        break;
      }
      consumeT(204);                // '|'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SequenceType();
    }
  }

  function parse_IfExpr()
  {
    eventHandler.startNonterminal("IfExpr", e0);
    consume(130);                   // 'if'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Expr();
    consume(37);                    // ')'
    lookahead1W(57);                // S^WS | '(:' | 'then'
    consume(185);                   // 'then'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    consume(110);                   // 'else'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_ExprSingle();
    eventHandler.endNonterminal("IfExpr", e0);
  }

  function try_IfExpr()
  {
    consumeT(130);                  // 'if'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_Expr();
    consumeT(37);                   // ')'
    lookahead1W(57);                // S^WS | '(:' | 'then'
    consumeT(185);                  // 'then'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
    consumeT(110);                  // 'else'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_ExprSingle();
  }

  function parse_TryCatchExpr()
  {
    eventHandler.startNonterminal("TryCatchExpr", e0);
    parse_TryClause();
    for (;;)
    {
      lookahead1W(37);              // S^WS | '(:' | 'catch'
      whitespace();
      parse_CatchClause();
      lookahead1W(123);             // S^WS | EOF | '(:' | ')' | ',' | ':' | ';' | ']' | 'ascending' | 'case' |
                                    // 'catch' | 'collation' | 'count' | 'default' | 'descending' | 'else' | 'empty' |
                                    // 'end' | 'for' | 'group' | 'let' | 'only' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'where' | '}' | '}`'
      if (l1 != 90)                 // 'catch'
      {
        break;
      }
    }
    eventHandler.endNonterminal("TryCatchExpr", e0);
  }

  function try_TryCatchExpr()
  {
    try_TryClause();
    for (;;)
    {
      lookahead1W(37);              // S^WS | '(:' | 'catch'
      try_CatchClause();
      lookahead1W(123);             // S^WS | EOF | '(:' | ')' | ',' | ':' | ';' | ']' | 'ascending' | 'case' |
                                    // 'catch' | 'collation' | 'count' | 'default' | 'descending' | 'else' | 'empty' |
                                    // 'end' | 'for' | 'group' | 'let' | 'only' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'where' | '}' | '}`'
      if (l1 != 90)                 // 'catch'
      {
        break;
      }
    }
  }

  function parse_TryClause()
  {
    eventHandler.startNonterminal("TryClause", e0);
    consume(188);                   // 'try'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedTryTargetExpr();
    eventHandler.endNonterminal("TryClause", e0);
  }

  function try_TryClause()
  {
    consumeT(188);                  // 'try'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedTryTargetExpr();
  }

  function parse_EnclosedTryTargetExpr()
  {
    eventHandler.startNonterminal("EnclosedTryTargetExpr", e0);
    parse_EnclosedExpr();
    eventHandler.endNonterminal("EnclosedTryTargetExpr", e0);
  }

  function try_EnclosedTryTargetExpr()
  {
    try_EnclosedExpr();
  }

  function parse_CatchClause()
  {
    eventHandler.startNonterminal("CatchClause", e0);
    consume(90);                    // 'catch'
    lookahead1W(163);               // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_CatchErrorList();
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CatchClause", e0);
  }

  function try_CatchClause()
  {
    consumeT(90);                   // 'catch'
    lookahead1W(163);               // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_CatchErrorList();
    try_EnclosedExpr();
  }

  function parse_CatchErrorList()
  {
    eventHandler.startNonterminal("CatchErrorList", e0);
    parse_NameTest();
    for (;;)
    {
      lookahead1W(93);              // S^WS | '(:' | '{' | '|'
      if (l1 != 204)                // '|'
      {
        break;
      }
      consume(204);                 // '|'
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_NameTest();
    }
    eventHandler.endNonterminal("CatchErrorList", e0);
  }

  function try_CatchErrorList()
  {
    try_NameTest();
    for (;;)
    {
      lookahead1W(93);              // S^WS | '(:' | '{' | '|'
      if (l1 != 204)                // '|'
      {
        break;
      }
      consumeT(204);                // '|'
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_NameTest();
    }
  }

  function parse_OrExpr()
  {
    eventHandler.startNonterminal("OrExpr", e0);
    parse_AndExpr();
    for (;;)
    {
      if (l1 != 158)                // 'or'
      {
        break;
      }
      consume(158);                 // 'or'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_AndExpr();
    }
    eventHandler.endNonterminal("OrExpr", e0);
  }

  function try_OrExpr()
  {
    try_AndExpr();
    for (;;)
    {
      if (l1 != 158)                // 'or'
      {
        break;
      }
      consumeT(158);                // 'or'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_AndExpr();
    }
  }

  function parse_AndExpr()
  {
    eventHandler.startNonterminal("AndExpr", e0);
    parse_ComparisonExpr();
    for (;;)
    {
      if (l1 != 78)                 // 'and'
      {
        break;
      }
      consume(78);                  // 'and'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_ComparisonExpr();
    }
    eventHandler.endNonterminal("AndExpr", e0);
  }

  function try_AndExpr()
  {
    try_ComparisonExpr();
    for (;;)
    {
      if (l1 != 78)                 // 'and'
      {
        break;
      }
      consumeT(78);                 // 'and'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_ComparisonExpr();
    }
  }

  function parse_ComparisonExpr()
  {
    eventHandler.startNonterminal("ComparisonExpr", e0);
    parse_StringConcatExpr();
    if (l1 == 27                    // '!='
     || l1 == 53                    // '<'
     || l1 == 57                    // '<<'
     || l1 == 58                    // '<='
     || l1 == 60                    // '='
     || l1 == 62                    // '>'
     || l1 == 63                    // '>='
     || l1 == 64                    // '>>'
     || l1 == 115                   // 'eq'
     || l1 == 124                   // 'ge'
     || l1 == 128                   // 'gt'
     || l1 == 137                   // 'is'
     || l1 == 140                   // 'le'
     || l1 == 143                   // 'lt'
     || l1 == 150)                  // 'ne'
    {
      switch (l1)
      {
      case 115:                     // 'eq'
      case 124:                     // 'ge'
      case 128:                     // 'gt'
      case 140:                     // 'le'
      case 143:                     // 'lt'
      case 150:                     // 'ne'
        whitespace();
        parse_ValueComp();
        break;
      case 57:                      // '<<'
      case 64:                      // '>>'
      case 137:                     // 'is'
        whitespace();
        parse_NodeComp();
        break;
      default:
        whitespace();
        parse_GeneralComp();
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_StringConcatExpr();
    }
    eventHandler.endNonterminal("ComparisonExpr", e0);
  }

  function try_ComparisonExpr()
  {
    try_StringConcatExpr();
    if (l1 == 27                    // '!='
     || l1 == 53                    // '<'
     || l1 == 57                    // '<<'
     || l1 == 58                    // '<='
     || l1 == 60                    // '='
     || l1 == 62                    // '>'
     || l1 == 63                    // '>='
     || l1 == 64                    // '>>'
     || l1 == 115                   // 'eq'
     || l1 == 124                   // 'ge'
     || l1 == 128                   // 'gt'
     || l1 == 137                   // 'is'
     || l1 == 140                   // 'le'
     || l1 == 143                   // 'lt'
     || l1 == 150)                  // 'ne'
    {
      switch (l1)
      {
      case 115:                     // 'eq'
      case 124:                     // 'ge'
      case 128:                     // 'gt'
      case 140:                     // 'le'
      case 143:                     // 'lt'
      case 150:                     // 'ne'
        try_ValueComp();
        break;
      case 57:                      // '<<'
      case 64:                      // '>>'
      case 137:                     // 'is'
        try_NodeComp();
        break;
      default:
        try_GeneralComp();
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_StringConcatExpr();
    }
  }

  function parse_StringConcatExpr()
  {
    eventHandler.startNonterminal("StringConcatExpr", e0);
    parse_RangeExpr();
    for (;;)
    {
      if (l1 != 205)                // '||'
      {
        break;
      }
      consume(205);                 // '||'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_RangeExpr();
    }
    eventHandler.endNonterminal("StringConcatExpr", e0);
  }

  function try_StringConcatExpr()
  {
    try_RangeExpr();
    for (;;)
    {
      if (l1 != 205)                // '||'
      {
        break;
      }
      consumeT(205);                // '||'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_RangeExpr();
    }
  }

  function parse_RangeExpr()
  {
    eventHandler.startNonterminal("RangeExpr", e0);
    parse_AdditiveExpr();
    if (l1 == 186)                  // 'to'
    {
      consume(186);                 // 'to'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_AdditiveExpr();
    }
    eventHandler.endNonterminal("RangeExpr", e0);
  }

  function try_RangeExpr()
  {
    try_AdditiveExpr();
    if (l1 == 186)                  // 'to'
    {
      consumeT(186);                // 'to'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_AdditiveExpr();
    }
  }

  function parse_AdditiveExpr()
  {
    eventHandler.startNonterminal("AdditiveExpr", e0);
    parse_MultiplicativeExpr();
    for (;;)
    {
      if (l1 != 39                  // '+'
       && l1 != 41)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '+'
        consume(39);                // '+'
        break;
      default:
        consume(41);                // '-'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_MultiplicativeExpr();
    }
    eventHandler.endNonterminal("AdditiveExpr", e0);
  }

  function try_AdditiveExpr()
  {
    try_MultiplicativeExpr();
    for (;;)
    {
      if (l1 != 39                  // '+'
       && l1 != 41)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 39:                      // '+'
        consumeT(39);               // '+'
        break;
      default:
        consumeT(41);               // '-'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_MultiplicativeExpr();
    }
  }

  function parse_MultiplicativeExpr()
  {
    eventHandler.startNonterminal("MultiplicativeExpr", e0);
    parse_UnionExpr();
    for (;;)
    {
      if (l1 != 38                  // '*'
       && l1 != 106                 // 'div'
       && l1 != 129                 // 'idiv'
       && l1 != 146)                // 'mod'
      {
        break;
      }
      switch (l1)
      {
      case 38:                      // '*'
        consume(38);                // '*'
        break;
      case 106:                     // 'div'
        consume(106);               // 'div'
        break;
      case 129:                     // 'idiv'
        consume(129);               // 'idiv'
        break;
      default:
        consume(146);               // 'mod'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_UnionExpr();
    }
    eventHandler.endNonterminal("MultiplicativeExpr", e0);
  }

  function try_MultiplicativeExpr()
  {
    try_UnionExpr();
    for (;;)
    {
      if (l1 != 38                  // '*'
       && l1 != 106                 // 'div'
       && l1 != 129                 // 'idiv'
       && l1 != 146)                // 'mod'
      {
        break;
      }
      switch (l1)
      {
      case 38:                      // '*'
        consumeT(38);               // '*'
        break;
      case 106:                     // 'div'
        consumeT(106);              // 'div'
        break;
      case 129:                     // 'idiv'
        consumeT(129);              // 'idiv'
        break;
      default:
        consumeT(146);              // 'mod'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_UnionExpr();
    }
  }

  function parse_UnionExpr()
  {
    eventHandler.startNonterminal("UnionExpr", e0);
    parse_IntersectExceptExpr();
    for (;;)
    {
      if (l1 != 192                 // 'union'
       && l1 != 204)                // '|'
      {
        break;
      }
      switch (l1)
      {
      case 192:                     // 'union'
        consume(192);               // 'union'
        break;
      default:
        consume(204);               // '|'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_IntersectExceptExpr();
    }
    eventHandler.endNonterminal("UnionExpr", e0);
  }

  function try_UnionExpr()
  {
    try_IntersectExceptExpr();
    for (;;)
    {
      if (l1 != 192                 // 'union'
       && l1 != 204)                // '|'
      {
        break;
      }
      switch (l1)
      {
      case 192:                     // 'union'
        consumeT(192);              // 'union'
        break;
      default:
        consumeT(204);              // '|'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_IntersectExceptExpr();
    }
  }

  function parse_IntersectExceptExpr()
  {
    eventHandler.startNonterminal("IntersectExceptExpr", e0);
    parse_InstanceofExpr();
    for (;;)
    {
      lookahead1W(136);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'union' | 'where' | '|' | '||' | '}' |
                                    // '}`'
      if (l1 != 117                 // 'except'
       && l1 != 136)                // 'intersect'
      {
        break;
      }
      switch (l1)
      {
      case 136:                     // 'intersect'
        consume(136);               // 'intersect'
        break;
      default:
        consume(117);               // 'except'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_InstanceofExpr();
    }
    eventHandler.endNonterminal("IntersectExceptExpr", e0);
  }

  function try_IntersectExceptExpr()
  {
    try_InstanceofExpr();
    for (;;)
    {
      lookahead1W(136);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'union' | 'where' | '|' | '||' | '}' |
                                    // '}`'
      if (l1 != 117                 // 'except'
       && l1 != 136)                // 'intersect'
      {
        break;
      }
      switch (l1)
      {
      case 136:                     // 'intersect'
        consumeT(136);              // 'intersect'
        break;
      default:
        consumeT(117);              // 'except'
      }
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_InstanceofExpr();
    }
  }

  function parse_InstanceofExpr()
  {
    eventHandler.startNonterminal("InstanceofExpr", e0);
    parse_TreatExpr();
    lookahead1W(137);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'union' |
                                    // 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 135)                  // 'instance'
    {
      consume(135);                 // 'instance'
      lookahead1W(51);              // S^WS | '(:' | 'of'
      consume(155);                 // 'of'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SequenceType();
    }
    eventHandler.endNonterminal("InstanceofExpr", e0);
  }

  function try_InstanceofExpr()
  {
    try_TreatExpr();
    lookahead1W(137);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'union' |
                                    // 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 135)                  // 'instance'
    {
      consumeT(135);                // 'instance'
      lookahead1W(51);              // S^WS | '(:' | 'of'
      consumeT(155);                // 'of'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SequenceType();
    }
  }

  function parse_TreatExpr()
  {
    eventHandler.startNonterminal("TreatExpr", e0);
    parse_CastableExpr();
    lookahead1W(138);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 187)                  // 'treat'
    {
      consume(187);                 // 'treat'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consume(80);                  // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SequenceType();
    }
    eventHandler.endNonterminal("TreatExpr", e0);
  }

  function try_TreatExpr()
  {
    try_CastableExpr();
    lookahead1W(138);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 187)                  // 'treat'
    {
      consumeT(187);                // 'treat'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consumeT(80);                 // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SequenceType();
    }
  }

  function parse_CastableExpr()
  {
    eventHandler.startNonterminal("CastableExpr", e0);
    parse_CastExpr();
    lookahead1W(139);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 89)                   // 'castable'
    {
      consume(89);                  // 'castable'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consume(80);                  // 'as'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SingleType();
    }
    eventHandler.endNonterminal("CastableExpr", e0);
  }

  function try_CastableExpr()
  {
    try_CastExpr();
    lookahead1W(139);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 89)                   // 'castable'
    {
      consumeT(89);                 // 'castable'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consumeT(80);                 // 'as'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SingleType();
    }
  }

  function parse_CastExpr()
  {
    eventHandler.startNonterminal("CastExpr", e0);
    parse_ArrowExpr();
    if (l1 == 88)                   // 'cast'
    {
      consume(88);                  // 'cast'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consume(80);                  // 'as'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SingleType();
    }
    eventHandler.endNonterminal("CastExpr", e0);
  }

  function try_CastExpr()
  {
    try_ArrowExpr();
    if (l1 == 88)                   // 'cast'
    {
      consumeT(88);                 // 'cast'
      lookahead1W(32);              // S^WS | '(:' | 'as'
      consumeT(80);                 // 'as'
      lookahead1W(161);             // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SingleType();
    }
  }

  function parse_ArrowExpr()
  {
    eventHandler.startNonterminal("ArrowExpr", e0);
    parse_UnaryExpr();
    for (;;)
    {
      lookahead1W(141);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '=>' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
                                    // 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
                                    // 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
                                    // 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
                                    // 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      if (l1 != 61)                 // '=>'
      {
        break;
      }
      consume(61);                  // '=>'
      lookahead1W(166);             // URIQualifiedName | QName^Token | S^WS | '$' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_ArrowFunctionSpecifier();
      lookahead1W(24);              // S^WS | '(' | '(:'
      whitespace();
      parse_ArgumentList();
    }
    eventHandler.endNonterminal("ArrowExpr", e0);
  }

  function try_ArrowExpr()
  {
    try_UnaryExpr();
    for (;;)
    {
      lookahead1W(141);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '=>' | '>' | '>=' | '>>' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
                                    // 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
                                    // 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
                                    // 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
                                    // 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      if (l1 != 61)                 // '=>'
      {
        break;
      }
      consumeT(61);                 // '=>'
      lookahead1W(166);             // URIQualifiedName | QName^Token | S^WS | '$' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_ArrowFunctionSpecifier();
      lookahead1W(24);              // S^WS | '(' | '(:'
      try_ArgumentList();
    }
  }

  function parse_UnaryExpr()
  {
    eventHandler.startNonterminal("UnaryExpr", e0);
    for (;;)
    {
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      if (l1 != 39                  // '+'
       && l1 != 41)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 41:                      // '-'
        consume(41);                // '-'
        break;
      default:
        consume(39);                // '+'
      }
    }
    whitespace();
    parse_ValueExpr();
    eventHandler.endNonterminal("UnaryExpr", e0);
  }

  function try_UnaryExpr()
  {
    for (;;)
    {
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      if (l1 != 39                  // '+'
       && l1 != 41)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 41:                      // '-'
        consumeT(41);               // '-'
        break;
      default:
        consumeT(39);               // '+'
      }
    }
    try_ValueExpr();
  }

  function parse_ValueExpr()
  {
    eventHandler.startNonterminal("ValueExpr", e0);
    switch (l1)
    {
    case 194:                       // 'validate'
      lookahead2W(157);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'lax' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' |
                                    // 'return' | 'satisfies' | 'stable' | 'start' | 'strict' | 'to' | 'treat' |
                                    // 'type' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 35778:                     // 'validate' 'lax'
    case 46530:                     // 'validate' 'strict'
    case 48834:                     // 'validate' 'type'
    case 51906:                     // 'validate' '{'
      parse_ValidateExpr();
      break;
    case 35:                        // '(#'
      parse_ExtensionExpr();
      break;
    default:
      parse_SimpleMapExpr();
    }
    eventHandler.endNonterminal("ValueExpr", e0);
  }

  function try_ValueExpr()
  {
    switch (l1)
    {
    case 194:                       // 'validate'
      lookahead2W(157);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'lax' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' |
                                    // 'return' | 'satisfies' | 'stable' | 'start' | 'strict' | 'to' | 'treat' |
                                    // 'type' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 35778:                     // 'validate' 'lax'
    case 46530:                     // 'validate' 'strict'
    case 48834:                     // 'validate' 'type'
    case 51906:                     // 'validate' '{'
      try_ValidateExpr();
      break;
    case 35:                        // '(#'
      try_ExtensionExpr();
      break;
    default:
      try_SimpleMapExpr();
    }
  }

  function parse_GeneralComp()
  {
    eventHandler.startNonterminal("GeneralComp", e0);
    switch (l1)
    {
    case 60:                        // '='
      consume(60);                  // '='
      break;
    case 27:                        // '!='
      consume(27);                  // '!='
      break;
    case 53:                        // '<'
      consume(53);                  // '<'
      break;
    case 58:                        // '<='
      consume(58);                  // '<='
      break;
    case 62:                        // '>'
      consume(62);                  // '>'
      break;
    default:
      consume(63);                  // '>='
    }
    eventHandler.endNonterminal("GeneralComp", e0);
  }

  function try_GeneralComp()
  {
    switch (l1)
    {
    case 60:                        // '='
      consumeT(60);                 // '='
      break;
    case 27:                        // '!='
      consumeT(27);                 // '!='
      break;
    case 53:                        // '<'
      consumeT(53);                 // '<'
      break;
    case 58:                        // '<='
      consumeT(58);                 // '<='
      break;
    case 62:                        // '>'
      consumeT(62);                 // '>'
      break;
    default:
      consumeT(63);                 // '>='
    }
  }

  function parse_ValueComp()
  {
    eventHandler.startNonterminal("ValueComp", e0);
    switch (l1)
    {
    case 115:                       // 'eq'
      consume(115);                 // 'eq'
      break;
    case 150:                       // 'ne'
      consume(150);                 // 'ne'
      break;
    case 143:                       // 'lt'
      consume(143);                 // 'lt'
      break;
    case 140:                       // 'le'
      consume(140);                 // 'le'
      break;
    case 128:                       // 'gt'
      consume(128);                 // 'gt'
      break;
    default:
      consume(124);                 // 'ge'
    }
    eventHandler.endNonterminal("ValueComp", e0);
  }

  function try_ValueComp()
  {
    switch (l1)
    {
    case 115:                       // 'eq'
      consumeT(115);                // 'eq'
      break;
    case 150:                       // 'ne'
      consumeT(150);                // 'ne'
      break;
    case 143:                       // 'lt'
      consumeT(143);                // 'lt'
      break;
    case 140:                       // 'le'
      consumeT(140);                // 'le'
      break;
    case 128:                       // 'gt'
      consumeT(128);                // 'gt'
      break;
    default:
      consumeT(124);                // 'ge'
    }
  }

  function parse_NodeComp()
  {
    eventHandler.startNonterminal("NodeComp", e0);
    switch (l1)
    {
    case 137:                       // 'is'
      consume(137);                 // 'is'
      break;
    case 57:                        // '<<'
      consume(57);                  // '<<'
      break;
    default:
      consume(64);                  // '>>'
    }
    eventHandler.endNonterminal("NodeComp", e0);
  }

  function try_NodeComp()
  {
    switch (l1)
    {
    case 137:                       // 'is'
      consumeT(137);                // 'is'
      break;
    case 57:                        // '<<'
      consumeT(57);                 // '<<'
      break;
    default:
      consumeT(64);                 // '>>'
    }
  }

  function parse_ValidateExpr()
  {
    eventHandler.startNonterminal("ValidateExpr", e0);
    consume(194);                   // 'validate'
    lookahead1W(109);               // S^WS | '(:' | 'lax' | 'strict' | 'type' | '{'
    if (l1 != 202)                  // '{'
    {
      switch (l1)
      {
      case 190:                     // 'type'
        consume(190);               // 'type'
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        whitespace();
        parse_TypeName();
        break;
      default:
        whitespace();
        parse_ValidationMode();
      }
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    consume(202);                   // '{'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Expr();
    consume(206);                   // '}'
    eventHandler.endNonterminal("ValidateExpr", e0);
  }

  function try_ValidateExpr()
  {
    consumeT(194);                  // 'validate'
    lookahead1W(109);               // S^WS | '(:' | 'lax' | 'strict' | 'type' | '{'
    if (l1 != 202)                  // '{'
    {
      switch (l1)
      {
      case 190:                     // 'type'
        consumeT(190);              // 'type'
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        try_TypeName();
        break;
      default:
        try_ValidationMode();
      }
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    consumeT(202);                  // '{'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_Expr();
    consumeT(206);                  // '}'
  }

  function parse_ValidationMode()
  {
    eventHandler.startNonterminal("ValidationMode", e0);
    switch (l1)
    {
    case 139:                       // 'lax'
      consume(139);                 // 'lax'
      break;
    default:
      consume(181);                 // 'strict'
    }
    eventHandler.endNonterminal("ValidationMode", e0);
  }

  function try_ValidationMode()
  {
    switch (l1)
    {
    case 139:                       // 'lax'
      consumeT(139);                // 'lax'
      break;
    default:
      consumeT(181);                // 'strict'
    }
  }

  function parse_ExtensionExpr()
  {
    eventHandler.startNonterminal("ExtensionExpr", e0);
    for (;;)
    {
      whitespace();
      parse_Pragma();
      lookahead1W(68);              // S^WS | '(#' | '(:' | '{'
      if (l1 != 35)                 // '(#'
      {
        break;
      }
    }
    consume(202);                   // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      whitespace();
      parse_Expr();
    }
    consume(206);                   // '}'
    eventHandler.endNonterminal("ExtensionExpr", e0);
  }

  function try_ExtensionExpr()
  {
    for (;;)
    {
      try_Pragma();
      lookahead1W(68);              // S^WS | '(#' | '(:' | '{'
      if (l1 != 35)                 // '(#'
      {
        break;
      }
    }
    consumeT(202);                  // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      try_Expr();
    }
    consumeT(206);                  // '}'
  }

  function parse_Pragma()
  {
    eventHandler.startNonterminal("Pragma", e0);
    consume(35);                    // '(#'
    lookahead1(160);                // URIQualifiedName | QName^Token | S | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 == 17)                   // S
    {
      consume(17);                  // S
    }
    parse_EQName();
    lookahead1(12);                 // S | '#)'
    if (l1 == 17)                   // S
    {
      consume(17);                  // S
      lookahead1(2);                // PragmaContents
      consume(20);                  // PragmaContents
    }
    lookahead1(6);                  // '#)'
    consume(30);                    // '#)'
    eventHandler.endNonterminal("Pragma", e0);
  }

  function try_Pragma()
  {
    consumeT(35);                   // '(#'
    lookahead1(160);                // URIQualifiedName | QName^Token | S | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 == 17)                   // S
    {
      consumeT(17);                 // S
    }
    try_EQName();
    lookahead1(12);                 // S | '#)'
    if (l1 == 17)                   // S
    {
      consumeT(17);                 // S
      lookahead1(2);                // PragmaContents
      consumeT(20);                 // PragmaContents
    }
    lookahead1(6);                  // '#)'
    consumeT(30);                   // '#)'
  }

  function parse_SimpleMapExpr()
  {
    eventHandler.startNonterminal("SimpleMapExpr", e0);
    parse_PathExpr();
    for (;;)
    {
      if (l1 != 26)                 // '!'
      {
        break;
      }
      consume(26);                  // '!'
      lookahead1W(172);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_PathExpr();
    }
    eventHandler.endNonterminal("SimpleMapExpr", e0);
  }

  function try_SimpleMapExpr()
  {
    try_PathExpr();
    for (;;)
    {
      if (l1 != 26)                 // '!'
      {
        break;
      }
      consumeT(26);                 // '!'
      lookahead1W(172);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_PathExpr();
    }
  }

  function parse_PathExpr()
  {
    eventHandler.startNonterminal("PathExpr", e0);
    switch (l1)
    {
    case 45:                        // '/'
      consume(45);                  // '/'
      lookahead1W(181);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '!' | '!=' | '$' | '%' |
                                    // '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '.' | '..' | ':' | ';' | '<' |
                                    // '<!--' | '<<' | '<=' | '<?' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '@' | '[' |
                                    // ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '|' | '||' | '}' | '}`'
      switch (l1)
      {
      case 25:                      // EOF
      case 26:                      // '!'
      case 27:                      // '!='
      case 37:                      // ')'
      case 38:                      // '*'
      case 39:                      // '+'
      case 40:                      // ','
      case 41:                      // '-'
      case 48:                      // ':'
      case 52:                      // ';'
      case 57:                      // '<<'
      case 58:                      // '<='
      case 60:                      // '='
      case 61:                      // '=>'
      case 62:                      // '>'
      case 63:                      // '>='
      case 64:                      // '>>'
      case 70:                      // ']'
      case 204:                     // '|'
      case 205:                     // '||'
      case 206:                     // '}'
      case 207:                     // '}`'
        break;
      default:
        whitespace();
        parse_RelativePathExpr();
      }
      break;
    case 46:                        // '//'
      consume(46);                  // '//'
      lookahead1W(171);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_RelativePathExpr();
      break;
    default:
      parse_RelativePathExpr();
    }
    eventHandler.endNonterminal("PathExpr", e0);
  }

  function try_PathExpr()
  {
    switch (l1)
    {
    case 45:                        // '/'
      consumeT(45);                 // '/'
      lookahead1W(181);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | EOF | '!' | '!=' | '$' | '%' |
                                    // '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '.' | '..' | ':' | ';' | '<' |
                                    // '<!--' | '<<' | '<=' | '<?' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '@' | '[' |
                                    // ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '|' | '||' | '}' | '}`'
      switch (l1)
      {
      case 25:                      // EOF
      case 26:                      // '!'
      case 27:                      // '!='
      case 37:                      // ')'
      case 38:                      // '*'
      case 39:                      // '+'
      case 40:                      // ','
      case 41:                      // '-'
      case 48:                      // ':'
      case 52:                      // ';'
      case 57:                      // '<<'
      case 58:                      // '<='
      case 60:                      // '='
      case 61:                      // '=>'
      case 62:                      // '>'
      case 63:                      // '>='
      case 64:                      // '>>'
      case 70:                      // ']'
      case 204:                     // '|'
      case 205:                     // '||'
      case 206:                     // '}'
      case 207:                     // '}`'
        break;
      default:
        try_RelativePathExpr();
      }
      break;
    case 46:                        // '//'
      consumeT(46);                 // '//'
      lookahead1W(171);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_RelativePathExpr();
      break;
    default:
      try_RelativePathExpr();
    }
  }

  function parse_RelativePathExpr()
  {
    eventHandler.startNonterminal("RelativePathExpr", e0);
    parse_StepExpr();
    for (;;)
    {
      if (l1 != 45                  // '/'
       && l1 != 46)                 // '//'
      {
        break;
      }
      switch (l1)
      {
      case 45:                      // '/'
        consume(45);                // '/'
        break;
      default:
        consume(46);                // '//'
      }
      lookahead1W(171);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_StepExpr();
    }
    eventHandler.endNonterminal("RelativePathExpr", e0);
  }

  function try_RelativePathExpr()
  {
    try_StepExpr();
    for (;;)
    {
      if (l1 != 45                  // '/'
       && l1 != 46)                 // '//'
      {
        break;
      }
      switch (l1)
      {
      case 45:                      // '/'
        consumeT(45);               // '/'
        break;
      default:
        consumeT(46);               // '//'
      }
      lookahead1W(171);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(:' | '.' |
                                    // '..' | '<' | '<!--' | '<?' | '?' | '@' | '[' | '``[' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_StepExpr();
    }
  }

  function parse_StepExpr()
  {
    eventHandler.startNonterminal("StepExpr", e0);
    switch (l1)
    {
    case 83:                        // 'attribute'
      lookahead2W(180);             // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
                                    // ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | '::' | ';' | '<' | '<<' | '<=' |
                                    // '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{' | '|' | '||' | '}' | '}`'
      break;
    case 109:                       // 'element'
      lookahead2W(179);             // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
                                    // ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' |
                                    // '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 79:                        // 'array'
    case 144:                       // 'map'
      lookahead2W(149);             // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' | '|' | '||' |
                                    // '}' | '}`'
      break;
    case 148:                       // 'namespace'
    case 170:                       // 'processing-instruction'
      lookahead2W(155);             // NCName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' |
                                    // ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' |
                                    // '>=' | '>>' | '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    case 93:                        // 'comment'
    case 107:                       // 'document'
    case 160:                       // 'ordered'
    case 184:                       // 'text'
    case 193:                       // 'unordered'
      lookahead2W(154);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 112:                       // 'empty-sequence'
    case 130:                       // 'if'
    case 138:                       // 'item'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
      lookahead2W(145);             // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 91:                        // 'child'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
    case 176:                       // 'self'
      lookahead2W(153);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 5:                         // URIQualifiedName
    case 15:                        // QName^Token
    case 78:                        // 'and'
    case 81:                        // 'ascending'
    case 87:                        // 'case'
    case 88:                        // 'cast'
    case 89:                        // 'castable'
    case 92:                        // 'collation'
    case 97:                        // 'count'
    case 100:                       // 'declare'
    case 101:                       // 'default'
    case 104:                       // 'descending'
    case 106:                       // 'div'
    case 108:                       // 'document-node'
    case 110:                       // 'else'
    case 111:                       // 'empty'
    case 114:                       // 'end'
    case 115:                       // 'eq'
    case 116:                       // 'every'
    case 117:                       // 'except'
    case 122:                       // 'for'
    case 123:                       // 'function'
    case 124:                       // 'ge'
    case 126:                       // 'group'
    case 128:                       // 'gt'
    case 129:                       // 'idiv'
    case 131:                       // 'import'
    case 135:                       // 'instance'
    case 136:                       // 'intersect'
    case 137:                       // 'is'
    case 140:                       // 'le'
    case 142:                       // 'let'
    case 143:                       // 'lt'
    case 146:                       // 'mod'
    case 147:                       // 'module'
    case 149:                       // 'namespace-node'
    case 150:                       // 'ne'
    case 154:                       // 'node'
    case 156:                       // 'only'
    case 158:                       // 'or'
    case 159:                       // 'order'
    case 171:                       // 'return'
    case 172:                       // 'satisfies'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 178:                       // 'some'
    case 179:                       // 'stable'
    case 180:                       // 'start'
    case 186:                       // 'to'
    case 187:                       // 'treat'
    case 188:                       // 'try'
    case 192:                       // 'union'
    case 194:                       // 'validate'
    case 198:                       // 'where'
    case 200:                       // 'xquery'
      lookahead2W(148);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    if (lk == 20051                 // 'attribute' 'and'
     || lk == 20077                 // 'element' 'and'
     || lk == 20116                 // 'namespace' 'and'
     || lk == 20138                 // 'processing-instruction' 'and'
     || lk == 20819                 // 'attribute' 'ascending'
     || lk == 20845                 // 'element' 'ascending'
     || lk == 20884                 // 'namespace' 'ascending'
     || lk == 20906                 // 'processing-instruction' 'ascending'
     || lk == 22355                 // 'attribute' 'case'
     || lk == 22381                 // 'element' 'case'
     || lk == 22420                 // 'namespace' 'case'
     || lk == 22442                 // 'processing-instruction' 'case'
     || lk == 22611                 // 'attribute' 'cast'
     || lk == 22637                 // 'element' 'cast'
     || lk == 22676                 // 'namespace' 'cast'
     || lk == 22698                 // 'processing-instruction' 'cast'
     || lk == 22867                 // 'attribute' 'castable'
     || lk == 22893                 // 'element' 'castable'
     || lk == 22932                 // 'namespace' 'castable'
     || lk == 22954                 // 'processing-instruction' 'castable'
     || lk == 23635                 // 'attribute' 'collation'
     || lk == 23661                 // 'element' 'collation'
     || lk == 23700                 // 'namespace' 'collation'
     || lk == 23722                 // 'processing-instruction' 'collation'
     || lk == 24915                 // 'attribute' 'count'
     || lk == 24941                 // 'element' 'count'
     || lk == 24980                 // 'namespace' 'count'
     || lk == 25002                 // 'processing-instruction' 'count'
     || lk == 25939                 // 'attribute' 'default'
     || lk == 25965                 // 'element' 'default'
     || lk == 26004                 // 'namespace' 'default'
     || lk == 26026                 // 'processing-instruction' 'default'
     || lk == 26707                 // 'attribute' 'descending'
     || lk == 26733                 // 'element' 'descending'
     || lk == 26772                 // 'namespace' 'descending'
     || lk == 26794                 // 'processing-instruction' 'descending'
     || lk == 27219                 // 'attribute' 'div'
     || lk == 27245                 // 'element' 'div'
     || lk == 27284                 // 'namespace' 'div'
     || lk == 27306                 // 'processing-instruction' 'div'
     || lk == 28243                 // 'attribute' 'else'
     || lk == 28269                 // 'element' 'else'
     || lk == 28308                 // 'namespace' 'else'
     || lk == 28330                 // 'processing-instruction' 'else'
     || lk == 28499                 // 'attribute' 'empty'
     || lk == 28525                 // 'element' 'empty'
     || lk == 28564                 // 'namespace' 'empty'
     || lk == 28586                 // 'processing-instruction' 'empty'
     || lk == 29267                 // 'attribute' 'end'
     || lk == 29293                 // 'element' 'end'
     || lk == 29332                 // 'namespace' 'end'
     || lk == 29354                 // 'processing-instruction' 'end'
     || lk == 29523                 // 'attribute' 'eq'
     || lk == 29549                 // 'element' 'eq'
     || lk == 29588                 // 'namespace' 'eq'
     || lk == 29610                 // 'processing-instruction' 'eq'
     || lk == 30035                 // 'attribute' 'except'
     || lk == 30061                 // 'element' 'except'
     || lk == 30100                 // 'namespace' 'except'
     || lk == 30122                 // 'processing-instruction' 'except'
     || lk == 31315                 // 'attribute' 'for'
     || lk == 31341                 // 'element' 'for'
     || lk == 31380                 // 'namespace' 'for'
     || lk == 31402                 // 'processing-instruction' 'for'
     || lk == 31827                 // 'attribute' 'ge'
     || lk == 31853                 // 'element' 'ge'
     || lk == 31892                 // 'namespace' 'ge'
     || lk == 31914                 // 'processing-instruction' 'ge'
     || lk == 32339                 // 'attribute' 'group'
     || lk == 32365                 // 'element' 'group'
     || lk == 32404                 // 'namespace' 'group'
     || lk == 32426                 // 'processing-instruction' 'group'
     || lk == 32851                 // 'attribute' 'gt'
     || lk == 32877                 // 'element' 'gt'
     || lk == 32916                 // 'namespace' 'gt'
     || lk == 32938                 // 'processing-instruction' 'gt'
     || lk == 33107                 // 'attribute' 'idiv'
     || lk == 33133                 // 'element' 'idiv'
     || lk == 33172                 // 'namespace' 'idiv'
     || lk == 33194                 // 'processing-instruction' 'idiv'
     || lk == 34643                 // 'attribute' 'instance'
     || lk == 34669                 // 'element' 'instance'
     || lk == 34708                 // 'namespace' 'instance'
     || lk == 34730                 // 'processing-instruction' 'instance'
     || lk == 34899                 // 'attribute' 'intersect'
     || lk == 34925                 // 'element' 'intersect'
     || lk == 34964                 // 'namespace' 'intersect'
     || lk == 34986                 // 'processing-instruction' 'intersect'
     || lk == 35155                 // 'attribute' 'is'
     || lk == 35181                 // 'element' 'is'
     || lk == 35220                 // 'namespace' 'is'
     || lk == 35242                 // 'processing-instruction' 'is'
     || lk == 35923                 // 'attribute' 'le'
     || lk == 35949                 // 'element' 'le'
     || lk == 35988                 // 'namespace' 'le'
     || lk == 36010                 // 'processing-instruction' 'le'
     || lk == 36435                 // 'attribute' 'let'
     || lk == 36461                 // 'element' 'let'
     || lk == 36500                 // 'namespace' 'let'
     || lk == 36522                 // 'processing-instruction' 'let'
     || lk == 36691                 // 'attribute' 'lt'
     || lk == 36717                 // 'element' 'lt'
     || lk == 36756                 // 'namespace' 'lt'
     || lk == 36778                 // 'processing-instruction' 'lt'
     || lk == 37459                 // 'attribute' 'mod'
     || lk == 37485                 // 'element' 'mod'
     || lk == 37524                 // 'namespace' 'mod'
     || lk == 37546                 // 'processing-instruction' 'mod'
     || lk == 38483                 // 'attribute' 'ne'
     || lk == 38509                 // 'element' 'ne'
     || lk == 38548                 // 'namespace' 'ne'
     || lk == 38570                 // 'processing-instruction' 'ne'
     || lk == 40019                 // 'attribute' 'only'
     || lk == 40045                 // 'element' 'only'
     || lk == 40084                 // 'namespace' 'only'
     || lk == 40106                 // 'processing-instruction' 'only'
     || lk == 40531                 // 'attribute' 'or'
     || lk == 40557                 // 'element' 'or'
     || lk == 40596                 // 'namespace' 'or'
     || lk == 40618                 // 'processing-instruction' 'or'
     || lk == 40787                 // 'attribute' 'order'
     || lk == 40813                 // 'element' 'order'
     || lk == 40852                 // 'namespace' 'order'
     || lk == 40874                 // 'processing-instruction' 'order'
     || lk == 43859                 // 'attribute' 'return'
     || lk == 43885                 // 'element' 'return'
     || lk == 43924                 // 'namespace' 'return'
     || lk == 43946                 // 'processing-instruction' 'return'
     || lk == 44115                 // 'attribute' 'satisfies'
     || lk == 44141                 // 'element' 'satisfies'
     || lk == 44180                 // 'namespace' 'satisfies'
     || lk == 44202                 // 'processing-instruction' 'satisfies'
     || lk == 45907                 // 'attribute' 'stable'
     || lk == 45933                 // 'element' 'stable'
     || lk == 45972                 // 'namespace' 'stable'
     || lk == 45994                 // 'processing-instruction' 'stable'
     || lk == 46163                 // 'attribute' 'start'
     || lk == 46189                 // 'element' 'start'
     || lk == 46228                 // 'namespace' 'start'
     || lk == 46250                 // 'processing-instruction' 'start'
     || lk == 47699                 // 'attribute' 'to'
     || lk == 47725                 // 'element' 'to'
     || lk == 47764                 // 'namespace' 'to'
     || lk == 47786                 // 'processing-instruction' 'to'
     || lk == 47955                 // 'attribute' 'treat'
     || lk == 47981                 // 'element' 'treat'
     || lk == 48020                 // 'namespace' 'treat'
     || lk == 48042                 // 'processing-instruction' 'treat'
     || lk == 49235                 // 'attribute' 'union'
     || lk == 49261                 // 'element' 'union'
     || lk == 49300                 // 'namespace' 'union'
     || lk == 49322                 // 'processing-instruction' 'union'
     || lk == 50771                 // 'attribute' 'where'
     || lk == 50797                 // 'element' 'where'
     || lk == 50836                 // 'namespace' 'where'
     || lk == 50858)                // 'processing-instruction' 'where'
    {
      lk = memoized(2, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_PostfixExpr();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(2, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 1:                         // IntegerLiteral
    case 2:                         // DecimalLiteral
    case 3:                         // DoubleLiteral
    case 4:                         // StringLiteral
    case 31:                        // '$'
    case 32:                        // '%'
    case 34:                        // '('
    case 43:                        // '.'
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
    case 65:                        // '?'
    case 69:                        // '['
    case 73:                        // '``['
    case 1363:                      // 'attribute' URIQualifiedName
    case 1389:                      // 'element' URIQualifiedName
    case 3732:                      // 'namespace' NCName^Token
    case 3754:                      // 'processing-instruction' NCName^Token
    case 3923:                      // 'attribute' QName^Token
    case 3949:                      // 'element' QName^Token
    case 7429:                      // URIQualifiedName '#'
    case 7439:                      // QName^Token '#'
    case 7500:                      // 'ancestor' '#'
    case 7501:                      // 'ancestor-or-self' '#'
    case 7502:                      // 'and' '#'
    case 7503:                      // 'array' '#'
    case 7505:                      // 'ascending' '#'
    case 7507:                      // 'attribute' '#'
    case 7511:                      // 'case' '#'
    case 7512:                      // 'cast' '#'
    case 7513:                      // 'castable' '#'
    case 7515:                      // 'child' '#'
    case 7516:                      // 'collation' '#'
    case 7517:                      // 'comment' '#'
    case 7521:                      // 'count' '#'
    case 7524:                      // 'declare' '#'
    case 7525:                      // 'default' '#'
    case 7526:                      // 'descendant' '#'
    case 7527:                      // 'descendant-or-self' '#'
    case 7528:                      // 'descending' '#'
    case 7530:                      // 'div' '#'
    case 7531:                      // 'document' '#'
    case 7532:                      // 'document-node' '#'
    case 7533:                      // 'element' '#'
    case 7534:                      // 'else' '#'
    case 7535:                      // 'empty' '#'
    case 7536:                      // 'empty-sequence' '#'
    case 7538:                      // 'end' '#'
    case 7539:                      // 'eq' '#'
    case 7540:                      // 'every' '#'
    case 7541:                      // 'except' '#'
    case 7544:                      // 'following' '#'
    case 7545:                      // 'following-sibling' '#'
    case 7546:                      // 'for' '#'
    case 7547:                      // 'function' '#'
    case 7548:                      // 'ge' '#'
    case 7550:                      // 'group' '#'
    case 7552:                      // 'gt' '#'
    case 7553:                      // 'idiv' '#'
    case 7554:                      // 'if' '#'
    case 7555:                      // 'import' '#'
    case 7559:                      // 'instance' '#'
    case 7560:                      // 'intersect' '#'
    case 7561:                      // 'is' '#'
    case 7562:                      // 'item' '#'
    case 7564:                      // 'le' '#'
    case 7566:                      // 'let' '#'
    case 7567:                      // 'lt' '#'
    case 7568:                      // 'map' '#'
    case 7570:                      // 'mod' '#'
    case 7571:                      // 'module' '#'
    case 7572:                      // 'namespace' '#'
    case 7573:                      // 'namespace-node' '#'
    case 7574:                      // 'ne' '#'
    case 7578:                      // 'node' '#'
    case 7580:                      // 'only' '#'
    case 7582:                      // 'or' '#'
    case 7583:                      // 'order' '#'
    case 7584:                      // 'ordered' '#'
    case 7586:                      // 'parent' '#'
    case 7590:                      // 'preceding' '#'
    case 7591:                      // 'preceding-sibling' '#'
    case 7594:                      // 'processing-instruction' '#'
    case 7595:                      // 'return' '#'
    case 7596:                      // 'satisfies' '#'
    case 7598:                      // 'schema-attribute' '#'
    case 7599:                      // 'schema-element' '#'
    case 7600:                      // 'self' '#'
    case 7602:                      // 'some' '#'
    case 7603:                      // 'stable' '#'
    case 7604:                      // 'start' '#'
    case 7607:                      // 'switch' '#'
    case 7608:                      // 'text' '#'
    case 7610:                      // 'to' '#'
    case 7611:                      // 'treat' '#'
    case 7612:                      // 'try' '#'
    case 7615:                      // 'typeswitch' '#'
    case 7616:                      // 'union' '#'
    case 7617:                      // 'unordered' '#'
    case 7618:                      // 'validate' '#'
    case 7622:                      // 'where' '#'
    case 7624:                      // 'xquery' '#'
    case 8709:                      // URIQualifiedName '('
    case 8719:                      // QName^Token '('
    case 8780:                      // 'ancestor' '('
    case 8781:                      // 'ancestor-or-self' '('
    case 8782:                      // 'and' '('
    case 8785:                      // 'ascending' '('
    case 8791:                      // 'case' '('
    case 8792:                      // 'cast' '('
    case 8793:                      // 'castable' '('
    case 8795:                      // 'child' '('
    case 8796:                      // 'collation' '('
    case 8801:                      // 'count' '('
    case 8804:                      // 'declare' '('
    case 8805:                      // 'default' '('
    case 8806:                      // 'descendant' '('
    case 8807:                      // 'descendant-or-self' '('
    case 8808:                      // 'descending' '('
    case 8810:                      // 'div' '('
    case 8811:                      // 'document' '('
    case 8814:                      // 'else' '('
    case 8815:                      // 'empty' '('
    case 8818:                      // 'end' '('
    case 8819:                      // 'eq' '('
    case 8820:                      // 'every' '('
    case 8821:                      // 'except' '('
    case 8824:                      // 'following' '('
    case 8825:                      // 'following-sibling' '('
    case 8826:                      // 'for' '('
    case 8827:                      // 'function' '('
    case 8828:                      // 'ge' '('
    case 8830:                      // 'group' '('
    case 8832:                      // 'gt' '('
    case 8833:                      // 'idiv' '('
    case 8835:                      // 'import' '('
    case 8839:                      // 'instance' '('
    case 8840:                      // 'intersect' '('
    case 8841:                      // 'is' '('
    case 8844:                      // 'le' '('
    case 8846:                      // 'let' '('
    case 8847:                      // 'lt' '('
    case 8850:                      // 'mod' '('
    case 8851:                      // 'module' '('
    case 8852:                      // 'namespace' '('
    case 8854:                      // 'ne' '('
    case 8860:                      // 'only' '('
    case 8862:                      // 'or' '('
    case 8863:                      // 'order' '('
    case 8864:                      // 'ordered' '('
    case 8866:                      // 'parent' '('
    case 8870:                      // 'preceding' '('
    case 8871:                      // 'preceding-sibling' '('
    case 8875:                      // 'return' '('
    case 8876:                      // 'satisfies' '('
    case 8880:                      // 'self' '('
    case 8882:                      // 'some' '('
    case 8883:                      // 'stable' '('
    case 8884:                      // 'start' '('
    case 8890:                      // 'to' '('
    case 8891:                      // 'treat' '('
    case 8892:                      // 'try' '('
    case 8896:                      // 'union' '('
    case 8897:                      // 'unordered' '('
    case 8898:                      // 'validate' '('
    case 8902:                      // 'where' '('
    case 8904:                      // 'xquery' '('
    case 19539:                     // 'attribute' 'ancestor'
    case 19565:                     // 'element' 'ancestor'
    case 19795:                     // 'attribute' 'ancestor-or-self'
    case 19821:                     // 'element' 'ancestor-or-self'
    case 20307:                     // 'attribute' 'array'
    case 20333:                     // 'element' 'array'
    case 21331:                     // 'attribute' 'attribute'
    case 21357:                     // 'element' 'attribute'
    case 23379:                     // 'attribute' 'child'
    case 23405:                     // 'element' 'child'
    case 23891:                     // 'attribute' 'comment'
    case 23917:                     // 'element' 'comment'
    case 25683:                     // 'attribute' 'declare'
    case 25709:                     // 'element' 'declare'
    case 26195:                     // 'attribute' 'descendant'
    case 26221:                     // 'element' 'descendant'
    case 26451:                     // 'attribute' 'descendant-or-self'
    case 26477:                     // 'element' 'descendant-or-self'
    case 27475:                     // 'attribute' 'document'
    case 27501:                     // 'element' 'document'
    case 27731:                     // 'attribute' 'document-node'
    case 27757:                     // 'element' 'document-node'
    case 27987:                     // 'attribute' 'element'
    case 28013:                     // 'element' 'element'
    case 28755:                     // 'attribute' 'empty-sequence'
    case 28781:                     // 'element' 'empty-sequence'
    case 29779:                     // 'attribute' 'every'
    case 29805:                     // 'element' 'every'
    case 30803:                     // 'attribute' 'following'
    case 30829:                     // 'element' 'following'
    case 31059:                     // 'attribute' 'following-sibling'
    case 31085:                     // 'element' 'following-sibling'
    case 31571:                     // 'attribute' 'function'
    case 31597:                     // 'element' 'function'
    case 33363:                     // 'attribute' 'if'
    case 33389:                     // 'element' 'if'
    case 33619:                     // 'attribute' 'import'
    case 33645:                     // 'element' 'import'
    case 35411:                     // 'attribute' 'item'
    case 35437:                     // 'element' 'item'
    case 36947:                     // 'attribute' 'map'
    case 36973:                     // 'element' 'map'
    case 37715:                     // 'attribute' 'module'
    case 37741:                     // 'element' 'module'
    case 37971:                     // 'attribute' 'namespace'
    case 37997:                     // 'element' 'namespace'
    case 38227:                     // 'attribute' 'namespace-node'
    case 38253:                     // 'element' 'namespace-node'
    case 39507:                     // 'attribute' 'node'
    case 39533:                     // 'element' 'node'
    case 41043:                     // 'attribute' 'ordered'
    case 41069:                     // 'element' 'ordered'
    case 41555:                     // 'attribute' 'parent'
    case 41581:                     // 'element' 'parent'
    case 42579:                     // 'attribute' 'preceding'
    case 42605:                     // 'element' 'preceding'
    case 42835:                     // 'attribute' 'preceding-sibling'
    case 42861:                     // 'element' 'preceding-sibling'
    case 43603:                     // 'attribute' 'processing-instruction'
    case 43629:                     // 'element' 'processing-instruction'
    case 44627:                     // 'attribute' 'schema-attribute'
    case 44653:                     // 'element' 'schema-attribute'
    case 44883:                     // 'attribute' 'schema-element'
    case 44909:                     // 'element' 'schema-element'
    case 45139:                     // 'attribute' 'self'
    case 45165:                     // 'element' 'self'
    case 45651:                     // 'attribute' 'some'
    case 45677:                     // 'element' 'some'
    case 46931:                     // 'attribute' 'switch'
    case 46957:                     // 'element' 'switch'
    case 47187:                     // 'attribute' 'text'
    case 47213:                     // 'element' 'text'
    case 48211:                     // 'attribute' 'try'
    case 48237:                     // 'element' 'try'
    case 48979:                     // 'attribute' 'typeswitch'
    case 49005:                     // 'element' 'typeswitch'
    case 49491:                     // 'attribute' 'unordered'
    case 49517:                     // 'element' 'unordered'
    case 49747:                     // 'attribute' 'validate'
    case 49773:                     // 'element' 'validate'
    case 51283:                     // 'attribute' 'xquery'
    case 51309:                     // 'element' 'xquery'
    case 51791:                     // 'array' '{'
    case 51795:                     // 'attribute' '{'
    case 51805:                     // 'comment' '{'
    case 51819:                     // 'document' '{'
    case 51821:                     // 'element' '{'
    case 51856:                     // 'map' '{'
    case 51860:                     // 'namespace' '{'
    case 51872:                     // 'ordered' '{'
    case 51882:                     // 'processing-instruction' '{'
    case 51896:                     // 'text' '{'
    case 51905:                     // 'unordered' '{'
      parse_PostfixExpr();
      break;
    default:
      parse_AxisStep();
    }
    eventHandler.endNonterminal("StepExpr", e0);
  }

  function try_StepExpr()
  {
    switch (l1)
    {
    case 83:                        // 'attribute'
      lookahead2W(180);             // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
                                    // ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | '::' | ';' | '<' | '<<' | '<=' |
                                    // '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{' | '|' | '||' | '}' | '}`'
      break;
    case 109:                       // 'element'
      lookahead2W(179);             // URIQualifiedName | QName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' |
                                    // ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' |
                                    // '=>' | '>' | '>=' | '>>' | '[' | ']' | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 79:                        // 'array'
    case 144:                       // 'map'
      lookahead2W(149);             // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' | '|' | '||' |
                                    // '}' | '}`'
      break;
    case 148:                       // 'namespace'
    case 170:                       // 'processing-instruction'
      lookahead2W(155);             // NCName^Token | S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' |
                                    // ',' | '-' | '/' | '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' |
                                    // '>=' | '>>' | '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    case 93:                        // 'comment'
    case 107:                       // 'document'
    case 160:                       // 'ordered'
    case 184:                       // 'text'
    case 193:                       // 'unordered'
      lookahead2W(154);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '{' |
                                    // '|' | '||' | '}' | '}`'
      break;
    case 112:                       // 'empty-sequence'
    case 130:                       // 'if'
    case 138:                       // 'item'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
      lookahead2W(145);             // S^WS | EOF | '!' | '!=' | '#' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 91:                        // 'child'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
    case 176:                       // 'self'
      lookahead2W(153);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' |
                                    // '[' | ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 5:                         // URIQualifiedName
    case 15:                        // QName^Token
    case 78:                        // 'and'
    case 81:                        // 'ascending'
    case 87:                        // 'case'
    case 88:                        // 'cast'
    case 89:                        // 'castable'
    case 92:                        // 'collation'
    case 97:                        // 'count'
    case 100:                       // 'declare'
    case 101:                       // 'default'
    case 104:                       // 'descending'
    case 106:                       // 'div'
    case 108:                       // 'document-node'
    case 110:                       // 'else'
    case 111:                       // 'empty'
    case 114:                       // 'end'
    case 115:                       // 'eq'
    case 116:                       // 'every'
    case 117:                       // 'except'
    case 122:                       // 'for'
    case 123:                       // 'function'
    case 124:                       // 'ge'
    case 126:                       // 'group'
    case 128:                       // 'gt'
    case 129:                       // 'idiv'
    case 131:                       // 'import'
    case 135:                       // 'instance'
    case 136:                       // 'intersect'
    case 137:                       // 'is'
    case 140:                       // 'le'
    case 142:                       // 'let'
    case 143:                       // 'lt'
    case 146:                       // 'mod'
    case 147:                       // 'module'
    case 149:                       // 'namespace-node'
    case 150:                       // 'ne'
    case 154:                       // 'node'
    case 156:                       // 'only'
    case 158:                       // 'or'
    case 159:                       // 'order'
    case 171:                       // 'return'
    case 172:                       // 'satisfies'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 178:                       // 'some'
    case 179:                       // 'stable'
    case 180:                       // 'start'
    case 186:                       // 'to'
    case 187:                       // 'treat'
    case 188:                       // 'try'
    case 192:                       // 'union'
    case 194:                       // 'validate'
    case 198:                       // 'where'
    case 200:                       // 'xquery'
      lookahead2W(148);             // S^WS | EOF | '!' | '!=' | '#' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' |
                                    // '//' | ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    if (lk == 20051                 // 'attribute' 'and'
     || lk == 20077                 // 'element' 'and'
     || lk == 20116                 // 'namespace' 'and'
     || lk == 20138                 // 'processing-instruction' 'and'
     || lk == 20819                 // 'attribute' 'ascending'
     || lk == 20845                 // 'element' 'ascending'
     || lk == 20884                 // 'namespace' 'ascending'
     || lk == 20906                 // 'processing-instruction' 'ascending'
     || lk == 22355                 // 'attribute' 'case'
     || lk == 22381                 // 'element' 'case'
     || lk == 22420                 // 'namespace' 'case'
     || lk == 22442                 // 'processing-instruction' 'case'
     || lk == 22611                 // 'attribute' 'cast'
     || lk == 22637                 // 'element' 'cast'
     || lk == 22676                 // 'namespace' 'cast'
     || lk == 22698                 // 'processing-instruction' 'cast'
     || lk == 22867                 // 'attribute' 'castable'
     || lk == 22893                 // 'element' 'castable'
     || lk == 22932                 // 'namespace' 'castable'
     || lk == 22954                 // 'processing-instruction' 'castable'
     || lk == 23635                 // 'attribute' 'collation'
     || lk == 23661                 // 'element' 'collation'
     || lk == 23700                 // 'namespace' 'collation'
     || lk == 23722                 // 'processing-instruction' 'collation'
     || lk == 24915                 // 'attribute' 'count'
     || lk == 24941                 // 'element' 'count'
     || lk == 24980                 // 'namespace' 'count'
     || lk == 25002                 // 'processing-instruction' 'count'
     || lk == 25939                 // 'attribute' 'default'
     || lk == 25965                 // 'element' 'default'
     || lk == 26004                 // 'namespace' 'default'
     || lk == 26026                 // 'processing-instruction' 'default'
     || lk == 26707                 // 'attribute' 'descending'
     || lk == 26733                 // 'element' 'descending'
     || lk == 26772                 // 'namespace' 'descending'
     || lk == 26794                 // 'processing-instruction' 'descending'
     || lk == 27219                 // 'attribute' 'div'
     || lk == 27245                 // 'element' 'div'
     || lk == 27284                 // 'namespace' 'div'
     || lk == 27306                 // 'processing-instruction' 'div'
     || lk == 28243                 // 'attribute' 'else'
     || lk == 28269                 // 'element' 'else'
     || lk == 28308                 // 'namespace' 'else'
     || lk == 28330                 // 'processing-instruction' 'else'
     || lk == 28499                 // 'attribute' 'empty'
     || lk == 28525                 // 'element' 'empty'
     || lk == 28564                 // 'namespace' 'empty'
     || lk == 28586                 // 'processing-instruction' 'empty'
     || lk == 29267                 // 'attribute' 'end'
     || lk == 29293                 // 'element' 'end'
     || lk == 29332                 // 'namespace' 'end'
     || lk == 29354                 // 'processing-instruction' 'end'
     || lk == 29523                 // 'attribute' 'eq'
     || lk == 29549                 // 'element' 'eq'
     || lk == 29588                 // 'namespace' 'eq'
     || lk == 29610                 // 'processing-instruction' 'eq'
     || lk == 30035                 // 'attribute' 'except'
     || lk == 30061                 // 'element' 'except'
     || lk == 30100                 // 'namespace' 'except'
     || lk == 30122                 // 'processing-instruction' 'except'
     || lk == 31315                 // 'attribute' 'for'
     || lk == 31341                 // 'element' 'for'
     || lk == 31380                 // 'namespace' 'for'
     || lk == 31402                 // 'processing-instruction' 'for'
     || lk == 31827                 // 'attribute' 'ge'
     || lk == 31853                 // 'element' 'ge'
     || lk == 31892                 // 'namespace' 'ge'
     || lk == 31914                 // 'processing-instruction' 'ge'
     || lk == 32339                 // 'attribute' 'group'
     || lk == 32365                 // 'element' 'group'
     || lk == 32404                 // 'namespace' 'group'
     || lk == 32426                 // 'processing-instruction' 'group'
     || lk == 32851                 // 'attribute' 'gt'
     || lk == 32877                 // 'element' 'gt'
     || lk == 32916                 // 'namespace' 'gt'
     || lk == 32938                 // 'processing-instruction' 'gt'
     || lk == 33107                 // 'attribute' 'idiv'
     || lk == 33133                 // 'element' 'idiv'
     || lk == 33172                 // 'namespace' 'idiv'
     || lk == 33194                 // 'processing-instruction' 'idiv'
     || lk == 34643                 // 'attribute' 'instance'
     || lk == 34669                 // 'element' 'instance'
     || lk == 34708                 // 'namespace' 'instance'
     || lk == 34730                 // 'processing-instruction' 'instance'
     || lk == 34899                 // 'attribute' 'intersect'
     || lk == 34925                 // 'element' 'intersect'
     || lk == 34964                 // 'namespace' 'intersect'
     || lk == 34986                 // 'processing-instruction' 'intersect'
     || lk == 35155                 // 'attribute' 'is'
     || lk == 35181                 // 'element' 'is'
     || lk == 35220                 // 'namespace' 'is'
     || lk == 35242                 // 'processing-instruction' 'is'
     || lk == 35923                 // 'attribute' 'le'
     || lk == 35949                 // 'element' 'le'
     || lk == 35988                 // 'namespace' 'le'
     || lk == 36010                 // 'processing-instruction' 'le'
     || lk == 36435                 // 'attribute' 'let'
     || lk == 36461                 // 'element' 'let'
     || lk == 36500                 // 'namespace' 'let'
     || lk == 36522                 // 'processing-instruction' 'let'
     || lk == 36691                 // 'attribute' 'lt'
     || lk == 36717                 // 'element' 'lt'
     || lk == 36756                 // 'namespace' 'lt'
     || lk == 36778                 // 'processing-instruction' 'lt'
     || lk == 37459                 // 'attribute' 'mod'
     || lk == 37485                 // 'element' 'mod'
     || lk == 37524                 // 'namespace' 'mod'
     || lk == 37546                 // 'processing-instruction' 'mod'
     || lk == 38483                 // 'attribute' 'ne'
     || lk == 38509                 // 'element' 'ne'
     || lk == 38548                 // 'namespace' 'ne'
     || lk == 38570                 // 'processing-instruction' 'ne'
     || lk == 40019                 // 'attribute' 'only'
     || lk == 40045                 // 'element' 'only'
     || lk == 40084                 // 'namespace' 'only'
     || lk == 40106                 // 'processing-instruction' 'only'
     || lk == 40531                 // 'attribute' 'or'
     || lk == 40557                 // 'element' 'or'
     || lk == 40596                 // 'namespace' 'or'
     || lk == 40618                 // 'processing-instruction' 'or'
     || lk == 40787                 // 'attribute' 'order'
     || lk == 40813                 // 'element' 'order'
     || lk == 40852                 // 'namespace' 'order'
     || lk == 40874                 // 'processing-instruction' 'order'
     || lk == 43859                 // 'attribute' 'return'
     || lk == 43885                 // 'element' 'return'
     || lk == 43924                 // 'namespace' 'return'
     || lk == 43946                 // 'processing-instruction' 'return'
     || lk == 44115                 // 'attribute' 'satisfies'
     || lk == 44141                 // 'element' 'satisfies'
     || lk == 44180                 // 'namespace' 'satisfies'
     || lk == 44202                 // 'processing-instruction' 'satisfies'
     || lk == 45907                 // 'attribute' 'stable'
     || lk == 45933                 // 'element' 'stable'
     || lk == 45972                 // 'namespace' 'stable'
     || lk == 45994                 // 'processing-instruction' 'stable'
     || lk == 46163                 // 'attribute' 'start'
     || lk == 46189                 // 'element' 'start'
     || lk == 46228                 // 'namespace' 'start'
     || lk == 46250                 // 'processing-instruction' 'start'
     || lk == 47699                 // 'attribute' 'to'
     || lk == 47725                 // 'element' 'to'
     || lk == 47764                 // 'namespace' 'to'
     || lk == 47786                 // 'processing-instruction' 'to'
     || lk == 47955                 // 'attribute' 'treat'
     || lk == 47981                 // 'element' 'treat'
     || lk == 48020                 // 'namespace' 'treat'
     || lk == 48042                 // 'processing-instruction' 'treat'
     || lk == 49235                 // 'attribute' 'union'
     || lk == 49261                 // 'element' 'union'
     || lk == 49300                 // 'namespace' 'union'
     || lk == 49322                 // 'processing-instruction' 'union'
     || lk == 50771                 // 'attribute' 'where'
     || lk == 50797                 // 'element' 'where'
     || lk == 50836                 // 'namespace' 'where'
     || lk == 50858)                // 'processing-instruction' 'where'
    {
      lk = memoized(2, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2;
        try
        {
          try_PostfixExpr();
          memoize(2, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; end = e2A; }}
          memoize(2, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 1:                         // IntegerLiteral
    case 2:                         // DecimalLiteral
    case 3:                         // DoubleLiteral
    case 4:                         // StringLiteral
    case 31:                        // '$'
    case 32:                        // '%'
    case 34:                        // '('
    case 43:                        // '.'
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
    case 65:                        // '?'
    case 69:                        // '['
    case 73:                        // '``['
    case 1363:                      // 'attribute' URIQualifiedName
    case 1389:                      // 'element' URIQualifiedName
    case 3732:                      // 'namespace' NCName^Token
    case 3754:                      // 'processing-instruction' NCName^Token
    case 3923:                      // 'attribute' QName^Token
    case 3949:                      // 'element' QName^Token
    case 7429:                      // URIQualifiedName '#'
    case 7439:                      // QName^Token '#'
    case 7500:                      // 'ancestor' '#'
    case 7501:                      // 'ancestor-or-self' '#'
    case 7502:                      // 'and' '#'
    case 7503:                      // 'array' '#'
    case 7505:                      // 'ascending' '#'
    case 7507:                      // 'attribute' '#'
    case 7511:                      // 'case' '#'
    case 7512:                      // 'cast' '#'
    case 7513:                      // 'castable' '#'
    case 7515:                      // 'child' '#'
    case 7516:                      // 'collation' '#'
    case 7517:                      // 'comment' '#'
    case 7521:                      // 'count' '#'
    case 7524:                      // 'declare' '#'
    case 7525:                      // 'default' '#'
    case 7526:                      // 'descendant' '#'
    case 7527:                      // 'descendant-or-self' '#'
    case 7528:                      // 'descending' '#'
    case 7530:                      // 'div' '#'
    case 7531:                      // 'document' '#'
    case 7532:                      // 'document-node' '#'
    case 7533:                      // 'element' '#'
    case 7534:                      // 'else' '#'
    case 7535:                      // 'empty' '#'
    case 7536:                      // 'empty-sequence' '#'
    case 7538:                      // 'end' '#'
    case 7539:                      // 'eq' '#'
    case 7540:                      // 'every' '#'
    case 7541:                      // 'except' '#'
    case 7544:                      // 'following' '#'
    case 7545:                      // 'following-sibling' '#'
    case 7546:                      // 'for' '#'
    case 7547:                      // 'function' '#'
    case 7548:                      // 'ge' '#'
    case 7550:                      // 'group' '#'
    case 7552:                      // 'gt' '#'
    case 7553:                      // 'idiv' '#'
    case 7554:                      // 'if' '#'
    case 7555:                      // 'import' '#'
    case 7559:                      // 'instance' '#'
    case 7560:                      // 'intersect' '#'
    case 7561:                      // 'is' '#'
    case 7562:                      // 'item' '#'
    case 7564:                      // 'le' '#'
    case 7566:                      // 'let' '#'
    case 7567:                      // 'lt' '#'
    case 7568:                      // 'map' '#'
    case 7570:                      // 'mod' '#'
    case 7571:                      // 'module' '#'
    case 7572:                      // 'namespace' '#'
    case 7573:                      // 'namespace-node' '#'
    case 7574:                      // 'ne' '#'
    case 7578:                      // 'node' '#'
    case 7580:                      // 'only' '#'
    case 7582:                      // 'or' '#'
    case 7583:                      // 'order' '#'
    case 7584:                      // 'ordered' '#'
    case 7586:                      // 'parent' '#'
    case 7590:                      // 'preceding' '#'
    case 7591:                      // 'preceding-sibling' '#'
    case 7594:                      // 'processing-instruction' '#'
    case 7595:                      // 'return' '#'
    case 7596:                      // 'satisfies' '#'
    case 7598:                      // 'schema-attribute' '#'
    case 7599:                      // 'schema-element' '#'
    case 7600:                      // 'self' '#'
    case 7602:                      // 'some' '#'
    case 7603:                      // 'stable' '#'
    case 7604:                      // 'start' '#'
    case 7607:                      // 'switch' '#'
    case 7608:                      // 'text' '#'
    case 7610:                      // 'to' '#'
    case 7611:                      // 'treat' '#'
    case 7612:                      // 'try' '#'
    case 7615:                      // 'typeswitch' '#'
    case 7616:                      // 'union' '#'
    case 7617:                      // 'unordered' '#'
    case 7618:                      // 'validate' '#'
    case 7622:                      // 'where' '#'
    case 7624:                      // 'xquery' '#'
    case 8709:                      // URIQualifiedName '('
    case 8719:                      // QName^Token '('
    case 8780:                      // 'ancestor' '('
    case 8781:                      // 'ancestor-or-self' '('
    case 8782:                      // 'and' '('
    case 8785:                      // 'ascending' '('
    case 8791:                      // 'case' '('
    case 8792:                      // 'cast' '('
    case 8793:                      // 'castable' '('
    case 8795:                      // 'child' '('
    case 8796:                      // 'collation' '('
    case 8801:                      // 'count' '('
    case 8804:                      // 'declare' '('
    case 8805:                      // 'default' '('
    case 8806:                      // 'descendant' '('
    case 8807:                      // 'descendant-or-self' '('
    case 8808:                      // 'descending' '('
    case 8810:                      // 'div' '('
    case 8811:                      // 'document' '('
    case 8814:                      // 'else' '('
    case 8815:                      // 'empty' '('
    case 8818:                      // 'end' '('
    case 8819:                      // 'eq' '('
    case 8820:                      // 'every' '('
    case 8821:                      // 'except' '('
    case 8824:                      // 'following' '('
    case 8825:                      // 'following-sibling' '('
    case 8826:                      // 'for' '('
    case 8827:                      // 'function' '('
    case 8828:                      // 'ge' '('
    case 8830:                      // 'group' '('
    case 8832:                      // 'gt' '('
    case 8833:                      // 'idiv' '('
    case 8835:                      // 'import' '('
    case 8839:                      // 'instance' '('
    case 8840:                      // 'intersect' '('
    case 8841:                      // 'is' '('
    case 8844:                      // 'le' '('
    case 8846:                      // 'let' '('
    case 8847:                      // 'lt' '('
    case 8850:                      // 'mod' '('
    case 8851:                      // 'module' '('
    case 8852:                      // 'namespace' '('
    case 8854:                      // 'ne' '('
    case 8860:                      // 'only' '('
    case 8862:                      // 'or' '('
    case 8863:                      // 'order' '('
    case 8864:                      // 'ordered' '('
    case 8866:                      // 'parent' '('
    case 8870:                      // 'preceding' '('
    case 8871:                      // 'preceding-sibling' '('
    case 8875:                      // 'return' '('
    case 8876:                      // 'satisfies' '('
    case 8880:                      // 'self' '('
    case 8882:                      // 'some' '('
    case 8883:                      // 'stable' '('
    case 8884:                      // 'start' '('
    case 8890:                      // 'to' '('
    case 8891:                      // 'treat' '('
    case 8892:                      // 'try' '('
    case 8896:                      // 'union' '('
    case 8897:                      // 'unordered' '('
    case 8898:                      // 'validate' '('
    case 8902:                      // 'where' '('
    case 8904:                      // 'xquery' '('
    case 19539:                     // 'attribute' 'ancestor'
    case 19565:                     // 'element' 'ancestor'
    case 19795:                     // 'attribute' 'ancestor-or-self'
    case 19821:                     // 'element' 'ancestor-or-self'
    case 20307:                     // 'attribute' 'array'
    case 20333:                     // 'element' 'array'
    case 21331:                     // 'attribute' 'attribute'
    case 21357:                     // 'element' 'attribute'
    case 23379:                     // 'attribute' 'child'
    case 23405:                     // 'element' 'child'
    case 23891:                     // 'attribute' 'comment'
    case 23917:                     // 'element' 'comment'
    case 25683:                     // 'attribute' 'declare'
    case 25709:                     // 'element' 'declare'
    case 26195:                     // 'attribute' 'descendant'
    case 26221:                     // 'element' 'descendant'
    case 26451:                     // 'attribute' 'descendant-or-self'
    case 26477:                     // 'element' 'descendant-or-self'
    case 27475:                     // 'attribute' 'document'
    case 27501:                     // 'element' 'document'
    case 27731:                     // 'attribute' 'document-node'
    case 27757:                     // 'element' 'document-node'
    case 27987:                     // 'attribute' 'element'
    case 28013:                     // 'element' 'element'
    case 28755:                     // 'attribute' 'empty-sequence'
    case 28781:                     // 'element' 'empty-sequence'
    case 29779:                     // 'attribute' 'every'
    case 29805:                     // 'element' 'every'
    case 30803:                     // 'attribute' 'following'
    case 30829:                     // 'element' 'following'
    case 31059:                     // 'attribute' 'following-sibling'
    case 31085:                     // 'element' 'following-sibling'
    case 31571:                     // 'attribute' 'function'
    case 31597:                     // 'element' 'function'
    case 33363:                     // 'attribute' 'if'
    case 33389:                     // 'element' 'if'
    case 33619:                     // 'attribute' 'import'
    case 33645:                     // 'element' 'import'
    case 35411:                     // 'attribute' 'item'
    case 35437:                     // 'element' 'item'
    case 36947:                     // 'attribute' 'map'
    case 36973:                     // 'element' 'map'
    case 37715:                     // 'attribute' 'module'
    case 37741:                     // 'element' 'module'
    case 37971:                     // 'attribute' 'namespace'
    case 37997:                     // 'element' 'namespace'
    case 38227:                     // 'attribute' 'namespace-node'
    case 38253:                     // 'element' 'namespace-node'
    case 39507:                     // 'attribute' 'node'
    case 39533:                     // 'element' 'node'
    case 41043:                     // 'attribute' 'ordered'
    case 41069:                     // 'element' 'ordered'
    case 41555:                     // 'attribute' 'parent'
    case 41581:                     // 'element' 'parent'
    case 42579:                     // 'attribute' 'preceding'
    case 42605:                     // 'element' 'preceding'
    case 42835:                     // 'attribute' 'preceding-sibling'
    case 42861:                     // 'element' 'preceding-sibling'
    case 43603:                     // 'attribute' 'processing-instruction'
    case 43629:                     // 'element' 'processing-instruction'
    case 44627:                     // 'attribute' 'schema-attribute'
    case 44653:                     // 'element' 'schema-attribute'
    case 44883:                     // 'attribute' 'schema-element'
    case 44909:                     // 'element' 'schema-element'
    case 45139:                     // 'attribute' 'self'
    case 45165:                     // 'element' 'self'
    case 45651:                     // 'attribute' 'some'
    case 45677:                     // 'element' 'some'
    case 46931:                     // 'attribute' 'switch'
    case 46957:                     // 'element' 'switch'
    case 47187:                     // 'attribute' 'text'
    case 47213:                     // 'element' 'text'
    case 48211:                     // 'attribute' 'try'
    case 48237:                     // 'element' 'try'
    case 48979:                     // 'attribute' 'typeswitch'
    case 49005:                     // 'element' 'typeswitch'
    case 49491:                     // 'attribute' 'unordered'
    case 49517:                     // 'element' 'unordered'
    case 49747:                     // 'attribute' 'validate'
    case 49773:                     // 'element' 'validate'
    case 51283:                     // 'attribute' 'xquery'
    case 51309:                     // 'element' 'xquery'
    case 51791:                     // 'array' '{'
    case 51795:                     // 'attribute' '{'
    case 51805:                     // 'comment' '{'
    case 51819:                     // 'document' '{'
    case 51821:                     // 'element' '{'
    case 51856:                     // 'map' '{'
    case 51860:                     // 'namespace' '{'
    case 51872:                     // 'ordered' '{'
    case 51882:                     // 'processing-instruction' '{'
    case 51896:                     // 'text' '{'
    case 51905:                     // 'unordered' '{'
      try_PostfixExpr();
      break;
    case -3:
      break;
    default:
      try_AxisStep();
    }
  }

  function parse_AxisStep()
  {
    eventHandler.startNonterminal("AxisStep", e0);
    switch (l1)
    {
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
      lookahead2W(147);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 44:                        // '..'
    case 12876:                     // 'ancestor' '::'
    case 12877:                     // 'ancestor-or-self' '::'
    case 12962:                     // 'parent' '::'
    case 12966:                     // 'preceding' '::'
    case 12967:                     // 'preceding-sibling' '::'
      parse_ReverseStep();
      break;
    default:
      parse_ForwardStep();
    }
    lookahead1W(143);               // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
    whitespace();
    parse_PredicateList();
    eventHandler.endNonterminal("AxisStep", e0);
  }

  function try_AxisStep()
  {
    switch (l1)
    {
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
      lookahead2W(147);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 44:                        // '..'
    case 12876:                     // 'ancestor' '::'
    case 12877:                     // 'ancestor-or-self' '::'
    case 12962:                     // 'parent' '::'
    case 12966:                     // 'preceding' '::'
    case 12967:                     // 'preceding-sibling' '::'
      try_ReverseStep();
      break;
    default:
      try_ForwardStep();
    }
    lookahead1W(143);               // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
    try_PredicateList();
  }

  function parse_ForwardStep()
  {
    eventHandler.startNonterminal("ForwardStep", e0);
    switch (l1)
    {
    case 83:                        // 'attribute'
      lookahead2W(150);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 91:                        // 'child'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 176:                       // 'self'
      lookahead2W(147);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 12883:                     // 'attribute' '::'
    case 12891:                     // 'child' '::'
    case 12902:                     // 'descendant' '::'
    case 12903:                     // 'descendant-or-self' '::'
    case 12920:                     // 'following' '::'
    case 12921:                     // 'following-sibling' '::'
    case 12976:                     // 'self' '::'
      parse_ForwardAxis();
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_NodeTest();
      break;
    default:
      parse_AbbrevForwardStep();
    }
    eventHandler.endNonterminal("ForwardStep", e0);
  }

  function try_ForwardStep()
  {
    switch (l1)
    {
    case 83:                        // 'attribute'
      lookahead2W(150);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      break;
    case 91:                        // 'child'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 176:                       // 'self'
      lookahead2W(147);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // '::' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 12883:                     // 'attribute' '::'
    case 12891:                     // 'child' '::'
    case 12902:                     // 'descendant' '::'
    case 12903:                     // 'descendant-or-self' '::'
    case 12920:                     // 'following' '::'
    case 12921:                     // 'following-sibling' '::'
    case 12976:                     // 'self' '::'
      try_ForwardAxis();
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_NodeTest();
      break;
    default:
      try_AbbrevForwardStep();
    }
  }

  function parse_ForwardAxis()
  {
    eventHandler.startNonterminal("ForwardAxis", e0);
    switch (l1)
    {
    case 91:                        // 'child'
      consume(91);                  // 'child'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 102:                       // 'descendant'
      consume(102);                 // 'descendant'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 83:                        // 'attribute'
      consume(83);                  // 'attribute'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 176:                       // 'self'
      consume(176);                 // 'self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 103:                       // 'descendant-or-self'
      consume(103);                 // 'descendant-or-self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 121:                       // 'following-sibling'
      consume(121);                 // 'following-sibling'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    default:
      consume(120);                 // 'following'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
    }
    eventHandler.endNonterminal("ForwardAxis", e0);
  }

  function try_ForwardAxis()
  {
    switch (l1)
    {
    case 91:                        // 'child'
      consumeT(91);                 // 'child'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 102:                       // 'descendant'
      consumeT(102);                // 'descendant'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 83:                        // 'attribute'
      consumeT(83);                 // 'attribute'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 176:                       // 'self'
      consumeT(176);                // 'self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 103:                       // 'descendant-or-self'
      consumeT(103);                // 'descendant-or-self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 121:                       // 'following-sibling'
      consumeT(121);                // 'following-sibling'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    default:
      consumeT(120);                // 'following'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
    }
  }

  function parse_AbbrevForwardStep()
  {
    eventHandler.startNonterminal("AbbrevForwardStep", e0);
    if (l1 == 67)                   // '@'
    {
      consume(67);                  // '@'
    }
    lookahead1W(163);               // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_NodeTest();
    eventHandler.endNonterminal("AbbrevForwardStep", e0);
  }

  function try_AbbrevForwardStep()
  {
    if (l1 == 67)                   // '@'
    {
      consumeT(67);                 // '@'
    }
    lookahead1W(163);               // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_NodeTest();
  }

  function parse_ReverseStep()
  {
    eventHandler.startNonterminal("ReverseStep", e0);
    switch (l1)
    {
    case 44:                        // '..'
      parse_AbbrevReverseStep();
      break;
    default:
      parse_ReverseAxis();
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_NodeTest();
    }
    eventHandler.endNonterminal("ReverseStep", e0);
  }

  function try_ReverseStep()
  {
    switch (l1)
    {
    case 44:                        // '..'
      try_AbbrevReverseStep();
      break;
    default:
      try_ReverseAxis();
      lookahead1W(163);             // URIQualifiedName | QName^Token | S^WS | Wildcard | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_NodeTest();
    }
  }

  function parse_ReverseAxis()
  {
    eventHandler.startNonterminal("ReverseAxis", e0);
    switch (l1)
    {
    case 162:                       // 'parent'
      consume(162);                 // 'parent'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 76:                        // 'ancestor'
      consume(76);                  // 'ancestor'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 167:                       // 'preceding-sibling'
      consume(167);                 // 'preceding-sibling'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    case 166:                       // 'preceding'
      consume(166);                 // 'preceding'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
      break;
    default:
      consume(77);                  // 'ancestor-or-self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consume(50);                  // '::'
    }
    eventHandler.endNonterminal("ReverseAxis", e0);
  }

  function try_ReverseAxis()
  {
    switch (l1)
    {
    case 162:                       // 'parent'
      consumeT(162);                // 'parent'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 76:                        // 'ancestor'
      consumeT(76);                 // 'ancestor'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 167:                       // 'preceding-sibling'
      consumeT(167);                // 'preceding-sibling'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    case 166:                       // 'preceding'
      consumeT(166);                // 'preceding'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
      break;
    default:
      consumeT(77);                 // 'ancestor-or-self'
      lookahead1W(28);              // S^WS | '(:' | '::'
      consumeT(50);                 // '::'
    }
  }

  function parse_AbbrevReverseStep()
  {
    eventHandler.startNonterminal("AbbrevReverseStep", e0);
    consume(44);                    // '..'
    eventHandler.endNonterminal("AbbrevReverseStep", e0);
  }

  function try_AbbrevReverseStep()
  {
    consumeT(44);                   // '..'
  }

  function parse_NodeTest()
  {
    eventHandler.startNonterminal("NodeTest", e0);
    switch (l1)
    {
    case 83:                        // 'attribute'
    case 93:                        // 'comment'
    case 108:                       // 'document-node'
    case 109:                       // 'element'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 170:                       // 'processing-instruction'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 184:                       // 'text'
      lookahead2W(146);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8787:                      // 'attribute' '('
    case 8797:                      // 'comment' '('
    case 8812:                      // 'document-node' '('
    case 8813:                      // 'element' '('
    case 8853:                      // 'namespace-node' '('
    case 8858:                      // 'node' '('
    case 8874:                      // 'processing-instruction' '('
    case 8878:                      // 'schema-attribute' '('
    case 8879:                      // 'schema-element' '('
    case 8888:                      // 'text' '('
      parse_KindTest();
      break;
    default:
      parse_NameTest();
    }
    eventHandler.endNonterminal("NodeTest", e0);
  }

  function try_NodeTest()
  {
    switch (l1)
    {
    case 83:                        // 'attribute'
    case 93:                        // 'comment'
    case 108:                       // 'document-node'
    case 109:                       // 'element'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 170:                       // 'processing-instruction'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 184:                       // 'text'
      lookahead2W(146);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' |
                                    // 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' |
                                    // 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' |
                                    // 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' |
                                    // 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8787:                      // 'attribute' '('
    case 8797:                      // 'comment' '('
    case 8812:                      // 'document-node' '('
    case 8813:                      // 'element' '('
    case 8853:                      // 'namespace-node' '('
    case 8858:                      // 'node' '('
    case 8874:                      // 'processing-instruction' '('
    case 8878:                      // 'schema-attribute' '('
    case 8879:                      // 'schema-element' '('
    case 8888:                      // 'text' '('
      try_KindTest();
      break;
    default:
      try_NameTest();
    }
  }

  function parse_NameTest()
  {
    eventHandler.startNonterminal("NameTest", e0);
    switch (l1)
    {
    case 21:                        // Wildcard
      consume(21);                  // Wildcard
      break;
    default:
      parse_EQName();
    }
    eventHandler.endNonterminal("NameTest", e0);
  }

  function try_NameTest()
  {
    switch (l1)
    {
    case 21:                        // Wildcard
      consumeT(21);                 // Wildcard
      break;
    default:
      try_EQName();
    }
  }

  function parse_PostfixExpr()
  {
    eventHandler.startNonterminal("PostfixExpr", e0);
    parse_PrimaryExpr();
    for (;;)
    {
      lookahead1W(151);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      if (l1 != 34                  // '('
       && l1 != 65                  // '?'
       && l1 != 69)                 // '['
      {
        break;
      }
      switch (l1)
      {
      case 69:                      // '['
        whitespace();
        parse_Predicate();
        break;
      case 34:                      // '('
        whitespace();
        parse_ArgumentList();
        break;
      default:
        whitespace();
        parse_Lookup();
      }
    }
    eventHandler.endNonterminal("PostfixExpr", e0);
  }

  function try_PostfixExpr()
  {
    try_PrimaryExpr();
    for (;;)
    {
      lookahead1W(151);             // S^WS | EOF | '!' | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' |
                                    // ':' | ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '?' | '[' |
                                    // ']' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' | 'collation' |
                                    // 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' |
                                    // 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' |
                                    // 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' |
                                    // 'satisfies' | 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' |
                                    // '||' | '}' | '}`'
      if (l1 != 34                  // '('
       && l1 != 65                  // '?'
       && l1 != 69)                 // '['
      {
        break;
      }
      switch (l1)
      {
      case 69:                      // '['
        try_Predicate();
        break;
      case 34:                      // '('
        try_ArgumentList();
        break;
      default:
        try_Lookup();
      }
    }
  }

  function parse_ArgumentList()
  {
    eventHandler.startNonterminal("ArgumentList", e0);
    consume(34);                    // '('
    lookahead1W(175);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
                                    // '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      whitespace();
      parse_Argument();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        whitespace();
        parse_Argument();
      }
    }
    consume(37);                    // ')'
    eventHandler.endNonterminal("ArgumentList", e0);
  }

  function try_ArgumentList()
  {
    consumeT(34);                   // '('
    lookahead1W(175);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
                                    // '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      try_Argument();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consumeT(40);               // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        try_Argument();
      }
    }
    consumeT(37);                   // ')'
  }

  function parse_PredicateList()
  {
    eventHandler.startNonterminal("PredicateList", e0);
    for (;;)
    {
      lookahead1W(143);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      if (l1 != 69)                 // '['
      {
        break;
      }
      whitespace();
      parse_Predicate();
    }
    eventHandler.endNonterminal("PredicateList", e0);
  }

  function try_PredicateList()
  {
    for (;;)
    {
      lookahead1W(143);             // S^WS | EOF | '!' | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | '/' | '//' | ':' |
                                    // ';' | '<' | '<<' | '<=' | '=' | '=>' | '>' | '>=' | '>>' | '[' | ']' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where' | '|' | '||' | '}' | '}`'
      if (l1 != 69)                 // '['
      {
        break;
      }
      try_Predicate();
    }
  }

  function parse_Predicate()
  {
    eventHandler.startNonterminal("Predicate", e0);
    consume(69);                    // '['
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_Expr();
    consume(70);                    // ']'
    eventHandler.endNonterminal("Predicate", e0);
  }

  function try_Predicate()
  {
    consumeT(69);                   // '['
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_Expr();
    consumeT(70);                   // ']'
  }

  function parse_Lookup()
  {
    eventHandler.startNonterminal("Lookup", e0);
    consume(65);                    // '?'
    lookahead1W(128);               // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
                                    // 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
                                    // 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
                                    // 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
                                    // 'to' | 'treat' | 'union' | 'where'
    whitespace();
    parse_KeySpecifier();
    eventHandler.endNonterminal("Lookup", e0);
  }

  function try_Lookup()
  {
    consumeT(65);                   // '?'
    lookahead1W(128);               // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
                                    // 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
                                    // 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
                                    // 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
                                    // 'to' | 'treat' | 'union' | 'where'
    try_KeySpecifier();
  }

  function parse_KeySpecifier()
  {
    eventHandler.startNonterminal("KeySpecifier", e0);
    switch (l1)
    {
    case 1:                         // IntegerLiteral
      consume(1);                   // IntegerLiteral
      break;
    case 34:                        // '('
      parse_ParenthesizedExpr();
      break;
    case 38:                        // '*'
      consume(38);                  // '*'
      break;
    default:
      parse_NCName();
    }
    eventHandler.endNonterminal("KeySpecifier", e0);
  }

  function try_KeySpecifier()
  {
    switch (l1)
    {
    case 1:                         // IntegerLiteral
      consumeT(1);                  // IntegerLiteral
      break;
    case 34:                        // '('
      try_ParenthesizedExpr();
      break;
    case 38:                        // '*'
      consumeT(38);                 // '*'
      break;
    default:
      try_NCName();
    }
  }

  function parse_ArrowFunctionSpecifier()
  {
    eventHandler.startNonterminal("ArrowFunctionSpecifier", e0);
    switch (l1)
    {
    case 31:                        // '$'
      parse_VarRef();
      break;
    case 34:                        // '('
      parse_ParenthesizedExpr();
      break;
    default:
      parse_EQName();
    }
    eventHandler.endNonterminal("ArrowFunctionSpecifier", e0);
  }

  function try_ArrowFunctionSpecifier()
  {
    switch (l1)
    {
    case 31:                        // '$'
      try_VarRef();
      break;
    case 34:                        // '('
      try_ParenthesizedExpr();
      break;
    default:
      try_EQName();
    }
  }

  function parse_PrimaryExpr()
  {
    eventHandler.startNonterminal("PrimaryExpr", e0);
    switch (l1)
    {
    case 148:                       // 'namespace'
      lookahead2W(129);             // NCName^Token | S^WS | '#' | '(' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
      break;
    case 170:                       // 'processing-instruction'
      lookahead2W(127);             // NCName^Token | S^WS | '#' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
      break;
    case 83:                        // 'attribute'
    case 109:                       // 'element'
      lookahead2W(165);             // URIQualifiedName | QName^Token | S^WS | '#' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
      break;
    case 107:                       // 'document'
    case 160:                       // 'ordered'
    case 193:                       // 'unordered'
      lookahead2W(96);              // S^WS | '#' | '(' | '(:' | '{'
      break;
    case 79:                        // 'array'
    case 93:                        // 'comment'
    case 144:                       // 'map'
    case 184:                       // 'text'
      lookahead2W(64);              // S^WS | '#' | '(:' | '{'
      break;
    case 5:                         // URIQualifiedName
    case 15:                        // QName^Token
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 78:                        // 'and'
    case 81:                        // 'ascending'
    case 87:                        // 'case'
    case 88:                        // 'cast'
    case 89:                        // 'castable'
    case 91:                        // 'child'
    case 92:                        // 'collation'
    case 97:                        // 'count'
    case 100:                       // 'declare'
    case 101:                       // 'default'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 104:                       // 'descending'
    case 106:                       // 'div'
    case 110:                       // 'else'
    case 111:                       // 'empty'
    case 114:                       // 'end'
    case 115:                       // 'eq'
    case 116:                       // 'every'
    case 117:                       // 'except'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 122:                       // 'for'
    case 124:                       // 'ge'
    case 126:                       // 'group'
    case 128:                       // 'gt'
    case 129:                       // 'idiv'
    case 131:                       // 'import'
    case 135:                       // 'instance'
    case 136:                       // 'intersect'
    case 137:                       // 'is'
    case 140:                       // 'le'
    case 142:                       // 'let'
    case 143:                       // 'lt'
    case 146:                       // 'mod'
    case 147:                       // 'module'
    case 150:                       // 'ne'
    case 156:                       // 'only'
    case 158:                       // 'or'
    case 159:                       // 'order'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
    case 171:                       // 'return'
    case 172:                       // 'satisfies'
    case 176:                       // 'self'
    case 178:                       // 'some'
    case 179:                       // 'stable'
    case 180:                       // 'start'
    case 186:                       // 'to'
    case 187:                       // 'treat'
    case 188:                       // 'try'
    case 192:                       // 'union'
    case 194:                       // 'validate'
    case 198:                       // 'where'
    case 200:                       // 'xquery'
      lookahead2W(63);              // S^WS | '#' | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 1:                         // IntegerLiteral
    case 2:                         // DecimalLiteral
    case 3:                         // DoubleLiteral
    case 4:                         // StringLiteral
      parse_Literal();
      break;
    case 31:                        // '$'
      parse_VarRef();
      break;
    case 34:                        // '('
      parse_ParenthesizedExpr();
      break;
    case 43:                        // '.'
      parse_ContextItemExpr();
      break;
    case 8709:                      // URIQualifiedName '('
    case 8719:                      // QName^Token '('
    case 8780:                      // 'ancestor' '('
    case 8781:                      // 'ancestor-or-self' '('
    case 8782:                      // 'and' '('
    case 8785:                      // 'ascending' '('
    case 8791:                      // 'case' '('
    case 8792:                      // 'cast' '('
    case 8793:                      // 'castable' '('
    case 8795:                      // 'child' '('
    case 8796:                      // 'collation' '('
    case 8801:                      // 'count' '('
    case 8804:                      // 'declare' '('
    case 8805:                      // 'default' '('
    case 8806:                      // 'descendant' '('
    case 8807:                      // 'descendant-or-self' '('
    case 8808:                      // 'descending' '('
    case 8810:                      // 'div' '('
    case 8811:                      // 'document' '('
    case 8814:                      // 'else' '('
    case 8815:                      // 'empty' '('
    case 8818:                      // 'end' '('
    case 8819:                      // 'eq' '('
    case 8820:                      // 'every' '('
    case 8821:                      // 'except' '('
    case 8824:                      // 'following' '('
    case 8825:                      // 'following-sibling' '('
    case 8826:                      // 'for' '('
    case 8828:                      // 'ge' '('
    case 8830:                      // 'group' '('
    case 8832:                      // 'gt' '('
    case 8833:                      // 'idiv' '('
    case 8835:                      // 'import' '('
    case 8839:                      // 'instance' '('
    case 8840:                      // 'intersect' '('
    case 8841:                      // 'is' '('
    case 8844:                      // 'le' '('
    case 8846:                      // 'let' '('
    case 8847:                      // 'lt' '('
    case 8850:                      // 'mod' '('
    case 8851:                      // 'module' '('
    case 8852:                      // 'namespace' '('
    case 8854:                      // 'ne' '('
    case 8860:                      // 'only' '('
    case 8862:                      // 'or' '('
    case 8863:                      // 'order' '('
    case 8864:                      // 'ordered' '('
    case 8866:                      // 'parent' '('
    case 8870:                      // 'preceding' '('
    case 8871:                      // 'preceding-sibling' '('
    case 8875:                      // 'return' '('
    case 8876:                      // 'satisfies' '('
    case 8880:                      // 'self' '('
    case 8882:                      // 'some' '('
    case 8883:                      // 'stable' '('
    case 8884:                      // 'start' '('
    case 8890:                      // 'to' '('
    case 8891:                      // 'treat' '('
    case 8892:                      // 'try' '('
    case 8896:                      // 'union' '('
    case 8897:                      // 'unordered' '('
    case 8898:                      // 'validate' '('
    case 8902:                      // 'where' '('
    case 8904:                      // 'xquery' '('
      parse_FunctionCall();
      break;
    case 51872:                     // 'ordered' '{'
      parse_OrderedExpr();
      break;
    case 51905:                     // 'unordered' '{'
      parse_UnorderedExpr();
      break;
    case 32:                        // '%'
    case 108:                       // 'document-node'
    case 112:                       // 'empty-sequence'
    case 123:                       // 'function'
    case 130:                       // 'if'
    case 138:                       // 'item'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
    case 7429:                      // URIQualifiedName '#'
    case 7439:                      // QName^Token '#'
    case 7500:                      // 'ancestor' '#'
    case 7501:                      // 'ancestor-or-self' '#'
    case 7502:                      // 'and' '#'
    case 7503:                      // 'array' '#'
    case 7505:                      // 'ascending' '#'
    case 7507:                      // 'attribute' '#'
    case 7511:                      // 'case' '#'
    case 7512:                      // 'cast' '#'
    case 7513:                      // 'castable' '#'
    case 7515:                      // 'child' '#'
    case 7516:                      // 'collation' '#'
    case 7517:                      // 'comment' '#'
    case 7521:                      // 'count' '#'
    case 7524:                      // 'declare' '#'
    case 7525:                      // 'default' '#'
    case 7526:                      // 'descendant' '#'
    case 7527:                      // 'descendant-or-self' '#'
    case 7528:                      // 'descending' '#'
    case 7530:                      // 'div' '#'
    case 7531:                      // 'document' '#'
    case 7533:                      // 'element' '#'
    case 7534:                      // 'else' '#'
    case 7535:                      // 'empty' '#'
    case 7538:                      // 'end' '#'
    case 7539:                      // 'eq' '#'
    case 7540:                      // 'every' '#'
    case 7541:                      // 'except' '#'
    case 7544:                      // 'following' '#'
    case 7545:                      // 'following-sibling' '#'
    case 7546:                      // 'for' '#'
    case 7548:                      // 'ge' '#'
    case 7550:                      // 'group' '#'
    case 7552:                      // 'gt' '#'
    case 7553:                      // 'idiv' '#'
    case 7555:                      // 'import' '#'
    case 7559:                      // 'instance' '#'
    case 7560:                      // 'intersect' '#'
    case 7561:                      // 'is' '#'
    case 7564:                      // 'le' '#'
    case 7566:                      // 'let' '#'
    case 7567:                      // 'lt' '#'
    case 7568:                      // 'map' '#'
    case 7570:                      // 'mod' '#'
    case 7571:                      // 'module' '#'
    case 7572:                      // 'namespace' '#'
    case 7574:                      // 'ne' '#'
    case 7580:                      // 'only' '#'
    case 7582:                      // 'or' '#'
    case 7583:                      // 'order' '#'
    case 7584:                      // 'ordered' '#'
    case 7586:                      // 'parent' '#'
    case 7590:                      // 'preceding' '#'
    case 7591:                      // 'preceding-sibling' '#'
    case 7594:                      // 'processing-instruction' '#'
    case 7595:                      // 'return' '#'
    case 7596:                      // 'satisfies' '#'
    case 7600:                      // 'self' '#'
    case 7602:                      // 'some' '#'
    case 7603:                      // 'stable' '#'
    case 7604:                      // 'start' '#'
    case 7608:                      // 'text' '#'
    case 7610:                      // 'to' '#'
    case 7611:                      // 'treat' '#'
    case 7612:                      // 'try' '#'
    case 7616:                      // 'union' '#'
    case 7617:                      // 'unordered' '#'
    case 7618:                      // 'validate' '#'
    case 7622:                      // 'where' '#'
    case 7624:                      // 'xquery' '#'
      parse_FunctionItemExpr();
      break;
    case 51856:                     // 'map' '{'
      parse_MapConstructor();
      break;
    case 69:                        // '['
    case 51791:                     // 'array' '{'
      parse_ArrayConstructor();
      break;
    case 73:                        // '``['
      parse_StringConstructor();
      break;
    case 65:                        // '?'
      parse_UnaryLookup();
      break;
    default:
      parse_NodeConstructor();
    }
    eventHandler.endNonterminal("PrimaryExpr", e0);
  }

  function try_PrimaryExpr()
  {
    switch (l1)
    {
    case 148:                       // 'namespace'
      lookahead2W(129);             // NCName^Token | S^WS | '#' | '(' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
      break;
    case 170:                       // 'processing-instruction'
      lookahead2W(127);             // NCName^Token | S^WS | '#' | '(:' | 'and' | 'ascending' | 'case' | 'cast' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
      break;
    case 83:                        // 'attribute'
    case 109:                       // 'element'
      lookahead2W(165);             // URIQualifiedName | QName^Token | S^WS | '#' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
      break;
    case 107:                       // 'document'
    case 160:                       // 'ordered'
    case 193:                       // 'unordered'
      lookahead2W(96);              // S^WS | '#' | '(' | '(:' | '{'
      break;
    case 79:                        // 'array'
    case 93:                        // 'comment'
    case 144:                       // 'map'
    case 184:                       // 'text'
      lookahead2W(64);              // S^WS | '#' | '(:' | '{'
      break;
    case 5:                         // URIQualifiedName
    case 15:                        // QName^Token
    case 76:                        // 'ancestor'
    case 77:                        // 'ancestor-or-self'
    case 78:                        // 'and'
    case 81:                        // 'ascending'
    case 87:                        // 'case'
    case 88:                        // 'cast'
    case 89:                        // 'castable'
    case 91:                        // 'child'
    case 92:                        // 'collation'
    case 97:                        // 'count'
    case 100:                       // 'declare'
    case 101:                       // 'default'
    case 102:                       // 'descendant'
    case 103:                       // 'descendant-or-self'
    case 104:                       // 'descending'
    case 106:                       // 'div'
    case 110:                       // 'else'
    case 111:                       // 'empty'
    case 114:                       // 'end'
    case 115:                       // 'eq'
    case 116:                       // 'every'
    case 117:                       // 'except'
    case 120:                       // 'following'
    case 121:                       // 'following-sibling'
    case 122:                       // 'for'
    case 124:                       // 'ge'
    case 126:                       // 'group'
    case 128:                       // 'gt'
    case 129:                       // 'idiv'
    case 131:                       // 'import'
    case 135:                       // 'instance'
    case 136:                       // 'intersect'
    case 137:                       // 'is'
    case 140:                       // 'le'
    case 142:                       // 'let'
    case 143:                       // 'lt'
    case 146:                       // 'mod'
    case 147:                       // 'module'
    case 150:                       // 'ne'
    case 156:                       // 'only'
    case 158:                       // 'or'
    case 159:                       // 'order'
    case 162:                       // 'parent'
    case 166:                       // 'preceding'
    case 167:                       // 'preceding-sibling'
    case 171:                       // 'return'
    case 172:                       // 'satisfies'
    case 176:                       // 'self'
    case 178:                       // 'some'
    case 179:                       // 'stable'
    case 180:                       // 'start'
    case 186:                       // 'to'
    case 187:                       // 'treat'
    case 188:                       // 'try'
    case 192:                       // 'union'
    case 194:                       // 'validate'
    case 198:                       // 'where'
    case 200:                       // 'xquery'
      lookahead2W(63);              // S^WS | '#' | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 1:                         // IntegerLiteral
    case 2:                         // DecimalLiteral
    case 3:                         // DoubleLiteral
    case 4:                         // StringLiteral
      try_Literal();
      break;
    case 31:                        // '$'
      try_VarRef();
      break;
    case 34:                        // '('
      try_ParenthesizedExpr();
      break;
    case 43:                        // '.'
      try_ContextItemExpr();
      break;
    case 8709:                      // URIQualifiedName '('
    case 8719:                      // QName^Token '('
    case 8780:                      // 'ancestor' '('
    case 8781:                      // 'ancestor-or-self' '('
    case 8782:                      // 'and' '('
    case 8785:                      // 'ascending' '('
    case 8791:                      // 'case' '('
    case 8792:                      // 'cast' '('
    case 8793:                      // 'castable' '('
    case 8795:                      // 'child' '('
    case 8796:                      // 'collation' '('
    case 8801:                      // 'count' '('
    case 8804:                      // 'declare' '('
    case 8805:                      // 'default' '('
    case 8806:                      // 'descendant' '('
    case 8807:                      // 'descendant-or-self' '('
    case 8808:                      // 'descending' '('
    case 8810:                      // 'div' '('
    case 8811:                      // 'document' '('
    case 8814:                      // 'else' '('
    case 8815:                      // 'empty' '('
    case 8818:                      // 'end' '('
    case 8819:                      // 'eq' '('
    case 8820:                      // 'every' '('
    case 8821:                      // 'except' '('
    case 8824:                      // 'following' '('
    case 8825:                      // 'following-sibling' '('
    case 8826:                      // 'for' '('
    case 8828:                      // 'ge' '('
    case 8830:                      // 'group' '('
    case 8832:                      // 'gt' '('
    case 8833:                      // 'idiv' '('
    case 8835:                      // 'import' '('
    case 8839:                      // 'instance' '('
    case 8840:                      // 'intersect' '('
    case 8841:                      // 'is' '('
    case 8844:                      // 'le' '('
    case 8846:                      // 'let' '('
    case 8847:                      // 'lt' '('
    case 8850:                      // 'mod' '('
    case 8851:                      // 'module' '('
    case 8852:                      // 'namespace' '('
    case 8854:                      // 'ne' '('
    case 8860:                      // 'only' '('
    case 8862:                      // 'or' '('
    case 8863:                      // 'order' '('
    case 8864:                      // 'ordered' '('
    case 8866:                      // 'parent' '('
    case 8870:                      // 'preceding' '('
    case 8871:                      // 'preceding-sibling' '('
    case 8875:                      // 'return' '('
    case 8876:                      // 'satisfies' '('
    case 8880:                      // 'self' '('
    case 8882:                      // 'some' '('
    case 8883:                      // 'stable' '('
    case 8884:                      // 'start' '('
    case 8890:                      // 'to' '('
    case 8891:                      // 'treat' '('
    case 8892:                      // 'try' '('
    case 8896:                      // 'union' '('
    case 8897:                      // 'unordered' '('
    case 8898:                      // 'validate' '('
    case 8902:                      // 'where' '('
    case 8904:                      // 'xquery' '('
      try_FunctionCall();
      break;
    case 51872:                     // 'ordered' '{'
      try_OrderedExpr();
      break;
    case 51905:                     // 'unordered' '{'
      try_UnorderedExpr();
      break;
    case 32:                        // '%'
    case 108:                       // 'document-node'
    case 112:                       // 'empty-sequence'
    case 123:                       // 'function'
    case 130:                       // 'if'
    case 138:                       // 'item'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 183:                       // 'switch'
    case 191:                       // 'typeswitch'
    case 7429:                      // URIQualifiedName '#'
    case 7439:                      // QName^Token '#'
    case 7500:                      // 'ancestor' '#'
    case 7501:                      // 'ancestor-or-self' '#'
    case 7502:                      // 'and' '#'
    case 7503:                      // 'array' '#'
    case 7505:                      // 'ascending' '#'
    case 7507:                      // 'attribute' '#'
    case 7511:                      // 'case' '#'
    case 7512:                      // 'cast' '#'
    case 7513:                      // 'castable' '#'
    case 7515:                      // 'child' '#'
    case 7516:                      // 'collation' '#'
    case 7517:                      // 'comment' '#'
    case 7521:                      // 'count' '#'
    case 7524:                      // 'declare' '#'
    case 7525:                      // 'default' '#'
    case 7526:                      // 'descendant' '#'
    case 7527:                      // 'descendant-or-self' '#'
    case 7528:                      // 'descending' '#'
    case 7530:                      // 'div' '#'
    case 7531:                      // 'document' '#'
    case 7533:                      // 'element' '#'
    case 7534:                      // 'else' '#'
    case 7535:                      // 'empty' '#'
    case 7538:                      // 'end' '#'
    case 7539:                      // 'eq' '#'
    case 7540:                      // 'every' '#'
    case 7541:                      // 'except' '#'
    case 7544:                      // 'following' '#'
    case 7545:                      // 'following-sibling' '#'
    case 7546:                      // 'for' '#'
    case 7548:                      // 'ge' '#'
    case 7550:                      // 'group' '#'
    case 7552:                      // 'gt' '#'
    case 7553:                      // 'idiv' '#'
    case 7555:                      // 'import' '#'
    case 7559:                      // 'instance' '#'
    case 7560:                      // 'intersect' '#'
    case 7561:                      // 'is' '#'
    case 7564:                      // 'le' '#'
    case 7566:                      // 'let' '#'
    case 7567:                      // 'lt' '#'
    case 7568:                      // 'map' '#'
    case 7570:                      // 'mod' '#'
    case 7571:                      // 'module' '#'
    case 7572:                      // 'namespace' '#'
    case 7574:                      // 'ne' '#'
    case 7580:                      // 'only' '#'
    case 7582:                      // 'or' '#'
    case 7583:                      // 'order' '#'
    case 7584:                      // 'ordered' '#'
    case 7586:                      // 'parent' '#'
    case 7590:                      // 'preceding' '#'
    case 7591:                      // 'preceding-sibling' '#'
    case 7594:                      // 'processing-instruction' '#'
    case 7595:                      // 'return' '#'
    case 7596:                      // 'satisfies' '#'
    case 7600:                      // 'self' '#'
    case 7602:                      // 'some' '#'
    case 7603:                      // 'stable' '#'
    case 7604:                      // 'start' '#'
    case 7608:                      // 'text' '#'
    case 7610:                      // 'to' '#'
    case 7611:                      // 'treat' '#'
    case 7612:                      // 'try' '#'
    case 7616:                      // 'union' '#'
    case 7617:                      // 'unordered' '#'
    case 7618:                      // 'validate' '#'
    case 7622:                      // 'where' '#'
    case 7624:                      // 'xquery' '#'
      try_FunctionItemExpr();
      break;
    case 51856:                     // 'map' '{'
      try_MapConstructor();
      break;
    case 69:                        // '['
    case 51791:                     // 'array' '{'
      try_ArrayConstructor();
      break;
    case 73:                        // '``['
      try_StringConstructor();
      break;
    case 65:                        // '?'
      try_UnaryLookup();
      break;
    default:
      try_NodeConstructor();
    }
  }

  function parse_Literal()
  {
    eventHandler.startNonterminal("Literal", e0);
    switch (l1)
    {
    case 4:                         // StringLiteral
      consume(4);                   // StringLiteral
      break;
    default:
      parse_NumericLiteral();
    }
    eventHandler.endNonterminal("Literal", e0);
  }

  function try_Literal()
  {
    switch (l1)
    {
    case 4:                         // StringLiteral
      consumeT(4);                  // StringLiteral
      break;
    default:
      try_NumericLiteral();
    }
  }

  function parse_NumericLiteral()
  {
    eventHandler.startNonterminal("NumericLiteral", e0);
    switch (l1)
    {
    case 1:                         // IntegerLiteral
      consume(1);                   // IntegerLiteral
      break;
    case 2:                         // DecimalLiteral
      consume(2);                   // DecimalLiteral
      break;
    default:
      consume(3);                   // DoubleLiteral
    }
    eventHandler.endNonterminal("NumericLiteral", e0);
  }

  function try_NumericLiteral()
  {
    switch (l1)
    {
    case 1:                         // IntegerLiteral
      consumeT(1);                  // IntegerLiteral
      break;
    case 2:                         // DecimalLiteral
      consumeT(2);                  // DecimalLiteral
      break;
    default:
      consumeT(3);                  // DoubleLiteral
    }
  }

  function parse_VarRef()
  {
    eventHandler.startNonterminal("VarRef", e0);
    consume(31);                    // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_VarName();
    eventHandler.endNonterminal("VarRef", e0);
  }

  function try_VarRef()
  {
    consumeT(31);                   // '$'
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_VarName();
  }

  function parse_VarName()
  {
    eventHandler.startNonterminal("VarName", e0);
    parse_EQName();
    eventHandler.endNonterminal("VarName", e0);
  }

  function try_VarName()
  {
    try_EQName();
  }

  function parse_ParenthesizedExpr()
  {
    eventHandler.startNonterminal("ParenthesizedExpr", e0);
    consume(34);                    // '('
    lookahead1W(175);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
                                    // '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      whitespace();
      parse_Expr();
    }
    consume(37);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpr", e0);
  }

  function try_ParenthesizedExpr()
  {
    consumeT(34);                   // '('
    lookahead1W(175);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | ')' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' |
                                    // '@' | '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      try_Expr();
    }
    consumeT(37);                   // ')'
  }

  function parse_ContextItemExpr()
  {
    eventHandler.startNonterminal("ContextItemExpr", e0);
    consume(43);                    // '.'
    eventHandler.endNonterminal("ContextItemExpr", e0);
  }

  function try_ContextItemExpr()
  {
    consumeT(43);                   // '.'
  }

  function parse_OrderedExpr()
  {
    eventHandler.startNonterminal("OrderedExpr", e0);
    consume(160);                   // 'ordered'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("OrderedExpr", e0);
  }

  function try_OrderedExpr()
  {
    consumeT(160);                  // 'ordered'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_UnorderedExpr()
  {
    eventHandler.startNonterminal("UnorderedExpr", e0);
    consume(193);                   // 'unordered'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("UnorderedExpr", e0);
  }

  function try_UnorderedExpr()
  {
    consumeT(193);                  // 'unordered'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_FunctionCall()
  {
    eventHandler.startNonterminal("FunctionCall", e0);
    parse_FunctionEQName();
    lookahead1W(24);                // S^WS | '(' | '(:'
    whitespace();
    parse_ArgumentList();
    eventHandler.endNonterminal("FunctionCall", e0);
  }

  function try_FunctionCall()
  {
    try_FunctionEQName();
    lookahead1W(24);                // S^WS | '(' | '(:'
    try_ArgumentList();
  }

  function parse_Argument()
  {
    eventHandler.startNonterminal("Argument", e0);
    switch (l1)
    {
    case 65:                        // '?'
      lookahead2W(133);             // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | ')' | '*' | ',' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 9537:                      // '?' ')'
    case 10305:                     // '?' ','
      parse_ArgumentPlaceholder();
      break;
    default:
      parse_ExprSingle();
    }
    eventHandler.endNonterminal("Argument", e0);
  }

  function try_Argument()
  {
    switch (l1)
    {
    case 65:                        // '?'
      lookahead2W(133);             // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | ')' | '*' | ',' | 'and' |
                                    // 'ascending' | 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' |
                                    // 'descending' | 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' |
                                    // 'ge' | 'group' | 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'treat' | 'union' | 'where'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 9537:                      // '?' ')'
    case 10305:                     // '?' ','
      try_ArgumentPlaceholder();
      break;
    default:
      try_ExprSingle();
    }
  }

  function parse_ArgumentPlaceholder()
  {
    eventHandler.startNonterminal("ArgumentPlaceholder", e0);
    consume(65);                    // '?'
    eventHandler.endNonterminal("ArgumentPlaceholder", e0);
  }

  function try_ArgumentPlaceholder()
  {
    consumeT(65);                   // '?'
  }

  function parse_NodeConstructor()
  {
    eventHandler.startNonterminal("NodeConstructor", e0);
    switch (l1)
    {
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
      parse_DirectConstructor();
      break;
    default:
      parse_ComputedConstructor();
    }
    eventHandler.endNonterminal("NodeConstructor", e0);
  }

  function try_NodeConstructor()
  {
    switch (l1)
    {
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
      try_DirectConstructor();
      break;
    default:
      try_ComputedConstructor();
    }
  }

  function parse_DirectConstructor()
  {
    eventHandler.startNonterminal("DirectConstructor", e0);
    switch (l1)
    {
    case 53:                        // '<'
      parse_DirElemConstructor();
      break;
    case 54:                        // '<!--'
      parse_DirCommentConstructor();
      break;
    default:
      parse_DirPIConstructor();
    }
    eventHandler.endNonterminal("DirectConstructor", e0);
  }

  function try_DirectConstructor()
  {
    switch (l1)
    {
    case 53:                        // '<'
      try_DirElemConstructor();
      break;
    case 54:                        // '<!--'
      try_DirCommentConstructor();
      break;
    default:
      try_DirPIConstructor();
    }
  }

  function parse_DirElemConstructor()
  {
    eventHandler.startNonterminal("DirElemConstructor", e0);
    consume(53);                    // '<'
    parse_QName();
    parse_DirAttributeList();
    switch (l1)
    {
    case 47:                        // '/>'
      consume(47);                  // '/>'
      break;
    default:
      consume(62);                  // '>'
      for (;;)
      {
        lookahead1(117);            // PredefinedEntityRef | ElementContentChar | CharRef | '<' | '<!--' | '<![CDATA[' |
                                    // '</' | '<?' | '{' | '{{' | '}}'
        if (l1 == 56)               // '</'
        {
          break;
        }
        parse_DirElemContent();
      }
      consume(56);                  // '</'
      parse_QName();
      lookahead1(14);               // S | '>'
      if (l1 == 17)                 // S
      {
        consume(17);                // S
      }
      lookahead1(9);                // '>'
      consume(62);                  // '>'
    }
    eventHandler.endNonterminal("DirElemConstructor", e0);
  }

  function try_DirElemConstructor()
  {
    consumeT(53);                   // '<'
    try_QName();
    try_DirAttributeList();
    switch (l1)
    {
    case 47:                        // '/>'
      consumeT(47);                 // '/>'
      break;
    default:
      consumeT(62);                 // '>'
      for (;;)
      {
        lookahead1(117);            // PredefinedEntityRef | ElementContentChar | CharRef | '<' | '<!--' | '<![CDATA[' |
                                    // '</' | '<?' | '{' | '{{' | '}}'
        if (l1 == 56)               // '</'
        {
          break;
        }
        try_DirElemContent();
      }
      consumeT(56);                 // '</'
      try_QName();
      lookahead1(14);               // S | '>'
      if (l1 == 17)                 // S
      {
        consumeT(17);               // S
      }
      lookahead1(9);                // '>'
      consumeT(62);                 // '>'
    }
  }

  function parse_DirAttributeList()
  {
    eventHandler.startNonterminal("DirAttributeList", e0);
    for (;;)
    {
      lookahead1(21);               // S | '/>' | '>'
      if (l1 != 17)                 // S
      {
        break;
      }
      consume(17);                  // S
      lookahead1(162);              // QName^Token | S | '/>' | '>' | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
      if (l1 != 17                  // S
       && l1 != 47                  // '/>'
       && l1 != 62)                 // '>'
      {
        parse_QName();
        lookahead1(13);             // S | '='
        if (l1 == 17)               // S
        {
          consume(17);              // S
        }
        lookahead1(8);              // '='
        consume(60);                // '='
        lookahead1(20);             // S | '"' | "'"
        if (l1 == 17)               // S
        {
          consume(17);              // S
        }
        parse_DirAttributeValue();
      }
    }
    eventHandler.endNonterminal("DirAttributeList", e0);
  }

  function try_DirAttributeList()
  {
    for (;;)
    {
      lookahead1(21);               // S | '/>' | '>'
      if (l1 != 17)                 // S
      {
        break;
      }
      consumeT(17);                 // S
      lookahead1(162);              // QName^Token | S | '/>' | '>' | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
      if (l1 != 17                  // S
       && l1 != 47                  // '/>'
       && l1 != 62)                 // '>'
      {
        try_QName();
        lookahead1(13);             // S | '='
        if (l1 == 17)               // S
        {
          consumeT(17);             // S
        }
        lookahead1(8);              // '='
        consumeT(60);               // '='
        lookahead1(20);             // S | '"' | "'"
        if (l1 == 17)               // S
        {
          consumeT(17);             // S
        }
        try_DirAttributeValue();
      }
    }
  }

  function parse_DirAttributeValue()
  {
    eventHandler.startNonterminal("DirAttributeValue", e0);
    lookahead1(16);                 // '"' | "'"
    switch (l1)
    {
    case 28:                        // '"'
      consume(28);                  // '"'
      for (;;)
      {
        lookahead1(112);            // PredefinedEntityRef | EscapeQuot | QuotAttrContentChar | CharRef | '"' | '{' |
                                    // '{{' | '}}'
        if (l1 == 28)               // '"'
        {
          break;
        }
        switch (l1)
        {
        case 7:                     // EscapeQuot
          consume(7);               // EscapeQuot
          break;
        default:
          parse_QuotAttrValueContent();
        }
      }
      consume(28);                  // '"'
      break;
    default:
      consume(33);                  // "'"
      for (;;)
      {
        lookahead1(113);            // PredefinedEntityRef | EscapeApos | AposAttrContentChar | CharRef | "'" | '{' |
                                    // '{{' | '}}'
        if (l1 == 33)               // "'"
        {
          break;
        }
        switch (l1)
        {
        case 8:                     // EscapeApos
          consume(8);               // EscapeApos
          break;
        default:
          parse_AposAttrValueContent();
        }
      }
      consume(33);                  // "'"
    }
    eventHandler.endNonterminal("DirAttributeValue", e0);
  }

  function try_DirAttributeValue()
  {
    lookahead1(16);                 // '"' | "'"
    switch (l1)
    {
    case 28:                        // '"'
      consumeT(28);                 // '"'
      for (;;)
      {
        lookahead1(112);            // PredefinedEntityRef | EscapeQuot | QuotAttrContentChar | CharRef | '"' | '{' |
                                    // '{{' | '}}'
        if (l1 == 28)               // '"'
        {
          break;
        }
        switch (l1)
        {
        case 7:                     // EscapeQuot
          consumeT(7);              // EscapeQuot
          break;
        default:
          try_QuotAttrValueContent();
        }
      }
      consumeT(28);                 // '"'
      break;
    default:
      consumeT(33);                 // "'"
      for (;;)
      {
        lookahead1(113);            // PredefinedEntityRef | EscapeApos | AposAttrContentChar | CharRef | "'" | '{' |
                                    // '{{' | '}}'
        if (l1 == 33)               // "'"
        {
          break;
        }
        switch (l1)
        {
        case 8:                     // EscapeApos
          consumeT(8);              // EscapeApos
          break;
        default:
          try_AposAttrValueContent();
        }
      }
      consumeT(33);                 // "'"
    }
  }

  function parse_QuotAttrValueContent()
  {
    eventHandler.startNonterminal("QuotAttrValueContent", e0);
    switch (l1)
    {
    case 10:                        // QuotAttrContentChar
      consume(10);                  // QuotAttrContentChar
      break;
    default:
      parse_CommonContent();
    }
    eventHandler.endNonterminal("QuotAttrValueContent", e0);
  }

  function try_QuotAttrValueContent()
  {
    switch (l1)
    {
    case 10:                        // QuotAttrContentChar
      consumeT(10);                 // QuotAttrContentChar
      break;
    default:
      try_CommonContent();
    }
  }

  function parse_AposAttrValueContent()
  {
    eventHandler.startNonterminal("AposAttrValueContent", e0);
    switch (l1)
    {
    case 11:                        // AposAttrContentChar
      consume(11);                  // AposAttrContentChar
      break;
    default:
      parse_CommonContent();
    }
    eventHandler.endNonterminal("AposAttrValueContent", e0);
  }

  function try_AposAttrValueContent()
  {
    switch (l1)
    {
    case 11:                        // AposAttrContentChar
      consumeT(11);                 // AposAttrContentChar
      break;
    default:
      try_CommonContent();
    }
  }

  function parse_DirElemContent()
  {
    eventHandler.startNonterminal("DirElemContent", e0);
    switch (l1)
    {
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
      parse_DirectConstructor();
      break;
    case 55:                        // '<![CDATA['
      parse_CDataSection();
      break;
    case 9:                         // ElementContentChar
      consume(9);                   // ElementContentChar
      break;
    default:
      parse_CommonContent();
    }
    eventHandler.endNonterminal("DirElemContent", e0);
  }

  function try_DirElemContent()
  {
    switch (l1)
    {
    case 53:                        // '<'
    case 54:                        // '<!--'
    case 59:                        // '<?'
      try_DirectConstructor();
      break;
    case 55:                        // '<![CDATA['
      try_CDataSection();
      break;
    case 9:                         // ElementContentChar
      consumeT(9);                  // ElementContentChar
      break;
    default:
      try_CommonContent();
    }
  }

  function parse_CommonContent()
  {
    eventHandler.startNonterminal("CommonContent", e0);
    switch (l1)
    {
    case 6:                         // PredefinedEntityRef
      consume(6);                   // PredefinedEntityRef
      break;
    case 13:                        // CharRef
      consume(13);                  // CharRef
      break;
    case 203:                       // '{{'
      consume(203);                 // '{{'
      break;
    case 208:                       // '}}'
      consume(208);                 // '}}'
      break;
    default:
      parse_EnclosedExpr();
    }
    eventHandler.endNonterminal("CommonContent", e0);
  }

  function try_CommonContent()
  {
    switch (l1)
    {
    case 6:                         // PredefinedEntityRef
      consumeT(6);                  // PredefinedEntityRef
      break;
    case 13:                        // CharRef
      consumeT(13);                 // CharRef
      break;
    case 203:                       // '{{'
      consumeT(203);                // '{{'
      break;
    case 208:                       // '}}'
      consumeT(208);                // '}}'
      break;
    default:
      try_EnclosedExpr();
    }
  }

  function parse_DirCommentConstructor()
  {
    eventHandler.startNonterminal("DirCommentConstructor", e0);
    consume(54);                    // '<!--'
    lookahead1(3);                  // DirCommentContents
    consume(22);                    // DirCommentContents
    lookahead1(7);                  // '-->'
    consume(42);                    // '-->'
    eventHandler.endNonterminal("DirCommentConstructor", e0);
  }

  function try_DirCommentConstructor()
  {
    consumeT(54);                   // '<!--'
    lookahead1(3);                  // DirCommentContents
    consumeT(22);                   // DirCommentContents
    lookahead1(7);                  // '-->'
    consumeT(42);                   // '-->'
  }

  function parse_DirPIConstructor()
  {
    eventHandler.startNonterminal("DirPIConstructor", e0);
    consume(59);                    // '<?'
    lookahead1(0);                  // PITarget
    consume(12);                    // PITarget
    lookahead1(15);                 // S | '?>'
    if (l1 == 17)                   // S
    {
      consume(17);                  // S
      lookahead1(4);                // DirPIContents
      consume(23);                  // DirPIContents
    }
    lookahead1(10);                 // '?>'
    consume(66);                    // '?>'
    eventHandler.endNonterminal("DirPIConstructor", e0);
  }

  function try_DirPIConstructor()
  {
    consumeT(59);                   // '<?'
    lookahead1(0);                  // PITarget
    consumeT(12);                   // PITarget
    lookahead1(15);                 // S | '?>'
    if (l1 == 17)                   // S
    {
      consumeT(17);                 // S
      lookahead1(4);                // DirPIContents
      consumeT(23);                 // DirPIContents
    }
    lookahead1(10);                 // '?>'
    consumeT(66);                   // '?>'
  }

  function parse_CDataSection()
  {
    eventHandler.startNonterminal("CDataSection", e0);
    consume(55);                    // '<![CDATA['
    lookahead1(5);                  // CDataSectionContents
    consume(24);                    // CDataSectionContents
    lookahead1(11);                 // ']]>'
    consume(71);                    // ']]>'
    eventHandler.endNonterminal("CDataSection", e0);
  }

  function try_CDataSection()
  {
    consumeT(55);                   // '<![CDATA['
    lookahead1(5);                  // CDataSectionContents
    consumeT(24);                   // CDataSectionContents
    lookahead1(11);                 // ']]>'
    consumeT(71);                   // ']]>'
  }

  function parse_ComputedConstructor()
  {
    eventHandler.startNonterminal("ComputedConstructor", e0);
    switch (l1)
    {
    case 107:                       // 'document'
      parse_CompDocConstructor();
      break;
    case 109:                       // 'element'
      parse_CompElemConstructor();
      break;
    case 83:                        // 'attribute'
      parse_CompAttrConstructor();
      break;
    case 148:                       // 'namespace'
      parse_CompNamespaceConstructor();
      break;
    case 184:                       // 'text'
      parse_CompTextConstructor();
      break;
    case 93:                        // 'comment'
      parse_CompCommentConstructor();
      break;
    default:
      parse_CompPIConstructor();
    }
    eventHandler.endNonterminal("ComputedConstructor", e0);
  }

  function try_ComputedConstructor()
  {
    switch (l1)
    {
    case 107:                       // 'document'
      try_CompDocConstructor();
      break;
    case 109:                       // 'element'
      try_CompElemConstructor();
      break;
    case 83:                        // 'attribute'
      try_CompAttrConstructor();
      break;
    case 148:                       // 'namespace'
      try_CompNamespaceConstructor();
      break;
    case 184:                       // 'text'
      try_CompTextConstructor();
      break;
    case 93:                        // 'comment'
      try_CompCommentConstructor();
      break;
    default:
      try_CompPIConstructor();
    }
  }

  function parse_CompDocConstructor()
  {
    eventHandler.startNonterminal("CompDocConstructor", e0);
    consume(107);                   // 'document'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CompDocConstructor", e0);
  }

  function try_CompDocConstructor()
  {
    consumeT(107);                  // 'document'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_CompElemConstructor()
  {
    eventHandler.startNonterminal("CompElemConstructor", e0);
    consume(109);                   // 'element'
    lookahead1W(164);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consume(202);                 // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_Expr();
      consume(206);                 // '}'
      break;
    default:
      whitespace();
      parse_EQName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedContentExpr();
    eventHandler.endNonterminal("CompElemConstructor", e0);
  }

  function try_CompElemConstructor()
  {
    consumeT(109);                  // 'element'
    lookahead1W(164);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consumeT(202);                // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_Expr();
      consumeT(206);                // '}'
      break;
    default:
      try_EQName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedContentExpr();
  }

  function parse_EnclosedContentExpr()
  {
    eventHandler.startNonterminal("EnclosedContentExpr", e0);
    parse_EnclosedExpr();
    eventHandler.endNonterminal("EnclosedContentExpr", e0);
  }

  function try_EnclosedContentExpr()
  {
    try_EnclosedExpr();
  }

  function parse_CompAttrConstructor()
  {
    eventHandler.startNonterminal("CompAttrConstructor", e0);
    consume(83);                    // 'attribute'
    lookahead1W(164);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consume(202);                 // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_Expr();
      consume(206);                 // '}'
      break;
    default:
      whitespace();
      parse_EQName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CompAttrConstructor", e0);
  }

  function try_CompAttrConstructor()
  {
    consumeT(83);                   // 'attribute'
    lookahead1W(164);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consumeT(202);                // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_Expr();
      consumeT(206);                // '}'
      break;
    default:
      try_EQName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_CompNamespaceConstructor()
  {
    eventHandler.startNonterminal("CompNamespaceConstructor", e0);
    consume(148);                   // 'namespace'
    lookahead1W(125);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      whitespace();
      parse_EnclosedPrefixExpr();
      break;
    default:
      whitespace();
      parse_Prefix();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedURIExpr();
    eventHandler.endNonterminal("CompNamespaceConstructor", e0);
  }

  function try_CompNamespaceConstructor()
  {
    consumeT(148);                  // 'namespace'
    lookahead1W(125);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      try_EnclosedPrefixExpr();
      break;
    default:
      try_Prefix();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedURIExpr();
  }

  function parse_Prefix()
  {
    eventHandler.startNonterminal("Prefix", e0);
    parse_NCName();
    eventHandler.endNonterminal("Prefix", e0);
  }

  function try_Prefix()
  {
    try_NCName();
  }

  function parse_EnclosedPrefixExpr()
  {
    eventHandler.startNonterminal("EnclosedPrefixExpr", e0);
    parse_EnclosedExpr();
    eventHandler.endNonterminal("EnclosedPrefixExpr", e0);
  }

  function try_EnclosedPrefixExpr()
  {
    try_EnclosedExpr();
  }

  function parse_EnclosedURIExpr()
  {
    eventHandler.startNonterminal("EnclosedURIExpr", e0);
    parse_EnclosedExpr();
    eventHandler.endNonterminal("EnclosedURIExpr", e0);
  }

  function try_EnclosedURIExpr()
  {
    try_EnclosedExpr();
  }

  function parse_CompTextConstructor()
  {
    eventHandler.startNonterminal("CompTextConstructor", e0);
    consume(184);                   // 'text'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CompTextConstructor", e0);
  }

  function try_CompTextConstructor()
  {
    consumeT(184);                  // 'text'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_CompCommentConstructor()
  {
    eventHandler.startNonterminal("CompCommentConstructor", e0);
    consume(93);                    // 'comment'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CompCommentConstructor", e0);
  }

  function try_CompCommentConstructor()
  {
    consumeT(93);                   // 'comment'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_CompPIConstructor()
  {
    eventHandler.startNonterminal("CompPIConstructor", e0);
    consume(170);                   // 'processing-instruction'
    lookahead1W(125);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consume(202);                 // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      whitespace();
      parse_Expr();
      consume(206);                 // '}'
      break;
    default:
      whitespace();
      parse_NCName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CompPIConstructor", e0);
  }

  function try_CompPIConstructor()
  {
    consumeT(170);                  // 'processing-instruction'
    lookahead1W(125);               // NCName^Token | S^WS | '(:' | 'and' | 'ascending' | 'case' | 'cast' | 'castable' |
                                    // 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' | 'empty' |
                                    // 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' | 'instance' |
                                    // 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' | 'or' |
                                    // 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '{'
    switch (l1)
    {
    case 202:                       // '{'
      consumeT(202);                // '{'
      lookahead1W(173);             // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
      try_Expr();
      consumeT(206);                // '}'
      break;
    default:
      try_NCName();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_FunctionItemExpr()
  {
    eventHandler.startNonterminal("FunctionItemExpr", e0);
    switch (l1)
    {
    case 123:                       // 'function'
      lookahead2W(63);              // S^WS | '#' | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 32:                        // '%'
    case 8827:                      // 'function' '('
      parse_InlineFunctionExpr();
      break;
    default:
      parse_NamedFunctionRef();
    }
    eventHandler.endNonterminal("FunctionItemExpr", e0);
  }

  function try_FunctionItemExpr()
  {
    switch (l1)
    {
    case 123:                       // 'function'
      lookahead2W(63);              // S^WS | '#' | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 32:                        // '%'
    case 8827:                      // 'function' '('
      try_InlineFunctionExpr();
      break;
    default:
      try_NamedFunctionRef();
    }
  }

  function parse_NamedFunctionRef()
  {
    eventHandler.startNonterminal("NamedFunctionRef", e0);
    parse_EQName();
    lookahead1W(22);                // S^WS | '#' | '(:'
    consume(29);                    // '#'
    lookahead1W(18);                // IntegerLiteral | S^WS | '(:'
    consume(1);                     // IntegerLiteral
    eventHandler.endNonterminal("NamedFunctionRef", e0);
  }

  function try_NamedFunctionRef()
  {
    try_EQName();
    lookahead1W(22);                // S^WS | '#' | '(:'
    consumeT(29);                   // '#'
    lookahead1W(18);                // IntegerLiteral | S^WS | '(:'
    consumeT(1);                    // IntegerLiteral
  }

  function parse_InlineFunctionExpr()
  {
    eventHandler.startNonterminal("InlineFunctionExpr", e0);
    for (;;)
    {
      lookahead1W(67);              // S^WS | '%' | '(:' | 'function'
      if (l1 != 32)                 // '%'
      {
        break;
      }
      whitespace();
      parse_Annotation();
    }
    consume(123);                   // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(65);                // S^WS | '$' | '(:' | ')'
    if (l1 == 31)                   // '$'
    {
      whitespace();
      parse_ParamList();
    }
    consume(37);                    // ')'
    lookahead1W(78);                // S^WS | '(:' | 'as' | '{'
    if (l1 == 80)                   // 'as'
    {
      consume(80);                  // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      whitespace();
      parse_SequenceType();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_FunctionBody();
    eventHandler.endNonterminal("InlineFunctionExpr", e0);
  }

  function try_InlineFunctionExpr()
  {
    for (;;)
    {
      lookahead1W(67);              // S^WS | '%' | '(:' | 'function'
      if (l1 != 32)                 // '%'
      {
        break;
      }
      try_Annotation();
    }
    consumeT(123);                  // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(65);                // S^WS | '$' | '(:' | ')'
    if (l1 == 31)                   // '$'
    {
      try_ParamList();
    }
    consumeT(37);                   // ')'
    lookahead1W(78);                // S^WS | '(:' | 'as' | '{'
    if (l1 == 80)                   // 'as'
    {
      consumeT(80);                 // 'as'
      lookahead1W(167);             // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
      try_SequenceType();
    }
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_FunctionBody();
  }

  function parse_MapConstructor()
  {
    eventHandler.startNonterminal("MapConstructor", e0);
    consume(144);                   // 'map'
    lookahead1W(60);                // S^WS | '(:' | '{'
    consume(202);                   // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      whitespace();
      parse_MapConstructorEntry();
      for (;;)
      {
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        whitespace();
        parse_MapConstructorEntry();
      }
    }
    consume(206);                   // '}'
    eventHandler.endNonterminal("MapConstructor", e0);
  }

  function try_MapConstructor()
  {
    consumeT(144);                  // 'map'
    lookahead1W(60);                // S^WS | '(:' | '{'
    consumeT(202);                  // '{'
    lookahead1W(177);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}'
    if (l1 != 206)                  // '}'
    {
      try_MapConstructorEntry();
      for (;;)
      {
        if (l1 != 40)               // ','
        {
          break;
        }
        consumeT(40);               // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        try_MapConstructorEntry();
      }
    }
    consumeT(206);                  // '}'
  }

  function parse_MapConstructorEntry()
  {
    eventHandler.startNonterminal("MapConstructorEntry", e0);
    parse_MapKeyExpr();
    consume(48);                    // ':'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    whitespace();
    parse_MapValueExpr();
    eventHandler.endNonterminal("MapConstructorEntry", e0);
  }

  function try_MapConstructorEntry()
  {
    try_MapKeyExpr();
    consumeT(48);                   // ':'
    lookahead1W(173);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    try_MapValueExpr();
  }

  function parse_MapKeyExpr()
  {
    eventHandler.startNonterminal("MapKeyExpr", e0);
    parse_ExprSingle();
    eventHandler.endNonterminal("MapKeyExpr", e0);
  }

  function try_MapKeyExpr()
  {
    try_ExprSingle();
  }

  function parse_MapValueExpr()
  {
    eventHandler.startNonterminal("MapValueExpr", e0);
    parse_ExprSingle();
    eventHandler.endNonterminal("MapValueExpr", e0);
  }

  function try_MapValueExpr()
  {
    try_ExprSingle();
  }

  function parse_ArrayConstructor()
  {
    eventHandler.startNonterminal("ArrayConstructor", e0);
    switch (l1)
    {
    case 69:                        // '['
      parse_SquareArrayConstructor();
      break;
    default:
      parse_CurlyArrayConstructor();
    }
    eventHandler.endNonterminal("ArrayConstructor", e0);
  }

  function try_ArrayConstructor()
  {
    switch (l1)
    {
    case 69:                        // '['
      try_SquareArrayConstructor();
      break;
    default:
      try_CurlyArrayConstructor();
    }
  }

  function parse_SquareArrayConstructor()
  {
    eventHandler.startNonterminal("SquareArrayConstructor", e0);
    consume(69);                    // '['
    lookahead1W(176);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 70)                   // ']'
    {
      whitespace();
      parse_ExprSingle();
      for (;;)
      {
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        whitespace();
        parse_ExprSingle();
      }
    }
    consume(70);                    // ']'
    eventHandler.endNonterminal("SquareArrayConstructor", e0);
  }

  function try_SquareArrayConstructor()
  {
    consumeT(69);                   // '['
    lookahead1W(176);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | ']' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' |
                                    // 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    if (l1 != 70)                   // ']'
    {
      try_ExprSingle();
      for (;;)
      {
        if (l1 != 40)               // ','
        {
          break;
        }
        consumeT(40);               // ','
        lookahead1W(173);           // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
        try_ExprSingle();
      }
    }
    consumeT(70);                   // ']'
  }

  function parse_CurlyArrayConstructor()
  {
    eventHandler.startNonterminal("CurlyArrayConstructor", e0);
    consume(79);                    // 'array'
    lookahead1W(60);                // S^WS | '(:' | '{'
    whitespace();
    parse_EnclosedExpr();
    eventHandler.endNonterminal("CurlyArrayConstructor", e0);
  }

  function try_CurlyArrayConstructor()
  {
    consumeT(79);                   // 'array'
    lookahead1W(60);                // S^WS | '(:' | '{'
    try_EnclosedExpr();
  }

  function parse_StringConstructor()
  {
    eventHandler.startNonterminal("StringConstructor", e0);
    consume(73);                    // '``['
    parse_StringConstructorContent();
    consume(72);                    // ']``'
    eventHandler.endNonterminal("StringConstructor", e0);
  }

  function try_StringConstructor()
  {
    consumeT(73);                   // '``['
    try_StringConstructorContent();
    consumeT(72);                   // ']``'
  }

  function parse_StringConstructorContent()
  {
    eventHandler.startNonterminal("StringConstructorContent", e0);
    lookahead1(1);                  // StringConstructorChars
    consume(16);                    // StringConstructorChars
    for (;;)
    {
      lookahead1(17);               // ']``' | '`{'
      if (l1 != 74)                 // '`{'
      {
        break;
      }
      parse_StringConstructorInterpolation();
      lookahead1(1);                // StringConstructorChars
      consume(16);                  // StringConstructorChars
    }
    eventHandler.endNonterminal("StringConstructorContent", e0);
  }

  function try_StringConstructorContent()
  {
    lookahead1(1);                  // StringConstructorChars
    consumeT(16);                   // StringConstructorChars
    for (;;)
    {
      lookahead1(17);               // ']``' | '`{'
      if (l1 != 74)                 // '`{'
      {
        break;
      }
      try_StringConstructorInterpolation();
      lookahead1(1);                // StringConstructorChars
      consumeT(16);                 // StringConstructorChars
    }
  }

  function parse_StringConstructorInterpolation()
  {
    eventHandler.startNonterminal("StringConstructorInterpolation", e0);
    consume(74);                    // '`{'
    lookahead1W(178);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}`'
    if (l1 != 207)                  // '}`'
    {
      whitespace();
      parse_Expr();
    }
    consume(207);                   // '}`'
    eventHandler.endNonterminal("StringConstructorInterpolation", e0);
  }

  function try_StringConstructorInterpolation()
  {
    consumeT(74);                   // '`{'
    lookahead1W(178);               // IntegerLiteral | DecimalLiteral | DoubleLiteral | StringLiteral |
                                    // URIQualifiedName | QName^Token | S^WS | Wildcard | '$' | '%' | '(' | '(#' |
                                    // '(:' | '+' | '-' | '.' | '..' | '/' | '//' | '<' | '<!--' | '<?' | '?' | '@' |
                                    // '[' | '``[' | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery' | '}`'
    if (l1 != 207)                  // '}`'
    {
      try_Expr();
    }
    consumeT(207);                  // '}`'
  }

  function parse_UnaryLookup()
  {
    eventHandler.startNonterminal("UnaryLookup", e0);
    consume(65);                    // '?'
    lookahead1W(128);               // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
                                    // 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
                                    // 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
                                    // 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
                                    // 'to' | 'treat' | 'union' | 'where'
    whitespace();
    parse_KeySpecifier();
    eventHandler.endNonterminal("UnaryLookup", e0);
  }

  function try_UnaryLookup()
  {
    consumeT(65);                   // '?'
    lookahead1W(128);               // IntegerLiteral | NCName^Token | S^WS | '(' | '(:' | '*' | 'and' | 'ascending' |
                                    // 'case' | 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' |
                                    // 'gt' | 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' |
                                    // 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' |
                                    // 'to' | 'treat' | 'union' | 'where'
    try_KeySpecifier();
  }

  function parse_SingleType()
  {
    eventHandler.startNonterminal("SingleType", e0);
    parse_SimpleTypeName();
    lookahead1W(140);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 65)                   // '?'
    {
      consume(65);                  // '?'
    }
    eventHandler.endNonterminal("SingleType", e0);
  }

  function try_SingleType()
  {
    try_SimpleTypeName();
    lookahead1W(140);               // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ';' | '<' | '<<' |
                                    // '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'and' | 'ascending' | 'case' |
                                    // 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' | 'else' |
                                    // 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' | 'only' |
                                    // 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' | 'treat' |
                                    // 'union' | 'where' | '|' | '||' | '}' | '}`'
    if (l1 == 65)                   // '?'
    {
      consumeT(65);                 // '?'
    }
  }

  function parse_TypeDeclaration()
  {
    eventHandler.startNonterminal("TypeDeclaration", e0);
    consume(80);                    // 'as'
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_SequenceType();
    eventHandler.endNonterminal("TypeDeclaration", e0);
  }

  function try_TypeDeclaration()
  {
    consumeT(80);                   // 'as'
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_SequenceType();
  }

  function parse_SequenceType()
  {
    eventHandler.startNonterminal("SequenceType", e0);
    switch (l1)
    {
    case 112:                       // 'empty-sequence'
      lookahead2W(144);             // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8816:                      // 'empty-sequence' '('
      consume(112);                 // 'empty-sequence'
      lookahead1W(24);              // S^WS | '(' | '(:'
      consume(34);                  // '('
      lookahead1W(25);              // S^WS | '(:' | ')'
      consume(37);                  // ')'
      break;
    default:
      parse_ItemType();
      lookahead1W(142);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' | '<' |
                                    // '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      switch (l1)
      {
      case 38:                      // '*'
      case 39:                      // '+'
      case 65:                      // '?'
        whitespace();
        parse_OccurrenceIndicator();
        break;
      default:
        break;
      }
    }
    eventHandler.endNonterminal("SequenceType", e0);
  }

  function try_SequenceType()
  {
    switch (l1)
    {
    case 112:                       // 'empty-sequence'
      lookahead2W(144);             // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8816:                      // 'empty-sequence' '('
      consumeT(112);                // 'empty-sequence'
      lookahead1W(24);              // S^WS | '(' | '(:'
      consumeT(34);                 // '('
      lookahead1W(25);              // S^WS | '(:' | ')'
      consumeT(37);                 // ')'
      break;
    default:
      try_ItemType();
      lookahead1W(142);             // S^WS | EOF | '!=' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' | '<' |
                                    // '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      switch (l1)
      {
      case 38:                      // '*'
      case 39:                      // '+'
      case 65:                      // '?'
        try_OccurrenceIndicator();
        break;
      default:
        break;
      }
    }
  }

  function parse_OccurrenceIndicator()
  {
    eventHandler.startNonterminal("OccurrenceIndicator", e0);
    switch (l1)
    {
    case 65:                        // '?'
      consume(65);                  // '?'
      break;
    case 38:                        // '*'
      consume(38);                  // '*'
      break;
    default:
      consume(39);                  // '+'
    }
    eventHandler.endNonterminal("OccurrenceIndicator", e0);
  }

  function try_OccurrenceIndicator()
  {
    switch (l1)
    {
    case 65:                        // '?'
      consumeT(65);                 // '?'
      break;
    case 38:                        // '*'
      consumeT(38);                 // '*'
      break;
    default:
      consumeT(39);                 // '+'
    }
  }

  function parse_ItemType()
  {
    eventHandler.startNonterminal("ItemType", e0);
    switch (l1)
    {
    case 79:                        // 'array'
    case 83:                        // 'attribute'
    case 93:                        // 'comment'
    case 108:                       // 'document-node'
    case 109:                       // 'element'
    case 123:                       // 'function'
    case 138:                       // 'item'
    case 144:                       // 'map'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 170:                       // 'processing-instruction'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 184:                       // 'text'
      lookahead2W(144);             // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8787:                      // 'attribute' '('
    case 8797:                      // 'comment' '('
    case 8812:                      // 'document-node' '('
    case 8813:                      // 'element' '('
    case 8853:                      // 'namespace-node' '('
    case 8858:                      // 'node' '('
    case 8874:                      // 'processing-instruction' '('
    case 8878:                      // 'schema-attribute' '('
    case 8879:                      // 'schema-element' '('
    case 8888:                      // 'text' '('
      parse_KindTest();
      break;
    case 8842:                      // 'item' '('
      consume(138);                 // 'item'
      lookahead1W(24);              // S^WS | '(' | '(:'
      consume(34);                  // '('
      lookahead1W(25);              // S^WS | '(:' | ')'
      consume(37);                  // ')'
      break;
    case 32:                        // '%'
    case 8827:                      // 'function' '('
      parse_FunctionTest();
      break;
    case 8848:                      // 'map' '('
      parse_MapTest();
      break;
    case 8783:                      // 'array' '('
      parse_ArrayTest();
      break;
    case 34:                        // '('
      parse_ParenthesizedItemType();
      break;
    default:
      parse_AtomicOrUnionType();
    }
    eventHandler.endNonterminal("ItemType", e0);
  }

  function try_ItemType()
  {
    switch (l1)
    {
    case 79:                        // 'array'
    case 83:                        // 'attribute'
    case 93:                        // 'comment'
    case 108:                       // 'document-node'
    case 109:                       // 'element'
    case 123:                       // 'function'
    case 138:                       // 'item'
    case 144:                       // 'map'
    case 149:                       // 'namespace-node'
    case 154:                       // 'node'
    case 170:                       // 'processing-instruction'
    case 174:                       // 'schema-attribute'
    case 175:                       // 'schema-element'
    case 184:                       // 'text'
      lookahead2W(144);             // S^WS | EOF | '!=' | '(' | '(:' | ')' | '*' | '+' | ',' | '-' | ':' | ':=' | ';' |
                                    // '<' | '<<' | '<=' | '=' | '>' | '>=' | '>>' | '?' | ']' | 'allowing' | 'and' |
                                    // 'ascending' | 'at' | 'case' | 'collation' | 'count' | 'default' | 'descending' |
                                    // 'div' | 'else' | 'empty' | 'end' | 'eq' | 'except' | 'external' | 'for' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'in' | 'instance' | 'intersect' | 'is' | 'le' | 'let' |
                                    // 'lt' | 'mod' | 'ne' | 'only' | 'or' | 'order' | 'return' | 'satisfies' |
                                    // 'stable' | 'start' | 'to' | 'union' | 'where' | '{' | '|' | '||' | '}' | '}`'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 8787:                      // 'attribute' '('
    case 8797:                      // 'comment' '('
    case 8812:                      // 'document-node' '('
    case 8813:                      // 'element' '('
    case 8853:                      // 'namespace-node' '('
    case 8858:                      // 'node' '('
    case 8874:                      // 'processing-instruction' '('
    case 8878:                      // 'schema-attribute' '('
    case 8879:                      // 'schema-element' '('
    case 8888:                      // 'text' '('
      try_KindTest();
      break;
    case 8842:                      // 'item' '('
      consumeT(138);                // 'item'
      lookahead1W(24);              // S^WS | '(' | '(:'
      consumeT(34);                 // '('
      lookahead1W(25);              // S^WS | '(:' | ')'
      consumeT(37);                 // ')'
      break;
    case 32:                        // '%'
    case 8827:                      // 'function' '('
      try_FunctionTest();
      break;
    case 8848:                      // 'map' '('
      try_MapTest();
      break;
    case 8783:                      // 'array' '('
      try_ArrayTest();
      break;
    case 34:                        // '('
      try_ParenthesizedItemType();
      break;
    default:
      try_AtomicOrUnionType();
    }
  }

  function parse_AtomicOrUnionType()
  {
    eventHandler.startNonterminal("AtomicOrUnionType", e0);
    parse_EQName();
    eventHandler.endNonterminal("AtomicOrUnionType", e0);
  }

  function try_AtomicOrUnionType()
  {
    try_EQName();
  }

  function parse_KindTest()
  {
    eventHandler.startNonterminal("KindTest", e0);
    switch (l1)
    {
    case 108:                       // 'document-node'
      parse_DocumentTest();
      break;
    case 109:                       // 'element'
      parse_ElementTest();
      break;
    case 83:                        // 'attribute'
      parse_AttributeTest();
      break;
    case 175:                       // 'schema-element'
      parse_SchemaElementTest();
      break;
    case 174:                       // 'schema-attribute'
      parse_SchemaAttributeTest();
      break;
    case 170:                       // 'processing-instruction'
      parse_PITest();
      break;
    case 93:                        // 'comment'
      parse_CommentTest();
      break;
    case 184:                       // 'text'
      parse_TextTest();
      break;
    case 149:                       // 'namespace-node'
      parse_NamespaceNodeTest();
      break;
    default:
      parse_AnyKindTest();
    }
    eventHandler.endNonterminal("KindTest", e0);
  }

  function try_KindTest()
  {
    switch (l1)
    {
    case 108:                       // 'document-node'
      try_DocumentTest();
      break;
    case 109:                       // 'element'
      try_ElementTest();
      break;
    case 83:                        // 'attribute'
      try_AttributeTest();
      break;
    case 175:                       // 'schema-element'
      try_SchemaElementTest();
      break;
    case 174:                       // 'schema-attribute'
      try_SchemaAttributeTest();
      break;
    case 170:                       // 'processing-instruction'
      try_PITest();
      break;
    case 93:                        // 'comment'
      try_CommentTest();
      break;
    case 184:                       // 'text'
      try_TextTest();
      break;
    case 149:                       // 'namespace-node'
      try_NamespaceNodeTest();
      break;
    default:
      try_AnyKindTest();
    }
  }

  function parse_AnyKindTest()
  {
    eventHandler.startNonterminal("AnyKindTest", e0);
    consume(154);                   // 'node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("AnyKindTest", e0);
  }

  function try_AnyKindTest()
  {
    consumeT(154);                  // 'node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_DocumentTest()
  {
    eventHandler.startNonterminal("DocumentTest", e0);
    consume(108);                   // 'document-node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(100);               // S^WS | '(:' | ')' | 'element' | 'schema-element'
    if (l1 != 37)                   // ')'
    {
      switch (l1)
      {
      case 109:                     // 'element'
        whitespace();
        parse_ElementTest();
        break;
      default:
        whitespace();
        parse_SchemaElementTest();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("DocumentTest", e0);
  }

  function try_DocumentTest()
  {
    consumeT(108);                  // 'document-node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(100);               // S^WS | '(:' | ')' | 'element' | 'schema-element'
    if (l1 != 37)                   // ')'
    {
      switch (l1)
      {
      case 109:                     // 'element'
        try_ElementTest();
        break;
      default:
        try_SchemaElementTest();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_TextTest()
  {
    eventHandler.startNonterminal("TextTest", e0);
    consume(184);                   // 'text'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("TextTest", e0);
  }

  function try_TextTest()
  {
    consumeT(184);                  // 'text'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_CommentTest()
  {
    eventHandler.startNonterminal("CommentTest", e0);
    consume(93);                    // 'comment'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("CommentTest", e0);
  }

  function try_CommentTest()
  {
    consumeT(93);                   // 'comment'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_NamespaceNodeTest()
  {
    eventHandler.startNonterminal("NamespaceNodeTest", e0);
    consume(149);                   // 'namespace-node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("NamespaceNodeTest", e0);
  }

  function try_NamespaceNodeTest()
  {
    consumeT(149);                  // 'namespace-node'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_PITest()
  {
    eventHandler.startNonterminal("PITest", e0);
    consume(170);                   // 'processing-instruction'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(126);               // StringLiteral | NCName^Token | S^WS | '(:' | ')' | 'and' | 'ascending' | 'case' |
                                    // 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
                                    // 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
                                    // 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
                                    // 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
                                    // 'treat' | 'union' | 'where'
    if (l1 != 37)                   // ')'
    {
      switch (l1)
      {
      case 4:                       // StringLiteral
        consume(4);                 // StringLiteral
        break;
      default:
        whitespace();
        parse_NCName();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("PITest", e0);
  }

  function try_PITest()
  {
    consumeT(170);                  // 'processing-instruction'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(126);               // StringLiteral | NCName^Token | S^WS | '(:' | ')' | 'and' | 'ascending' | 'case' |
                                    // 'cast' | 'castable' | 'collation' | 'count' | 'default' | 'descending' | 'div' |
                                    // 'else' | 'empty' | 'end' | 'eq' | 'except' | 'for' | 'ge' | 'group' | 'gt' |
                                    // 'idiv' | 'instance' | 'intersect' | 'is' | 'le' | 'let' | 'lt' | 'mod' | 'ne' |
                                    // 'only' | 'or' | 'order' | 'return' | 'satisfies' | 'stable' | 'start' | 'to' |
                                    // 'treat' | 'union' | 'where'
    if (l1 != 37)                   // ')'
    {
      switch (l1)
      {
      case 4:                       // StringLiteral
        consumeT(4);                // StringLiteral
        break;
      default:
        try_NCName();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_AttributeTest()
  {
    eventHandler.startNonterminal("AttributeTest", e0);
    consume(83);                    // 'attribute'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(168);               // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      whitespace();
      parse_AttribNameOrWildcard();
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 == 40)                 // ','
      {
        consume(40);                // ','
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        whitespace();
        parse_TypeName();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("AttributeTest", e0);
  }

  function try_AttributeTest()
  {
    consumeT(83);                   // 'attribute'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(168);               // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      try_AttribNameOrWildcard();
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 == 40)                 // ','
      {
        consumeT(40);               // ','
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        try_TypeName();
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_AttribNameOrWildcard()
  {
    eventHandler.startNonterminal("AttribNameOrWildcard", e0);
    switch (l1)
    {
    case 38:                        // '*'
      consume(38);                  // '*'
      break;
    default:
      parse_AttributeName();
    }
    eventHandler.endNonterminal("AttribNameOrWildcard", e0);
  }

  function try_AttribNameOrWildcard()
  {
    switch (l1)
    {
    case 38:                        // '*'
      consumeT(38);                 // '*'
      break;
    default:
      try_AttributeName();
    }
  }

  function parse_SchemaAttributeTest()
  {
    eventHandler.startNonterminal("SchemaAttributeTest", e0);
    consume(174);                   // 'schema-attribute'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_AttributeDeclaration();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("SchemaAttributeTest", e0);
  }

  function try_SchemaAttributeTest()
  {
    consumeT(174);                  // 'schema-attribute'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_AttributeDeclaration();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_AttributeDeclaration()
  {
    eventHandler.startNonterminal("AttributeDeclaration", e0);
    parse_AttributeName();
    eventHandler.endNonterminal("AttributeDeclaration", e0);
  }

  function try_AttributeDeclaration()
  {
    try_AttributeName();
  }

  function parse_ElementTest()
  {
    eventHandler.startNonterminal("ElementTest", e0);
    consume(109);                   // 'element'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(168);               // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      whitespace();
      parse_ElementNameOrWildcard();
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 == 40)                 // ','
      {
        consume(40);                // ','
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        whitespace();
        parse_TypeName();
        lookahead1W(70);            // S^WS | '(:' | ')' | '?'
        if (l1 == 65)               // '?'
        {
          consume(65);              // '?'
        }
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("ElementTest", e0);
  }

  function try_ElementTest()
  {
    consumeT(109);                  // 'element'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(168);               // URIQualifiedName | QName^Token | S^WS | '(:' | ')' | '*' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      try_ElementNameOrWildcard();
      lookahead1W(69);              // S^WS | '(:' | ')' | ','
      if (l1 == 40)                 // ','
      {
        consumeT(40);               // ','
        lookahead1W(161);           // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        try_TypeName();
        lookahead1W(70);            // S^WS | '(:' | ')' | '?'
        if (l1 == 65)               // '?'
        {
          consumeT(65);             // '?'
        }
      }
    }
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_ElementNameOrWildcard()
  {
    eventHandler.startNonterminal("ElementNameOrWildcard", e0);
    switch (l1)
    {
    case 38:                        // '*'
      consume(38);                  // '*'
      break;
    default:
      parse_ElementName();
    }
    eventHandler.endNonterminal("ElementNameOrWildcard", e0);
  }

  function try_ElementNameOrWildcard()
  {
    switch (l1)
    {
    case 38:                        // '*'
      consumeT(38);                 // '*'
      break;
    default:
      try_ElementName();
    }
  }

  function parse_SchemaElementTest()
  {
    eventHandler.startNonterminal("SchemaElementTest", e0);
    consume(175);                   // 'schema-element'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_ElementDeclaration();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("SchemaElementTest", e0);
  }

  function try_SchemaElementTest()
  {
    consumeT(175);                  // 'schema-element'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_ElementDeclaration();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_ElementDeclaration()
  {
    eventHandler.startNonterminal("ElementDeclaration", e0);
    parse_ElementName();
    eventHandler.endNonterminal("ElementDeclaration", e0);
  }

  function try_ElementDeclaration()
  {
    try_ElementName();
  }

  function parse_AttributeName()
  {
    eventHandler.startNonterminal("AttributeName", e0);
    parse_EQName();
    eventHandler.endNonterminal("AttributeName", e0);
  }

  function try_AttributeName()
  {
    try_EQName();
  }

  function parse_ElementName()
  {
    eventHandler.startNonterminal("ElementName", e0);
    parse_EQName();
    eventHandler.endNonterminal("ElementName", e0);
  }

  function try_ElementName()
  {
    try_EQName();
  }

  function parse_SimpleTypeName()
  {
    eventHandler.startNonterminal("SimpleTypeName", e0);
    parse_TypeName();
    eventHandler.endNonterminal("SimpleTypeName", e0);
  }

  function try_SimpleTypeName()
  {
    try_TypeName();
  }

  function parse_TypeName()
  {
    eventHandler.startNonterminal("TypeName", e0);
    parse_EQName();
    eventHandler.endNonterminal("TypeName", e0);
  }

  function try_TypeName()
  {
    try_EQName();
  }

  function parse_FunctionTest()
  {
    eventHandler.startNonterminal("FunctionTest", e0);
    for (;;)
    {
      lookahead1W(67);              // S^WS | '%' | '(:' | 'function'
      if (l1 != 32)                 // '%'
      {
        break;
      }
      whitespace();
      parse_Annotation();
    }
    switch (l1)
    {
    case 123:                       // 'function'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(3, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyFunctionTest();
        lk = -1;
      }
      catch (p1A)
      {
        lk = -2;
      }
      b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
      b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
      b2 = b2A; e2 = e2A; end = e2A; }}
      memoize(3, e0, lk);
    }
    switch (lk)
    {
    case -1:
      whitespace();
      parse_AnyFunctionTest();
      break;
    default:
      whitespace();
      parse_TypedFunctionTest();
    }
    eventHandler.endNonterminal("FunctionTest", e0);
  }

  function try_FunctionTest()
  {
    for (;;)
    {
      lookahead1W(67);              // S^WS | '%' | '(:' | 'function'
      if (l1 != 32)                 // '%'
      {
        break;
      }
      try_Annotation();
    }
    switch (l1)
    {
    case 123:                       // 'function'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(3, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyFunctionTest();
        memoize(3, e0A, -1);
        lk = -3;
      }
      catch (p1A)
      {
        lk = -2;
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(3, e0A, -2);
      }
    }
    switch (lk)
    {
    case -1:
      try_AnyFunctionTest();
      break;
    case -3:
      break;
    default:
      try_TypedFunctionTest();
    }
  }

  function parse_AnyFunctionTest()
  {
    eventHandler.startNonterminal("AnyFunctionTest", e0);
    consume(123);                   // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consume(38);                    // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("AnyFunctionTest", e0);
  }

  function try_AnyFunctionTest()
  {
    consumeT(123);                  // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consumeT(38);                   // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_TypedFunctionTest()
  {
    eventHandler.startNonterminal("TypedFunctionTest", e0);
    consume(123);                   // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(170);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | ')' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      whitespace();
      parse_SequenceType();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consume(40);                // ','
        lookahead1W(167);           // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        whitespace();
        parse_SequenceType();
      }
    }
    consume(37);                    // ')'
    lookahead1W(32);                // S^WS | '(:' | 'as'
    consume(80);                    // 'as'
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_SequenceType();
    eventHandler.endNonterminal("TypedFunctionTest", e0);
  }

  function try_TypedFunctionTest()
  {
    consumeT(123);                  // 'function'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(170);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | ')' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    if (l1 != 37)                   // ')'
    {
      try_SequenceType();
      for (;;)
      {
        lookahead1W(69);            // S^WS | '(:' | ')' | ','
        if (l1 != 40)               // ','
        {
          break;
        }
        consumeT(40);               // ','
        lookahead1W(167);           // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
        try_SequenceType();
      }
    }
    consumeT(37);                   // ')'
    lookahead1W(32);                // S^WS | '(:' | 'as'
    consumeT(80);                   // 'as'
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_SequenceType();
  }

  function parse_MapTest()
  {
    eventHandler.startNonterminal("MapTest", e0);
    switch (l1)
    {
    case 144:                       // 'map'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(4, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyMapTest();
        lk = -1;
      }
      catch (p1A)
      {
        lk = -2;
      }
      b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
      b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
      b2 = b2A; e2 = e2A; end = e2A; }}
      memoize(4, e0, lk);
    }
    switch (lk)
    {
    case -1:
      parse_AnyMapTest();
      break;
    default:
      parse_TypedMapTest();
    }
    eventHandler.endNonterminal("MapTest", e0);
  }

  function try_MapTest()
  {
    switch (l1)
    {
    case 144:                       // 'map'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(4, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyMapTest();
        memoize(4, e0A, -1);
        lk = -3;
      }
      catch (p1A)
      {
        lk = -2;
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(4, e0A, -2);
      }
    }
    switch (lk)
    {
    case -1:
      try_AnyMapTest();
      break;
    case -3:
      break;
    default:
      try_TypedMapTest();
    }
  }

  function parse_AnyMapTest()
  {
    eventHandler.startNonterminal("AnyMapTest", e0);
    consume(144);                   // 'map'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consume(38);                    // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("AnyMapTest", e0);
  }

  function try_AnyMapTest()
  {
    consumeT(144);                  // 'map'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consumeT(38);                   // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_TypedMapTest()
  {
    eventHandler.startNonterminal("TypedMapTest", e0);
    consume(144);                   // 'map'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_AtomicOrUnionType();
    lookahead1W(27);                // S^WS | '(:' | ','
    consume(40);                    // ','
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_SequenceType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("TypedMapTest", e0);
  }

  function try_TypedMapTest()
  {
    consumeT(144);                  // 'map'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(161);               // URIQualifiedName | QName^Token | S^WS | '(:' | 'ancestor' | 'ancestor-or-self' |
                                    // 'and' | 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' |
                                    // 'child' | 'collation' | 'comment' | 'count' | 'declare' | 'default' |
                                    // 'descendant' | 'descendant-or-self' | 'descending' | 'div' | 'document' |
                                    // 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' |
                                    // 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_AtomicOrUnionType();
    lookahead1W(27);                // S^WS | '(:' | ','
    consumeT(40);                   // ','
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_SequenceType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_ArrayTest()
  {
    eventHandler.startNonterminal("ArrayTest", e0);
    switch (l1)
    {
    case 79:                        // 'array'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(5, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyArrayTest();
        lk = -1;
      }
      catch (p1A)
      {
        lk = -2;
      }
      b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
      b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
      b2 = b2A; e2 = e2A; end = e2A; }}
      memoize(5, e0, lk);
    }
    switch (lk)
    {
    case -1:
      parse_AnyArrayTest();
      break;
    default:
      parse_TypedArrayTest();
    }
    eventHandler.endNonterminal("ArrayTest", e0);
  }

  function try_ArrayTest()
  {
    switch (l1)
    {
    case 79:                        // 'array'
      lookahead2W(24);              // S^WS | '(' | '(:'
      break;
    default:
      lk = l1;
    }
    lk = memoized(5, e0);
    if (lk == 0)
    {
      var b0A = b0; var e0A = e0; var l1A = l1;
      var b1A = b1; var e1A = e1; var l2A = l2;
      var b2A = b2; var e2A = e2;
      try
      {
        try_AnyArrayTest();
        memoize(5, e0A, -1);
        lk = -3;
      }
      catch (p1A)
      {
        lk = -2;
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; end = e2A; }}
        memoize(5, e0A, -2);
      }
    }
    switch (lk)
    {
    case -1:
      try_AnyArrayTest();
      break;
    case -3:
      break;
    default:
      try_TypedArrayTest();
    }
  }

  function parse_AnyArrayTest()
  {
    eventHandler.startNonterminal("AnyArrayTest", e0);
    consume(79);                    // 'array'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consume(38);                    // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("AnyArrayTest", e0);
  }

  function try_AnyArrayTest()
  {
    consumeT(79);                   // 'array'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(26);                // S^WS | '(:' | '*'
    consumeT(38);                   // '*'
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_TypedArrayTest()
  {
    eventHandler.startNonterminal("TypedArrayTest", e0);
    consume(79);                    // 'array'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consume(34);                    // '('
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_SequenceType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("TypedArrayTest", e0);
  }

  function try_TypedArrayTest()
  {
    consumeT(79);                   // 'array'
    lookahead1W(24);                // S^WS | '(' | '(:'
    consumeT(34);                   // '('
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_SequenceType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_ParenthesizedItemType()
  {
    eventHandler.startNonterminal("ParenthesizedItemType", e0);
    consume(34);                    // '('
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    whitespace();
    parse_ItemType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consume(37);                    // ')'
    eventHandler.endNonterminal("ParenthesizedItemType", e0);
  }

  function try_ParenthesizedItemType()
  {
    consumeT(34);                   // '('
    lookahead1W(167);               // URIQualifiedName | QName^Token | S^WS | '%' | '(' | '(:' | 'ancestor' |
                                    // 'ancestor-or-self' | 'and' | 'array' | 'ascending' | 'attribute' | 'case' |
                                    // 'cast' | 'castable' | 'child' | 'collation' | 'comment' | 'count' | 'declare' |
                                    // 'default' | 'descendant' | 'descendant-or-self' | 'descending' | 'div' |
                                    // 'document' | 'document-node' | 'element' | 'else' | 'empty' | 'empty-sequence' |
                                    // 'end' | 'eq' | 'every' | 'except' | 'following' | 'following-sibling' | 'for' |
                                    // 'function' | 'ge' | 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' |
                                    // 'intersect' | 'is' | 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' |
                                    // 'namespace' | 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' |
                                    // 'ordered' | 'parent' | 'preceding' | 'preceding-sibling' |
                                    // 'processing-instruction' | 'return' | 'satisfies' | 'schema-attribute' |
                                    // 'schema-element' | 'self' | 'some' | 'stable' | 'start' | 'switch' | 'text' |
                                    // 'to' | 'treat' | 'try' | 'typeswitch' | 'union' | 'unordered' | 'validate' |
                                    // 'where' | 'xquery'
    try_ItemType();
    lookahead1W(25);                // S^WS | '(:' | ')'
    consumeT(37);                   // ')'
  }

  function parse_URILiteral()
  {
    eventHandler.startNonterminal("URILiteral", e0);
    consume(4);                     // StringLiteral
    eventHandler.endNonterminal("URILiteral", e0);
  }

  function try_URILiteral()
  {
    consumeT(4);                    // StringLiteral
  }

  function parse_EQName()
  {
    eventHandler.startNonterminal("EQName", e0);
    lookahead1(159);                // URIQualifiedName | QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    switch (l1)
    {
    case 5:                         // URIQualifiedName
      consume(5);                   // URIQualifiedName
      break;
    default:
      parse_QName();
    }
    eventHandler.endNonterminal("EQName", e0);
  }

  function try_EQName()
  {
    lookahead1(159);                // URIQualifiedName | QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' |
                                    // 'array' | 'ascending' | 'attribute' | 'case' | 'cast' | 'castable' | 'child' |
                                    // 'collation' | 'comment' | 'count' | 'declare' | 'default' | 'descendant' |
                                    // 'descendant-or-self' | 'descending' | 'div' | 'document' | 'document-node' |
                                    // 'element' | 'else' | 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' |
                                    // 'except' | 'following' | 'following-sibling' | 'for' | 'function' | 'ge' |
                                    // 'group' | 'gt' | 'idiv' | 'if' | 'import' | 'instance' | 'intersect' | 'is' |
                                    // 'item' | 'le' | 'let' | 'lt' | 'map' | 'mod' | 'module' | 'namespace' |
                                    // 'namespace-node' | 'ne' | 'node' | 'only' | 'or' | 'order' | 'ordered' |
                                    // 'parent' | 'preceding' | 'preceding-sibling' | 'processing-instruction' |
                                    // 'return' | 'satisfies' | 'schema-attribute' | 'schema-element' | 'self' |
                                    // 'some' | 'stable' | 'start' | 'switch' | 'text' | 'to' | 'treat' | 'try' |
                                    // 'typeswitch' | 'union' | 'unordered' | 'validate' | 'where' | 'xquery'
    switch (l1)
    {
    case 5:                         // URIQualifiedName
      consumeT(5);                  // URIQualifiedName
      break;
    default:
      try_QName();
    }
  }

  function parse_FunctionEQName()
  {
    eventHandler.startNonterminal("FunctionEQName", e0);
    switch (l1)
    {
    case 5:                         // URIQualifiedName
      consume(5);                   // URIQualifiedName
      break;
    default:
      parse_FunctionName();
    }
    eventHandler.endNonterminal("FunctionEQName", e0);
  }

  function try_FunctionEQName()
  {
    switch (l1)
    {
    case 5:                         // URIQualifiedName
      consumeT(5);                  // URIQualifiedName
      break;
    default:
      try_FunctionName();
    }
  }

  function parse_QName()
  {
    eventHandler.startNonterminal("QName", e0);
    lookahead1(158);                // QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    switch (l1)
    {
    case 79:                        // 'array'
      consume(79);                  // 'array'
      break;
    case 83:                        // 'attribute'
      consume(83);                  // 'attribute'
      break;
    case 93:                        // 'comment'
      consume(93);                  // 'comment'
      break;
    case 108:                       // 'document-node'
      consume(108);                 // 'document-node'
      break;
    case 109:                       // 'element'
      consume(109);                 // 'element'
      break;
    case 112:                       // 'empty-sequence'
      consume(112);                 // 'empty-sequence'
      break;
    case 123:                       // 'function'
      consume(123);                 // 'function'
      break;
    case 130:                       // 'if'
      consume(130);                 // 'if'
      break;
    case 138:                       // 'item'
      consume(138);                 // 'item'
      break;
    case 144:                       // 'map'
      consume(144);                 // 'map'
      break;
    case 149:                       // 'namespace-node'
      consume(149);                 // 'namespace-node'
      break;
    case 154:                       // 'node'
      consume(154);                 // 'node'
      break;
    case 170:                       // 'processing-instruction'
      consume(170);                 // 'processing-instruction'
      break;
    case 174:                       // 'schema-attribute'
      consume(174);                 // 'schema-attribute'
      break;
    case 175:                       // 'schema-element'
      consume(175);                 // 'schema-element'
      break;
    case 183:                       // 'switch'
      consume(183);                 // 'switch'
      break;
    case 184:                       // 'text'
      consume(184);                 // 'text'
      break;
    case 191:                       // 'typeswitch'
      consume(191);                 // 'typeswitch'
      break;
    default:
      parse_FunctionName();
    }
    eventHandler.endNonterminal("QName", e0);
  }

  function try_QName()
  {
    lookahead1(158);                // QName^Token | 'ancestor' | 'ancestor-or-self' | 'and' | 'array' | 'ascending' |
                                    // 'attribute' | 'case' | 'cast' | 'castable' | 'child' | 'collation' | 'comment' |
                                    // 'count' | 'declare' | 'default' | 'descendant' | 'descendant-or-self' |
                                    // 'descending' | 'div' | 'document' | 'document-node' | 'element' | 'else' |
                                    // 'empty' | 'empty-sequence' | 'end' | 'eq' | 'every' | 'except' | 'following' |
                                    // 'following-sibling' | 'for' | 'function' | 'ge' | 'group' | 'gt' | 'idiv' |
                                    // 'if' | 'import' | 'instance' | 'intersect' | 'is' | 'item' | 'le' | 'let' |
                                    // 'lt' | 'map' | 'mod' | 'module' | 'namespace' | 'namespace-node' | 'ne' |
                                    // 'node' | 'only' | 'or' | 'order' | 'ordered' | 'parent' | 'preceding' |
                                    // 'preceding-sibling' | 'processing-instruction' | 'return' | 'satisfies' |
                                    // 'schema-attribute' | 'schema-element' | 'self' | 'some' | 'stable' | 'start' |
                                    // 'switch' | 'text' | 'to' | 'treat' | 'try' | 'typeswitch' | 'union' |
                                    // 'unordered' | 'validate' | 'where' | 'xquery'
    switch (l1)
    {
    case 79:                        // 'array'
      consumeT(79);                 // 'array'
      break;
    case 83:                        // 'attribute'
      consumeT(83);                 // 'attribute'
      break;
    case 93:                        // 'comment'
      consumeT(93);                 // 'comment'
      break;
    case 108:                       // 'document-node'
      consumeT(108);                // 'document-node'
      break;
    case 109:                       // 'element'
      consumeT(109);                // 'element'
      break;
    case 112:                       // 'empty-sequence'
      consumeT(112);                // 'empty-sequence'
      break;
    case 123:                       // 'function'
      consumeT(123);                // 'function'
      break;
    case 130:                       // 'if'
      consumeT(130);                // 'if'
      break;
    case 138:                       // 'item'
      consumeT(138);                // 'item'
      break;
    case 144:                       // 'map'
      consumeT(144);                // 'map'
      break;
    case 149:                       // 'namespace-node'
      consumeT(149);                // 'namespace-node'
      break;
    case 154:                       // 'node'
      consumeT(154);                // 'node'
      break;
    case 170:                       // 'processing-instruction'
      consumeT(170);                // 'processing-instruction'
      break;
    case 174:                       // 'schema-attribute'
      consumeT(174);                // 'schema-attribute'
      break;
    case 175:                       // 'schema-element'
      consumeT(175);                // 'schema-element'
      break;
    case 183:                       // 'switch'
      consumeT(183);                // 'switch'
      break;
    case 184:                       // 'text'
      consumeT(184);                // 'text'
      break;
    case 191:                       // 'typeswitch'
      consumeT(191);                // 'typeswitch'
      break;
    default:
      try_FunctionName();
    }
  }

  function parse_FunctionName()
  {
    eventHandler.startNonterminal("FunctionName", e0);
    switch (l1)
    {
    case 15:                        // QName^Token
      consume(15);                  // QName^Token
      break;
    case 76:                        // 'ancestor'
      consume(76);                  // 'ancestor'
      break;
    case 77:                        // 'ancestor-or-self'
      consume(77);                  // 'ancestor-or-self'
      break;
    case 78:                        // 'and'
      consume(78);                  // 'and'
      break;
    case 81:                        // 'ascending'
      consume(81);                  // 'ascending'
      break;
    case 87:                        // 'case'
      consume(87);                  // 'case'
      break;
    case 88:                        // 'cast'
      consume(88);                  // 'cast'
      break;
    case 89:                        // 'castable'
      consume(89);                  // 'castable'
      break;
    case 91:                        // 'child'
      consume(91);                  // 'child'
      break;
    case 92:                        // 'collation'
      consume(92);                  // 'collation'
      break;
    case 97:                        // 'count'
      consume(97);                  // 'count'
      break;
    case 100:                       // 'declare'
      consume(100);                 // 'declare'
      break;
    case 101:                       // 'default'
      consume(101);                 // 'default'
      break;
    case 102:                       // 'descendant'
      consume(102);                 // 'descendant'
      break;
    case 103:                       // 'descendant-or-self'
      consume(103);                 // 'descendant-or-self'
      break;
    case 104:                       // 'descending'
      consume(104);                 // 'descending'
      break;
    case 106:                       // 'div'
      consume(106);                 // 'div'
      break;
    case 107:                       // 'document'
      consume(107);                 // 'document'
      break;
    case 110:                       // 'else'
      consume(110);                 // 'else'
      break;
    case 111:                       // 'empty'
      consume(111);                 // 'empty'
      break;
    case 114:                       // 'end'
      consume(114);                 // 'end'
      break;
    case 115:                       // 'eq'
      consume(115);                 // 'eq'
      break;
    case 116:                       // 'every'
      consume(116);                 // 'every'
      break;
    case 117:                       // 'except'
      consume(117);                 // 'except'
      break;
    case 120:                       // 'following'
      consume(120);                 // 'following'
      break;
    case 121:                       // 'following-sibling'
      consume(121);                 // 'following-sibling'
      break;
    case 122:                       // 'for'
      consume(122);                 // 'for'
      break;
    case 124:                       // 'ge'
      consume(124);                 // 'ge'
      break;
    case 126:                       // 'group'
      consume(126);                 // 'group'
      break;
    case 128:                       // 'gt'
      consume(128);                 // 'gt'
      break;
    case 129:                       // 'idiv'
      consume(129);                 // 'idiv'
      break;
    case 131:                       // 'import'
      consume(131);                 // 'import'
      break;
    case 135:                       // 'instance'
      consume(135);                 // 'instance'
      break;
    case 136:                       // 'intersect'
      consume(136);                 // 'intersect'
      break;
    case 137:                       // 'is'
      consume(137);                 // 'is'
      break;
    case 140:                       // 'le'
      consume(140);                 // 'le'
      break;
    case 142:                       // 'let'
      consume(142);                 // 'let'
      break;
    case 143:                       // 'lt'
      consume(143);                 // 'lt'
      break;
    case 146:                       // 'mod'
      consume(146);                 // 'mod'
      break;
    case 147:                       // 'module'
      consume(147);                 // 'module'
      break;
    case 148:                       // 'namespace'
      consume(148);                 // 'namespace'
      break;
    case 150:                       // 'ne'
      consume(150);                 // 'ne'
      break;
    case 156:                       // 'only'
      consume(156);                 // 'only'
      break;
    case 158:                       // 'or'
      consume(158);                 // 'or'
      break;
    case 159:                       // 'order'
      consume(159);                 // 'order'
      break;
    case 160:                       // 'ordered'
      consume(160);                 // 'ordered'
      break;
    case 162:                       // 'parent'
      consume(162);                 // 'parent'
      break;
    case 166:                       // 'preceding'
      consume(166);                 // 'preceding'
      break;
    case 167:                       // 'preceding-sibling'
      consume(167);                 // 'preceding-sibling'
      break;
    case 171:                       // 'return'
      consume(171);                 // 'return'
      break;
    case 172:                       // 'satisfies'
      consume(172);                 // 'satisfies'
      break;
    case 176:                       // 'self'
      consume(176);                 // 'self'
      break;
    case 178:                       // 'some'
      consume(178);                 // 'some'
      break;
    case 179:                       // 'stable'
      consume(179);                 // 'stable'
      break;
    case 180:                       // 'start'
      consume(180);                 // 'start'
      break;
    case 186:                       // 'to'
      consume(186);                 // 'to'
      break;
    case 187:                       // 'treat'
      consume(187);                 // 'treat'
      break;
    case 188:                       // 'try'
      consume(188);                 // 'try'
      break;
    case 192:                       // 'union'
      consume(192);                 // 'union'
      break;
    case 193:                       // 'unordered'
      consume(193);                 // 'unordered'
      break;
    case 194:                       // 'validate'
      consume(194);                 // 'validate'
      break;
    case 198:                       // 'where'
      consume(198);                 // 'where'
      break;
    default:
      consume(200);                 // 'xquery'
    }
    eventHandler.endNonterminal("FunctionName", e0);
  }

  function try_FunctionName()
  {
    switch (l1)
    {
    case 15:                        // QName^Token
      consumeT(15);                 // QName^Token
      break;
    case 76:                        // 'ancestor'
      consumeT(76);                 // 'ancestor'
      break;
    case 77:                        // 'ancestor-or-self'
      consumeT(77);                 // 'ancestor-or-self'
      break;
    case 78:                        // 'and'
      consumeT(78);                 // 'and'
      break;
    case 81:                        // 'ascending'
      consumeT(81);                 // 'ascending'
      break;
    case 87:                        // 'case'
      consumeT(87);                 // 'case'
      break;
    case 88:                        // 'cast'
      consumeT(88);                 // 'cast'
      break;
    case 89:                        // 'castable'
      consumeT(89);                 // 'castable'
      break;
    case 91:                        // 'child'
      consumeT(91);                 // 'child'
      break;
    case 92:                        // 'collation'
      consumeT(92);                 // 'collation'
      break;
    case 97:                        // 'count'
      consumeT(97);                 // 'count'
      break;
    case 100:                       // 'declare'
      consumeT(100);                // 'declare'
      break;
    case 101:                       // 'default'
      consumeT(101);                // 'default'
      break;
    case 102:                       // 'descendant'
      consumeT(102);                // 'descendant'
      break;
    case 103:                       // 'descendant-or-self'
      consumeT(103);                // 'descendant-or-self'
      break;
    case 104:                       // 'descending'
      consumeT(104);                // 'descending'
      break;
    case 106:                       // 'div'
      consumeT(106);                // 'div'
      break;
    case 107:                       // 'document'
      consumeT(107);                // 'document'
      break;
    case 110:                       // 'else'
      consumeT(110);                // 'else'
      break;
    case 111:                       // 'empty'
      consumeT(111);                // 'empty'
      break;
    case 114:                       // 'end'
      consumeT(114);                // 'end'
      break;
    case 115:                       // 'eq'
      consumeT(115);                // 'eq'
      break;
    case 116:                       // 'every'
      consumeT(116);                // 'every'
      break;
    case 117:                       // 'except'
      consumeT(117);                // 'except'
      break;
    case 120:                       // 'following'
      consumeT(120);                // 'following'
      break;
    case 121:                       // 'following-sibling'
      consumeT(121);                // 'following-sibling'
      break;
    case 122:                       // 'for'
      consumeT(122);                // 'for'
      break;
    case 124:                       // 'ge'
      consumeT(124);                // 'ge'
      break;
    case 126:                       // 'group'
      consumeT(126);                // 'group'
      break;
    case 128:                       // 'gt'
      consumeT(128);                // 'gt'
      break;
    case 129:                       // 'idiv'
      consumeT(129);                // 'idiv'
      break;
    case 131:                       // 'import'
      consumeT(131);                // 'import'
      break;
    case 135:                       // 'instance'
      consumeT(135);                // 'instance'
      break;
    case 136:                       // 'intersect'
      consumeT(136);                // 'intersect'
      break;
    case 137:                       // 'is'
      consumeT(137);                // 'is'
      break;
    case 140:                       // 'le'
      consumeT(140);                // 'le'
      break;
    case 142:                       // 'let'
      consumeT(142);                // 'let'
      break;
    case 143:                       // 'lt'
      consumeT(143);                // 'lt'
      break;
    case 146:                       // 'mod'
      consumeT(146);                // 'mod'
      break;
    case 147:                       // 'module'
      consumeT(147);                // 'module'
      break;
    case 148:                       // 'namespace'
      consumeT(148);                // 'namespace'
      break;
    case 150:                       // 'ne'
      consumeT(150);                // 'ne'
      break;
    case 156:                       // 'only'
      consumeT(156);                // 'only'
      break;
    case 158:                       // 'or'
      consumeT(158);                // 'or'
      break;
    case 159:                       // 'order'
      consumeT(159);                // 'order'
      break;
    case 160:                       // 'ordered'
      consumeT(160);                // 'ordered'
      break;
    case 162:                       // 'parent'
      consumeT(162);                // 'parent'
      break;
    case 166:                       // 'preceding'
      consumeT(166);                // 'preceding'
      break;
    case 167:                       // 'preceding-sibling'
      consumeT(167);                // 'preceding-sibling'
      break;
    case 171:                       // 'return'
      consumeT(171);                // 'return'
      break;
    case 172:                       // 'satisfies'
      consumeT(172);                // 'satisfies'
      break;
    case 176:                       // 'self'
      consumeT(176);                // 'self'
      break;
    case 178:                       // 'some'
      consumeT(178);                // 'some'
      break;
    case 179:                       // 'stable'
      consumeT(179);                // 'stable'
      break;
    case 180:                       // 'start'
      consumeT(180);                // 'start'
      break;
    case 186:                       // 'to'
      consumeT(186);                // 'to'
      break;
    case 187:                       // 'treat'
      consumeT(187);                // 'treat'
      break;
    case 188:                       // 'try'
      consumeT(188);                // 'try'
      break;
    case 192:                       // 'union'
      consumeT(192);                // 'union'
      break;
    case 193:                       // 'unordered'
      consumeT(193);                // 'unordered'
      break;
    case 194:                       // 'validate'
      consumeT(194);                // 'validate'
      break;
    case 198:                       // 'where'
      consumeT(198);                // 'where'
      break;
    default:
      consumeT(200);                // 'xquery'
    }
  }

  function parse_NCName()
  {
    eventHandler.startNonterminal("NCName", e0);
    switch (l1)
    {
    case 14:                        // NCName^Token
      consume(14);                  // NCName^Token
      break;
    case 78:                        // 'and'
      consume(78);                  // 'and'
      break;
    case 81:                        // 'ascending'
      consume(81);                  // 'ascending'
      break;
    case 87:                        // 'case'
      consume(87);                  // 'case'
      break;
    case 88:                        // 'cast'
      consume(88);                  // 'cast'
      break;
    case 89:                        // 'castable'
      consume(89);                  // 'castable'
      break;
    case 92:                        // 'collation'
      consume(92);                  // 'collation'
      break;
    case 97:                        // 'count'
      consume(97);                  // 'count'
      break;
    case 101:                       // 'default'
      consume(101);                 // 'default'
      break;
    case 104:                       // 'descending'
      consume(104);                 // 'descending'
      break;
    case 106:                       // 'div'
      consume(106);                 // 'div'
      break;
    case 110:                       // 'else'
      consume(110);                 // 'else'
      break;
    case 111:                       // 'empty'
      consume(111);                 // 'empty'
      break;
    case 114:                       // 'end'
      consume(114);                 // 'end'
      break;
    case 115:                       // 'eq'
      consume(115);                 // 'eq'
      break;
    case 117:                       // 'except'
      consume(117);                 // 'except'
      break;
    case 122:                       // 'for'
      consume(122);                 // 'for'
      break;
    case 124:                       // 'ge'
      consume(124);                 // 'ge'
      break;
    case 126:                       // 'group'
      consume(126);                 // 'group'
      break;
    case 128:                       // 'gt'
      consume(128);                 // 'gt'
      break;
    case 129:                       // 'idiv'
      consume(129);                 // 'idiv'
      break;
    case 135:                       // 'instance'
      consume(135);                 // 'instance'
      break;
    case 136:                       // 'intersect'
      consume(136);                 // 'intersect'
      break;
    case 137:                       // 'is'
      consume(137);                 // 'is'
      break;
    case 140:                       // 'le'
      consume(140);                 // 'le'
      break;
    case 142:                       // 'let'
      consume(142);                 // 'let'
      break;
    case 143:                       // 'lt'
      consume(143);                 // 'lt'
      break;
    case 146:                       // 'mod'
      consume(146);                 // 'mod'
      break;
    case 150:                       // 'ne'
      consume(150);                 // 'ne'
      break;
    case 156:                       // 'only'
      consume(156);                 // 'only'
      break;
    case 158:                       // 'or'
      consume(158);                 // 'or'
      break;
    case 159:                       // 'order'
      consume(159);                 // 'order'
      break;
    case 171:                       // 'return'
      consume(171);                 // 'return'
      break;
    case 172:                       // 'satisfies'
      consume(172);                 // 'satisfies'
      break;
    case 179:                       // 'stable'
      consume(179);                 // 'stable'
      break;
    case 180:                       // 'start'
      consume(180);                 // 'start'
      break;
    case 186:                       // 'to'
      consume(186);                 // 'to'
      break;
    case 187:                       // 'treat'
      consume(187);                 // 'treat'
      break;
    case 192:                       // 'union'
      consume(192);                 // 'union'
      break;
    default:
      consume(198);                 // 'where'
    }
    eventHandler.endNonterminal("NCName", e0);
  }

  function try_NCName()
  {
    switch (l1)
    {
    case 14:                        // NCName^Token
      consumeT(14);                 // NCName^Token
      break;
    case 78:                        // 'and'
      consumeT(78);                 // 'and'
      break;
    case 81:                        // 'ascending'
      consumeT(81);                 // 'ascending'
      break;
    case 87:                        // 'case'
      consumeT(87);                 // 'case'
      break;
    case 88:                        // 'cast'
      consumeT(88);                 // 'cast'
      break;
    case 89:                        // 'castable'
      consumeT(89);                 // 'castable'
      break;
    case 92:                        // 'collation'
      consumeT(92);                 // 'collation'
      break;
    case 97:                        // 'count'
      consumeT(97);                 // 'count'
      break;
    case 101:                       // 'default'
      consumeT(101);                // 'default'
      break;
    case 104:                       // 'descending'
      consumeT(104);                // 'descending'
      break;
    case 106:                       // 'div'
      consumeT(106);                // 'div'
      break;
    case 110:                       // 'else'
      consumeT(110);                // 'else'
      break;
    case 111:                       // 'empty'
      consumeT(111);                // 'empty'
      break;
    case 114:                       // 'end'
      consumeT(114);                // 'end'
      break;
    case 115:                       // 'eq'
      consumeT(115);                // 'eq'
      break;
    case 117:                       // 'except'
      consumeT(117);                // 'except'
      break;
    case 122:                       // 'for'
      consumeT(122);                // 'for'
      break;
    case 124:                       // 'ge'
      consumeT(124);                // 'ge'
      break;
    case 126:                       // 'group'
      consumeT(126);                // 'group'
      break;
    case 128:                       // 'gt'
      consumeT(128);                // 'gt'
      break;
    case 129:                       // 'idiv'
      consumeT(129);                // 'idiv'
      break;
    case 135:                       // 'instance'
      consumeT(135);                // 'instance'
      break;
    case 136:                       // 'intersect'
      consumeT(136);                // 'intersect'
      break;
    case 137:                       // 'is'
      consumeT(137);                // 'is'
      break;
    case 140:                       // 'le'
      consumeT(140);                // 'le'
      break;
    case 142:                       // 'let'
      consumeT(142);                // 'let'
      break;
    case 143:                       // 'lt'
      consumeT(143);                // 'lt'
      break;
    case 146:                       // 'mod'
      consumeT(146);                // 'mod'
      break;
    case 150:                       // 'ne'
      consumeT(150);                // 'ne'
      break;
    case 156:                       // 'only'
      consumeT(156);                // 'only'
      break;
    case 158:                       // 'or'
      consumeT(158);                // 'or'
      break;
    case 159:                       // 'order'
      consumeT(159);                // 'order'
      break;
    case 171:                       // 'return'
      consumeT(171);                // 'return'
      break;
    case 172:                       // 'satisfies'
      consumeT(172);                // 'satisfies'
      break;
    case 179:                       // 'stable'
      consumeT(179);                // 'stable'
      break;
    case 180:                       // 'start'
      consumeT(180);                // 'start'
      break;
    case 186:                       // 'to'
      consumeT(186);                // 'to'
      break;
    case 187:                       // 'treat'
      consumeT(187);                // 'treat'
      break;
    case 192:                       // 'union'
      consumeT(192);                // 'union'
      break;
    default:
      consumeT(198);                // 'where'
    }
  }

  function try_Whitespace()
  {
    switch (l1)
    {
    case 18:                        // S^WS
      consumeT(18);                 // S^WS
      break;
    default:
      try_Comment();
    }
  }

  function try_Comment()
  {
    consumeT(36);                   // '(:'
    for (;;)
    {
      lookahead1(61);               // CommentContents | '(:' | ':)'
      if (l1 == 49)                 // ':)'
      {
        break;
      }
      switch (l1)
      {
      case 19:                      // CommentContents
        consumeT(19);               // CommentContents
        break;
      default:
        try_Comment();
      }
    }
    consumeT(49);                   // ':)'
  }

  function consume(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(XQueryParser.TOKEN[l1], b1, e1);
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = 0; }
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function consumeT(t)
  {
    if (l1 == t)
    {
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = 0; }
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function skip(code)
  {
    var b0W = b0; var e0W = e0; var l1W = l1;
    var b1W = b1; var e1W = e1;

    l1 = code; b1 = begin; e1 = end;
    l2 = 0;

    try_Whitespace();

    b0 = b0W; e0 = e0W; l1 = l1W; if (l1 != 0) {
    b1 = b1W; e1 = e1W; }
  }

  function whitespace()
  {
    if (e0 != b1)
    {
      eventHandler.whitespace(e0, b1);
      e0 = b1;
    }
  }

  function matchW(tokenSetId)
  {
    var code;
    for (;;)
    {
      code = match(tokenSetId);
      if (code != 18)               // S^WS
      {
        if (code != 36)             // '(:'
        {
          break;
        }
        skip(code);
      }
    }
    return code;
  }

  function lookahead1W(tokenSetId)
  {
    if (l1 == 0)
    {
      l1 = matchW(tokenSetId);
      b1 = begin;
      e1 = end;
    }
  }

  function lookahead2W(tokenSetId)
  {
    if (l2 == 0)
    {
      l2 = matchW(tokenSetId);
      b2 = begin;
      e2 = end;
    }
    lk = (l2 << 8) | l1;
  }

  function lookahead1(tokenSetId)
  {
    if (l1 == 0)
    {
      l1 = match(tokenSetId);
      b1 = begin;
      e1 = end;
    }
  }

  function error(b, e, s, l, t)
  {
    if (e >= ex)
    {
      bx = b;
      ex = e;
      sx = s;
      lx = l;
      tx = t;
    }
    throw new thisParser.ParseException(bx, ex, sx, lx, tx);
  }

  var lk, b0, e0;
  var l1, b1, e1;
  var l2, b2, e2;
  var bx, ex, sx, lx, tx;
  var eventHandler;
  var memo;

  function memoize(i, e, v)
  {
    memo[(e << 3) + i] = v;
  }

  function memoized(i, e)
  {
    var v = memo[(e << 3) + i];
    return typeof v != "undefined" ? v : 0;
  }

  var input;
  var size;

  var begin;
  var end;

  function match(tokenSetId)
  {
    var nonbmp = false;
    begin = end;
    var current = end;
    var result = XQueryParser.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 2047; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = XQueryParser.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 4;
        charclass = XQueryParser.MAP1[(c0 & 15) + XQueryParser.MAP1[(c1 & 31) + XQueryParser.MAP1[c1 >> 5]]];
      }
      else
      {
        if (c0 < 0xdc00)
        {
          var c1 = current < size ? input.charCodeAt(current) : 0;
          if (c1 >= 0xdc00 && c1 < 0xe000)
          {
            ++current;
            c0 = ((c0 & 0x3ff) << 10) + (c1 & 0x3ff) + 0x10000;
            nonbmp = true;
          }
        }

        var lo = 0, hi = 5;
        for (var m = 3; ; m = (hi + lo) >> 1)
        {
          if (XQueryParser.MAP2[m] > c0) hi = m - 1;
          else if (XQueryParser.MAP2[6 + m] < c0) lo = m + 1;
          else {charclass = XQueryParser.MAP2[12 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 11) + code - 1;
      code = XQueryParser.TRANSITION[(i0 & 15) + XQueryParser.TRANSITION[i0 >> 4]];

      if (code > 2047)
      {
        result = code;
        code &= 2047;
        end = current;
      }
    }

    result >>= 11;
    if (result == 0)
    {
      end = current - 1;
      var c1 = end < size ? input.charCodeAt(end) : 0;
      if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      return error(begin, end, state, -1, -1);
    }

    if (nonbmp)
    {
      for (var i = result >> 8; i > 0; --i)
      {
        --end;
        var c1 = end < size ? input.charCodeAt(end) : 0;
        if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      }
    }
    else
    {
      end -= result >> 8;
    }

    if (end > size) end = size;
    return (result & 255) - 1;
  }

}

XQueryParser.XmlSerializer = function(log, indent)
{
  var input = null;
  var delayedTag = null;
  var hasChildElement = false;
  var depth = 0;

  this.reset = function(string)
  {
    log("<?xml version=\"1.0\" encoding=\"UTF-8\"?" + ">");
    input = string;
    delayedTag = null;
    hasChildElement = false;
    depth = 0;
  };

  this.startNonterminal = function(tag, begin)
  {
    if (delayedTag != null)
    {
      log("<");
      log(delayedTag);
      log(">");
    }
    delayedTag = tag;
    if (indent)
    {
      log("\n");
      for (var i = 0; i < depth; ++i)
      {
        log("  ");
      }
    }
    hasChildElement = false;
    ++depth;
  };

  this.endNonterminal = function(tag, end)
  {
    --depth;
    if (delayedTag != null)
    {
      delayedTag = null;
      log("<");
      log(tag);
      log("/>");
    }
    else
    {
      if (indent)
      {
        if (hasChildElement)
        {
          log("\n");
          for (var i = 0; i < depth; ++i)
          {
            log("  ");
          }
        }
      }
      log("</");
      log(tag);
      log(">");
    }
    hasChildElement = true;
  };

  this.terminal = function(tag, begin, end)
  {
    if (tag.charAt(0) == '\'') tag = "TOKEN";
    this.startNonterminal(tag, begin);
    characters(begin, end);
    this.endNonterminal(tag, end);
  };

  this.whitespace = function(begin, end)
  {
    characters(begin, end);
  };

  function characters(begin, end)
  {
    if (begin < end)
    {
      if (delayedTag != null)
      {
        log("<");
        log(delayedTag);
        log(">");
        delayedTag = null;
      }
      log(input.substring(begin, end)
               .replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;"));
    }
  }
};

XQueryParser.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : XQueryParser.INITIAL[tokenSetId] & 2047;
  for (var i = 0; i < 209; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 1934 + s - 1;
    var i1 = i0 >> 1;
    var i2 = i1 >> 2;
    var f = XQueryParser.EXPECTED[(i0 & 1) + XQueryParser.EXPECTED[(i1 & 3) + XQueryParser.EXPECTED[(i2 & 3) + XQueryParser.EXPECTED[i2 >> 2]]]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(XQueryParser.TOKEN[j]);
      }
    }
  }
  return set;
};

XQueryParser.TopDownTreeBuilder = function()
{
  var input = null;
  var stack = null;

  this.reset = function(i)
  {
    input = i;
    stack = [];
  };

  this.startNonterminal = function(name, begin)
  {
    var nonterminal = new XQueryParser.Nonterminal(name, begin, begin, []);
    if (stack.length > 0) addChild(nonterminal);
    stack.push(nonterminal);
  };

  this.endNonterminal = function(name, end)
  {
    stack[stack.length - 1].end = end;
    if (stack.length > 1) stack.pop();
  };

  this.terminal = function(name, begin, end)
  {
    addChild(new XQueryParser.Terminal(name, begin, end));
  };

  this.whitespace = function(begin, end)
  {
  };

  function addChild(s)
  {
    var current = stack[stack.length - 1];
    current.children.push(s);
  }

  this.serialize = function(e)
  {
    e.reset(input);
    stack[0].send(e);
  };
};

XQueryParser.Terminal = function(name, begin, end)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.terminal(name, begin, end);
  };
};

XQueryParser.Nonterminal = function(name, begin, end, children)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.startNonterminal(name, begin);
    var pos = begin;
    children.forEach
    (
      function(c)
      {
        if (pos < c.begin) e.whitespace(pos, c.begin);
        c.send(e);
        pos = c.end;
      }
    );
    if (pos < end) e.whitespace(pos, end);
    e.endNonterminal(name, end);
  };
};

XQueryParser.MAP0 =
[
  /*   0 */ 69, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4,
  /*  36 */ 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 21, 22, 23,
  /*  64 */ 24, 25, 26, 27, 28, 29, 26, 30, 30, 30, 30, 30, 31, 32, 33, 30, 30, 34, 30, 30, 35, 30, 30, 30, 36, 30, 30,
  /*  91 */ 37, 38, 39, 38, 30, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 30, 30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
  /* 118 */ 60, 61, 62, 63, 64, 65, 66, 67, 38, 38
];

XQueryParser.MAP1 =
[
  /*   0 */ 108, 124, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 156, 181, 181, 181, 181,
  /*  21 */ 181, 214, 215, 213, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
  /*  42 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
  /*  63 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
  /*  84 */ 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214, 214,
  /* 105 */ 214, 214, 214, 247, 261, 277, 293, 309, 355, 371, 387, 423, 423, 423, 415, 339, 331, 339, 331, 339, 339,
  /* 126 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 440, 440, 440, 440, 440, 440, 440,
  /* 147 */ 324, 339, 339, 339, 339, 339, 339, 339, 339, 401, 423, 423, 424, 422, 423, 423, 339, 339, 339, 339, 339,
  /* 168 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 423, 423, 423, 423, 423, 423, 423, 423,
  /* 189 */ 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423, 423,
  /* 210 */ 423, 423, 423, 338, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339,
  /* 231 */ 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 339, 423, 69, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 256 */ 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  /* 290 */ 14, 15, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 26, 30,
  /* 317 */ 30, 30, 30, 30, 31, 32, 33, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 38, 30, 30, 30, 30, 30,
  /* 344 */ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 30, 30, 35, 30, 30, 30, 36, 30, 30, 37, 38, 39, 38, 30,
  /* 371 */ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 30, 30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64,
  /* 398 */ 65, 66, 67, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 30, 30, 38, 38, 38, 38, 38, 38, 38, 68, 38, 38,
  /* 425 */ 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 38, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68, 68,
  /* 452 */ 68, 68, 68, 68
];

XQueryParser.MAP2 =
[
  /*  0 */ 57344, 63744, 64976, 65008, 65536, 983040, 63743, 64975, 65007, 65533, 983039, 1114111, 38, 30, 38, 30, 30,
  /* 17 */ 38
];

XQueryParser.INITIAL =
[
  /*   0 */ 1, 2, 3, 47108, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
  /*  28 */ 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
  /*  55 */ 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
  /*  82 */ 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
  /* 107 */ 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
  /* 128 */ 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149,
  /* 149 */ 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170,
  /* 170 */ 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182
];

XQueryParser.TRANSITION =
[
  /*     0 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*    17 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*    34 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*    51 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*    68 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*    85 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*   102 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*   119 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 8960, 8994, 9000, 8978, 9000, 9000, 9000, 9018,
  /*   136 */ 9000, 9002, 8975, 9028, 9044, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080,
  /*   153 */ 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294,
  /*   170 */ 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517,
  /*   186 */ 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695,
  /*   202 */ 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951,
  /*   219 */ 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260,
  /*   234 */ 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537,
  /*   249 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 10619, 10633,
  /*   266 */ 9155, 10675, 14816, 9155, 19795, 9155, 14556, 19408, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10705,
  /*   282 */ 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510,
  /*   299 */ 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058,
  /*   315 */ 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754,
  /*   332 */ 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993,
  /*   349 */ 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274,
  /*   364 */ 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155,
  /*   379 */ 9155, 9155, 9155, 9155, 9155, 10575, 10730, 9155, 18528, 9155, 9514, 10559, 10751, 9155, 9155, 22939,
  /*   395 */ 13633, 9472, 9155, 19795, 9155, 10966, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 11644, 9080,
  /*   411 */ 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878,
  /*   428 */ 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764,
  /*   444 */ 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826,
  /*   461 */ 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009,
  /*   478 */ 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508,
  /*   493 */ 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155,
  /*   509 */ 9155, 9155, 9155, 10778, 10834, 9155, 16186, 10858, 9155, 10858, 10825, 10851, 10875, 10835, 10952, 14816,
  /*   525 */ 9155, 12631, 9155, 10903, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 11155, 9080, 9114, 9154,
  /*   541 */ 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474,
  /*   558 */ 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 11002, 11014, 9533, 27517, 20058, 22764, 9549, 16705,
  /*   574 */ 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858,
  /*   591 */ 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187,
  /*   608 */ 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356,
  /*   623 */ 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155,
  /*   639 */ 9155, 10575, 13525, 9155, 16032, 11030, 9155, 13531, 10597, 9155, 13537, 11198, 11211, 14816, 9155, 19795,
  /*   655 */ 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355,
  /*   672 */ 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397,
  /*   689 */ 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600,
  /*   705 */ 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852,
  /*   722 */ 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194,
  /*   738 */ 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391,
  /*   753 */ 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575,
  /*   769 */ 9155, 9155, 16032, 11061, 9155, 11049, 10597, 10551, 9155, 13602, 11081, 14816, 9155, 19795, 9155, 14556,
  /*   785 */ 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225,
  /*   802 */ 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498,
  /*   819 */ 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655,
  /*   835 */ 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896,
  /*   852 */ 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099,
  /*   868 */ 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240,
  /*   883 */ 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155,
  /*   899 */ 16032, 9155, 9155, 9155, 11118, 9155, 9155, 9155, 26953, 13740, 9155, 19795, 9155, 14556, 9155, 9355,
  /*   915 */ 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092,
  /*   932 */ 9264, 9287, 11140, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530,
  /*   949 */ 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303,
  /*   965 */ 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433,
  /*   982 */ 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115,
  /*   998 */ 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676,
  /*  1013 */ 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 11227, 9155, 19722, 9155,
  /*  1029 */ 14312, 11374, 11248, 9155, 9155, 16831, 10499, 16280, 9155, 19795, 9155, 10689, 9155, 9355, 9364, 9155,
  /*  1045 */ 9155, 10393, 9098, 10080, 10484, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287,
  /*  1062 */ 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514,
  /*  1078 */ 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639,
  /*  1094 */ 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017,
  /*  1111 */ 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141,
  /*  1127 */ 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445,
  /*  1142 */ 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 11277, 11294, 11297, 11289, 11294,
  /*  1158 */ 11336, 11313, 11329, 11352, 11390, 11403, 14816, 9155, 19683, 9155, 14556, 9155, 9355, 9364, 9155, 9155,
  /*  1174 */ 10393, 9098, 10080, 10156, 9080, 11419, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310,
  /*  1191 */ 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505,
  /*  1207 */ 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659,
  /*  1223 */ 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942,
  /*  1240 */ 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125,
  /*  1256 */ 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315,
  /*  1271 */ 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 27344, 9155, 16032, 11475, 9155, 11477,
  /*  1287 */ 11462, 26009, 26017, 24737, 11493, 14816, 9155, 10986, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393,
  /*  1303 */ 9098, 10080, 10156, 9080, 11543, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248,
  /*  1320 */ 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014,
  /*  1336 */ 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679,
  /*  1352 */ 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956,
  /*  1369 */ 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191,
  /*  1385 */ 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469,
  /*  1400 */ 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9926, 9155, 16032, 9155, 9155, 9155, 10597, 11582,
  /*  1417 */ 11584, 11600, 11613, 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080,
  /*  1433 */ 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 11629, 9248, 9271, 9294,
  /*  1450 */ 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 11683, 11014, 9533, 27517,
  /*  1466 */ 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695,
  /*  1482 */ 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951,
  /*  1499 */ 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260,
  /*  1514 */ 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537,
  /*  1529 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 11709, 11715,
  /*  1546 */ 18911, 11731, 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156,
  /*  1562 */ 9080, 9114, 9154, 11366, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510,
  /*  1579 */ 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058,
  /*  1595 */ 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754,
  /*  1612 */ 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993,
  /*  1629 */ 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274,
  /*  1644 */ 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155,
  /*  1659 */ 9155, 9155, 9155, 9155, 9155, 10575, 14178, 9155, 16032, 27236, 9155, 11767, 11787, 11823, 11825, 9155,
  /*  1675 */ 11841, 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080,
  /*  1691 */ 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878,
  /*  1708 */ 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764,
  /*  1724 */ 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826,
  /*  1741 */ 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009,
  /*  1758 */ 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508,
  /*  1773 */ 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155,
  /*  1789 */ 9155, 9155, 9155, 11877, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 11901, 11907, 19141, 11923, 14816,
  /*  1805 */ 9155, 19795, 9155, 14556, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 26934,
  /*  1821 */ 11366, 11657, 10521, 11997, 16552, 9155, 15637, 22070, 22070, 17329, 16915, 16915, 16915, 24767, 9155,
  /*  1836 */ 9155, 12311, 11942, 15551, 11997, 20099, 22397, 22070, 22070, 22070, 22849, 16915, 16915, 16916, 14427,
  /*  1851 */ 11939, 9155, 9155, 9430, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155,
  /*  1867 */ 21791, 11997, 17606, 20807, 22070, 14600, 26546, 16915, 12140, 9155, 22388, 10520, 18243, 22070, 11958,
  /*  1882 */ 16915, 18189, 24042, 17570, 11988, 22066, 16740, 16915, 19787, 18658, 23541, 12014, 20754, 15578, 9155,
  /*  1897 */ 14376, 12039, 12082, 15312, 12103, 26717, 17357, 15634, 20449, 12571, 12139, 14288, 24361, 17542, 17524,
  /*  1912 */ 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 15082, 10597, 9155,
  /*  1929 */ 9155, 17854, 12186, 14816, 9155, 19795, 9155, 11095, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915,
  /*  1945 */ 12228, 9155, 22784, 9155, 10513, 9155, 10521, 11997, 16552, 9155, 15637, 22070, 22070, 17329, 16915,
  /*  1960 */ 16915, 16915, 18931, 9155, 9155, 12311, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 22849,
  /*  1975 */ 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915,
  /*  1991 */ 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520,
  /*  2007 */ 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069,
  /*  2022 */ 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288,
  /*  2037 */ 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 11745, 9155, 16032, 9155,
  /*  2053 */ 9155, 9155, 10597, 12253, 12280, 12269, 12289, 14816, 9155, 19795, 9155, 14556, 25740, 9355, 10046, 9155,
  /*  2069 */ 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287,
  /*  2086 */ 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514,
  /*  2102 */ 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639,
  /*  2118 */ 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017,
  /*  2135 */ 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141,
  /*  2151 */ 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445,
  /*  2166 */ 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 12308, 9155, 16032, 9155, 9155,
  /*  2182 */ 23316, 10597, 12305, 9155, 24207, 12327, 9336, 9155, 19795, 9155, 13567, 9155, 10521, 20100, 9155, 9155,
  /*  2198 */ 15636, 16377, 16915, 12374, 9155, 22784, 9155, 23370, 9155, 10521, 11997, 16552, 9155, 15637, 22070,
  /*  2213 */ 22070, 17329, 16915, 16915, 16915, 15292, 9155, 9155, 26130, 12399, 9155, 11997, 20099, 22397, 22070,
  /*  2228 */ 22070, 22070, 22849, 16915, 16915, 19472, 12419, 9155, 9155, 10798, 9155, 11996, 16552, 22070, 22070,
  /*  2243 */ 22070, 12442, 16915, 16915, 21147, 14310, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 12490, 16915,
  /*  2258 */ 16915, 12140, 9155, 9155, 10520, 18243, 22070, 25496, 16915, 16916, 9155, 9155, 10521, 22066, 16740,
  /*  2273 */ 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358,
  /*  2288 */ 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  2304 */ 10575, 21395, 9155, 23177, 20839, 9155, 11855, 12529, 24960, 12557, 9155, 12595, 10647, 9155, 22035, 9155,
  /*  2320 */ 14556, 9155, 9355, 9364, 9155, 9155, 13374, 12704, 12865, 10235, 9080, 12647, 9154, 10513, 9155, 9355,
  /*  2336 */ 9172, 9225, 9210, 12698, 12720, 12736, 9784, 12869, 12762, 10221, 12896, 13878, 9155, 27474, 16357, 9380,
  /*  2352 */ 9397, 9446, 12778, 12746, 12818, 13078, 12930, 13302, 12857, 13175, 20058, 22764, 9549, 16705, 20078,
  /*  2367 */ 9584, 9600, 12997, 12829, 12790, 13204, 12845, 9799, 12885, 11170, 9695, 9723, 9754, 9826, 12916, 12955,
  /*  2383 */ 12983, 13013, 13108, 13029, 13045, 9918, 11433, 10017, 13069, 12967, 13094, 12939, 13138, 9993, 10009,
  /*  2398 */ 10033, 9769, 13346, 13455, 9810, 10099, 18509, 13191, 12802, 13232, 10191, 13273, 13289, 13318, 13153,
  /*  2413 */ 13166, 13334, 13353, 13372, 13356, 10206, 13390, 13426, 13441, 13216, 13122, 13471, 9155, 9155, 9155,
  /*  2428 */ 9155, 9155, 9155, 9155, 10575, 11033, 9155, 16032, 14509, 9155, 9155, 13513, 24986, 24994, 9155, 13553,
  /*  2444 */ 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114,
  /*  2460 */ 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155,
  /*  2477 */ 27474, 13590, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 10340, 10762, 22764, 9549,
  /*  2493 */ 22481, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 13618, 11261, 9695, 9723, 9754, 9826, 9842,
  /*  2510 */ 9858, 9880, 9738, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 13663, 9951, 9972, 9993, 10009, 10033,
  /*  2527 */ 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331,
  /*  2542 */ 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155,
  /*  2558 */ 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 27396, 13692, 13698, 23684, 13714, 14816, 9155,
  /*  2574 */ 19795, 9155, 14556, 9155, 9355, 9410, 9155, 9155, 10393, 9098, 10080, 13775, 9080, 9114, 9154, 10513,
  /*  2590 */ 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357,
  /*  2607 */ 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078,
  /*  2623 */ 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880,
  /*  2640 */ 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074,
  /*  2657 */ 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080,
  /*  2672 */ 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  2688 */ 13800, 26907, 9155, 16032, 9155, 9155, 9155, 10597, 13844, 13858, 9155, 13894, 13497, 9155, 19795, 9155,
  /*  2704 */ 14556, 9155, 9355, 13930, 9155, 9155, 10393, 9098, 10080, 13969, 9080, 9114, 9154, 10513, 9155, 9355,
  /*  2720 */ 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397,
  /*  2737 */ 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600,
  /*  2753 */ 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852,
  /*  2770 */ 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194,
  /*  2786 */ 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391,
  /*  2801 */ 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 13994,
  /*  2817 */ 27468, 9155, 16032, 9155, 9155, 9155, 10597, 14030, 14036, 27471, 14052, 14089, 9155, 19795, 9155, 14556,
  /*  2833 */ 9155, 9355, 14109, 9155, 9155, 10393, 9098, 10080, 9325, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225,
  /*  2850 */ 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498,
  /*  2867 */ 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655,
  /*  2883 */ 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896,
  /*  2900 */ 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099,
  /*  2916 */ 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240,
  /*  2931 */ 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14125, 9155, 9155,
  /*  2947 */ 16032, 14142, 9155, 9155, 10597, 20878, 14141, 21897, 14158, 14816, 9155, 19795, 9155, 14556, 27270, 9355,
  /*  2963 */ 9364, 9155, 9155, 10393, 9098, 10080, 14194, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092,
  /*  2980 */ 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530,
  /*  2997 */ 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303,
  /*  3013 */ 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433,
  /*  3030 */ 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115,
  /*  3046 */ 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676,
  /*  3061 */ 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155,
  /*  3077 */ 9155, 9155, 10597, 9155, 9155, 22668, 14219, 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155,
  /*  3093 */ 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287,
  /*  3110 */ 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514,
  /*  3126 */ 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639,
  /*  3142 */ 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017,
  /*  3159 */ 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141,
  /*  3175 */ 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445,
  /*  3190 */ 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155,
  /*  3207 */ 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636,
  /*  3223 */ 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186,
  /*  3239 */ 16915, 16915, 16915, 18931, 9155, 9155, 9155, 10805, 9155, 11997, 20099, 22397, 22070, 22070, 22070,
  /*  3254 */ 23420, 16915, 16915, 16916, 14305, 9155, 9155, 10798, 9155, 11996, 16552, 22070, 22070, 22070, 15280,
  /*  3269 */ 16915, 16915, 21147, 14310, 9155, 9155, 14328, 11997, 17606, 22070, 22070, 25195, 16915, 16915, 12140,
  /*  3284 */ 9155, 9155, 10520, 18243, 22070, 25496, 16915, 16916, 9155, 14888, 10521, 22066, 16740, 16915, 18929,
  /*  3299 */ 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449,
  /*  3314 */ 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155,
  /*  3330 */ 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155,
  /*  3346 */ 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552,
  /*  3362 */ 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 10805, 9155, 11997, 20099,
  /*  3378 */ 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 14305, 9155, 9155, 10798, 9155, 11996, 16552,
  /*  3393 */ 22070, 22070, 22070, 15280, 16915, 16915, 21147, 14310, 9155, 9155, 14349, 11997, 17606, 22070, 22070,
  /*  3408 */ 25195, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 25496, 16915, 16916, 9155, 9155, 10521,
  /*  3423 */ 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358,
  /*  3438 */ 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155,
  /*  3454 */ 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155,
  /*  3470 */ 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155,
  /*  3486 */ 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155,
  /*  3502 */ 15396, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 14305, 9155, 9155,
  /*  3517 */ 10798, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 21147, 14310, 9155, 9155, 14349,
  /*  3532 */ 11997, 17606, 22070, 22070, 25195, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 25496, 16915,
  /*  3547 */ 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282,
  /*  3562 */ 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156,
  /*  3577 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332,
  /*  3594 */ 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504,
  /*  3610 */ 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915,
  /*  3626 */ 18931, 9155, 9155, 9155, 10805, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915,
  /*  3641 */ 16916, 14305, 9155, 9155, 10798, 14348, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 21147,
  /*  3656 */ 14310, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 25195, 16915, 16915, 12140, 9155, 9155, 10520,
  /*  3671 */ 18243, 22070, 25496, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069,
  /*  3686 */ 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288,
  /*  3701 */ 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155,
  /*  3717 */ 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155, 19959, 9155, 10521, 20100, 9155,
  /*  3733 */ 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 19959, 9155, 10521, 11997, 16552, 9155, 22401, 22070,
  /*  3749 */ 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 10805, 9155, 11997, 20099, 22397, 22070,
  /*  3764 */ 22070, 22070, 23420, 16915, 16915, 16916, 14305, 9155, 9155, 10798, 9155, 11996, 16552, 22070, 22070,
  /*  3779 */ 22070, 15280, 16915, 16915, 21147, 14310, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 25195, 16915,
  /*  3794 */ 16915, 12140, 9155, 9155, 10520, 18243, 22070, 25496, 16915, 16916, 9155, 9155, 10521, 22066, 16740,
  /*  3809 */ 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358,
  /*  3824 */ 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  3840 */ 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155,
  /*  3856 */ 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521,
  /*  3872 */ 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155,
  /*  3888 */ 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996,
  /*  3904 */ 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070,
  /*  3919 */ 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155,
  /*  3934 */ 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323,
  /*  3949 */ 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155,
  /*  3964 */ 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153,
  /*  3980 */ 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 14614, 9155, 22784,
  /*  3996 */ 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155,
  /*  4012 */ 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 9155,
  /*  4028 */ 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155, 14349,
  /*  4044 */ 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915,
  /*  4059 */ 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282,
  /*  4074 */ 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156,
  /*  4089 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332,
  /*  4106 */ 12353, 20210, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504,
  /*  4122 */ 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915,
  /*  4138 */ 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916,
  /*  4154 */ 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155,
  /*  4170 */ 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070,
  /*  4185 */ 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578,
  /*  4200 */ 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542,
  /*  4215 */ 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14365,
  /*  4232 */ 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377,
  /*  4248 */ 16915, 12504, 9155, 22784, 9155, 9155, 13750, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186,
  /*  4263 */ 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420,
  /*  4279 */ 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915,
  /*  4295 */ 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520,
  /*  4311 */ 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069,
  /*  4326 */ 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288,
  /*  4341 */ 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155,
  /*  4357 */ 9155, 9155, 14271, 25406, 15525, 14392, 14405, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155,
  /*  4373 */ 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070,
  /*  4389 */ 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070,
  /*  4405 */ 22070, 23420, 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280,
  /*  4421 */ 16915, 16915, 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140,
  /*  4436 */ 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155,
  /*  4452 */ 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638,
  /*  4467 */ 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155,
  /*  4483 */ 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155, 10521,
  /*  4499 */ 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155,
  /*  4515 */ 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397,
  /*  4531 */ 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070,
  /*  4547 */ 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915,
  /*  4562 */ 16915, 12140, 9155, 17004, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740,
  /*  4577 */ 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358,
  /*  4592 */ 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  4608 */ 14421, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 9155, 19795, 9155,
  /*  4624 */ 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784, 9155, 9155, 9155, 10521,
  /*  4640 */ 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155,
  /*  4656 */ 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996,
  /*  4672 */ 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155, 14349, 11997, 17606, 22070,
  /*  4687 */ 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155,
  /*  4702 */ 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323,
  /*  4717 */ 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155,
  /*  4732 */ 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 14443, 14457, 21186, 14465,
  /*  4748 */ 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114,
  /*  4764 */ 9154, 10513, 10791, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 11521, 13878, 9155,
  /*  4781 */ 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549,
  /*  4797 */ 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842,
  /*  4814 */ 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033,
  /*  4831 */ 9187, 10074, 9194, 11693, 14481, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331,
  /*  4846 */ 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155,
  /*  4862 */ 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 9155, 9155, 9155, 26953, 14816, 9155,
  /*  4878 */ 19795, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156, 9080, 9114, 9154, 10513,
  /*  4894 */ 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357,
  /*  4911 */ 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078,
  /*  4927 */ 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880,
  /*  4944 */ 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074,
  /*  4961 */ 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080,
  /*  4976 */ 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  4992 */ 14497, 14525, 9155, 16032, 9155, 9155, 9155, 14543, 9560, 9568, 9155, 14572, 14639, 9155, 19795, 9155,
  /*  5008 */ 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 27335, 9080, 9114, 9154, 10513, 9155, 9355, 9172,
  /*  5025 */ 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446,
  /*  5042 */ 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635,
  /*  5058 */ 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874,
  /*  5075 */ 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693,
  /*  5091 */ 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083,
  /*  5106 */ 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14665, 14687,
  /*  5122 */ 9155, 16032, 9155, 9155, 9155, 10597, 9155, 9155, 26628, 14705, 14769, 9155, 19795, 9155, 14556, 9155,
  /*  5138 */ 14100, 9364, 9155, 9155, 10393, 9098, 10080, 14804, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210,
  /*  5155 */ 9092, 9264, 9287, 9310, 9248, 9271, 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011,
  /*  5172 */ 9530, 27514, 27505, 11014, 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675,
  /*  5188 */ 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918,
  /*  5205 */ 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509,
  /*  5221 */ 10115, 10141, 10125, 10191, 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409,
  /*  5236 */ 13676, 10445, 10315, 10469, 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 14851, 16032,
  /*  5252 */ 27244, 9155, 14868, 14904, 14918, 14932, 14946, 14959, 24150, 14975, 19795, 9155, 14991, 15027, 15062,
  /*  5267 */ 17598, 15098, 15112, 15128, 15162, 15191, 25209, 9155, 22784, 13908, 9155, 25127, 16290, 11997, 15207,
  /*  5282 */ 9155, 26185, 22070, 22070, 15231, 16915, 16915, 22262, 18931, 9346, 25412, 9155, 10805, 9155, 25616,
  /*  5297 */ 27084, 15267, 17174, 22070, 18297, 15328, 15354, 16915, 19665, 15373, 9155, 9155, 15389, 9155, 15412,
  /*  5312 */ 9138, 16583, 19455, 22070, 15280, 15450, 19116, 21147, 15473, 15500, 22026, 15521, 11997, 17606, 22070,
  /*  5327 */ 27002, 25195, 16915, 22342, 24496, 15541, 9155, 10520, 18243, 22519, 25496, 16915, 15576, 9155, 9155,
  /*  5342 */ 10521, 15598, 23030, 21691, 15627, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323,
  /*  5357 */ 12358, 15654, 12358, 15699, 20449, 15732, 26423, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155,
  /*  5372 */ 9155, 9155, 9155, 9155, 14249, 9155, 15754, 16032, 9155, 9155, 9155, 15774, 12623, 14332, 12353, 18153,
  /*  5388 */ 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784,
  /*  5404 */ 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931, 9155,
  /*  5420 */ 9155, 15814, 15801, 20583, 11997, 24589, 22397, 22070, 22070, 16324, 23420, 16915, 16915, 16160, 14305,
  /*  5435 */ 9155, 9155, 10798, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 21147, 14310, 9155,
  /*  5450 */ 12466, 14349, 15837, 15855, 22070, 22070, 25195, 15884, 16915, 12140, 9155, 9155, 10520, 18243, 22070,
  /*  5465 */ 25496, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578,
  /*  5480 */ 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15434, 15903, 15638, 15582, 14288, 24361, 17542,
  /*  5495 */ 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 13247, 16032, 9155, 9155, 9156,
  /*  5511 */ 15939, 15953, 15967, 15981, 15994, 18891, 9155, 13485, 9155, 16010, 9155, 10521, 20100, 9155, 9155, 15636,
  /*  5527 */ 17308, 23600, 12504, 13574, 22784, 16029, 16048, 10714, 16065, 16109, 21589, 9155, 16129, 26795, 22070,
  /*  5542 */ 22877, 16145, 16915, 16915, 18931, 16183, 10978, 9155, 10805, 13257, 10929, 20099, 22397, 25158, 16202,
  /*  5557 */ 16220, 23420, 16238, 16759, 16916, 14305, 9155, 9155, 19167, 9155, 11996, 16552, 22070, 22070, 21630,
  /*  5572 */ 15280, 16915, 16915, 17913, 14310, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 25195, 16915, 16915,
  /*  5587 */ 12140, 9155, 9155, 10520, 16315, 16093, 25496, 22979, 16916, 16348, 9155, 19317, 16373, 16393, 20633,
  /*  5602 */ 18929, 9155, 23541, 22069, 16415, 24827, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 16438,
  /*  5617 */ 17515, 15638, 15582, 14288, 24361, 17542, 14753, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249,
  /*  5633 */ 9155, 17431, 16032, 9155, 16467, 9155, 16483, 16497, 16505, 16521, 16534, 18891, 9155, 19795, 9155, 9155,
  /*  5649 */ 9155, 10521, 16550, 10170, 10165, 16568, 16377, 21506, 12504, 16934, 16617, 11861, 9155, 9155, 12513,
  /*  5664 */ 16666, 16696, 16721, 17461, 16737, 21341, 23754, 25979, 15887, 16756, 18931, 9155, 15004, 20685, 10805,
  /*  5679 */ 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 16775, 9155, 16811, 10798,
  /*  5694 */ 9155, 11996, 16552, 16594, 22070, 22071, 16847, 16875, 16915, 12123, 14310, 9155, 9155, 16795, 11997,
  /*  5709 */ 17131, 22070, 16894, 25195, 16914, 16422, 12140, 9155, 16932, 23342, 18243, 16950, 25496, 18842, 16980,
  /*  5724 */ 9155, 9155, 10521, 22066, 16740, 16915, 18929, 24857, 23541, 22069, 18328, 21697, 9155, 14282, 14289,
  /*  5739 */ 15580, 22323, 12358, 19703, 21823, 26154, 17533, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155,
  /*  5754 */ 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 22362, 16032, 27561, 17000, 13945, 17020, 17034, 17048,
  /*  5770 */ 17062, 17075, 18891, 22472, 16268, 17091, 19959, 13728, 17107, 17123, 17147, 17196, 17984, 17223, 17252,
  /*  5785 */ 12504, 10735, 17282, 20785, 14066, 14172, 10521, 11997, 19607, 26944, 22401, 17324, 17345, 22174, 22856,
  /*  5800 */ 17364, 27032, 17380, 17396, 17447, 17484, 17566, 14073, 17586, 17625, 17691, 18057, 19851, 24301, 17707,
  /*  5815 */ 20913, 17736, 17776, 14305, 17848, 15505, 15821, 10058, 21581, 15074, 15146, 22070, 17870, 17889, 18796,
  /*  5830 */ 16878, 20013, 17929, 19373, 17969, 18000, 22819, 17606, 18020, 18036, 25195, 26890, 24653, 20722, 23523,
  /*  5845 */ 23678, 10520, 18073, 25645, 25496, 21130, 16916, 9155, 18089, 23505, 18124, 18140, 18169, 18205, 9155,
  /*  5860 */ 18234, 18276, 12579, 25904, 9460, 14282, 15666, 23158, 18313, 24369, 19274, 21083, 15046, 17760, 25873,
  /*  5875 */ 18351, 14288, 24327, 18374, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155,
  /*  5891 */ 16032, 18410, 18412, 18398, 18430, 18444, 18452, 18468, 18481, 18891, 9155, 18497, 9155, 9155, 9155,
  /*  5906 */ 10521, 20100, 9155, 9155, 15484, 16377, 22626, 12504, 24048, 22784, 18525, 9155, 26481, 19215, 11997,
  /*  5921 */ 16552, 9155, 14586, 22070, 22070, 24186, 18807, 16915, 16915, 18931, 9155, 9155, 9155, 10805, 9155, 11997,
  /*  5937 */ 20099, 22397, 22070, 22070, 25779, 23420, 16915, 16915, 18544, 14305, 9155, 9155, 10798, 9155, 11996,
  /*  5952 */ 16552, 22070, 22070, 22070, 15280, 16915, 16915, 21147, 14310, 9155, 9155, 15758, 16113, 17606, 22070,
  /*  5967 */ 25579, 25195, 16915, 26589, 12140, 9155, 9155, 10520, 18243, 22070, 25496, 16915, 16916, 9155, 9155,
  /*  5982 */ 10521, 22066, 16740, 16915, 12087, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323,
  /*  5997 */ 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 17720, 17542, 21737, 12156, 9155, 9155, 9155,
  /*  6012 */ 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 14009, 9155, 18564, 18578, 18586, 18602, 18615,
  /*  6028 */ 18891, 9155, 19795, 9155, 23900, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 17266, 9155, 22784,
  /*  6044 */ 9155, 9155, 12426, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915, 18931,
  /*  6059 */ 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 18631, 16915, 16915, 16916, 9155,
  /*  6075 */ 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155,
  /*  6091 */ 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 18654, 10520, 18243, 22070, 26191,
  /*  6106 */ 16915, 16916, 14623, 23733, 24683, 22066, 16740, 16915, 18929, 9155, 18674, 18699, 23961, 18715, 25298,
  /*  6121 */ 18740, 18781, 24005, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 25843, 18830,
  /*  6136 */ 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406,
  /*  6153 */ 14332, 12353, 18153, 18891, 9155, 22752, 9155, 9155, 23308, 10521, 25623, 9155, 9155, 17495, 20814, 18865,
  /*  6169 */ 18882, 9155, 9064, 10422, 18907, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 16222, 24186, 16915,
  /*  6184 */ 16915, 15675, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915,
  /*  6200 */ 16915, 16916, 22598, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915,
  /*  6215 */ 16916, 9155, 10809, 9155, 14349, 11997, 17606, 22070, 25714, 14600, 16915, 16915, 18927, 9155, 9155,
  /*  6230 */ 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541,
  /*  6245 */ 22069, 12357, 15578, 9155, 14282, 20904, 18638, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582,
  /*  6260 */ 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9381, 18947,
  /*  6276 */ 16013, 12170, 17815, 18989, 19003, 19017, 19031, 19044, 18891, 9155, 14835, 9155, 9155, 10603, 21861,
  /*  6291 */ 20100, 19065, 19060, 20796, 16377, 19083, 12504, 9155, 22784, 18414, 9155, 9155, 10521, 27075, 21423,
  /*  6306 */ 15560, 17296, 23880, 22070, 19101, 20628, 25974, 15251, 19137, 9707, 22537, 19157, 19183, 19200, 11997,
  /*  6321 */ 22304, 22397, 22070, 22070, 19245, 23420, 16915, 16915, 19261, 9155, 9155, 21891, 19309, 9155, 11996,
  /*  6336 */ 16552, 19333, 22070, 22070, 15611, 16915, 16915, 16916, 9155, 19353, 19389, 19433, 11997, 17606, 22961,
  /*  6351 */ 22070, 14600, 16915, 19471, 16167, 9155, 9155, 22291, 19488, 26298, 19532, 19548, 21661, 9155, 9155,
  /*  6366 */ 19593, 19631, 17505, 22256, 19699, 19719, 19738, 22069, 12357, 20857, 9155, 14282, 14289, 15580, 22323,
  /*  6381 */ 12358, 15631, 19763, 15634, 20449, 15638, 15582, 19811, 24361, 17542, 17524, 19827, 9155, 9155, 9155,
  /*  6396 */ 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 14883, 23842, 19867, 19881, 19889, 19905, 19918,
  /*  6412 */ 18891, 19577, 19795, 25341, 19934, 9155, 13814, 20100, 9155, 17675, 19982, 16377, 20010, 11972, 18973,
  /*  6427 */ 22784, 9155, 21995, 18972, 10916, 11998, 16552, 9155, 14719, 16086, 16332, 15716, 23648, 16915, 20029,
  /*  6442 */ 20054, 20074, 9155, 11799, 9155, 9155, 20094, 20099, 22397, 20116, 22070, 22070, 20132, 20197, 16915,
  /*  6457 */ 16916, 9155, 18099, 9155, 20226, 9155, 11996, 20257, 22070, 25433, 22145, 15280, 16915, 25530, 19778,
  /*  6472 */ 14671, 9155, 9155, 14349, 20281, 17606, 20302, 22070, 14600, 20181, 16915, 25909, 9155, 10659, 20321,
  /*  6487 */ 20356, 22070, 26191, 20403, 16916, 13914, 9155, 20421, 22066, 16740, 16915, 18929, 24141, 23541, 22069,
  /*  6502 */ 20445, 18814, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 12341, 20465, 20490,
  /*  6517 */ 24361, 24523, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 17832, 9155,
  /*  6533 */ 17827, 9155, 20517, 20531, 20537, 20553, 20566, 18891, 11664, 19795, 9155, 20582, 9155, 12609, 20100,
  /*  6548 */ 9155, 11667, 20599, 16377, 20649, 12504, 9155, 20671, 16049, 24772, 9155, 10521, 11997, 16552, 9155,
  /*  6563 */ 16631, 22070, 16644, 20707, 23782, 19085, 23427, 21478, 25749, 9155, 9155, 9155, 9155, 11997, 20099,
  /*  6578 */ 22397, 20744, 15708, 22070, 24270, 20173, 15246, 16916, 9155, 20770, 9155, 22662, 20830, 11996, 16552,
  /*  6593 */ 21608, 22070, 18051, 14732, 15457, 16915, 20855, 9155, 9155, 9155, 14349, 11997, 17606, 22070, 22070,
  /*  6608 */ 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 20873, 9155, 10521,
  /*  6623 */ 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 20894, 20929,
  /*  6638 */ 20951, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155,
  /*  6654 */ 9155, 9155, 14249, 9155, 9155, 12212, 9155, 12200, 23281, 20974, 20988, 20996, 21012, 21025, 18891, 10581,
  /*  6670 */ 19795, 17803, 9155, 14689, 12661, 21041, 17791, 21052, 21068, 21099, 21115, 12504, 26262, 11751, 9155,
  /*  6685 */ 14852, 22499, 10521, 11997, 16552, 14255, 22401, 18252, 22070, 24186, 16915, 21146, 16915, 18931, 21163,
  /*  6700 */ 21180, 9155, 14779, 9155, 21202, 20099, 22397, 21223, 22070, 22070, 23420, 21243, 16915, 16916, 9155,
  /*  6715 */ 9155, 13784, 9155, 21260, 21288, 19229, 21307, 22070, 21326, 15868, 16915, 26405, 20387, 13978, 21367,
  /*  6730 */ 21391, 14203, 21411, 13828, 21439, 18291, 14600, 22203, 21494, 12140, 21528, 21556, 21572, 18243, 21605,
  /*  6745 */ 26191, 25810, 16916, 15923, 9155, 9128, 21624, 21646, 18335, 19674, 9155, 25394, 19285, 21677, 14744,
  /*  6760 */ 10375, 22695, 15738, 15580, 22323, 21713, 19516, 18382, 21753, 21778, 15638, 15582, 14288, 17236, 21815,
  /*  6775 */ 17524, 21839, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 21877, 9155, 13953, 10859,
  /*  6791 */ 21913, 21927, 21935, 21951, 21964, 18108, 21980, 19795, 23272, 9155, 22016, 22051, 22087, 11446, 22122,
  /*  6806 */ 22161, 22190, 22242, 12504, 9155, 22784, 11232, 9155, 22278, 10521, 20333, 16552, 9155, 22401, 25165,
  /*  6821 */ 24453, 12023, 16915, 22339, 12118, 22358, 9155, 12383, 14649, 21853, 22378, 11997, 23564, 22417, 22070,
  /*  6836 */ 24181, 21310, 23420, 16915, 22443, 20935, 22461, 10429, 22497, 9155, 9155, 11996, 16552, 22070, 22515,
  /*  6851 */ 22070, 15280, 21244, 16915, 16916, 9155, 27279, 26235, 14349, 11997, 17606, 22070, 22070, 19502, 16915,
  /*  6866 */ 16915, 12140, 22097, 9155, 10520, 16076, 15138, 17180, 26821, 16916, 22535, 9155, 23390, 22553, 16740,
  /*  6881 */ 22578, 18929, 9155, 23541, 22069, 12357, 15578, 22596, 19447, 26569, 18548, 25096, 17550, 20728, 22614,
  /*  6896 */ 15634, 20449, 15638, 15582, 14288, 17749, 16859, 17524, 22648, 9155, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  6912 */ 14249, 9155, 9155, 16032, 9155, 22106, 25944, 22684, 25406, 18004, 22711, 22724, 18891, 9155, 22740, 9155,
  /*  6928 */ 9155, 9155, 10521, 20100, 9155, 22780, 15636, 16377, 16915, 12504, 19417, 22784, 9155, 22800, 27402,
  /*  6943 */ 10521, 22816, 16552, 11124, 22401, 22835, 22872, 11566, 22632, 20501, 18866, 26462, 9155, 9155, 22893,
  /*  6958 */ 23129, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 22910, 9155, 22894,
  /*  6973 */ 12900, 22934, 20429, 16299, 22070, 22955, 22070, 20369, 22445, 22977, 16916, 23859, 9155, 9155, 14349,
  /*  6988 */ 11997, 17606, 22070, 22995, 21453, 16915, 18181, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915,
  /*  7003 */ 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282,
  /*  7018 */ 14289, 21512, 23013, 12358, 18358, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156,
  /*  7033 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332,
  /*  7050 */ 12353, 18153, 18891, 9155, 19795, 9155, 26385, 9155, 20265, 20100, 23046, 23051, 23067, 26801, 23095,
  /*  7065 */ 23114, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915,
  /*  7081 */ 16915, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23150, 16915, 16915,
  /*  7097 */ 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155,
  /*  7113 */ 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243,
  /*  7128 */ 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 12682, 16399,
  /*  7143 */ 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361,
  /*  7158 */ 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 17953, 23174, 17949,
  /*  7174 */ 9155, 23193, 23207, 23215, 23231, 23244, 18891, 9155, 23260, 23297, 16826, 17411, 21540, 23332, 9054,
  /*  7189 */ 23358, 23406, 23443, 23991, 12504, 9155, 22784, 23459, 23495, 23521, 23539, 23557, 16552, 9155, 22137,
  /*  7204 */ 23023, 25785, 24186, 23580, 16915, 23596, 18931, 9155, 9155, 23616, 11771, 21164, 11997, 17664, 12237,
  /*  7219 */ 17873, 22070, 21762, 23636, 20655, 16915, 16253, 9155, 11527, 23664, 23700, 9155, 24691, 23720, 22070,
  /*  7234 */ 22562, 23749, 23770, 16915, 23804, 22580, 23382, 24240, 23473, 12541, 11997, 17606, 23820, 22070, 14600,
  /*  7249 */ 25670, 16915, 25818, 9155, 23839, 10520, 18243, 22070, 21351, 16915, 19121, 9155, 23858, 10521, 23875,
  /*  7264 */ 23823, 16915, 18929, 23896, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 16984, 25322, 23916, 15631,
  /*  7279 */ 12358, 25568, 23932, 23953, 15582, 14288, 15175, 23977, 17901, 12156, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  7295 */ 9155, 14249, 9155, 9155, 26271, 9155, 21272, 24028, 24064, 24078, 24086, 24102, 24115, 20474, 9155, 19795,
  /*  7311 */ 9155, 22315, 9155, 17653, 24131, 17944, 17640, 24166, 16898, 20381, 12504, 24202, 22784, 9155, 9155, 9155,
  /*  7327 */ 24223, 10936, 26365, 24239, 24256, 24286, 22070, 24186, 24343, 12057, 16915, 18931, 24385, 19966, 24406,
  /*  7342 */ 9155, 9155, 11997, 20099, 11556, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 10244, 9155,
  /*  7357 */ 26212, 18218, 11996, 24424, 24448, 19337, 24469, 24314, 16915, 25538, 24512, 24539, 9155, 9155, 14349,
  /*  7372 */ 25364, 12675, 22997, 24558, 14600, 16915, 20162, 12140, 14014, 9155, 24579, 18243, 24605, 24626, 18849,
  /*  7387 */ 21467, 9155, 20691, 10521, 22066, 16740, 16915, 18929, 22000, 24669, 22069, 24707, 15338, 24727, 14282,
  /*  7402 */ 14289, 15580, 24432, 24753, 15631, 12358, 13759, 24788, 20958, 22215, 24809, 24361, 17542, 17524, 12156,
  /*  7417 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 11885, 9155, 23620, 24843, 24879, 24893,
  /*  7433 */ 24907, 24921, 24934, 18891, 24542, 13053, 23704, 24950, 9423, 22226, 24976, 25010, 27304, 25032, 19994,
  /*  7448 */ 24640, 12504, 13872, 20241, 9155, 26210, 25048, 25064, 20340, 25088, 25112, 25148, 16204, 25181, 24186,
  /*  7463 */ 25225, 12066, 19656, 24012, 18961, 19184, 9155, 9155, 15304, 25245, 21207, 25261, 24563, 25708, 19293,
  /*  7478 */ 24483, 15683, 25277, 26451, 9155, 25297, 25314, 10175, 25338, 25357, 25380, 17468, 25428, 16601, 19644,
  /*  7493 */ 26884, 25449, 21726, 19366, 9155, 19947, 14349, 25466, 16680, 27438, 25490, 16964, 20147, 25512, 23937,
  /*  7508 */ 25554, 9155, 25602, 18683, 25639, 26977, 25661, 23098, 24408, 27050, 10521, 25694, 26320, 19560, 25730,
  /*  7523 */ 9155, 21799, 25765, 25801, 25834, 25859, 27111, 20614, 24353, 22323, 12358, 15631, 12358, 15634, 24711,
  /*  7538 */ 25889, 25678, 25925, 25960, 17542, 17524, 25995, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155,
  /*  7554 */ 9155, 16032, 9155, 19615, 9155, 26033, 26047, 26053, 26069, 26082, 18891, 9155, 12474, 14527, 9155, 9155,
  /*  7570 */ 10521, 20100, 9155, 9155, 26098, 16377, 26852, 12504, 26127, 22784, 9155, 19067, 26146, 22918, 11997,
  /*  7585 */ 16552, 9155, 17161, 22070, 22070, 16650, 24821, 16915, 16915, 26170, 11065, 26207, 9155, 15011, 26228,
  /*  7600 */ 21291, 26251, 19841, 18260, 26287, 26314, 23420, 18765, 20038, 16916, 9155, 26336, 9155, 9155, 9155,
  /*  7615 */ 26357, 16552, 24610, 22070, 22070, 18753, 25521, 16915, 16916, 26381, 9155, 9155, 14349, 11997, 17606,
  /*  7630 */ 22070, 22070, 14600, 16915, 16915, 24793, 9155, 13410, 10520, 19747, 22070, 26191, 26401, 16916, 9155,
  /*  7645 */ 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 15785, 14289, 26421,
  /*  7660 */ 22323, 12358, 15631, 12358, 15634, 20449, 17609, 25935, 14288, 24361, 18724, 26439, 12156, 9155, 9155,
  /*  7675 */ 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 26478, 26497, 14271, 15426, 24390, 26513,
  /*  7691 */ 26526, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 17207, 16377, 26542, 12504, 9155,
  /*  7707 */ 22784, 9155, 9155, 9155, 11807, 11997, 25474, 9155, 14233, 22070, 22070, 24186, 12048, 16915, 16915,
  /*  7722 */ 18931, 9155, 9155, 25132, 9155, 9155, 15839, 20286, 22397, 22070, 26562, 22070, 23420, 16915, 26585,
  /*  7737 */ 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155,
  /*  7753 */ 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 26605, 10520, 18243,
  /*  7768 */ 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357,
  /*  7783 */ 15578, 26623, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361,
  /*  7798 */ 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 27206, 9155, 15038,
  /*  7814 */ 14788, 26644, 26658, 26666, 26682, 26695, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155,
  /*  7830 */ 15636, 23079, 25229, 12504, 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070,
  /*  7846 */ 24186, 16915, 16915, 16915, 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070,
  /*  7862 */ 23420, 16915, 16915, 16916, 9155, 9155, 9155, 16788, 9155, 11996, 16552, 22070, 22070, 22070, 15280,
  /*  7877 */ 16915, 16915, 16916, 9155, 17425, 9155, 14349, 11997, 17606, 25586, 21227, 14600, 25450, 16915, 26711,
  /*  7892 */ 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155,
  /*  7908 */ 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638,
  /*  7923 */ 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 14421, 9155, 9155,
  /*  7939 */ 16032, 9155, 9155, 9155, 14271, 25406, 26341, 26733, 26746, 18891, 9155, 15215, 9155, 9155, 27581, 21375,
  /*  7955 */ 20100, 26762, 26767, 26783, 16377, 26817, 12504, 9155, 22784, 14826, 9482, 9155, 10521, 11997, 16552,
  /*  7970 */ 9155, 22401, 22070, 22070, 26837, 16915, 16915, 25281, 12454, 9155, 9155, 9155, 9155, 9155, 11997, 20099,
  /*  7986 */ 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916, 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070,
  /*  8002 */ 22070, 22070, 26872, 16915, 16915, 16916, 19399, 9155, 9155, 14349, 11997, 17606, 22070, 22070, 14600,
  /*  8017 */ 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916, 9155, 9155, 10521, 22066,
  /*  8032 */ 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289, 15580, 22323, 12358, 15631,
  /*  8047 */ 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155,
  /*  8063 */ 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 14271, 25406, 14332, 12353, 18153, 18891, 26906, 19795,
  /*  8079 */ 9155, 11102, 9155, 10521, 20100, 9155, 9155, 27430, 22427, 15357, 12504, 9155, 22784, 9155, 9155, 9155,
  /*  8095 */ 10521, 11997, 16552, 9155, 22401, 22070, 22070, 26111, 16915, 16915, 20405, 18931, 13403, 9155, 9155,
  /*  8110 */ 9155, 12403, 11997, 26923, 22397, 22070, 20305, 22070, 23420, 16915, 23788, 16916, 9155, 15916, 9155,
  /*  8125 */ 9155, 9155, 25072, 16552, 26969, 26993, 22070, 16451, 26856, 16915, 16916, 9155, 9155, 9155, 14349, 11997,
  /*  8141 */ 17606, 22070, 22070, 27018, 16915, 16915, 19569, 9155, 9155, 10520, 18243, 22070, 26191, 16915, 16916,
  /*  8156 */ 27048, 9155, 27066, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282, 14289,
  /*  8171 */ 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156, 9155,
  /*  8186 */ 9155, 9155, 9155, 9155, 9155, 9155, 14249, 9155, 9155, 16032, 9155, 9155, 9155, 27100, 25406, 14332,
  /*  8202 */ 12353, 18153, 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504,
  /*  8218 */ 9155, 22784, 9155, 9155, 9155, 10521, 11997, 16552, 9155, 22401, 22070, 22070, 24186, 16915, 16915, 16915,
  /*  8234 */ 18931, 9155, 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 23420, 16915, 16915, 16916,
  /*  8250 */ 9155, 9155, 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155,
  /*  8266 */ 9155, 14349, 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070,
  /*  8281 */ 26191, 16915, 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578,
  /*  8296 */ 9155, 14282, 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542,
  /*  8311 */ 17524, 12156, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 23134, 27127, 27128, 27172,
  /*  8327 */ 27144, 27184, 27159, 27200, 27222, 27260, 9155, 19795, 9155, 10889, 9155, 9355, 9364, 9155, 9155, 10393,
  /*  8343 */ 10453, 10080, 27295, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 27320, 9248,
  /*  8360 */ 9271, 9294, 10368, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014,
  /*  8376 */ 9533, 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679,
  /*  8392 */ 11170, 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956,
  /*  8409 */ 9977, 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191,
  /*  8425 */ 10260, 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469,
  /*  8440 */ 10537, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 23479, 9155, 10597,
  /*  8456 */ 27360, 27366, 9155, 27382, 14816, 9155, 19795, 9155, 14556, 9155, 9355, 9364, 25016, 9155, 10393, 9098,
  /*  8472 */ 10080, 10156, 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 9310, 9248, 9271,
  /*  8489 */ 9294, 9510, 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533,
  /*  8505 */ 27517, 20058, 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170,
  /*  8521 */ 9695, 9723, 9754, 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977,
  /*  8538 */ 9951, 9972, 9993, 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260,
  /*  8554 */ 10290, 10274, 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537,
  /*  8569 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 27418, 9611, 9619,
  /*  8586 */ 9155, 27454, 14816, 9155, 19795, 9155, 13647, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 10156,
  /*  8602 */ 9080, 9114, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 27490, 9248, 9271, 9294, 9510,
  /*  8619 */ 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058,
  /*  8635 */ 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754,
  /*  8652 */ 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993,
  /*  8669 */ 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274,
  /*  8684 */ 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155,
  /*  8699 */ 9155, 9155, 9155, 9155, 9155, 10575, 9155, 9155, 16032, 9155, 9155, 9155, 10597, 9155, 9155, 9155, 11184,
  /*  8716 */ 18891, 9155, 19795, 9155, 9155, 9155, 10521, 20100, 9155, 9155, 15636, 16377, 16915, 12504, 9155, 22784,
  /*  8732 */ 9155, 9155, 9155, 10521, 11997, 16552, 9155, 15637, 22070, 22070, 17329, 16915, 16915, 16915, 18931, 9155,
  /*  8748 */ 9155, 9155, 9155, 9155, 11997, 20099, 22397, 22070, 22070, 22070, 22849, 16915, 16915, 16916, 9155, 9155,
  /*  8764 */ 9155, 9155, 9155, 11996, 16552, 22070, 22070, 22070, 15280, 16915, 16915, 16916, 9155, 9155, 9155, 14349,
  /*  8780 */ 11997, 17606, 22070, 22070, 14600, 16915, 16915, 12140, 9155, 9155, 10520, 18243, 22070, 26191, 16915,
  /*  8795 */ 16916, 9155, 9155, 10521, 22066, 16740, 16915, 18929, 9155, 23541, 22069, 12357, 15578, 9155, 14282,
  /*  8810 */ 14289, 15580, 22323, 12358, 15631, 12358, 15634, 20449, 15638, 15582, 14288, 24361, 17542, 17524, 12156,
  /*  8825 */ 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 9155, 26606, 9155, 24863, 27533, 27539,
  /*  8842 */ 26607, 27555, 14555, 9155, 9155, 9155, 14556, 9155, 9355, 9364, 9155, 9155, 10393, 9098, 10080, 9512,
  /*  8858 */ 9080, 27577, 9154, 10513, 9155, 9355, 9172, 9225, 9210, 9092, 9264, 9287, 27320, 9248, 9271, 9294, 9510,
  /*  8875 */ 13878, 9155, 27474, 16357, 9380, 9397, 9446, 9498, 11011, 9530, 27514, 27505, 11014, 9533, 27517, 20058,
  /*  8891 */ 22764, 9549, 16705, 20078, 9584, 9600, 9635, 9655, 9675, 10303, 9639, 9659, 9679, 11170, 9695, 9723, 9754,
  /*  8908 */ 9826, 9842, 9858, 9880, 9902, 9852, 9874, 9896, 9918, 11433, 10017, 9942, 9956, 9977, 9951, 9972, 9993,
  /*  8925 */ 10009, 10033, 9187, 10074, 9194, 11693, 10099, 18509, 10115, 10141, 10125, 10191, 10260, 10290, 10274,
  /*  8940 */ 11508, 10331, 10356, 10080, 10391, 10083, 9240, 10409, 13676, 10445, 10315, 10469, 10537, 9155, 9155,
  /*  8955 */ 9155, 9155, 9155, 9155, 9155, 0, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 37059, 37059, 37059, 37059, 39110,
  /*  8977 */ 37059, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 234,
  /*  8992 */ 39110, 39110, 0, 0, 39110, 39110, 37059, 37059, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110,
  /*  9008 */ 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 0, 0, 22528, 24576, 39110, 39110, 39110, 20480,
  /*  9024 */ 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 39110, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0,
  /*  9045 */ 0, 37059, 0, 0, 39110, 0, 528384, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 551, 553, 0, 0, 0, 0, 0, 0, 0, 0, 708,
  /*  9073 */ 0, 0, 0, 234, 234, 0, 0, 690176, 0, 0, 702464, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 796672, 0, 0, 557056,
  /*  9099 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 0, 557056, 557056,
  /*  9113 */ 557056, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 0, 0, 0, 0, 0, 0, 1605, 0, 0, 1608, 298, 298,
  /*  9140 */ 298, 298, 298, 298, 298, 298, 1235, 0, 0, 1237, 0, 0, 0, 1235, 694272, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  9167 */ 0, 0, 0, 0, 214, 555008, 555008, 761856, 555008, 555008, 780288, 555008, 788480, 555008, 555008, 806912,
  /*  9183 */ 813056, 819200, 555008, 833536, 555008, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 716800, 731136,
  /*  9198 */ 733184, 557056, 557056, 749568, 557056, 557056, 557056, 557056, 557056, 557056, 854016, 557056, 0, 806912,
  /*  9212 */ 813056, 819200, 0, 833536, 849920, 907264, 0, 0, 0, 0, 849920, 0, 813056, 849920, 555008, 555008, 555008,
  /*  9229 */ 907264, 555008, 555008, 555008, 0, 0, 0, 761856, 0, 780288, 788480, 0, 0, 0, 0, 0, 557056, 557056, 747520,
  /*  9248 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 761856,
  /*  9261 */ 557056, 557056, 557056, 557056, 557056, 557056, 761856, 557056, 557056, 557056, 557056, 780288, 557056,
  /*  9274 */ 788480, 557056, 792576, 557056, 557056, 806912, 557056, 813056, 819200, 557056, 557056, 557056, 833536,
  /*  9287 */ 557056, 813056, 819200, 557056, 557056, 557056, 833536, 557056, 557056, 849920, 557056, 557056, 557056,
  /*  9300 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056,
  /*  9313 */ 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056, 620, 0, 0, 623, 557056, 557056, 0, 0, 0,
  /*  9330 */ 0, 0, 2, 0, 88064, 147456, 0, 0, 0, 0, 0, 0, 0, 200, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 949, 0, 0, 0, 0, 0,
  /*  9360 */ 0, 0, 0, 0, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 0, 0, 0, 0, 0,
  /*  9379 */ 0, 665600, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 686080, 555008, 555008, 555008, 555008,
  /*  9402 */ 555008, 555008, 743424, 555008, 555008, 759808, 555008, 776192, 555008, 555008, 555008, 555008, 555008,
  /*  9415 */ 555008, 555008, 555008, 555008, 555008, 0, 0, 118784, 0, 0, 0, 0, 0, 0, 485, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /*  9440 */ 1211, 0, 0, 0, 0, 0, 555008, 817152, 825344, 555008, 555008, 555008, 555008, 555008, 555008, 555008,
  /*  9456 */ 555008, 686080, 0, 743424, 0, 0, 0, 0, 0, 0, 1730, 1731, 0, 0, 0, 1735, 0, 0, 0, 0, 0, 0, 0, 528384,
  /*  9480 */ 10653, 202, 0, 0, 0, 0, 0, 0, 0, 0, 736, 0, 0, 740, 0, 0, 0, 0, 0, 0, 825344, 0, 0, 825344, 0, 0, 0,
  /*  9507 */ 557056, 557056, 686080, 557056, 557056, 557056, 557056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0,
  /*  9530 */ 776192, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 817152, 821248, 825344, 557056, 557056,
  /*  9543 */ 557056, 557056, 557056, 557056, 557056, 557056, 929792, 0, 0, 0, 0, 0, 0, 0, 0, 0, 835584, 0, 0, 0, 0, 0,
  /*  9565 */ 0, 0, 0, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408, 145408,
  /*  9580 */ 145408, 145408, 0, 0, 0, 555008, 704512, 706560, 555008, 555008, 555008, 555008, 751616, 555008, 555008,
  /*  9595 */ 555008, 790528, 555008, 555008, 845824, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008,
  /*  9608 */ 706560, 0, 790528, 0, 0, 0, 0, 0, 0, 0, 0, 424233, 424233, 424233, 424233, 424233, 424233, 424233, 424233,
  /*  9627 */ 424233, 424233, 424233, 424233, 424233, 424233, 0, 0, 557056, 557056, 557056, 557056, 704512, 706560,
  /*  9641 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 751616, 557056, 557056, 557056,
  /*  9654 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 790528, 557056, 557056, 557056, 808960, 557056,
  /*  9667 */ 557056, 841728, 845824, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
  /*  9680 */ 557056, 886784, 890880, 557056, 557056, 557056, 903168, 557056, 557056, 557056, 557056, 557056, 557056,
  /*  9693 */ 557056, 0, 0, 851968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 815104, 0, 0, 0, 0, 0, 0, 0, 948, 0, 0, 0, 0, 0, 0, 0,
  /*  9722 */ 955, 0, 0, 899072, 0, 0, 0, 0, 0, 0, 0, 0, 0, 724992, 784384, 0, 931840, 557056, 620, 0, 0, 0, 620, 0,
  /*  9746 */ 623, 0, 0, 0, 623, 0, 557056, 688128, 0, 0, 741376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 894976, 555008, 0, 0,
  /*  9772 */ 0, 557622, 557622, 557622, 557622, 557622, 717366, 731702, 733750, 557622, 557622, 750134, 557622, 557622,
  /*  9786 */ 557622, 557622, 907830, 557622, 557622, 557622, 557622, 557622, 557622, 620, 0, 0, 623, 557678, 557678,
  /*  9801 */ 791150, 557678, 557678, 557678, 809582, 557678, 557678, 842350, 846446, 557678, 557678, 557678, 557678,
  /*  9814 */ 557678, 557678, 698368, 0, 0, 0, 0, 0, 0, 856064, 778240, 770048, 555008, 555008, 724992, 555008, 555008,
  /*  9831 */ 753664, 555008, 784384, 555008, 555008, 851968, 555008, 555008, 555008, 894976, 909312, 919552, 931840, 0,
  /*  9845 */ 0, 0, 0, 909312, 919552, 557056, 688128, 557056, 557056, 557056, 712704, 557056, 557056, 724992, 557056,
  /*  9860 */ 557056, 557056, 557056, 557056, 753664, 763904, 557056, 557056, 557056, 784384, 557056, 557056, 557056,
  /*  9873 */ 557056, 557056, 784384, 557056, 557056, 557056, 557056, 557056, 851968, 557056, 557056, 557056, 557056,
  /*  9886 */ 557056, 557056, 557056, 894976, 557056, 909312, 557056, 919552, 557056, 557056, 557056, 909312, 557056,
  /*  9899 */ 919552, 557056, 557056, 931840, 557056, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 557056, 688128, 0, 827392, 0,
  /*  9921 */ 847872, 0, 876544, 880640, 933888, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 79872, 0, 0, 0, 0, 0, 555008, 555008,
  /*  9944 */ 876544, 555008, 892928, 0, 765952, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
  /*  9959 */ 557056, 557056, 765952, 557056, 557056, 794624, 557056, 557056, 827392, 557056, 557056, 858112, 557056,
  /*  9972 */ 827392, 557056, 557056, 858112, 557056, 557056, 876544, 557056, 557056, 892928, 901120, 557056, 557056,
  /*  9985 */ 557056, 935936, 0, 0, 0, 0, 557056, 557056, 0, 0, 0, 720896, 0, 0, 733184, 749568, 0, 0, 0, 0, 0, 927744,
  /* 10007 */ 0, 800768, 0, 0, 0, 854016, 0, 888832, 0, 731136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 555008, 555008, 555008,
  /* 10030 */ 555008, 555008, 765952, 0, 0, 0, 0, 864256, 0, 0, 0, 0, 555008, 555008, 555008, 733184, 555008, 555008,
  /* 10048 */ 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 0, 96256, 0, 0, 0, 0, 0, 0, 0, 1208, 0,
  /* 10067 */ 1210, 0, 0, 1213, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 854016, 557056, 557056, 557056, 557056,
  /* 10084 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 0, 0, 0,
  /* 10099 */ 757760, 782336, 0, 0, 870400, 0, 913408, 925696, 0, 679936, 872448, 0, 0, 0, 0, 798720, 0, 681984, 557056,
  /* 10118 */ 557056, 708608, 557056, 557056, 557056, 745472, 557056, 557056, 778240, 802816, 557056, 557056, 557056,
  /* 10131 */ 557056, 557056, 557056, 557056, 557056, 557056, 923648, 0, 714752, 0, 557056, 557056, 557056, 557056,
  /* 10145 */ 557056, 557056, 923648, 681984, 557056, 557056, 708608, 557056, 557056, 557056, 745472, 557056, 557056, 0,
  /* 10159 */ 0, 0, 0, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 544, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1197, 0, 0, 0, 0, 0,
  /* 10193 */ 829440, 0, 0, 921600, 0, 0, 0, 0, 0, 0, 862208, 0, 692224, 0, 0, 0, 0, 0, 557622, 557622, 748086, 557622,
  /* 10215 */ 557622, 557622, 557622, 557622, 557622, 557622, 557678, 557678, 850542, 557678, 557678, 557678, 557678,
  /* 10228 */ 557678, 557678, 557678, 557678, 557678, 557678, 907886, 557678, 557678, 0, 0, 0, 0, 0, 2, 6, 0, 0, 0, 0,
  /* 10248 */ 0, 0, 0, 0, 0, 1168, 0, 0, 0, 0, 0, 0, 878592, 692224, 714752, 555008, 804864, 878592, 804864, 557056,
  /* 10268 */ 692224, 696320, 714752, 557056, 557056, 557056, 557056, 772096, 804864, 829440, 866304, 557056, 878592,
  /* 10281 */ 557056, 557056, 557056, 921600, 0, 0, 0, 0, 837632, 804864, 829440, 866304, 557056, 878592, 557056,
  /* 10296 */ 557056, 557056, 921600, 557056, 692224, 696320, 714752, 557056, 557056, 557056, 0, 0, 0, 0, 536576, 0, 0,
  /* 10313 */ 0, 0, 557056, 557056, 557056, 557056, 0, 0, 0, 0, 684032, 557056, 557056, 557056, 557056, 882688, 684032,
  /* 10330 */ 557056, 557056, 557056, 557056, 557056, 557056, 917504, 557056, 735232, 739328, 557056, 557056, 557056,
  /* 10343 */ 557056, 557056, 557056, 557056, 557056, 911360, 557056, 557056, 557056, 557056, 557056, 557056, 201,
  /* 10356 */ 557056, 917504, 0, 0, 0, 0, 839680, 0, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 0, 0, 1083392, 0, 0, 0,
  /* 10378 */ 0, 0, 0, 0, 0, 0, 0, 1734, 0, 0, 0, 0, 0, 0, 718848, 0, 0, 0, 0, 0, 0, 0, 557056, 557056, 557056, 557056,
  /* 10404 */ 557056, 557056, 557056, 557056, 557056, 557056, 747520, 557056, 557056, 557056, 557056, 557056, 557056,
  /* 10417 */ 557056, 700416, 0, 727040, 884736, 0, 0, 0, 0, 0, 0, 718, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1169, 0, 0, 0, 0,
  /* 10444 */ 0, 557056, 557056, 884736, 722944, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 557056, 557056, 557056,
  /* 10460 */ 557056, 557056, 557056, 557056, 557676, 0, 557056, 557679, 557056, 557056, 557056, 557056, 882688, 729088,
  /* 10474 */ 0, 0, 860160, 557056, 774144, 868352, 557056, 557056, 774144, 868352, 557056, 557056, 0, 0, 0, 0, 0, 2, 6,
  /* 10493 */ 0, 0, 0, 0, 0, 0, 202, 202, 202, 0, 0, 202, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 530432, 0, 0, 0,
  /* 10523 */ 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 768000, 786432, 737280, 557056, 737280, 557056,
  /* 10543 */ 557056, 557056, 557056, 557056, 557056, 557056, 874496, 874496, 0, 0, 0, 0, 0, 0, 67584, 67584, 0, 0, 0,
  /* 10562 */ 0, 0, 0, 0, 0, 0, 201, 0, 0, 0, 0, 0, 0, 0, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 431, 432,
  /* 10594 */ 0, 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 491, 0, 0, 0, 495, 0, 0, 55611,
  /* 10622 */ 55611, 55611, 0, 55611, 55611, 315, 315, 315, 315, 315, 315, 315, 55611, 55611, 55611, 55611, 55611,
  /* 10639 */ 55611, 55611, 55611, 55611, 55611, 55611, 55611, 55611, 0, 0, 0, 0, 0, 0, 75776, 528384, 201, 202, 0,
  /* 10658 */ 104448, 0, 0, 0, 0, 0, 0, 0, 1497, 0, 0, 0, 0, 0, 0, 1502, 0, 0, 0, 0, 55611, 55611, 55611, 0, 0, 2, 2, 3,
  /* 10686 */ 47108, 5, 6, 0, 0, 0, 0, 0, 0, 528384, 0, 0, 0, 0, 0, 0, 0, 0, 18432, 557056, 557056, 0, 677, 0, 677, 0,
  /* 10712 */ 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 754, 0, 0, 0, 0, 0, 0, 59392, 0, 0, 201, 59392, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 10743 */ 0, 0, 0, 0, 698, 0, 0, 0, 59660, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 0, 0, 201, 0, 202, 0, 0, 0, 202,
  /* 10772 */ 0, 0, 0, 704512, 0, 0, 0, 2, 567483, 47108, 5, 6, 191, 0, 0, 0, 0, 0, 191, 0, 0, 0, 0, 0, 0, 752, 0, 0, 0,
  /* 10801 */ 0, 0, 0, 0, 0, 0, 0, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1359, 0, 0, 22528, 24576, 0, 0, 0, 20480,
  /* 10831 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 61440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61440, 61440, 61440, 61440, 0, 61440,
  /* 10858 */ 61440, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 226, 0, 61440, 0, 0, 61440, 61440, 0, 0, 61440, 61440,
  /* 10885 */ 61440, 61440, 61440, 61440, 0, 0, 0, 0, 0, 0, 528384, 0, 0, 0, 0, 0, 0, 417792, 0, 0, 0, 0, 0, 0, 528384,
  /* 10910 */ 0, 0, 0, 0, 0, 476, 0, 0, 0, 0, 0, 0, 766, 0, 0, 298, 298, 298, 772, 298, 298, 298, 298, 298, 298, 1016,
  /* 10936 */ 298, 298, 298, 298, 298, 298, 298, 298, 298, 784, 298, 298, 298, 298, 298, 298, 0, 0, 0, 61440, 61440, 0,
  /* 10958 */ 0, 0, 2, 2, 567483, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 528384, 0, 0, 0, 0, 16384, 0, 0, 0, 0, 0, 0, 0, 963, 0,
  /* 10987 */ 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 102400, 0, 0, 0, 0, 557056, 557056, 1092, 0, 0, 1097, 0, 557056, 686080,
  /* 11011 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 743424, 557056, 557056, 557056, 557056, 759808,
  /* 11024 */ 557056, 557056, 557056, 776192, 557056, 557056, 0, 65536, 65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 11047 */ 108544, 0, 0, 0, 67584, 0, 0, 0, 0, 0, 0, 0, 67584, 0, 0, 0, 0, 67584, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 11077 */ 0, 953, 0, 0, 67584, 67584, 67584, 0, 0, 67584, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 528855, 0,
  /* 11103 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 475, 0, 0, 0, 0, 0, 269, 269, 0, 0, 0, 269, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 11135 */ 695, 0, 0, 0, 0, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056,
  /* 11151 */ 867, 0, 0, 870, 557056, 557056, 0, 0, 0, 0, 0, 2, 6, 0, 0, 0, 0, 680, 684, 0, 0, 0, 0, 0, 710656, 0, 0, 0,
  /* 11179 */ 0, 0, 0, 0, 753664, 0, 0, 0, 0, 0, 0, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 65536, 0, 0,
  /* 11207 */ 65536, 0, 65536, 65536, 65536, 65536, 65536, 0, 0, 65536, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 69632, 0, 0,
  /* 11230 */ 202, 69632, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 724, 0, 0, 0, 22528, 69904, 0, 0, 0, 20480, 0, 0, 0, 0, 0,
  /* 11259 */ 0, 0, 0, 202, 0, 0, 0, 710656, 0, 0, 0, 0, 0, 0, 0, 753664, 0, 0, 0, 0, 199, 199, 0, 0, 199, 199, 71879,
  /* 11286 */ 199, 199, 199, 199, 199, 199, 199, 238, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199, 199,
  /* 11307 */ 199, 199, 199, 235, 199, 71879, 22528, 24576, 199, 199, 199, 20480, 199, 199, 199, 199, 199, 199, 199,
  /* 11326 */ 199, 199, 199, 71879, 71879, 71879, 71879, 71879, 71879, 71879, 71879, 199, 199, 199, 199, 199, 199, 199,
  /* 11344 */ 199, 199, 71879, 199, 199, 199, 199, 199, 71879, 199, 71879, 199, 71879, 199, 71879, 71879, 71879, 71879,
  /* 11362 */ 71879, 71879, 71879, 71879, 0, 0, 0, 0, 0, 0, 530432, 734, 0, 0, 0, 0, 0, 0, 0, 0, 0, 202, 0, 0, 0, 0, 0,
  /* 11389 */ 0, 0, 199, 0, 199, 199, 199, 71879, 71879, 199, 71879, 71879, 71879, 71879, 71918, 71918, 71918, 71879,
  /* 11407 */ 71879, 71879, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 565693, 565693,
  /* 11433 */ 0, 0, 0, 0, 0, 0, 794624, 0, 0, 0, 0, 897024, 892928, 0, 0, 0, 0, 0, 0, 549, 0, 0, 552, 0, 0, 0, 0, 555,
  /* 11461 */ 425, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 77824, 0, 0, 77824, 0, 0, 0, 77824, 77824, 0, 0, 0, 0,
  /* 11486 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77824, 77824, 77824, 0, 0, 2, 2, 0, 47108, 5, 6, 63488, 0, 0, 0, 0, 0,
  /* 11513 */ 823296, 0, 937984, 739328, 739328, 557056, 735232, 739328, 557056, 557056, 557056, 557056, 0, 151552, 0,
  /* 11528 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1170, 1171, 1172, 0, 0, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0,
  /* 11558 */ 0, 0, 0, 0, 945, 0, 0, 810, 360, 360, 360, 360, 360, 360, 861, 360, 360, 360, 360, 620, 45925, 810, 623,
  /* 11581 */ 382, 79872, 0, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872, 79872,
  /* 11597 */ 79872, 0, 0, 0, 0, 0, 45437, 0, 0, 0, 0, 79872, 0, 0, 45437, 45437, 45437, 45437, 45437, 79872, 79872,
  /* 11618 */ 45437, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 557056, 557056, 557056, 557056, 907264, 557056, 557056, 557056,
  /* 11637 */ 557056, 557056, 557056, 620, 0, 45056, 623, 557056, 557056, 0, 0, 0, 0, 0, 2, 6, 0, 0, 0, 201, 0, 0, 0, 0,
  /* 11661 */ 0, 0, 751, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 430, 0, 0, 0, 0, 0, 0, 0, 0, 557056, 557056, 0, 0, 0, 0, 45056,
  /* 11690 */ 557056, 686080, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 698368, 0, 0, 0, 0, 0, 0, 856064,
  /* 11707 */ 778240, 770048, 0, 0, 81920, 81920, 81920, 0, 81920, 81920, 81920, 81920, 81920, 81920, 81920, 81920,
  /* 11723 */ 81920, 81920, 81920, 81920, 81920, 81920, 0, 0, 81920, 81920, 81920, 81920, 81920, 81920, 0, 0, 2, 2, 3,
  /* 11742 */ 47108, 5, 6, 0, 0, 0, 0, 0, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 711, 234, 234, 712, 0, 0, 0, 0, 83968,
  /* 11771 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 992, 0, 0, 22528, 24576, 0, 0, 0, 20480, 83968, 83968, 83968,
  /* 11796 */ 83968, 0, 83968, 0, 0, 0, 0, 0, 0, 0, 979, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 776, 298,
  /* 11823 */ 0, 0, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 83968, 0,
  /* 11840 */ 0, 0, 0, 0, 83968, 83968, 83968, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 205, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 11869 */ 0, 0, 0, 723, 0, 0, 0, 0, 0, 2, 3, 188, 5, 6, 0, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 231, 0, 0, 0, 234, 0, 0,
  /* 11901 */ 0, 0, 86016, 86016, 86016, 0, 86016, 86016, 86016, 86016, 86016, 86016, 86016, 86016, 86016, 86016, 86016,
  /* 11918 */ 86016, 86016, 86016, 0, 0, 86016, 86016, 86016, 86016, 86016, 86016, 26807, 26807, 2, 2, 3, 0, 5, 6, 0,
  /* 11938 */ 410, 0, 0, 1162, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112640, 0, 360, 360, 360, 1546, 360, 360, 360,
  /* 11965 */ 360, 360, 360, 0, 0, 0, 0, 382, 382, 0, 0, 0, 0, 183, 2, 6, 0, 0, 0, 0, 682, 686, 0, 0, 0, 1602, 0, 0, 0,
  /* 11994 */ 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 788, 0, 1688,
  /* 12016 */ 360, 360, 360, 360, 360, 360, 1694, 360, 360, 360, 360, 360, 360, 360, 863, 360, 360, 360, 620, 45925,
  /* 12036 */ 810, 623, 382, 360, 1745, 1746, 360, 360, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 382, 885, 382,
  /* 12057 */ 382, 382, 382, 382, 382, 382, 382, 899, 382, 382, 382, 382, 382, 382, 382, 382, 900, 382, 382, 902, 382,
  /* 12078 */ 382, 382, 382, 382, 382, 1756, 382, 1757, 1758, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 1666, 0, 0,
  /* 12101 */ 0, 0, 360, 360, 1780, 360, 360, 360, 382, 1784, 382, 382, 382, 382, 382, 382, 1790, 382, 382, 382, 382,
  /* 12122 */ 911, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1333, 1334, 382, 382, 1152, 1868, 382, 382,
  /* 12142 */ 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 382, 382, 360, 382, 360, 382, 360,
  /* 12167 */ 382, 360, 382, 0, 0, 0, 0, 0, 246, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257, 90515, 90515, 90515, 0, 0, 90515,
  /* 12192 */ 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 247, 0, 248, 249, 0, 0, 0, 0, 0, 224, 0, 0, 0, 0, 0, 0,
  /* 12221 */ 0, 0, 0, 0, 234, 224, 0, 382, 382, 92160, 0, 0, 0, 26807, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 810, 360, 360,
  /* 12249 */ 360, 360, 1044, 360, 0, 0, 94524, 94524, 94524, 0, 94524, 94524, 0, 0, 0, 0, 0, 0, 0, 94524, 0, 0, 203, 0,
  /* 12273 */ 0, 0, 0, 0, 0, 0, 0, 0, 94524, 94524, 94524, 94524, 94524, 94524, 94524, 94524, 94524, 94524, 94524,
  /* 12292 */ 94524, 94524, 0, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 200, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 12322 */ 0, 0, 0, 532480, 0, 263, 263, 263, 0, 0, 263, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 360, 360,
  /* 12348 */ 360, 360, 1861, 360, 1863, 360, 360, 360, 382, 360, 360, 360, 360, 360, 360, 360, 382, 382, 382, 382, 382,
  /* 12369 */ 382, 382, 382, 382, 382, 382, 382, 471, 0, 0, 0, 26807, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 965, 0, 0, 0, 0,
  /* 12397 */ 0, 0, 0, 0, 739, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1007, 0, 0, 1152, 0, 0, 0, 0, 934, 1154, 0,
  /* 12427 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 755, 0, 0, 0, 0, 0, 360, 360, 360, 1283, 0, 0, 0, 1096, 1289, 0, 0, 0, 382,
  /* 12455 */ 382, 382, 382, 0, 0, 0, 929, 0, 0, 0, 935, 0, 0, 0, 0, 0, 0, 0, 1368, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234,
  /* 12485 */ 234, 447, 0, 0, 0, 360, 360, 1283, 1435, 0, 0, 0, 0, 1289, 1437, 0, 0, 0, 0, 382, 382, 0, 0, 0, 0, 26807,
  /* 12511 */ 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 769, 298, 298, 298, 298, 298, 298, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0,
  /* 12538 */ 205, 0, 100352, 0, 0, 0, 0, 0, 0, 0, 1380, 0, 0, 0, 0, 0, 0, 0, 298, 100557, 100352, 100352, 100556,
  /* 12561 */ 100352, 100352, 100556, 100352, 100352, 100556, 100352, 100352, 100352, 100352, 0, 0, 0, 0, 0, 360, 1859,
  /* 12578 */ 360, 360, 360, 360, 360, 360, 360, 360, 382, 382, 1708, 382, 382, 382, 382, 382, 382, 0, 0, 0, 100352,
  /* 12599 */ 100556, 100352, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 430, 0, 0, 0, 298, 298, 298, 298, 513, 298,
  /* 12624 */ 298, 0, 0, 0, 298, 0, 273, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 234, 0, 73728, 0, 0, 0, 0, 0, 843776, 0,
  /* 12652 */ 0, 0, 0, 0, 0, 0, 0, 0, 565694, 0, 0, 0, 0, 0, 431, 503, 0, 0, 298, 506, 298, 298, 514, 298, 298, 0, 0, 0,
  /* 12680 */ 1401, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 1695, 360, 360, 360, 360, 360, 360, 0, 0, 0, 796672,
  /* 12702 */ 0, 0, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 621,
  /* 12717 */ 557678, 557678, 557678, 557622, 557622, 557622, 762422, 557622, 557622, 557622, 557622, 780854, 557622,
  /* 12730 */ 789046, 557622, 793142, 557622, 557622, 807478, 557622, 813622, 819766, 557622, 557622, 557622, 834102,
  /* 12743 */ 557622, 557622, 850486, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 743990, 557622, 557622,
  /* 12756 */ 557622, 557622, 760374, 557622, 557622, 557622, 557678, 780910, 557678, 789102, 557678, 793198, 557678,
  /* 12769 */ 557678, 807534, 557678, 813678, 819822, 557678, 557678, 557678, 834158, 0, 0, 825344, 0, 0, 825344, 0, 0,
  /* 12786 */ 0, 557056, 557622, 686646, 557622, 557622, 557622, 557622, 557622, 557622, 887350, 891446, 557622, 557622,
  /* 12800 */ 557622, 903734, 557622, 557622, 557622, 557622, 557622, 557622, 924214, 682606, 557678, 557678, 709230,
  /* 12813 */ 557678, 557678, 557678, 746094, 557678, 776758, 557622, 557622, 557622, 557622, 557622, 557622, 557622,
  /* 12826 */ 817718, 821814, 825910, 557622, 557622, 557622, 557622, 557622, 557622, 791094, 557622, 557622, 557622,
  /* 12839 */ 809526, 557622, 557622, 842294, 846390, 557622, 705134, 707182, 557678, 557678, 557678, 557678, 557678,
  /* 12852 */ 557678, 557678, 557678, 557678, 752238, 557678, 557678, 557678, 557678, 557678, 817774, 821870, 825966,
  /* 12865 */ 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 557678,
  /* 12878 */ 557678, 557678, 557678, 762478, 557678, 557678, 557678, 557678, 557678, 887406, 891502, 557678, 557678,
  /* 12891 */ 557678, 903790, 557678, 557678, 557678, 557678, 557678, 557678, 557678, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 12911 */ 0, 0, 1198, 0, 0, 919552, 931840, 0, 0, 0, 0, 909312, 919552, 557622, 688694, 557622, 557622, 557622,
  /* 12929 */ 713270, 557622, 557622, 0, 0, 0, 0, 0, 557678, 686702, 557678, 557678, 557678, 557678, 557678, 557678,
  /* 12945 */ 557678, 557678, 557678, 557678, 766574, 557678, 557678, 795246, 557678, 557678, 725558, 557622, 557622,
  /* 12958 */ 557622, 557622, 557622, 754230, 764470, 557622, 557622, 557622, 784950, 557622, 557622, 557622, 557622,
  /* 12971 */ 557622, 766518, 557622, 557622, 795190, 557622, 557622, 827958, 557622, 557622, 858678, 557622, 557622,
  /* 12984 */ 852534, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 895542, 557622, 909878, 557622, 920118,
  /* 12997 */ 557622, 557622, 557622, 557622, 705078, 707126, 557622, 557622, 557622, 557622, 557622, 557622, 557622,
  /* 13010 */ 557622, 557622, 752182, 932406, 557622, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 557678, 688750, 557678,
  /* 13030 */ 785006, 557678, 557678, 557678, 557678, 557678, 852590, 557678, 557678, 557678, 557678, 557678, 557678,
  /* 13043 */ 557678, 895598, 557678, 909934, 557678, 920174, 557678, 557678, 932462, 557678, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 13062 */ 234, 234, 234, 0, 0, 0, 449, 555008, 555008, 876544, 555008, 892928, 0, 765952, 0, 0, 557622, 557622,
  /* 13080 */ 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557622, 911926, 557622, 557622, 557622,
  /* 13093 */ 557622, 557622, 877110, 557622, 557622, 893494, 901686, 557622, 557622, 557622, 936502, 0, 0, 0, 0,
  /* 13108 */ 557678, 557678, 557678, 713326, 557678, 557678, 725614, 557678, 557678, 557678, 557678, 557678, 754286,
  /* 13121 */ 764526, 557678, 557678, 557678, 883310, 729088, 0, 0, 860160, 557622, 774710, 868918, 557622, 557678,
  /* 13135 */ 774766, 868974, 557678, 828014, 557678, 557678, 858734, 557678, 557678, 877166, 557678, 557678, 893550,
  /* 13148 */ 901742, 557678, 557678, 557678, 936558, 0, 0, 0, 0, 0, 823296, 0, 937984, 739328, 739328, 557622, 735798,
  /* 13165 */ 739894, 557622, 557622, 557622, 557622, 557622, 918070, 557678, 735854, 739950, 557678, 557678, 557678,
  /* 13178 */ 557678, 557678, 557678, 557678, 557678, 911982, 557678, 557678, 557678, 557678, 557678, 557678, 0, 0,
  /* 13192 */ 682550, 557622, 557622, 709174, 557622, 557622, 557622, 746038, 557622, 557622, 778806, 803382, 557622,
  /* 13205 */ 557622, 557622, 0, 0, 0, 0, 536576, 0, 0, 0, 0, 557678, 557678, 557678, 557678, 0, 0, 0, 0, 684598,
  /* 13225 */ 557622, 557622, 557622, 557622, 883254, 684654, 557678, 557678, 778862, 803438, 557678, 557678, 557678,
  /* 13238 */ 557678, 557678, 557678, 557678, 557678, 557678, 924270, 0, 714752, 0, 0, 0, 0, 210, 211, 212, 213, 214,
  /* 13256 */ 215, 0, 0, 0, 0, 0, 0, 0, 0, 1002, 0, 0, 1005, 0, 0, 0, 0, 878592, 692224, 714752, 555008, 804864, 878592,
  /* 13279 */ 804864, 557622, 692790, 696886, 715318, 557622, 557622, 557622, 557622, 772662, 805430, 830006, 866870,
  /* 13292 */ 557622, 879158, 557622, 557622, 557622, 922166, 557678, 692846, 696942, 715374, 557678, 557678, 557678,
  /* 13305 */ 557678, 744046, 557678, 557678, 557678, 557678, 760430, 557678, 557678, 557678, 776814, 557678, 557678,
  /* 13318 */ 557678, 772718, 805486, 830062, 866926, 557678, 879214, 557678, 557678, 557678, 922222, 0, 0, 0, 0,
  /* 13333 */ 837632, 557678, 918126, 0, 0, 0, 0, 839680, 0, 0, 0, 0, 0, 557622, 557622, 557622, 557622, 557622, 854582,
  /* 13352 */ 557622, 557622, 557622, 557622, 557622, 557622, 557622, 557678, 557678, 557678, 557678, 557678, 557678,
  /* 13365 */ 557678, 557678, 557678, 557678, 0, 0, 0, 0, 718848, 0, 0, 0, 0, 0, 0, 0, 557622, 557622, 557622, 557622,
  /* 13385 */ 557622, 557622, 557622, 557622, 557622, 557678, 748142, 557678, 557678, 557678, 557678, 557678, 557678,
  /* 13398 */ 557678, 700416, 0, 727040, 884736, 0, 0, 0, 0, 0, 0, 947, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1500, 0, 0, 0, 0,
  /* 13425 */ 0, 0, 557622, 557622, 756278, 557622, 832054, 557622, 557622, 557622, 885302, 557678, 557678, 756334,
  /* 13439 */ 557678, 832110, 557678, 557678, 885358, 722944, 0, 0, 0, 0, 557622, 557622, 557622, 557622, 557622,
  /* 13454 */ 557622, 557678, 557678, 717422, 731758, 733806, 557678, 557678, 750190, 557678, 557678, 557678, 557678,
  /* 13467 */ 557678, 557678, 854638, 557678, 768000, 786432, 737846, 557622, 737902, 557678, 557622, 557678, 557622,
  /* 13480 */ 557678, 557622, 557678, 875062, 875118, 0, 0, 0, 0, 0, 441, 0, 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 0,
  /* 13504 */ 528384, 201, 202, 0, 0, 106496, 0, 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 108544, 108544, 0, 0,
  /* 13527 */ 0, 0, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65536, 0, 0, 0, 65536, 0, 0, 0, 0, 0, 0, 108544,
  /* 13557 */ 108544, 108544, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 471, 263, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 696, 0,
  /* 13586 */ 0, 0, 0, 0, 0, 0, 28672, 0, 0, 0, 14336, 0, 0, 776192, 0, 817152, 0, 0, 0, 0, 0, 0, 0, 67584, 0, 67584,
  /* 13612 */ 67584, 67584, 67584, 67584, 67584, 67584, 557056, 557056, 886784, 890880, 557056, 557056, 557056, 903168,
  /* 13626 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 201, 201, 201, 0, 0, 201, 0, 0, 2, 2, 3, 47108, 5,
  /* 13646 */ 6, 0, 0, 0, 0, 0, 0, 528384, 0, 0, 0, 0, 0, 0, 0, 428032, 0, 557056, 876544, 557056, 557056, 892928,
  /* 13668 */ 901120, 557056, 557056, 557056, 935936, 620, 0, 623, 0, 557056, 557056, 755712, 557056, 831488, 557056,
  /* 13683 */ 557056, 557056, 884736, 557056, 557056, 755712, 557056, 831488, 557056, 0, 0, 110909, 110909, 110909, 0,
  /* 13698 */ 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909, 110909,
  /* 13711 */ 110909, 0, 0, 110996, 110996, 110996, 110909, 110909, 110998, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0,
  /* 13733 */ 484, 0, 0, 0, 0, 0, 490, 0, 0, 0, 0, 0, 0, 0, 528384, 414, 415, 0, 0, 0, 0, 0, 0, 0, 0, 753, 0, 0, 0, 0,
  /* 13763 */ 0, 0, 0, 0, 0, 1830, 360, 360, 360, 360, 360, 360, 557056, 557056, 0, 0, 0, 118784, 0, 2, 6, 0, 0, 0, 0,
  /* 13788 */ 0, 0, 0, 0, 0, 1182, 0, 0, 0, 0, 0, 0, 0, 2, 3, 47108, 5, 6, 0, 0, 124928, 0, 0, 0, 0, 124928, 0, 0, 0, 0,
  /* 13818 */ 0, 502, 0, 0, 0, 298, 298, 298, 298, 512, 298, 298, 0, 0, 1400, 0, 0, 0, 360, 360, 360, 360, 360, 360,
  /* 13842 */ 360, 1407, 0, 0, 125246, 125246, 125246, 0, 125246, 125246, 124928, 124928, 124928, 124928, 124928,
  /* 13857 */ 125246, 124928, 125246, 125246, 125246, 125246, 125246, 125246, 125246, 125246, 125246, 125246, 125246,
  /* 13870 */ 125246, 125246, 0, 0, 0, 0, 0, 691, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 759808, 0, 0, 0, 0, 0, 0, 0, 125246,
  /* 13898 */ 125246, 125246, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 717, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1584, 0,
  /* 13927 */ 0, 0, 0, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 555008, 57344, 0, 120832,
  /* 13943 */ 0, 131072, 0, 0, 0, 0, 218, 239, 0, 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 251, 0, 0, 0, 0, 0, 0, 557056, 557056,
  /* 13971 */ 0, 0, 0, 120832, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1342, 0, 0, 1345, 0, 0, 0, 0, 2, 3, 47108, 5, 6, 0,
  /* 14001 */ 0, 0, 129024, 0, 0, 0, 0, 129024, 0, 0, 0, 0, 244, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1487, 0, 0, 1490,
  /* 14030 */ 0, 0, 129343, 129343, 129343, 0, 129343, 129343, 129343, 129343, 129343, 129343, 129343, 129343, 129343,
  /* 14045 */ 129343, 129343, 129343, 129343, 129343, 0, 0, 0, 0, 0, 129343, 129343, 129343, 0, 0, 2, 2, 3, 47108, 0, 6,
  /* 14066 */ 0, 0, 0, 0, 0, 733, 472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1004, 0, 1006, 0, 0, 0, 137216, 0, 0, 0, 0, 0, 0,
  /* 14096 */ 528384, 201, 202, 98304, 0, 0, 0, 0, 0, 0, 0, 0, 425984, 555008, 555008, 555008, 555008, 555008, 555008,
  /* 14115 */ 555008, 555008, 555008, 555008, 0, 0, 0, 126976, 133120, 0, 0, 2, 3, 47108, 573629, 6, 0, 0, 0, 0, 193, 0,
  /* 14137 */ 0, 0, 0, 193, 135168, 0, 0, 0, 0, 0, 0, 135168, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135168, 135168, 135168, 0, 0,
  /* 14163 */ 135168, 0, 0, 2, 2, 3, 47108, 573629, 6, 0, 0, 0, 0, 0, 750, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83968, 0, 0,
  /* 14192 */ 0, 0, 557056, 557056, 0, 122880, 0, 122880, 0, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1382, 0, 0, 1385, 0, 0,
  /* 14218 */ 298, 139264, 139264, 139264, 0, 0, 139264, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 810, 360, 360, 360,
  /* 14242 */ 360, 360, 360, 360, 360, 824, 360, 26807, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 807, 0, 0,
  /* 14269 */ 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 0, 360, 360, 360, 360, 360,
  /* 14294 */ 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 382, 1152, 0, 0, 0, 0, 0, 1154, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 14320 */ 0, 0, 0, 0, 0, 0, 202, 0, 1374, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0, 360, 360, 1201, 0, 0,
  /* 14351 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 283, 0, 298, 298,
  /* 14379 */ 298, 298, 298, 0, 360, 360, 360, 360, 360, 360, 360, 360, 1744, 380, 380, 360, 383, 380, 380, 380, 380,
  /* 14400 */ 380, 380, 380, 383, 383, 383, 383, 383, 380, 380, 383, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 26808, 2,
  /* 14423 */ 3, 47108, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1156, 0, 0, 0, 0, 0, 0, 143360, 143360, 143360, 0,
  /* 14449 */ 143360, 143360, 0, 0, 0, 0, 0, 0, 0, 143360, 143360, 143360, 143360, 143360, 143360, 143360, 143360,
  /* 14466 */ 143360, 143360, 143360, 143360, 143360, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 757760, 782336, 0, 0, 870400, 0,
  /* 14487 */ 913408, 925696, 0, 679936, 872448, 114688, 0, 0, 0, 798720, 0, 185, 3, 47108, 5, 190, 0, 0, 0, 0, 0, 194,
  /* 14509 */ 0, 0, 0, 0, 0, 0, 0, 108544, 108544, 0, 0, 108544, 108544, 0, 0, 0, 0, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 14537 */ 0, 0, 0, 0, 464, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 145408, 0, 0, 0, 0, 0, 0, 0, 528384, 0,
  /* 14564 */ 0, 0, 0, 0, 0, 0, 0, 0, 145408, 0, 0, 145408, 145408, 145408, 0, 0, 185, 185, 3, 47108, 5, 1100185, 0, 0,
  /* 14588 */ 0, 0, 0, 810, 360, 360, 360, 360, 360, 360, 360, 822, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 382,
  /* 14615 */ 382, 0, 0, 0, 0, 183, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1582, 0, 0, 1585, 0, 0, 0, 0, 411, 0, 0, 0, 0, 0,
  /* 14646 */ 528384, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 980, 0, 0, 983, 0, 0, 0, 0, 0, 186, 3, 47108, 5, 6, 0, 0, 0, 0,
  /* 14675 */ 0, 0, 0, 0, 0, 0, 0, 1344, 0, 0, 0, 0, 0, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 494, 0, 405, 405,
  /* 14707 */ 405, 0, 0, 405, 0, 0, 1083800, 186, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 810, 360, 360, 360, 360, 360, 360, 818,
  /* 14732 */ 360, 360, 360, 0, 1285, 0, 0, 1096, 0, 1291, 0, 0, 382, 382, 382, 382, 382, 382, 1718, 382, 382, 382, 382,
  /* 14755 */ 382, 382, 0, 0, 0, 0, 360, 360, 360, 1924, 382, 382, 382, 1926, 0, 0, 0, 412, 0, 0, 0, 528384, 201, 202,
  /* 14779 */ 0, 0, 0, 0, 0, 0, 0, 0, 989, 0, 0, 0, 0, 0, 0, 0, 0, 232, 0, 0, 0, 232, 0, 232, 0, 557056, 557056, 0, 0,
  /* 14808 */ 678, 0, 0, 679, 6, 0, 0, 149504, 0, 0, 0, 0, 0, 0, 0, 528384, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 720, 0, 0,
  /* 14837 */ 0, 0, 0, 0, 0, 0, 444, 234, 234, 234, 0, 0, 0, 0, 206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 693,
  /* 14868 */ 0, 0, 0, 206, 0, 206, 260, 206, 0, 0, 0, 264, 240, 0, 240, 0, 0, 0, 0, 245, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 14898 */ 0, 0, 1596, 0, 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 206, 0, 291, 299, 299, 299, 299, 320, 320,
  /* 14922 */ 320, 299, 320, 320, 341, 341, 341, 341, 341, 341, 352, 341, 341, 341, 341, 341, 341, 341, 341, 341, 341,
  /* 14943 */ 299, 341, 341, 361, 361, 361, 384, 361, 361, 361, 361, 361, 361, 361, 384, 384, 384, 384, 384, 361, 361,
  /* 14964 */ 384, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 421, 422, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 435, 0,
  /* 14992 */ 467, 0, 0, 0, 0, 0, 0, 473, 0, 0, 0, 477, 0, 0, 0, 0, 0, 0, 962, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 990, 0, 0,
  /* 15024 */ 0, 0, 0, 418, 0, 0, 0, 0, 0, 0, 0, 0, 0, 489, 0, 0, 0, 0, 0, 0, 0, 232, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360,
  /* 15056 */ 360, 1832, 360, 360, 360, 360, 496, 0, 0, 500, 0, 0, 0, 504, 0, 298, 298, 508, 298, 298, 298, 298, 298,
  /* 15079 */ 298, 298, 1234, 0, 0, 0, 0, 0, 0, 0, 0, 0, 262, 0, 0, 0, 0, 0, 0, 538, 0, 0, 0, 0, 0, 0, 435, 0, 0, 0, 0,
  /* 15110 */ 0, 0, 0, 538, 0, 0, 0, 421, 0, 0, 0, 0, 0, 0, 0, 561, 562, 0, 0, 0, 504, 0, 473, 504, 0, 360, 360, 571,
  /* 15138 */ 360, 360, 360, 360, 360, 360, 360, 1538, 360, 360, 360, 360, 360, 360, 360, 360, 1248, 360, 360, 360,
  /* 15158 */ 1252, 360, 1254, 360, 596, 598, 360, 603, 360, 606, 360, 360, 617, 360, 360, 360, 0, 382, 382, 382, 0, 0,
  /* 15180 */ 0, 0, 0, 360, 360, 360, 360, 1901, 360, 382, 382, 628, 382, 382, 382, 382, 382, 382, 653, 655, 382, 660,
  /* 15202 */ 382, 663, 382, 382, 674, 298, 298, 298, 792, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 234,
  /* 15227 */ 0, 0, 448, 0, 360, 856, 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 382, 382, 382,
  /* 15249 */ 382, 1127, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 918, 382, 382, 382, 382, 0, 0, 0, 1038,
  /* 15271 */ 0, 0, 0, 0, 0, 810, 360, 360, 1042, 360, 360, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 382, 382, 382, 0, 0,
  /* 15298 */ 0, 928, 0, 0, 0, 934, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 360, 1774, 360, 360, 360,
  /* 15327 */ 360, 360, 360, 1093, 1096, 45925, 1098, 1096, 382, 382, 1102, 382, 382, 382, 382, 382, 382, 382, 1719,
  /* 15346 */ 382, 382, 382, 382, 382, 1724, 0, 0, 382, 382, 1112, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 15367 */ 382, 382, 382, 672, 382, 382, 1152, 0, 0, 0, 0, 0, 1154, 0, 0, 0, 0, 0, 0, 0, 0, 1159, 0, 0, 1190, 0,
  /* 15393 */ 1192, 0, 0, 0, 0, 0, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 993, 0, 298, 298, 1217, 1218, 298, 298, 298,
  /* 15420 */ 298, 298, 298, 298, 298, 1225, 298, 298, 0, 243, 0, 298, 258, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360,
  /* 15445 */ 360, 360, 1834, 360, 1836, 382, 1299, 382, 1301, 382, 382, 1304, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 15465 */ 382, 1307, 382, 382, 382, 382, 382, 382, 0, 1154, 0, 0, 1338, 0, 0, 0, 0, 0, 1343, 0, 0, 0, 0, 0, 0, 0,
  /* 15491 */ 360, 360, 360, 360, 360, 360, 360, 589, 360, 0, 0, 0, 0, 1351, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1184,
  /* 15518 */ 0, 0, 0, 0, 1375, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0, 360, 380, 0, 0, 1481, 0, 0, 0, 0, 0,
  /* 15549 */ 0, 1484, 0, 0, 0, 0, 0, 0, 0, 0, 1001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 805, 0, 0, 0, 0, 0, 0, 382, 1566, 382,
  /* 15579 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0, 0, 360, 360,
  /* 15604 */ 360, 360, 360, 360, 360, 360, 1623, 360, 360, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 382, 382, 1298, 382,
  /* 15628 */ 382, 1657, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 15653 */ 382, 382, 382, 1793, 0, 1795, 0, 0, 0, 1798, 0, 0, 1801, 360, 360, 360, 360, 360, 360, 1749, 360, 360,
  /* 15675 */ 382, 382, 382, 382, 382, 382, 382, 914, 382, 382, 382, 382, 382, 382, 382, 382, 1117, 382, 382, 382, 382,
  /* 15696 */ 382, 382, 382, 0, 0, 0, 1824, 0, 0, 1827, 1828, 0, 360, 360, 360, 360, 360, 360, 360, 1067, 360, 360, 360,
  /* 15719 */ 360, 360, 360, 360, 360, 864, 360, 360, 620, 45925, 810, 623, 382, 0, 1854, 0, 0, 1857, 360, 360, 360,
  /* 15740 */ 360, 360, 360, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 1754, 0, 207, 208, 209, 0, 0, 0, 0, 0, 0,
  /* 15764 */ 0, 0, 0, 0, 0, 0, 0, 1386, 0, 298, 22528, 24576, 273, 273, 0, 20480, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298,
  /* 15790 */ 298, 0, 360, 360, 360, 360, 360, 360, 360, 1743, 360, 0, 0, 0, 987, 0, 0, 0, 0, 0, 0, 0, 0, 991, 0, 0, 0,
  /* 15817 */ 0, 0, 0, 978, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 987, 0, 0, 0, 0, 1200, 1388, 298, 298, 298, 298, 298, 298,
  /* 15844 */ 298, 298, 298, 298, 298, 298, 298, 298, 298, 1021, 298, 298, 298, 1398, 0, 0, 0, 0, 0, 360, 360, 360,
  /* 15866 */ 1404, 1405, 360, 360, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 382, 1297, 382, 382, 1441, 1442, 382, 382,
  /* 15889 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 904, 382, 382, 360, 1838, 360, 382, 382, 382, 382,
  /* 15910 */ 1844, 382, 1846, 382, 1848, 382, 0, 0, 0, 0, 0, 0, 1166, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1583, 0, 0, 0, 0,
  /* 15938 */ 0, 22528, 24576, 274, 274, 275, 20480, 275, 282, 282, 282, 0, 292, 300, 300, 300, 300, 321, 321, 321, 300,
  /* 15959 */ 336, 338, 342, 342, 342, 350, 350, 351, 342, 351, 351, 351, 351, 351, 351, 351, 351, 351, 351, 300, 351,
  /* 15980 */ 351, 362, 362, 362, 385, 362, 362, 362, 362, 362, 362, 362, 385, 385, 385, 385, 385, 362, 362, 385, 26807,
  /* 16001 */ 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 468, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 221, 0, 221, 0, 714,
  /* 16031 */ 696, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0, 728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 16064 */ 727, 0, 0, 763, 0, 0, 0, 0, 0, 0, 298, 770, 298, 298, 298, 298, 298, 0, 0, 0, 0, 1525, 360, 360, 360, 360,
  /* 16090 */ 360, 360, 832, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1539, 360, 360, 360, 360, 360, 360, 298, 298,
  /* 16111 */ 298, 780, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1396, 298, 298, 298, 0, 0, 799, 0,
  /* 16133 */ 0, 810, 811, 360, 814, 360, 360, 360, 360, 821, 360, 825, 382, 875, 382, 382, 382, 382, 882, 382, 886,
  /* 16154 */ 382, 382, 382, 382, 382, 892, 382, 382, 382, 382, 1141, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 16175 */ 0, 0, 1474, 0, 0, 0, 0, 0, 0, 0, 943, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 61440, 360, 1061,
  /* 16204 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 839, 360, 1074, 1075, 360, 360, 360,
  /* 16225 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 853, 360, 382, 382, 382, 1113, 382, 382, 382, 382,
  /* 16246 */ 382, 382, 382, 382, 382, 382, 1121, 382, 382, 382, 382, 1142, 382, 382, 382, 382, 382, 382, 1148, 382,
  /* 16266 */ 1150, 382, 0, 0, 0, 0, 440, 0, 0, 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 0, 528384, 201, 10656, 0, 0, 0,
  /* 16293 */ 0, 0, 0, 0, 0, 768, 298, 298, 298, 298, 298, 298, 298, 298, 0, 1236, 0, 0, 0, 0, 0, 0, 1519, 298, 298,
  /* 16318 */ 298, 298, 0, 0, 1523, 0, 360, 360, 360, 360, 360, 360, 360, 1081, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 16340 */ 846, 360, 360, 360, 360, 360, 360, 854, 0, 0, 1578, 0, 0, 0, 0, 0, 1581, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 16366 */ 776192, 0, 817152, 0, 0, 0, 0, 298, 0, 0, 1617, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 16388 */ 360, 0, 382, 382, 382, 360, 360, 360, 1630, 1631, 360, 360, 360, 360, 360, 360, 360, 360, 382, 382, 382,
  /* 16409 */ 382, 382, 382, 382, 382, 1713, 360, 360, 360, 360, 1704, 360, 360, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 16430 */ 382, 1461, 382, 382, 382, 382, 382, 382, 1822, 0, 1823, 0, 0, 0, 0, 0, 0, 360, 360, 360, 1833, 360, 360,
  /* 16453 */ 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 1296, 382, 382, 242, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 217,
  /* 16482 */ 256, 22528, 24576, 242, 242, 0, 20480, 0, 0, 0, 0, 284, 293, 301, 301, 301, 301, 322, 322, 322, 301, 322,
  /* 16504 */ 339, 343, 343, 343, 343, 343, 343, 343, 343, 343, 343, 343, 301, 343, 343, 363, 363, 363, 363, 363, 386,
  /* 16525 */ 363, 363, 363, 363, 363, 363, 363, 386, 386, 386, 386, 386, 363, 363, 386, 26807, 26807, 2, 2, 3, 47108,
  /* 16546 */ 5, 6, 0, 0, 521, 298, 298, 298, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 544, 0, 0, 0, 0,
  /* 16574 */ 0, 360, 360, 360, 360, 360, 360, 360, 588, 360, 360, 360, 360, 360, 1245, 360, 1247, 360, 360, 1250, 360,
  /* 16595 */ 360, 360, 360, 360, 360, 1246, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1274, 360, 360, 1276, 360,
  /* 16615 */ 360, 360, 0, 702, 0, 0, 0, 705, 706, 0, 0, 0, 0, 0, 234, 234, 0, 0, 0, 0, 0, 810, 360, 360, 360, 360, 360,
  /* 16642 */ 360, 819, 360, 360, 360, 360, 360, 844, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 866, 620, 45925,
  /* 16663 */ 810, 623, 382, 298, 779, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 787, 298, 298, 0, 1399, 0,
  /* 16685 */ 0, 0, 0, 1402, 360, 360, 360, 360, 360, 1406, 360, 789, 298, 298, 298, 298, 298, 298, 298, 796, 0, 0, 0,
  /* 16708 */ 0, 0, 0, 0, 0, 0, 915456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 803, 0, 0, 0, 0, 0, 806, 0, 706, 0, 0, 705, 360,
  /* 16738 */ 360, 829, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 382, 382, 382, 906, 382, 908,
  /* 16759 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1134, 1135, 382, 1152, 0, 0, 0, 0, 0,
  /* 16781 */ 1154, 0, 0, 0, 0, 0, 1157, 0, 0, 0, 0, 0, 0, 1194, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1383, 1384, 0, 0, 0,
  /* 16810 */ 1387, 0, 0, 0, 0, 1177, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1186, 0, 0, 0, 0, 470, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 16842 */ 202, 202, 202, 202, 202, 1280, 360, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 382, 382, 382, 0, 1910, 1911,
  /* 16866 */ 0, 360, 360, 360, 360, 360, 360, 382, 382, 382, 382, 1300, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 16887 */ 382, 382, 382, 382, 1322, 1323, 382, 360, 360, 360, 1424, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 16907 */ 360, 360, 360, 0, 382, 382, 626, 1440, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 16928 */ 382, 382, 382, 0, 0, 1492, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 700, 0, 360, 1533, 360, 360, 360,
  /* 16955 */ 360, 360, 360, 360, 360, 360, 360, 360, 1542, 360, 360, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1439, 382,
  /* 16980 */ 382, 382, 1567, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 1766, 0, 0, 218, 241,
  /* 17003 */ 239, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1501, 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 219, 0, 285,
  /* 17031 */ 294, 302, 302, 302, 302, 323, 333, 323, 302, 323, 323, 344, 344, 344, 344, 344, 344, 353, 344, 344, 344,
  /* 17052 */ 344, 344, 344, 344, 344, 344, 344, 302, 344, 344, 364, 364, 364, 387, 364, 364, 364, 364, 364, 364, 364,
  /* 17073 */ 387, 387, 387, 387, 387, 364, 364, 387, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 451, 452, 0, 454, 0,
  /* 17097 */ 0, 457, 0, 0, 0, 0, 0, 0, 0, 465, 497, 498, 0, 0, 501, 0, 0, 0, 0, 298, 298, 298, 510, 298, 298, 518, 298,
  /* 17124 */ 524, 298, 527, 298, 530, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 360, 360, 1403, 360, 360, 360, 360, 360, 0,
  /* 17148 */ 0, 0, 542, 0, 547, 0, 550, 0, 0, 0, 0, 0, 550, 0, 0, 0, 0, 0, 810, 360, 360, 360, 360, 360, 360, 820, 360,
  /* 17175 */ 360, 360, 360, 360, 1052, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 0, 0, 0, 0, 1550, 382, 0, 0,
  /* 17198 */ 451, 0, 0, 0, 501, 0, 542, 0, 559, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 581, 360, 360, 360, 360, 360,
  /* 17224 */ 599, 360, 360, 605, 608, 612, 360, 360, 360, 360, 360, 0, 382, 382, 382, 0, 0, 0, 0, 0, 360, 360, 1899,
  /* 17247 */ 1900, 360, 360, 382, 382, 382, 631, 382, 382, 642, 382, 651, 382, 656, 382, 382, 662, 665, 669, 382, 382,
  /* 17268 */ 0, 0, 0, 0, 26807, 2, 6, 0, 0, 0, 0, 682, 686, 0, 701, 0, 0, 0, 0, 0, 0, 0, 0, 709, 710, 0, 234, 234, 0,
  /* 17297 */ 0, 0, 0, 0, 810, 360, 360, 360, 360, 360, 817, 360, 360, 360, 360, 360, 607, 360, 360, 360, 360, 360, 360,
  /* 17320 */ 0, 382, 382, 382, 826, 360, 360, 360, 830, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 0,
  /* 17342 */ 0, 623, 382, 840, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 849, 360, 360, 360, 360, 360, 360,
  /* 17363 */ 1812, 382, 382, 382, 382, 382, 382, 382, 382, 382, 901, 382, 382, 382, 382, 382, 382, 382, 382, 926, 382,
  /* 17384 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 940, 0, 942, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 954, 0, 0, 0, 0, 483, 0,
  /* 17417 */ 0, 0, 0, 0, 0, 0, 0, 493, 0, 0, 0, 0, 0, 1352, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 216, 217, 0, 0, 0, 0, 956,
  /* 17448 */ 957, 0, 959, 0, 0, 0, 0, 964, 0, 0, 0, 0, 969, 0, 0, 0, 0, 0, 810, 812, 360, 360, 360, 360, 360, 360, 360,
  /* 17475 */ 360, 360, 1249, 360, 360, 360, 360, 360, 360, 0, 0, 974, 0, 0, 0, 0, 0, 0, 0, 982, 0, 0, 0, 0, 0, 0, 0,
  /* 17502 */ 360, 360, 572, 360, 360, 360, 360, 360, 360, 360, 1633, 360, 360, 360, 360, 360, 382, 382, 382, 1843, 382,
  /* 17523 */ 382, 382, 382, 382, 382, 0, 0, 0, 0, 360, 360, 360, 360, 382, 382, 382, 382, 382, 1845, 382, 382, 382,
  /* 17545 */ 382, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 382, 382, 382, 1785, 382, 382, 382, 382, 382, 382, 0, 986,
  /* 17568 */ 0, 987, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1597, 0, 0, 298, 1010, 1011, 298, 298, 298, 298, 298, 1017,
  /* 17595 */ 298, 298, 1019, 298, 298, 298, 298, 298, 298, 531, 298, 298, 298, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360,
  /* 17618 */ 360, 360, 360, 360, 1865, 360, 382, 1023, 298, 298, 298, 1025, 298, 298, 298, 298, 298, 298, 0, 0, 0,
  /* 17639 */ 1034, 0, 0, 0, 0, 499, 0, 0, 0, 0, 546, 0, 0, 0, 0, 0, 499, 0, 0, 0, 0, 0, 0, 298, 507, 298, 298, 298,
  /* 17667 */ 298, 298, 298, 298, 1029, 298, 298, 1032, 0, 0, 0, 0, 0, 0, 0, 502, 0, 0, 0, 0, 0, 0, 0, 469, 0, 1037, 0,
  /* 17694 */ 0, 0, 0, 0, 942, 942, 810, 1041, 360, 360, 1043, 360, 1045, 360, 1091, 0, 1096, 45925, 0, 1096, 1101, 382,
  /* 17716 */ 382, 1103, 382, 1105, 382, 382, 382, 0, 0, 0, 0, 0, 1897, 360, 360, 360, 360, 360, 1903, 382, 382, 382,
  /* 17738 */ 382, 1126, 382, 382, 382, 382, 1129, 1130, 382, 1132, 1133, 382, 382, 382, 0, 1893, 0, 0, 1896, 360, 360,
  /* 17759 */ 360, 360, 360, 360, 382, 382, 1842, 382, 382, 382, 382, 382, 382, 382, 1850, 1851, 0, 382, 1138, 382,
  /* 17779 */ 1140, 382, 382, 382, 382, 382, 1146, 382, 382, 382, 382, 1151, 0, 0, 0, 0, 545, 0, 0, 0, 0, 0, 554, 0,
  /* 17803 */ 450, 0, 0, 0, 0, 455, 0, 0, 0, 0, 0, 461, 0, 0, 0, 0, 0, 0, 221, 0, 0, 0, 0, 221, 0, 0, 0, 0, 0, 0, 223,
  /* 17834 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 0, 0, 0, 1161, 0, 0, 0, 1165, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 17865 */ 90515, 90515, 90515, 90515, 90515, 360, 1268, 1269, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 17884 */ 360, 360, 1058, 360, 360, 360, 1281, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 382, 382, 382, 382, 0, 1921, 1922,
  /* 17908 */ 0, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 1329, 382, 382, 382, 382, 382, 382, 382, 382, 1152,
  /* 17929 */ 0, 1154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1346, 0, 0, 0, 0, 546, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 229,
  /* 17961 */ 0, 0, 0, 0, 0, 234, 0, 0, 1362, 1363, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1373, 0, 0, 0, 0, 559, 0, 0,
  /* 17991 */ 360, 360, 360, 574, 360, 360, 585, 360, 594, 0, 0, 0, 1376, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0,
  /* 18018 */ 372, 372, 360, 360, 360, 360, 1411, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1420, 360, 1422,
  /* 18038 */ 360, 360, 360, 360, 360, 360, 1429, 360, 360, 360, 360, 360, 1432, 360, 360, 360, 360, 360, 1272, 360,
  /* 18058 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 1056, 360, 360, 360, 1059, 360, 298, 1520, 298, 298, 298, 0,
  /* 18079 */ 0, 0, 1524, 360, 360, 360, 360, 360, 360, 1531, 0, 1588, 1589, 0, 1590, 0, 0, 0, 1592, 1593, 0, 0, 0, 0,
  /* 18103 */ 0, 0, 0, 0, 1167, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 0, 0, 0, 0, 0, 419, 1614, 1615, 1616, 0, 360, 360,
  /* 18130 */ 360, 1621, 360, 360, 360, 360, 360, 360, 360, 1626, 360, 360, 1629, 360, 360, 360, 360, 360, 1634, 1636,
  /* 18150 */ 360, 1638, 1639, 382, 382, 382, 360, 360, 382, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 1643, 382, 382,
  /* 18172 */ 382, 382, 382, 382, 382, 1648, 382, 382, 1651, 382, 382, 382, 382, 382, 382, 1458, 382, 382, 382, 382,
  /* 18192 */ 382, 382, 382, 382, 382, 1571, 382, 382, 382, 382, 382, 382, 0, 382, 1656, 1658, 382, 1660, 1661, 0, 0, 0,
  /* 18214 */ 0, 1665, 0, 1667, 0, 0, 0, 0, 0, 0, 1207, 0, 0, 0, 0, 0, 0, 0, 0, 1214, 0, 0, 1677, 0, 0, 0, 0, 298, 298,
  /* 18243 */ 298, 298, 298, 298, 298, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 834, 360, 360, 360, 360, 360, 360,
  /* 18266 */ 360, 360, 1054, 360, 360, 360, 360, 360, 360, 360, 0, 360, 360, 1690, 360, 360, 360, 360, 360, 360, 360,
  /* 18287 */ 360, 360, 360, 1698, 360, 360, 360, 360, 360, 1426, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 18307 */ 1085, 360, 360, 360, 360, 360, 1767, 0, 0, 1770, 1771, 0, 0, 0, 0, 298, 360, 360, 360, 360, 1776, 360,
  /* 18329 */ 360, 360, 360, 360, 1705, 360, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1649, 1650, 382, 382, 382,
  /* 18349 */ 382, 1654, 382, 382, 1869, 382, 1871, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 1799, 1800, 0, 360, 360,
  /* 18372 */ 360, 360, 382, 382, 382, 1908, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 382, 382, 382, 1815, 382, 382,
  /* 18394 */ 382, 382, 382, 382, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 237, 0, 0, 0, 0, 237, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 18425 */ 0, 0, 0, 726, 0, 22528, 24576, 0, 0, 276, 20480, 276, 276, 276, 276, 0, 276, 303, 303, 303, 303, 0, 0, 0,
  /* 18449 */ 303, 237, 237, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 276, 303, 276, 276, 365, 365, 365, 365,
  /* 18470 */ 365, 388, 365, 365, 365, 365, 365, 365, 365, 388, 388, 388, 388, 388, 365, 365, 388, 26807, 26807, 2, 2,
  /* 18491 */ 3, 47108, 5, 6, 0, 0, 436, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 0, 555008, 708608,
  /* 18518 */ 555008, 555008, 802816, 555008, 555008, 708608, 802816, 0, 0, 697, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 18541 */ 234, 201, 0, 382, 382, 1139, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 1764, 0, 0, 0,
  /* 18564 */ 22528, 24576, 0, 0, 277, 20480, 277, 277, 277, 277, 286, 277, 304, 304, 304, 304, 324, 324, 324, 304, 324,
  /* 18585 */ 324, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 345, 304, 345, 345, 366, 366, 366, 366, 366, 389,
  /* 18606 */ 366, 366, 366, 366, 366, 366, 366, 389, 389, 389, 389, 389, 366, 366, 389, 26807, 26807, 2, 2, 3, 47108,
  /* 18627 */ 5, 6, 0, 0, 360, 360, 1094, 1096, 45925, 1099, 1096, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1762,
  /* 18648 */ 382, 0, 0, 0, 0, 0, 0, 0, 0, 1494, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1673, 1674, 0, 1675, 0, 0, 0,
  /* 18678 */ 1679, 0, 0, 1682, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 360, 360, 360, 360, 360, 1530, 360, 0, 360,
  /* 18701 */ 1689, 360, 360, 360, 360, 360, 360, 360, 1696, 360, 360, 360, 360, 1699, 1714, 382, 382, 382, 382, 1717,
  /* 18721 */ 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 360, 360, 360, 360, 1916, 360, 382, 382, 0, 298, 298, 1738,
  /* 18744 */ 298, 298, 0, 360, 360, 360, 360, 360, 1741, 360, 360, 360, 0, 0, 0, 1288, 1096, 0, 0, 0, 1294, 382, 382,
  /* 18767 */ 382, 382, 382, 1114, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1122, 360, 360, 360, 1747, 360, 360,
  /* 18787 */ 360, 360, 360, 382, 382, 382, 382, 382, 1753, 382, 382, 382, 382, 1302, 382, 382, 382, 1306, 382, 1308,
  /* 18807 */ 382, 382, 382, 382, 382, 382, 883, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1721, 382, 382, 382, 0, 0,
  /* 18829 */ 0, 1918, 1919, 382, 382, 0, 0, 0, 0, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 1558, 382, 382,
  /* 18851 */ 382, 382, 382, 382, 382, 382, 382, 1561, 382, 382, 382, 382, 382, 382, 629, 382, 382, 382, 382, 382, 382,
  /* 18872 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 922, 675, 382, 0, 0, 0, 0, 26807, 2, 6, 0, 0, 0, 0, 0, 0, 0,
  /* 18898 */ 0, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0, 731, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 81920, 81920, 81920,
  /* 18927 */ 1467, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 222, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 18956 */ 0, 0, 0, 0, 234, 0, 0, 0, 0, 0, 946, 0, 0, 0, 0, 951, 0, 0, 0, 0, 0, 0, 0, 692, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 18989 */ 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 287, 0, 305, 305, 305, 305, 325, 325, 325, 305, 325, 325, 346,
  /* 19012 */ 325, 325, 325, 325, 325, 354, 325, 325, 325, 325, 325, 325, 325, 325, 325, 325, 305, 325, 325, 367, 367,
  /* 19033 */ 367, 390, 367, 367, 367, 367, 367, 367, 367, 390, 390, 390, 390, 390, 367, 367, 390, 26807, 26807, 2, 2,
  /* 19054 */ 3, 47108, 5, 6, 0, 0, 0, 0, 539, 0, 0, 0, 539, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 744, 0, 382, 632,
  /* 19085 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 905, 382, 360, 360, 857, 360, 360,
  /* 19106 */ 360, 360, 862, 360, 360, 360, 620, 45925, 810, 623, 382, 382, 382, 382, 1316, 382, 382, 382, 382, 382,
  /* 19126 */ 382, 382, 382, 382, 382, 382, 382, 1573, 382, 382, 0, 923, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 19152 */ 0, 0, 86016, 86016, 86016, 0, 0, 0, 0, 976, 0, 0, 0, 0, 981, 0, 0, 0, 0, 0, 0, 0, 0, 1196, 0, 987, 0, 0,
  /* 19180 */ 0, 0, 0, 985, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 971, 0, 994, 995, 0, 0, 998, 0, 0, 0, 0, 0, 0,
  /* 19212 */ 0, 0, 1008, 0, 0, 0, 0, 697, 0, 0, 0, 0, 298, 298, 298, 298, 774, 298, 298, 298, 298, 298, 298, 1233, 298,
  /* 19237 */ 0, 0, 0, 0, 0, 0, 1240, 0, 360, 360, 360, 1077, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 19260 */ 1089, 1137, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1149, 382, 382, 0, 0, 0, 0, 0, 1797, 0,
  /* 19283 */ 0, 0, 0, 360, 360, 360, 360, 1691, 1692, 1693, 360, 360, 360, 360, 360, 360, 360, 360, 1083, 1084, 360,
  /* 19304 */ 360, 360, 360, 360, 360, 1188, 0, 0, 0, 0, 0, 0, 1195, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298,
  /* 19331 */ 298, 1613, 360, 360, 360, 1244, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1265, 360,
  /* 19351 */ 360, 360, 0, 0, 1349, 0, 0, 0, 1353, 0, 1355, 0, 0, 0, 1358, 0, 0, 0, 0, 0, 0, 1339, 0, 0, 0, 0, 0, 0, 0,
  /* 19380 */ 0, 0, 0, 1357, 0, 0, 0, 1360, 0, 0, 0, 0, 0, 1365, 0, 0, 0, 0, 1370, 0, 0, 0, 0, 0, 0, 0, 0, 1341, 0, 0,
  /* 19410 */ 0, 0, 0, 0, 0, 0, 487, 0, 0, 0, 0, 0, 0, 0, 0, 0, 695, 0, 0, 0, 699, 0, 0, 0, 0, 0, 0, 1377, 1378, 0, 0,
  /* 19441 */ 1381, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 0, 1739, 360, 360, 360, 360, 360, 360, 360, 360, 1262,
  /* 19464 */ 360, 360, 360, 360, 360, 360, 360, 1453, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 19485 */ 382, 382, 928, 298, 298, 298, 1521, 298, 0, 0, 0, 0, 360, 1526, 360, 360, 1529, 360, 360, 0, 0, 0, 1436,
  /* 19508 */ 0, 1094, 0, 0, 0, 1438, 0, 1099, 382, 382, 0, 1794, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 360, 1805, 360, 360,
  /* 19534 */ 1545, 360, 360, 360, 1547, 360, 360, 360, 0, 0, 0, 0, 382, 1551, 382, 382, 1554, 382, 382, 382, 382, 382,
  /* 19556 */ 382, 382, 382, 1562, 382, 382, 382, 382, 382, 382, 1647, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 19576 */ 1471, 0, 0, 0, 0, 0, 0, 0, 0, 0, 429, 0, 0, 0, 0, 0, 0, 0, 1601, 0, 0, 0, 0, 0, 1606, 0, 298, 298, 298,
  /* 19605 */ 298, 1611, 298, 298, 298, 298, 298, 793, 298, 795, 0, 0, 0, 0, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 0, 0, 298,
  /* 19632 */ 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 1624, 360, 360, 360, 0, 0, 1287, 0, 1096, 0, 0, 1293, 0,
  /* 19656 */ 382, 382, 382, 382, 382, 912, 913, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1145, 382, 382, 382, 382,
  /* 19677 */ 382, 382, 382, 0, 0, 1663, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565693, 565693, 565693, 0, 0, 0, 0, 1655, 382, 382,
  /* 19702 */ 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 360, 1804, 360, 0, 0, 1668, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 19731 */ 0, 0, 0, 0, 234, 202, 0, 0, 0, 0, 1678, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 360, 360,
  /* 19758 */ 1527, 360, 360, 360, 360, 1806, 360, 1808, 1809, 1810, 360, 382, 382, 382, 382, 1816, 382, 1818, 1819,
  /* 19777 */ 1820, 382, 382, 382, 382, 1327, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 1662, 0, 0, 0, 0, 0,
  /* 19800 */ 0, 0, 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 360, 360, 360, 1883, 360, 1884, 360, 360, 360, 382, 382, 382,
  /* 19824 */ 1889, 382, 1890, 0, 0, 360, 360, 382, 382, 1929, 1930, 360, 382, 360, 382, 360, 382, 0, 0, 0, 0, 0, 953,
  /* 19847 */ 0, 0, 0, 810, 360, 360, 360, 360, 360, 360, 1066, 360, 360, 360, 360, 1069, 1070, 360, 1072, 1073, 22528,
  /* 19868 */ 24576, 0, 0, 278, 20480, 278, 278, 278, 278, 0, 278, 306, 306, 306, 306, 326, 326, 326, 306, 326, 326,
  /* 19889 */ 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 347, 306, 347, 357, 368, 368, 368, 368, 368, 391, 368,
  /* 19910 */ 368, 368, 368, 368, 368, 368, 391, 391, 391, 391, 391, 368, 368, 391, 26807, 26807, 2, 2, 3, 47108, 5, 6,
  /* 19932 */ 0, 0, 0, 0, 0, 469, 0, 0, 0, 469, 0, 0, 0, 0, 478, 0, 0, 0, 0, 0, 0, 1367, 0, 0, 0, 0, 1372, 0, 0, 0, 0,
  /* 19963 */ 0, 0, 472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 966, 0, 968, 0, 0, 0, 502, 0, 463, 0, 0, 0, 0, 360, 360, 360,
  /* 19992 */ 360, 577, 360, 360, 360, 360, 360, 610, 360, 360, 360, 360, 360, 360, 0, 382, 382, 627, 382, 382, 634,
  /* 20013 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1335, 382, 1152, 382, 907, 382, 382, 382,
  /* 20034 */ 382, 382, 382, 915, 382, 382, 382, 382, 382, 382, 382, 1128, 382, 382, 382, 382, 382, 382, 382, 1136, 382,
  /* 20055 */ 925, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 704512, 0, 0, 0, 0, 0, 944, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 20086 */ 0, 0, 0, 0, 0, 751616, 845824, 0, 298, 298, 298, 1013, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298,
  /* 20108 */ 298, 298, 0, 0, 0, 0, 0, 0, 1047, 1048, 360, 360, 1051, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 20131 */ 1060, 360, 360, 1094, 1096, 45925, 1099, 1096, 382, 382, 382, 382, 382, 382, 1107, 1108, 382, 382, 382,
  /* 20150 */ 382, 1443, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1451, 382, 382, 382, 382, 1456, 382, 382, 382,
  /* 20170 */ 382, 382, 1462, 382, 382, 382, 382, 382, 382, 1115, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1446,
  /* 20190 */ 382, 382, 382, 382, 382, 382, 382, 382, 1111, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1120, 382,
  /* 20211 */ 382, 382, 360, 360, 382, 26807, 27031, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 1189, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 20238 */ 0, 0, 1199, 0, 0, 0, 0, 704, 0, 0, 707, 0, 0, 0, 0, 234, 234, 0, 713, 298, 298, 298, 1230, 298, 298, 298,
  /* 20264 */ 298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 515, 298, 298, 298, 298, 298, 1390, 298, 298, 298,
  /* 20288 */ 298, 298, 298, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 1035, 360, 360, 1409, 360, 360, 360, 360, 360,
  /* 20310 */ 360, 360, 360, 360, 360, 360, 360, 360, 1071, 360, 360, 0, 0, 0, 0, 1508, 0, 0, 0, 0, 0, 298, 1515, 298,
  /* 20334 */ 298, 298, 298, 298, 298, 782, 298, 298, 298, 298, 298, 298, 298, 298, 298, 785, 298, 786, 298, 298, 298,
  /* 20355 */ 298, 298, 298, 298, 298, 298, 1522, 0, 0, 0, 360, 360, 360, 1528, 360, 360, 360, 0, 1286, 0, 0, 1096, 0,
  /* 20378 */ 1292, 0, 0, 382, 382, 382, 382, 382, 649, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1332, 382,
  /* 20399 */ 382, 382, 382, 0, 382, 1553, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 921,
  /* 20420 */ 382, 0, 0, 0, 1603, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1223, 1224, 298, 298, 298,
  /* 20444 */ 298, 360, 360, 360, 1703, 360, 360, 360, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 382,
  /* 20466 */ 382, 382, 1870, 382, 1872, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 0, 0, 0, 417, 0, 0, 0, 1881,
  /* 20492 */ 360, 360, 360, 360, 360, 360, 360, 360, 1887, 382, 382, 382, 382, 382, 382, 898, 382, 382, 382, 382, 382,
  /* 20513 */ 903, 382, 382, 382, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 288, 0, 307, 307, 307, 307, 327, 327, 335,
  /* 20536 */ 307, 327, 327, 327, 327, 327, 327, 327, 327, 327, 327, 327, 307, 327, 327, 369, 369, 369, 369, 369, 392,
  /* 20557 */ 369, 369, 369, 369, 369, 369, 369, 392, 392, 392, 392, 392, 369, 369, 392, 26807, 27031, 2, 2, 3, 47108,
  /* 20578 */ 5, 6, 0, 0, 466, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 991, 430, 0, 0, 0, 0, 0, 0, 360, 360, 360,
  /* 20609 */ 360, 578, 360, 360, 590, 360, 360, 360, 360, 360, 1748, 360, 360, 360, 382, 382, 382, 382, 1752, 382, 382,
  /* 20630 */ 382, 382, 878, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1652, 1653, 382, 382, 382, 382,
  /* 20651 */ 635, 382, 382, 647, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1118, 382, 382, 382, 382, 382, 0, 0,
  /* 20673 */ 703, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 0, 0, 0, 0, 0, 977, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1595, 0, 0,
  /* 20705 */ 0, 0, 855, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 382, 382, 382, 382,
  /* 20726 */ 1469, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 360, 1803, 360, 360, 360, 360, 1049, 360, 360, 360,
  /* 20750 */ 360, 360, 360, 1055, 360, 360, 360, 360, 360, 360, 360, 1706, 382, 382, 382, 382, 382, 382, 1712, 382, 0,
  /* 20771 */ 0, 0, 1163, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1173, 0, 0, 0, 0, 716, 0, 0, 0, 0, 0, 722, 0, 0, 0, 0, 0, 0, 0,
  /* 20803 */ 360, 360, 360, 575, 360, 360, 360, 360, 360, 360, 1413, 360, 360, 360, 360, 360, 360, 360, 360, 360, 618,
  /* 20824 */ 360, 360, 0, 382, 382, 382, 0, 1202, 0, 0, 0, 0, 0, 0, 1209, 0, 0, 0, 0, 0, 0, 0, 0, 205, 205, 205, 0, 0,
  /* 20852 */ 0, 0, 0, 382, 1326, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 1725, 0, 0, 0,
  /* 20876 */ 0, 1579, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 135168, 0, 135168, 0, 0, 1768, 0, 0, 0, 0, 0, 0, 0, 298, 360,
  /* 20905 */ 360, 360, 360, 360, 360, 360, 1750, 360, 382, 382, 382, 382, 382, 382, 382, 1116, 382, 382, 382, 1119,
  /* 20925 */ 382, 382, 382, 382, 360, 360, 360, 360, 1782, 360, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1147,
  /* 20946 */ 382, 382, 382, 382, 0, 1792, 382, 0, 0, 0, 1796, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360,
  /* 20970 */ 1864, 360, 360, 382, 22528, 24576, 0, 224, 0, 20480, 0, 0, 0, 0, 0, 0, 308, 308, 308, 308, 328, 334, 334,
  /* 20993 */ 308, 334, 328, 334, 334, 334, 334, 334, 334, 334, 334, 334, 334, 334, 308, 334, 334, 370, 370, 370, 370,
  /* 21014 */ 370, 393, 370, 370, 370, 370, 370, 370, 370, 393, 393, 393, 393, 393, 370, 370, 393, 26807, 26807, 2, 2,
  /* 21035 */ 3, 47108, 5, 6, 0, 0, 522, 298, 298, 298, 528, 298, 298, 298, 535, 298, 0, 0, 0, 0, 0, 537, 0, 0, 431, 0,
  /* 21061 */ 558, 0, 503, 0, 0, 0, 537, 431, 564, 0, 0, 0, 0, 0, 360, 567, 360, 360, 579, 360, 360, 591, 360, 360, 360,
  /* 21086 */ 360, 360, 1811, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1821, 360, 360, 601, 360, 360, 360, 360, 616,
  /* 21107 */ 360, 360, 360, 360, 0, 382, 382, 624, 382, 382, 636, 382, 382, 648, 382, 382, 382, 658, 382, 382, 382,
  /* 21128 */ 382, 673, 382, 382, 382, 382, 1556, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1565, 895, 382, 382,
  /* 21149 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1152, 941, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 21174 */ 0, 0, 0, 0, 0, 1009, 0, 0, 0, 0, 960, 961, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 143360, 143360, 143360,
  /* 21200 */ 143360, 143360, 298, 298, 298, 298, 1014, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 0, 1033,
  /* 21220 */ 0, 0, 0, 360, 360, 360, 1050, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1431, 360, 360,
  /* 21242 */ 360, 1110, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1312, 0, 0, 0, 1204,
  /* 21264 */ 0, 1206, 0, 0, 0, 0, 0, 1212, 0, 0, 0, 0, 0, 0, 230, 0, 0, 0, 253, 0, 254, 0, 0, 0, 0, 1216, 298, 298,
  /* 21292 */ 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1020, 298, 298, 360, 360, 1243, 360, 360, 360,
  /* 21313 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1087, 360, 360, 1267, 360, 360, 360, 360, 360, 360, 360,
  /* 21334 */ 360, 360, 360, 360, 360, 360, 1278, 360, 360, 360, 360, 843, 360, 360, 845, 360, 847, 360, 360, 360, 360,
  /* 21355 */ 360, 360, 360, 1548, 360, 360, 0, 0, 0, 0, 382, 382, 1348, 0, 0, 1350, 0, 0, 0, 1354, 0, 0, 0, 0, 0, 0, 0,
  /* 21382 */ 0, 0, 298, 298, 298, 298, 516, 298, 298, 0, 0, 0, 1364, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 0,
  /* 21410 */ 0, 298, 298, 298, 298, 1391, 298, 298, 298, 1393, 298, 298, 1395, 298, 298, 298, 298, 298, 298, 794, 298,
  /* 21431 */ 0, 0, 0, 0, 0, 0, 0, 800, 360, 360, 360, 1410, 360, 1412, 360, 360, 360, 360, 360, 360, 360, 1418, 360,
  /* 21454 */ 360, 0, 0, 1287, 0, 0, 0, 0, 0, 1293, 0, 0, 0, 382, 382, 382, 382, 382, 1569, 382, 382, 382, 382, 382,
  /* 21478 */ 382, 382, 382, 382, 0, 0, 0, 0, 930, 0, 0, 0, 936, 0, 0, 0, 382, 382, 382, 1455, 382, 382, 382, 382, 382,
  /* 21503 */ 382, 382, 1463, 382, 382, 382, 382, 382, 645, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1763,
  /* 21524 */ 0, 1765, 0, 0, 0, 0, 0, 0, 1482, 0, 0, 0, 0, 0, 1485, 1486, 0, 0, 0, 0, 0, 0, 438, 0, 0, 298, 298, 298,
  /* 21552 */ 298, 298, 298, 519, 0, 0, 0, 0, 1495, 0, 0, 0, 0, 1499, 0, 0, 0, 0, 0, 1503, 1504, 0, 0, 1507, 0, 0, 0, 0,
  /* 21580 */ 0, 0, 298, 298, 298, 298, 298, 298, 1221, 298, 298, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 799, 0, 0,
  /* 21604 */ 0, 360, 360, 1534, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1253, 360, 360, 298,
  /* 21625 */ 0, 0, 0, 360, 1619, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1275, 360, 360, 360, 360, 360, 1627,
  /* 21647 */ 1628, 360, 360, 360, 360, 1632, 360, 360, 360, 360, 360, 360, 382, 1641, 382, 382, 382, 382, 1568, 382,
  /* 21667 */ 382, 1570, 382, 382, 382, 1572, 382, 382, 382, 1575, 1700, 360, 360, 360, 360, 360, 360, 382, 382, 382,
  /* 21687 */ 382, 1709, 1710, 1711, 382, 382, 382, 382, 382, 1645, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 21707 */ 382, 1723, 382, 0, 0, 0, 1778, 360, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 1788, 382, 382, 382,
  /* 21729 */ 382, 382, 1328, 382, 382, 1330, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 1923, 360, 360, 360, 1925, 382,
  /* 21751 */ 382, 382, 0, 0, 0, 0, 1825, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 1082, 360, 360, 360, 360, 360,
  /* 21775 */ 360, 1088, 360, 1837, 360, 1839, 382, 382, 382, 382, 382, 382, 382, 1847, 382, 1849, 0, 0, 0, 0, 0, 0,
  /* 21797 */ 1379, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 1685, 298, 0, 0, 1905, 1906, 382, 382, 0, 0, 0, 0,
  /* 21823 */ 360, 360, 360, 360, 360, 360, 382, 382, 1814, 382, 382, 382, 382, 382, 382, 382, 0, 0, 360, 360, 382, 382,
  /* 21845 */ 360, 382, 360, 382, 1933, 1934, 360, 382, 0, 0, 0, 0, 0, 988, 0, 478, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298,
  /* 21872 */ 298, 511, 298, 298, 298, 0, 0, 0, 225, 226, 227, 228, 0, 0, 0, 0, 0, 0, 234, 0, 0, 0, 0, 0, 1178, 0, 0, 0,
  /* 21900 */ 0, 0, 0, 0, 0, 0, 0, 0, 135168, 135168, 135168, 135168, 135168, 22528, 24576, 228, 228, 227, 20480, 227,
  /* 21920 */ 227, 227, 227, 0, 295, 309, 309, 309, 309, 329, 329, 329, 309, 337, 340, 348, 348, 348, 348, 348, 348,
  /* 21941 */ 348, 348, 348, 348, 348, 309, 348, 348, 371, 371, 371, 371, 371, 394, 371, 371, 371, 371, 371, 371, 371,
  /* 21962 */ 394, 394, 394, 394, 394, 371, 371, 394, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 423, 424, 425,
  /* 21986 */ 426, 0, 0, 0, 0, 0, 0, 0, 434, 0, 0, 0, 0, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1672, 0, 0, 0, 419,
  /* 22017 */ 480, 481, 482, 0, 0, 0, 0, 0, 488, 0, 0, 0, 0, 0, 0, 0, 0, 1369, 0, 0, 0, 0, 0, 0, 0, 0, 0, 565694, 75776,
  /* 22046 */ 565694, 0, 75776, 0, 0, 0, 0, 0, 488, 0, 0, 0, 0, 0, 298, 298, 509, 298, 298, 517, 298, 0, 0, 0, 360, 360,
  /* 22072 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1279, 298, 298, 526, 298, 298, 298,
  /* 22093 */ 298, 533, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0, 1483, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 250, 0, 0, 0, 0, 0, 0,
  /* 22123 */ 556, 0, 0, 0, 488, 0, 0, 0, 0, 0, 0, 552, 488, 488, 0, 0, 0, 0, 737, 810, 360, 813, 360, 360, 360, 360,
  /* 22149 */ 360, 360, 360, 360, 1273, 360, 360, 360, 360, 360, 360, 360, 0, 0, 0, 552, 0, 0, 552, 360, 360, 573, 576,
  /* 22172 */ 360, 583, 360, 360, 360, 360, 360, 859, 360, 360, 360, 865, 360, 620, 45925, 810, 623, 382, 597, 600, 360,
  /* 22193 */ 360, 360, 609, 613, 360, 360, 360, 360, 360, 0, 382, 382, 382, 382, 382, 1444, 382, 382, 382, 1447, 382,
  /* 22214 */ 1449, 382, 382, 382, 382, 382, 382, 1873, 382, 382, 0, 1876, 0, 0, 0, 0, 0, 0, 0, 505, 0, 298, 298, 298,
  /* 22238 */ 298, 298, 298, 520, 630, 633, 382, 640, 382, 382, 382, 654, 657, 382, 382, 382, 666, 670, 382, 382, 382,
  /* 22259 */ 382, 382, 1646, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 917, 382, 382, 382, 382, 382, 0, 0, 747,
  /* 22281 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 757, 0, 0, 0, 0, 0, 0, 1510, 1511, 0, 1513, 1514, 298, 1516, 298, 298, 298,
  /* 22307 */ 298, 298, 298, 1027, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 417, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 360,
  /* 22334 */ 360, 360, 360, 360, 360, 382, 382, 896, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 22355 */ 1465, 382, 382, 924, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 218, 219, 220, 0, 0, 0, 0, 996, 0,
  /* 22383 */ 0, 0, 0, 0, 1003, 0, 0, 0, 0, 0, 0, 0, 0, 1498, 0, 0, 0, 0, 0, 0, 0, 0, 0, 810, 360, 360, 360, 360, 360,
  /* 22412 */ 360, 360, 360, 360, 360, 0, 0, 0, 0, 1039, 0, 0, 0, 0, 810, 360, 360, 360, 360, 360, 360, 615, 360, 360,
  /* 22436 */ 360, 360, 360, 0, 382, 382, 382, 382, 1124, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 22457 */ 382, 382, 1311, 382, 0, 0, 1153, 0, 682, 0, 0, 0, 1155, 0, 686, 0, 0, 0, 0, 0, 0, 0, 427, 428, 0, 0, 0, 0,
  /* 22485 */ 0, 0, 0, 0, 0, 915456, 28672, 0, 0, 0, 0, 0, 0, 1174, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 759, 0,
  /* 22515 */ 360, 360, 360, 1258, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1541, 360, 360, 360, 0,
  /* 22536 */ 1577, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 970, 0, 298, 0, 0, 0, 360, 360, 360, 360, 1622, 360, 360,
  /* 22564 */ 360, 360, 360, 360, 360, 1261, 360, 1263, 360, 360, 360, 360, 360, 1266, 382, 1644, 382, 382, 382, 382,
  /* 22584 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1336, 0, 0, 1727, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 22611 */ 0, 1158, 0, 360, 1807, 360, 360, 360, 360, 382, 1813, 382, 382, 382, 1817, 382, 382, 382, 382, 382, 646,
  /* 22632 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 889, 382, 382, 382, 382, 382, 0, 0, 360, 360, 382, 382,
  /* 22654 */ 360, 382, 1931, 1932, 360, 382, 360, 382, 0, 0, 0, 0, 0, 1193, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 139264,
  /* 22680 */ 139264, 139264, 139264, 139264, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 289, 0, 298, 298, 298, 298, 298,
  /* 22701 */ 0, 360, 360, 360, 360, 360, 360, 1742, 360, 360, 372, 372, 372, 395, 372, 372, 372, 372, 372, 372, 372,
  /* 22722 */ 395, 395, 395, 395, 395, 372, 372, 395, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 437, 0, 0, 0, 0, 0,
  /* 22747 */ 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 442, 443, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 0, 808960, 0, 0, 0,
  /* 22775 */ 0, 0, 0, 0, 905216, 437, 0, 0, 437, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 234, 234, 0, 0, 0, 729, 0, 0, 0,
  /* 22805 */ 0, 0, 0, 0, 0, 738, 0, 742, 0, 0, 695, 778, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298,
  /* 22829 */ 298, 298, 298, 1397, 298, 298, 360, 828, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 837, 360,
  /* 22850 */ 360, 0, 0, 45925, 0, 0, 382, 382, 382, 382, 382, 382, 382, 382, 382, 887, 382, 382, 382, 891, 382, 382,
  /* 22872 */ 360, 360, 360, 842, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 872,
  /* 22893 */ 972, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1187, 0, 932, 0, 0, 0, 0, 0, 938, 0, 0, 0, 0, 0, 0, 0,
  /* 22925 */ 0, 0, 298, 298, 298, 773, 298, 298, 298, 0, 0, 0, 0, 1205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 201, 201,
  /* 22953 */ 201, 201, 360, 360, 1257, 360, 360, 1260, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1416, 360,
  /* 22973 */ 360, 360, 360, 360, 382, 1314, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1564,
  /* 22994 */ 382, 1421, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1419, 360, 0, 0,
  /* 23015 */ 1769, 0, 0, 0, 1772, 0, 0, 298, 360, 360, 360, 360, 360, 360, 833, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 23038 */ 360, 1635, 360, 360, 360, 382, 382, 382, 0, 0, 540, 0, 0, 0, 0, 0, 0, 0, 0, 0, 540, 0, 0, 0, 0, 0, 0, 0,
  /* 23066 */ 0, 540, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 580, 360, 360, 360, 360, 360, 611, 360, 360, 360, 360, 360,
  /* 23090 */ 360, 0, 382, 382, 382, 382, 382, 637, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 23111 */ 1574, 382, 0, 382, 676, 0, 0, 0, 0, 26807, 2, 6, 0, 0, 0, 0, 683, 687, 0, 0, 0, 0, 743, 0, 0, 0, 0, 0, 0,
  /* 23140 */ 0, 0, 0, 0, 0, 0, 415744, 234, 0, 0, 360, 360, 1095, 1096, 45925, 1100, 1096, 382, 382, 382, 382, 382,
  /* 23162 */ 382, 382, 382, 382, 1761, 382, 382, 0, 0, 0, 0, 0, 0, 0, 229, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 236,
  /* 23191 */ 0, 0, 22528, 24576, 0, 0, 229, 20480, 229, 229, 229, 229, 0, 229, 310, 310, 310, 310, 0, 0, 0, 310, 0, 0,
  /* 23215 */ 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 229, 310, 229, 229, 373, 373, 373, 373, 373, 396, 373,
  /* 23236 */ 373, 373, 373, 373, 373, 373, 396, 396, 396, 396, 396, 373, 373, 396, 26807, 26807, 2, 2, 3, 47108, 5, 6,
  /* 23258 */ 0, 0, 0, 0, 438, 439, 0, 0, 0, 0, 0, 234, 234, 234, 0, 0, 0, 0, 0, 0, 456, 0, 458, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 23289 */ 248, 0, 0, 0, 248, 0, 248, 0, 0, 0, 0, 453, 0, 0, 0, 0, 0, 459, 460, 0, 0, 0, 0, 0, 0, 0, 486, 0, 0, 0, 0,
  /* 23320 */ 0, 0, 0, 0, 0, 263, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 529, 298, 298, 534, 298, 298, 0, 0, 0, 0, 0, 0,
  /* 23348 */ 0, 0, 1512, 0, 298, 298, 298, 298, 1518, 298, 551, 0, 0, 557, 0, 0, 0, 0, 483, 0, 0, 560, 0, 0, 0, 0, 0,
  /* 23375 */ 0, 471, 735, 0, 0, 0, 739, 0, 0, 0, 0, 0, 0, 0, 1340, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 1610, 298, 298,
  /* 23404 */ 298, 298, 0, 0, 0, 553, 0, 0, 553, 360, 568, 360, 360, 360, 360, 586, 360, 360, 0, 1096, 45925, 0, 1096,
  /* 23427 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 916, 382, 382, 382, 382, 382, 382, 360, 360, 602, 604, 360,
  /* 23448 */ 360, 614, 360, 360, 360, 360, 360, 0, 382, 382, 625, 0, 0, 0, 715, 0, 0, 0, 0, 0, 0, 0, 0, 0, 725, 0, 0,
  /* 23475 */ 0, 0, 0, 1366, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 419840, 0, 419840, 0, 0, 0, 0, 730, 0, 0, 0, 0, 0, 0, 737,
  /* 23505 */ 0, 0, 0, 0, 0, 0, 0, 0, 1607, 298, 1609, 298, 298, 298, 1612, 298, 0, 746, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 23533 */ 0, 0, 0, 0, 1489, 0, 761, 762, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 0, 0, 298, 298,
  /* 23559 */ 298, 298, 781, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1031, 298, 0, 0, 0, 0, 0, 874, 382,
  /* 23582 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 894, 382, 382, 382, 909, 382, 382, 382,
  /* 23603 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 664, 382, 382, 382, 0, 0, 0, 975, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 23629 */ 0, 0, 0, 255, 0, 0, 0, 1090, 360, 0, 1096, 45925, 0, 1096, 382, 382, 382, 382, 1104, 382, 382, 382, 382,
  /* 23652 */ 382, 879, 382, 382, 382, 382, 382, 382, 382, 382, 382, 893, 0, 0, 0, 1176, 0, 0, 0, 0, 1181, 0, 0, 1183,
  /* 23676 */ 0, 1185, 0, 0, 0, 0, 0, 1496, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110996, 110996, 110996, 110996, 110996, 0,
  /* 23701 */ 0, 0, 1191, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 462, 0, 0, 0, 1227, 1228, 298, 298, 298, 298, 298, 298, 0,
  /* 23729 */ 0, 0, 0, 1238, 0, 0, 0, 0, 0, 0, 1591, 0, 0, 0, 1594, 0, 0, 0, 0, 1599, 360, 360, 360, 1270, 360, 360,
  /* 23755 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 873, 360, 360, 1282, 0, 0, 0, 0,
  /* 23777 */ 1096, 0, 0, 0, 0, 382, 382, 382, 382, 382, 880, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1131,
  /* 23799 */ 382, 382, 382, 382, 382, 382, 382, 382, 1315, 382, 1317, 382, 382, 382, 382, 382, 1320, 382, 382, 382,
  /* 23819 */ 1324, 360, 1408, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1640, 382, 382, 0,
  /* 23840 */ 0, 1493, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 265, 0, 0, 1587, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 23873 */ 0, 1347, 298, 0, 0, 0, 1618, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 836, 360, 360, 360,
  /* 23895 */ 360, 0, 0, 0, 1669, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 478, 0, 0, 0, 360, 360, 360, 1781, 360, 360, 1783,
  /* 23923 */ 382, 382, 382, 382, 382, 382, 382, 382, 1791, 360, 360, 360, 382, 1841, 382, 382, 382, 382, 382, 382, 382,
  /* 23944 */ 382, 0, 0, 0, 0, 1476, 0, 0, 1479, 0, 0, 1855, 1856, 0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 23968 */ 382, 1707, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1907, 382, 1909, 0, 0, 1912, 360, 360, 360, 360,
  /* 23989 */ 360, 360, 382, 382, 382, 382, 643, 382, 382, 382, 382, 659, 661, 382, 382, 671, 382, 382, 382, 382, 382,
  /* 24010 */ 1759, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 932, 0, 0, 0, 938, 0, 0, 0, 254, 0, 0, 259, 0, 0, 0, 0, 0,
  /* 24038 */ 0, 0, 0, 266, 0, 0, 0, 0, 0, 1580, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 697, 0, 0, 0, 0, 22528, 24576, 0, 0,
  /* 24068 */ 279, 20480, 279, 279, 279, 279, 0, 296, 311, 311, 311, 311, 0, 0, 230, 311, 0, 0, 296, 296, 296, 296, 296,
  /* 24091 */ 296, 296, 296, 296, 296, 296, 311, 355, 358, 374, 374, 374, 374, 374, 397, 374, 374, 374, 374, 374, 374,
  /* 24112 */ 374, 397, 397, 397, 397, 397, 374, 374, 397, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 523, 298, 298, 298,
  /* 24135 */ 298, 298, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0, 1671, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 0, 0, 0, 0,
  /* 24164 */ 418, 0, 0, 546, 0, 0, 0, 0, 0, 360, 569, 360, 360, 360, 360, 360, 592, 360, 360, 360, 360, 1064, 360, 360,
  /* 24188 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 382, 0, 688, 0, 0, 690, 0, 0, 0, 0, 0,
  /* 24212 */ 0, 0, 0, 0, 0, 0, 263, 263, 263, 263, 263, 0, 0, 0, 690, 764, 765, 0, 0, 0, 298, 298, 771, 298, 775, 298,
  /* 24238 */ 777, 801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1361, 808, 809, 0, 801, 0, 810, 360, 360, 360, 360,
  /* 24266 */ 816, 360, 360, 823, 360, 360, 0, 1096, 45925, 0, 1096, 382, 382, 382, 382, 382, 382, 382, 382, 1109, 827,
  /* 24287 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 838, 360, 360, 360, 360, 1078, 360, 1080,
  /* 24308 */ 360, 360, 360, 360, 360, 1086, 360, 360, 360, 0, 0, 0, 0, 1096, 0, 0, 0, 0, 1295, 382, 382, 382, 0, 0, 0,
  /* 24333 */ 0, 0, 360, 1898, 360, 360, 360, 1902, 382, 1904, 382, 382, 382, 877, 382, 382, 884, 382, 382, 888, 382,
  /* 24354 */ 382, 382, 382, 382, 382, 382, 1760, 382, 382, 382, 0, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 382, 382,
  /* 24377 */ 382, 382, 1786, 382, 382, 382, 382, 382, 0, 0, 0, 0, 945, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0, 377,
  /* 24405 */ 377, 0, 973, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1586, 0, 298, 298, 1229, 298, 298, 298, 298, 298,
  /* 24432 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 360, 360, 360, 360, 360, 1777, 1241, 360, 360, 360, 360, 360, 360, 360,
  /* 24456 */ 360, 360, 360, 360, 360, 360, 360, 360, 850, 360, 360, 360, 360, 360, 360, 360, 360, 1271, 360, 360, 360,
  /* 24477 */ 360, 360, 360, 360, 360, 1277, 360, 360, 0, 1096, 45925, 0, 1096, 382, 382, 382, 382, 382, 1106, 382, 382,
  /* 24498 */ 382, 382, 382, 1470, 382, 382, 0, 0, 0, 0, 0, 1477, 0, 0, 1325, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 24521 */ 1331, 382, 382, 382, 382, 382, 0, 0, 0, 0, 360, 1913, 360, 360, 360, 360, 382, 1917, 932, 0, 938, 0, 0, 0,
  /* 24545 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 433, 0, 0, 360, 360, 360, 360, 1425, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 24571 */ 360, 360, 360, 1057, 360, 360, 360, 360, 0, 0, 1506, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 298,
  /* 24595 */ 298, 1028, 298, 298, 298, 0, 0, 0, 0, 0, 360, 360, 360, 360, 1536, 360, 360, 360, 360, 360, 360, 360, 360,
  /* 24618 */ 360, 360, 360, 1251, 360, 360, 360, 360, 1544, 360, 360, 360, 360, 360, 360, 360, 360, 360, 0, 1287, 0,
  /* 24639 */ 1293, 382, 382, 382, 382, 644, 650, 652, 382, 382, 382, 382, 382, 667, 382, 382, 382, 382, 382, 1457, 382,
  /* 24660 */ 1459, 382, 382, 382, 382, 382, 382, 1466, 382, 0, 1676, 0, 0, 0, 0, 1681, 298, 298, 298, 298, 298, 298,
  /* 24682 */ 1686, 0, 0, 0, 0, 0, 1604, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1226,
  /* 24706 */ 298, 360, 1701, 360, 360, 360, 360, 360, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 1852,
  /* 24727 */ 1726, 0, 0, 0, 0, 0, 0, 0, 1732, 1733, 0, 0, 0, 0, 0, 0, 0, 0, 77824, 0, 77824, 0, 0, 0, 0, 77824, 360,
  /* 24754 */ 1779, 360, 360, 360, 360, 382, 382, 382, 382, 382, 1787, 382, 1789, 382, 382, 382, 382, 751, 0, 0, 0, 0,
  /* 24776 */ 0, 0, 0, 0, 0, 0, 0, 0, 741, 0, 0, 0, 360, 360, 360, 1840, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0,
  /* 24802 */ 0, 0, 1475, 0, 0, 0, 0, 0, 360, 1882, 360, 360, 360, 360, 360, 360, 360, 382, 1888, 382, 382, 382, 382,
  /* 24825 */ 382, 881, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1722, 382, 382, 0, 0, 0, 0, 255, 0, 0, 0, 0,
  /* 24849 */ 0, 0, 0, 0, 0, 0, 0, 267, 0, 0, 0, 0, 0, 1670, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53248, 0, 0, 0, 0, 22528,
  /* 24880 */ 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 0, 0, 312, 312, 312, 312, 330, 330, 330, 312, 330, 330, 349, 349, 330,
  /* 24904 */ 330, 330, 330, 349, 330, 330, 330, 330, 330, 330, 330, 330, 330, 330, 312, 356, 359, 375, 375, 375, 398,
  /* 24925 */ 375, 375, 375, 375, 375, 375, 375, 398, 398, 398, 398, 398, 375, 375, 398, 26807, 26807, 2, 2, 3, 47108,
  /* 24946 */ 5, 6, 0, 0, 0, 0, 0, 449, 0, 0, 0, 449, 0, 474, 0, 0, 0, 0, 0, 0, 0, 0, 100352, 100352, 100352, 100352,
  /* 24972 */ 100352, 100352, 100557, 100352, 298, 525, 298, 298, 298, 298, 532, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 24994 */ 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544, 108544,
  /* 25007 */ 108544, 0, 0, 0, 0, 0, 543, 0, 548, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 421888, 0, 0, 0, 0, 0, 0, 505, 0,
  /* 25036 */ 548, 565, 0, 360, 570, 360, 360, 360, 360, 587, 593, 595, 0, 0, 0, 748, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 25063 */ 760, 0, 0, 0, 691, 0, 0, 0, 767, 0, 298, 298, 298, 298, 298, 298, 298, 298, 1222, 298, 298, 298, 298, 298,
  /* 25087 */ 298, 298, 790, 791, 298, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 360, 360, 360, 1775, 360,
  /* 25111 */ 360, 802, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 802, 748, 0, 0, 0, 0, 749, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 25143 */ 0, 984, 0, 0, 0, 0, 0, 713, 802, 0, 810, 360, 360, 360, 815, 360, 360, 360, 360, 360, 360, 1053, 360, 360,
  /* 25167 */ 360, 360, 360, 360, 360, 360, 360, 835, 360, 360, 360, 360, 360, 360, 360, 841, 360, 360, 360, 360, 360,
  /* 25188 */ 360, 360, 360, 360, 360, 851, 852, 360, 360, 0, 1435, 0, 0, 0, 0, 0, 1437, 0, 0, 0, 0, 382, 382, 0, 0, 0,
  /* 25214 */ 0, 26807, 2, 6, 0, 0, 0, 0, 681, 685, 0, 382, 382, 876, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 25238 */ 382, 382, 382, 668, 382, 382, 382, 298, 298, 1012, 298, 298, 298, 298, 298, 298, 1018, 298, 298, 298, 298,
  /* 25259 */ 298, 1022, 1036, 0, 0, 0, 0, 0, 946, 1040, 1033, 810, 360, 360, 360, 360, 360, 1046, 382, 382, 1125, 382,
  /* 25281 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 919, 382, 382, 382, 1160, 0, 0, 0, 0, 0, 0, 0,
  /* 25305 */ 0, 0, 0, 0, 0, 0, 0, 0, 1737, 0, 0, 1175, 0, 0, 0, 1179, 1180, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 1773, 360,
  /* 25334 */ 360, 360, 360, 360, 0, 0, 1203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 463, 0, 0, 1215, 298, 298, 298,
  /* 25361 */ 298, 1219, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 1394, 298, 298, 298, 298, 298, 298, 298, 298,
  /* 25382 */ 298, 298, 1231, 1232, 298, 298, 0, 0, 0, 0, 0, 1239, 0, 0, 0, 0, 0, 1680, 0, 298, 298, 1683, 1684, 298,
  /* 25406 */ 298, 298, 0, 0, 0, 298, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 967, 0, 0, 0, 0, 360, 360, 360, 360, 1259, 360,
  /* 25434 */ 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1264, 360, 360, 360, 360, 1313, 382, 382, 382, 382, 382,
  /* 25455 */ 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1452, 298, 1389, 298, 298, 298, 298, 1392, 298, 298,
  /* 25475 */ 298, 298, 298, 298, 298, 298, 298, 0, 0, 798, 0, 0, 0, 0, 0, 360, 360, 1423, 360, 360, 360, 360, 360, 360,
  /* 25499 */ 360, 360, 360, 360, 360, 360, 360, 1435, 0, 1437, 0, 382, 382, 382, 382, 1454, 382, 382, 382, 382, 382,
  /* 25520 */ 1460, 382, 382, 382, 382, 382, 382, 382, 1305, 382, 382, 382, 382, 382, 382, 382, 382, 1318, 382, 382,
  /* 25540 */ 382, 382, 382, 382, 382, 382, 1319, 382, 382, 382, 382, 382, 382, 382, 1480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 25565 */ 0, 0, 1488, 0, 0, 0, 0, 0, 1826, 0, 0, 1829, 360, 1831, 360, 360, 360, 360, 360, 360, 1427, 360, 360, 360,
  /* 25589 */ 360, 360, 360, 360, 360, 360, 1415, 360, 360, 360, 360, 360, 360, 0, 1505, 0, 0, 0, 1509, 0, 0, 0, 0, 298,
  /* 25613 */ 298, 298, 1517, 298, 298, 298, 298, 298, 1015, 298, 298, 298, 298, 298, 298, 298, 298, 298, 298, 536, 0,
  /* 25634 */ 0, 0, 0, 0, 0, 1532, 360, 360, 1535, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1540,
  /* 25656 */ 360, 360, 360, 360, 360, 382, 382, 382, 1555, 382, 1557, 382, 382, 1560, 382, 382, 382, 382, 382, 382,
  /* 25676 */ 382, 1445, 382, 382, 382, 382, 382, 382, 382, 382, 1875, 0, 0, 0, 0, 1877, 0, 0, 298, 0, 0, 0, 360, 360,
  /* 25700 */ 1620, 360, 360, 360, 360, 360, 360, 1625, 360, 360, 360, 360, 360, 1065, 360, 360, 360, 360, 360, 360,
  /* 25720 */ 360, 360, 360, 360, 1430, 360, 360, 360, 360, 360, 382, 382, 382, 1659, 382, 382, 0, 0, 0, 1664, 0, 0, 0,
  /* 25743 */ 0, 0, 0, 0, 0, 116736, 0, 0, 0, 0, 0, 0, 0, 0, 0, 950, 0, 0, 952, 0, 0, 0, 1687, 360, 360, 360, 360, 360,
  /* 25771 */ 360, 360, 360, 360, 360, 360, 360, 1697, 360, 360, 360, 360, 360, 1079, 360, 360, 360, 360, 360, 360, 360,
  /* 25792 */ 360, 360, 360, 848, 360, 360, 360, 360, 360, 360, 360, 1702, 360, 360, 360, 360, 382, 382, 382, 382, 382,
  /* 25813 */ 382, 382, 382, 382, 1559, 382, 382, 382, 382, 382, 382, 382, 382, 1472, 1473, 0, 0, 0, 0, 0, 0, 382, 382,
  /* 25836 */ 382, 1715, 382, 382, 382, 382, 1720, 382, 382, 382, 382, 0, 0, 0, 0, 360, 360, 1914, 1915, 360, 360, 382,
  /* 25858 */ 382, 0, 0, 0, 1728, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1736, 0, 0, 0, 0, 0, 1858, 360, 360, 1860, 360, 1862, 360,
  /* 25885 */ 360, 360, 360, 1867, 1853, 0, 0, 0, 0, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1866, 382, 382, 382,
  /* 25907 */ 382, 1716, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 1478, 0, 1880, 360, 360, 360, 360,
  /* 25930 */ 360, 360, 1885, 1886, 360, 382, 382, 382, 382, 382, 382, 382, 1874, 382, 0, 0, 0, 0, 0, 0, 0, 0, 261, 0,
  /* 25954 */ 0, 0, 261, 0, 261, 0, 1891, 1892, 382, 0, 0, 1894, 1895, 0, 360, 360, 360, 360, 360, 360, 382, 382, 382,
  /* 25977 */ 382, 897, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 890, 382, 382, 382, 382, 0, 0, 360, 1927,
  /* 25999 */ 382, 1928, 360, 382, 360, 382, 360, 382, 360, 382, 0, 0, 0, 0, 0, 77824, 0, 0, 77824, 77824, 77824, 77824,
  /* 26021 */ 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 77824, 0, 0, 22528, 24576, 0, 0, 0, 20480,
  /* 26039 */ 0, 0, 0, 0, 0, 0, 313, 313, 313, 313, 331, 331, 331, 313, 331, 331, 331, 331, 331, 331, 331, 331, 331,
  /* 26062 */ 331, 331, 313, 331, 331, 376, 376, 376, 376, 376, 399, 376, 376, 376, 376, 376, 376, 376, 399, 399, 399,
  /* 26083 */ 399, 399, 376, 376, 399, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 464, 0, 0, 0, 360, 360, 360,
  /* 26108 */ 360, 360, 584, 360, 360, 360, 360, 360, 860, 360, 360, 360, 360, 360, 620, 45925, 810, 623, 382, 0, 0,
  /* 26129 */ 689, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 735, 735, 0, 745, 0, 0, 0, 0, 0, 0, 745, 0, 0, 0, 0, 0, 0, 0,
  /* 26161 */ 0, 0, 360, 360, 360, 360, 360, 1835, 360, 382, 382, 382, 927, 0, 0, 0, 0, 0, 0, 933, 0, 0, 0, 939, 0, 0,
  /* 26187 */ 0, 0, 768, 810, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 0, 0, 0, 0, 382, 382, 0, 0, 958, 0, 0,
  /* 26212 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 743, 0, 0, 0, 0, 0, 0, 0, 0, 997, 0, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 26245 */ 1371, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 1026, 298, 298, 298, 298, 298, 0, 0, 0, 0, 0, 0, 0, 693,
  /* 26270 */ 694, 0, 0, 0, 0, 0, 0, 0, 0, 230, 0, 0, 0, 0, 234, 0, 0, 360, 360, 1062, 360, 360, 360, 360, 360, 360,
  /* 26296 */ 360, 1068, 360, 360, 360, 360, 360, 360, 1537, 360, 360, 360, 360, 360, 360, 360, 360, 1543, 360, 360,
  /* 26316 */ 1076, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1637, 360, 360, 382, 382, 1642, 0,
  /* 26337 */ 0, 0, 0, 1164, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 298, 0, 0, 379, 379, 0, 298, 298, 298, 298, 298, 1220,
  /* 26364 */ 298, 298, 298, 298, 298, 298, 298, 298, 298, 0, 797, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1337, 0, 0, 0, 0, 0, 0, 0,
  /* 26392 */ 0, 0, 0, 0, 0, 479, 0, 0, 0, 1552, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 26416 */ 382, 1321, 382, 382, 382, 1755, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 1878,
  /* 26438 */ 1879, 382, 382, 1920, 382, 0, 0, 0, 0, 360, 360, 360, 360, 382, 382, 382, 382, 382, 1143, 1144, 382, 382,
  /* 26460 */ 382, 382, 382, 382, 382, 382, 0, 0, 0, 0, 931, 0, 0, 0, 937, 0, 0, 0, 0, 0, 243, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 26489 */ 0, 0, 0, 0, 0, 758, 0, 0, 0, 0, 258, 0, 0, 0, 0, 0, 0, 0, 258, 0, 0, 0, 0, 258, 377, 377, 377, 400, 377,
  /* 26518 */ 377, 377, 377, 377, 377, 377, 400, 400, 400, 400, 400, 377, 377, 400, 26807, 26807, 2, 2, 3, 47108, 5, 6,
  /* 26540 */ 0, 0, 382, 382, 638, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1450, 382, 382, 382,
  /* 26562 */ 360, 360, 360, 1063, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1751, 382, 382, 382, 382,
  /* 26583 */ 382, 382, 1123, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1464, 382, 382,
  /* 26604 */ 382, 1491, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53248, 0, 0, 0, 0, 0, 1729, 0, 0, 0, 0, 0, 0, 0,
  /* 26635 */ 0, 0, 0, 0, 405, 405, 405, 405, 405, 22528, 24576, 0, 0, 280, 20480, 280, 280, 280, 280, 0, 280, 314, 314,
  /* 26658 */ 314, 314, 0, 0, 0, 314, 0, 0, 280, 280, 280, 280, 280, 280, 280, 280, 280, 280, 280, 314, 280, 280, 378,
  /* 26681 */ 378, 378, 378, 378, 401, 378, 378, 378, 378, 378, 378, 378, 401, 401, 401, 401, 401, 378, 378, 401, 26807,
  /* 26702 */ 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 382, 382, 1468, 382, 382, 382, 382, 382, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 26729 */ 1802, 360, 360, 360, 379, 379, 379, 402, 379, 379, 379, 379, 379, 379, 379, 402, 402, 402, 402, 402, 379,
  /* 26750 */ 379, 402, 26807, 26807, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 541, 0, 0, 0, 0, 0, 0, 0, 0, 0, 541, 0, 0, 0, 0,
  /* 26779 */ 0, 0, 0, 0, 563, 0, 0, 0, 0, 0, 0, 360, 360, 360, 360, 582, 360, 360, 360, 360, 360, 831, 360, 360, 360,
  /* 26804 */ 360, 360, 360, 360, 360, 360, 360, 619, 360, 0, 382, 382, 382, 382, 382, 639, 382, 382, 382, 382, 382,
  /* 26825 */ 382, 382, 382, 382, 382, 382, 382, 382, 1563, 382, 382, 382, 360, 360, 360, 858, 360, 360, 360, 360, 360,
  /* 26846 */ 360, 360, 620, 45925, 810, 623, 382, 382, 382, 641, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382,
  /* 26867 */ 382, 1309, 1310, 382, 382, 360, 360, 360, 1284, 0, 0, 0, 1096, 1290, 0, 0, 0, 382, 382, 382, 382, 382,
  /* 26889 */ 1303, 382, 382, 382, 382, 382, 382, 382, 382, 382, 382, 1448, 382, 382, 382, 382, 382, 420, 0, 0, 0, 0, 0,
  /* 26912 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 124928, 298, 298, 298, 1024, 298, 298, 298, 298, 298, 298, 298, 0, 0, 0, 0,
  /* 26938 */ 0, 0, 0, 719, 0, 721, 0, 0, 0, 0, 0, 0, 0, 0, 804, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0,
  /* 26969 */ 360, 1242, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1549, 360, 0, 0, 0, 0,
  /* 26991 */ 382, 382, 1255, 1256, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1428, 360,
  /* 27011 */ 360, 360, 360, 360, 360, 360, 1433, 360, 1434, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 382, 382, 382, 382,
  /* 27036 */ 910, 382, 382, 382, 382, 382, 382, 382, 382, 382, 920, 382, 1576, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  /* 27062 */ 0, 0, 1598, 0, 1600, 0, 0, 0, 0, 0, 0, 0, 0, 298, 298, 298, 298, 298, 298, 298, 298, 783, 298, 298, 298,
  /* 27087 */ 298, 298, 298, 298, 298, 1030, 298, 298, 0, 0, 0, 0, 0, 22528, 24576, 0, 0, 0, 20480, 0, 0, 0, 0, 290, 0,
  /* 27112 */ 298, 298, 298, 298, 298, 0, 360, 360, 360, 360, 1740, 360, 360, 360, 360, 415744, 0, 0, 0, 415744, 0, 0,
  /* 27134 */ 0, 0, 0, 0, 0, 0, 0, 415744, 0, 0, 416014, 416014, 0, 0, 0, 416014, 0, 0, 0, 0, 0, 0, 0, 415744, 0,
  /* 27159 */ 415744, 0, 0, 0, 0, 415744, 0, 0, 0, 0, 415744, 415744, 0, 415744, 0, 0, 0, 0, 0, 0, 415744, 0, 0, 0, 0,
  /* 27184 */ 0, 415744, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 415744, 0, 0, 0, 0, 0, 415744, 415744, 0, 0, 0, 0, 0, 0, 0,
  /* 27213 */ 0, 0, 0, 232, 233, 0, 234, 0, 0, 0, 0, 0, 415744, 415744, 0, 0, 0, 2, 1083392, 3, 47108, 5, 6, 0, 0, 0, 0,
  /* 27240 */ 0, 83968, 0, 83968, 0, 0, 0, 0, 0, 0, 0, 0, 0, 206, 0, 240, 0, 206, 206, 240, 0, 0, 0, 0, 153600, 0, 0,
  /* 27267 */ 528384, 201, 202, 0, 0, 0, 0, 0, 0, 0, 0, 122880, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1356, 0, 0, 0, 0, 0, 0,
  /* 27295 */ 557056, 557056, 0, 0, 0, 0, 0, 1083392, 6, 0, 0, 0, 0, 0, 0, 0, 0, 543, 0, 548, 0, 0, 0, 0, 449, 557056,
  /* 27321 */ 557056, 557056, 557056, 907264, 557056, 557056, 557056, 557056, 557056, 557056, 0, 0, 0, 0, 557056,
  /* 27336 */ 557056, 0, 0, 0, 0, 0, 185, 1100185, 0, 0, 0, 0, 0, 0, 0, 0, 0, 77824, 0, 0, 0, 0, 0, 0, 0, 0, 420172,
  /* 27363 */ 420172, 420172, 0, 420172, 420172, 420172, 420172, 420172, 420172, 420172, 420172, 420172, 420172, 420172,
  /* 27377 */ 420172, 420172, 420172, 0, 0, 0, 0, 0, 420172, 420172, 420172, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0,
  /* 27401 */ 110873, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 756, 0, 0, 0, 0, 271, 271, 0, 0, 0, 271, 0, 0, 0, 0, 0, 424233,
  /* 27430 */ 0, 0, 0, 0, 0, 0, 475, 360, 360, 360, 360, 360, 360, 360, 360, 360, 1414, 360, 360, 360, 1417, 360, 360,
  /* 27453 */ 360, 0, 423936, 297, 424233, 424233, 424233, 0, 0, 2, 2, 3, 47108, 5, 6, 0, 0, 0, 0, 0, 129024, 0, 0, 0,
  /* 27477 */ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 532480, 811008, 557056, 557056, 557056, 557056, 907264, 557056, 557056,
  /* 27497 */ 557056, 557056, 557056, 557056, 868, 0, 0, 871, 557056, 557056, 0, 0, 0, 0, 0, 557056, 686080, 557056,
  /* 27515 */ 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 557056, 911360, 557056, 557056,
  /* 27528 */ 557056, 557056, 557056, 557056, 0, 0, 0, 53248, 53248, 53248, 0, 53248, 53248, 53248, 53248, 53248, 53248,
  /* 27545 */ 53248, 53248, 53248, 53248, 53248, 53248, 53248, 53248, 0, 0, 0, 0, 0, 53248, 53248, 53248, 0, 0, 0, 0, 0,
  /* 27566 */ 0, 0, 0, 0, 0, 239, 0, 241, 0, 0, 0, 0, 0, 0, 843776, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 492, 0, 0, 0
];

XQueryParser.EXPECTED =
[
  /*    0 */ 424, 427, 431, 435, 439, 443, 447, 1101, 453, 1456, 1453, 459, 517, 1163, 1300, 1454, 463, 1282, 467, 490,
  /*   20 */ 497, 472, 479, 478, 483, 487, 467, 496, 504, 557, 907, 1455, 465, 467, 502, 504, 558, 1032, 508, 467, 515,
  /*   41 */ 492, 1453, 1499, 468, 498, 1453, 661, 511, 521, 526, 530, 449, 664, 693, 534, 538, 542, 1502, 546, 550,
  /*   61 */ 554, 563, 567, 571, 575, 579, 522, 1453, 583, 700, 1453, 1453, 588, 1453, 1103, 1453, 1453, 1453, 1453,
  /*   80 */ 1453, 1082, 1453, 584, 1453, 1453, 1453, 1453, 1453, 1453, 1453, 1209, 1453, 1453, 1453, 1453, 1453, 589,
  /*   98 */ 1453, 1453, 1453, 1453, 1453, 593, 1453, 1453, 1453, 722, 1453, 1453, 599, 1453, 1453, 1453, 1453, 1453,
  /*  116 */ 1453, 1453, 1453, 1453, 1453, 605, 609, 614, 618, 622, 626, 1098, 731, 630, 634, 638, 642, 774, 646, 686,
  /*  136 */ 650, 474, 654, 1453, 658, 1453, 1496, 1148, 668, 1033, 672, 1453, 678, 1453, 684, 680, 690, 697, 1453, 801,
  /*  156 */ 1112, 706, 1171, 711, 1453, 1206, 879, 1169, 715, 1011, 1305, 455, 719, 1298, 728, 735, 742, 804, 746, 753,
  /*  176 */ 757, 764, 761, 770, 772, 1453, 702, 778, 825, 782, 786, 1453, 790, 1195, 794, 934, 798, 877, 702, 920, 839,
  /*  197 */ 811, 818, 822, 1469, 829, 1453, 836, 843, 847, 854, 858, 1220, 864, 1117, 870, 897, 874, 883, 1469, 889,
  /*  217 */ 1211, 895, 901, 917, 1453, 905, 911, 1047, 924, 1089, 850, 931, 938, 942, 946, 953, 957, 961, 965, 972,
  /*  237 */ 976, 968, 980, 984, 988, 1453, 914, 994, 1002, 1006, 1009, 1125, 949, 1015, 1019, 1023, 1027, 1031, 1037,
  /*  256 */ 1041, 1051, 1057, 1061, 1069, 1255, 1076, 1344, 1086, 1044, 1107, 1138, 1111, 1287, 1116, 738, 1121, 1129,
  /*  274 */ 1133, 1137, 1318, 1116, 1142, 1123, 1146, 1152, 990, 1444, 1158, 1192, 1162, 1167, 1175, 1179, 595, 1185,
  /*  292 */ 1189, 1181, 1199, 1413, 927, 766, 1203, 1215, 1219, 1453, 1453, 860, 1072, 1224, 1228, 1232, 1453, 807,
  /*  310 */ 1262, 1236, 1268, 1240, 1053, 860, 724, 749, 1154, 1244, 831, 1248, 885, 1254, 1259, 1272, 1276, 1280,
  /*  328 */ 1250, 1286, 1475, 1453, 1291, 1265, 1295, 1431, 1304, 1489, 891, 1309, 1313, 832, 1317, 1322, 1326, 1330,
  /*  346 */ 1464, 866, 1334, 1338, 1351, 1367, 1371, 1378, 1347, 1382, 1386, 1390, 1394, 1398, 1402, 1406, 1410, 1453,
  /*  364 */ 1095, 1417, 1421, 1425, 1429, 610, 997, 1435, 1439, 1453, 1080, 1443, 1092, 1448, 1452, 1065, 1453, 1078,
  /*  382 */ 1453, 1354, 707, 998, 1451, 1374, 1453, 1357, 1453, 1341, 674, 1460, 1063, 1468, 601, 1453, 1341, 814,
  /*  400 */ 1462, 1473, 1357, 1453, 1479, 1483, 1453, 1487, 1360, 1493, 1469, 1506, 1510, 559, 1363, 1517, 1513, 1453,
  /*  418 */ 1453, 1453, 1453, 1453, 1453, 719, 1672, 1577, 1812, 1522, 1522, 1522, 1817, 1815, 1522, 1522, 1523, 1521,
  /*  436 */ 1527, 1531, 1534, 1538, 1542, 1546, 1550, 1554, 1558, 1562, 1566, 1830, 1570, 2609, 2609, 1683, 2913, 1581,
  /*  454 */ 2983, 2609, 2609, 1986, 2609, 2787, 2913, 2913, 1679, 1586, 1586, 1586, 2609, 2913, 2913, 2913, 2913, 1666,
  /*  472 */ 1700, 1614, 2609, 2609, 2032, 2609, 2812, 2609, 2609, 2609, 1631, 1586, 1586, 1586, 1662, 2609, 2912, 2913,
  /*  490 */ 2913, 1627, 1599, 1599, 1599, 2609, 1635, 1599, 1599, 1599, 1599, 1600, 1639, 1655, 1599, 1599, 1599, 2918,
  /*  508 */ 1586, 1586, 1643, 2913, 2915, 1599, 1599, 1650, 1654, 1599, 1599, 1669, 1612, 1699, 2609, 2609, 2609, 1800,
  /*  526 */ 2038, 1587, 2912, 2913, 2914, 1599, 1599, 1601, 1705, 1802, 1696, 1599, 2609, 2912, 2916, 1601, 2788, 2914,
  /*  544 */ 1599, 1603, 1704, 1696, 1704, 1697, 2510, 2513, 1970, 1710, 1722, 1719, 1732, 1732, 1616, 2609, 2609, 2609,
  /*  562 */ 1747, 1732, 1740, 1726, 1730, 1732, 1733, 1737, 1744, 1754, 1758, 1762, 1765, 1769, 1773, 1780, 1784, 1788,
  /*  580 */ 1790, 2904, 1794, 2026, 2609, 2609, 2609, 1827, 1821, 2609, 2609, 2609, 1840, 2609, 2802, 2609, 2609, 2062,
  /*  598 */ 2609, 2609, 2803, 2609, 2609, 2106, 2609, 2953, 1852, 2609, 2454, 1861, 2609, 2609, 2609, 1864, 1869, 1873,
  /*  616 */ 2609, 2995, 1880, 1888, 1892, 1896, 1900, 1904, 1907, 1910, 1911, 1915, 1919, 2954, 1882, 1960, 2822, 1836,
  /*  634 */ 2573, 2609, 2609, 2784, 2609, 2739, 1945, 1952, 1884, 2609, 2609, 2524, 1861, 2609, 2609, 2570, 2823, 1964,
  /*  652 */ 2039, 1968, 3090, 1974, 2990, 1985, 2609, 2932, 1990, 2609, 1585, 1676, 2913, 2917, 1599, 1602, 2609, 2904,
  /*  670 */ 1571, 1715, 1999, 2934, 2609, 2609, 2320, 2395, 2003, 2993, 2609, 2609, 2385, 2609, 2047, 2601, 2609, 2609,
  /*  688 */ 2386, 1958, 2295, 2296, 1968, 2609, 1695, 1696, 1599, 1691, 2007, 2011, 2609, 1806, 2609, 2609, 2051, 2572,
  /*  706 */ 2015, 2609, 2609, 2609, 1865, 2609, 2844, 2447, 2030, 2637, 1968, 2562, 2036, 2516, 2560, 3071, 2609, 1845,
  /*  724 */ 2609, 2609, 2099, 1686, 2472, 2609, 2754, 2609, 1939, 2609, 2277, 2517, 2851, 2025, 2609, 1969, 2187, 2189,
  /*  742 */ 2563, 2609, 2609, 1689, 2190, 1968, 2043, 2197, 2880, 2758, 1857, 2578, 2609, 2951, 2258, 2609, 2952, 2951,
  /*  760 */ 2259, 2890, 2889, 2044, 2888, 2189, 2609, 2046, 2045, 2609, 2578, 2609, 2950, 2951, 2609, 2609, 2433, 2454,
  /*  778 */ 2609, 2841, 1841, 3123, 2076, 2087, 2080, 2085, 2081, 2091, 2091, 2091, 2095, 2609, 2266, 2103, 2115, 2127,
  /*  796 */ 2131, 2140, 2134, 1713, 2157, 2609, 2009, 2037, 2609, 1809, 2191, 2609, 1833, 2609, 1920, 2543, 2169, 2197,
  /*  814 */ 2609, 2019, 3110, 2975, 1981, 2609, 2173, 2862, 1935, 2249, 2178, 2609, 2055, 2059, 2072, 2184, 2195, 2609,
  /*  832 */ 2609, 2609, 2629, 2830, 2095, 2609, 2202, 2609, 2111, 2149, 2977, 2395, 2609, 2214, 2220, 1921, 2494, 2227,
  /*  850 */ 2609, 2122, 2304, 2037, 1969, 2318, 2609, 2622, 2231, 2235, 2609, 2609, 2609, 2654, 2253, 2276, 2609, 2609,
  /*  868 */ 2609, 2766, 2257, 2240, 2037, 2904, 2263, 2609, 2045, 2609, 2161, 2609, 2609, 2471, 2424, 2623, 2273, 2609,
  /*  886 */ 2609, 2609, 2792, 2271, 2275, 2609, 2609, 2609, 2867, 2242, 2943, 2592, 2220, 3063, 2621, 2804, 2495, 2265,
  /*  904 */ 2044, 2282, 2275, 2609, 2609, 2609, 3002, 2629, 2286, 2241, 2943, 2382, 2141, 2609, 2281, 2274, 2609, 2165,
  /*  922 */ 2609, 2905, 2318, 1776, 2314, 2609, 2318, 2316, 2844, 2308, 2752, 2350, 2609, 2327, 3136, 2146, 2388, 2313,
  /*  940 */ 2609, 2944, 2324, 2609, 2722, 2337, 2198, 2373, 1618, 2609, 2339, 1835, 3135, 2343, 2609, 1706, 2344, 2609,
  /*  958 */ 2723, 2751, 2348, 1593, 2209, 1644, 2208, 2629, 2354, 2205, 2121, 2750, 2120, 2119, 1595, 2122, 2355, 2360,
  /*  976 */ 2359, 2748, 2118, 2891, 2748, 2365, 2437, 2369, 2152, 2153, 2152, 2153, 2223, 2378, 2609, 2609, 2609, 3005,
  /*  994 */ 2392, 2400, 2361, 2903, 2621, 3067, 2609, 2609, 2404, 2711, 2714, 2414, 2408, 2411, 2716, 2418, 2419, 2609,
  /* 1012 */ 2609, 2609, 3070, 2386, 1875, 2529, 3106, 2629, 2429, 2609, 2441, 2216, 2445, 2452, 2458, 2465, 2469, 2609,
  /* 1030 */ 2476, 2480, 2609, 2609, 2609, 2038, 2786, 2943, 2382, 2609, 2897, 2542, 2976, 2386, 1876, 2611, 2772, 2609,
  /* 1048 */ 2372, 1619, 2294, 2611, 3129, 2609, 2629, 2746, 2609, 2485, 1934, 2604, 2333, 3029, 2238, 2609, 2609, 2609,
  /* 1066 */ 3082, 2609, 2173, 2330, 2489, 2493, 2609, 2386, 2609, 2579, 2503, 1933, 2609, 2609, 2609, 3086, 2609, 2609,
  /* 1084 */ 2730, 2609, 2339, 1835, 3116, 2609, 2387, 2300, 2609, 2319, 2943, 2609, 2319, 3017, 1925, 1930, 2603, 2609,
  /* 1102 */ 1575, 2609, 2609, 1941, 2609, 1749, 2507, 2621, 2521, 2533, 2609, 2609, 2609, 2047, 2558, 2609, 2609, 2609,
  /* 1120 */ 2123, 2541, 2975, 2609, 2611, 2609, 2609, 2732, 2423, 3129, 2609, 1750, 2424, 2547, 2609, 2609, 3141, 2556,
  /* 1138 */ 2609, 2609, 2609, 2136, 2396, 2188, 2898, 3113, 2568, 2434, 2609, 2609, 2753, 2609, 3004, 2577, 2609, 2609,
  /* 1156 */ 2753, 2762, 2616, 3113, 2609, 2590, 2596, 2609, 2609, 2609, 2180, 2309, 2608, 2609, 2609, 2754, 2609, 2295,
  /* 1174 */ 2023, 2615, 2628, 2609, 2620, 1946, 2435, 2609, 1948, 2609, 2634, 2142, 2627, 2610, 2591, 2970, 3089, 1947,
  /* 1192 */ 2609, 2436, 3089, 2609, 2395, 2609, 2110, 1855, 2805, 2609, 2642, 2315, 2609, 2318, 2609, 2448, 2994, 2609,
  /* 1210 */ 1840, 2609, 2609, 2051, 2609, 2317, 2316, 2609, 2044, 2315, 2609, 2609, 2609, 2246, 2659, 1848, 2663, 2670,
  /* 1228 */ 2674, 2679, 2683, 2675, 2687, 2695, 2695, 2689, 3077, 1954, 2609, 2708, 2720, 2727, 2609, 2736, 2609, 2691,
  /* 1246 */ 2645, 2770, 2776, 2781, 2609, 2609, 2764, 2777, 2799, 2609, 2609, 2609, 2499, 2621, 1834, 1920, 2699, 2704,
  /* 1264 */ 2197, 2879, 2666, 2585, 2609, 2481, 2609, 3112, 2068, 2609, 2880, 2758, 2809, 2609, 2609, 2816, 2609, 2843,
  /* 1282 */ 2609, 2609, 2788, 2913, 2820, 2609, 2609, 2609, 2537, 2655, 2609, 2098, 2461, 2753, 2856, 2842, 2609, 2564,
  /* 1300 */ 2609, 2609, 2425, 1623, 2839, 2609, 2609, 2609, 2550, 2374, 2700, 2848, 2666, 2586, 2609, 2855, 2267, 2860,
  /* 1318 */ 2609, 2609, 2609, 2554, 2609, 2827, 2831, 2424, 2609, 2866, 1926, 2871, 2877, 2884, 2609, 2895, 2902, 2621,
  /* 1336 */ 2609, 2909, 1994, 2922, 2210, 2609, 2604, 3088, 2609, 2609, 3013, 2424, 1847, 2958, 2886, 2609, 2926, 2424,
  /* 1354 */ 2609, 2609, 3094, 2609, 2609, 3099, 2609, 2609, 3127, 2609, 2621, 1748, 3112, 2938, 2942, 3111, 2065, 2665,
  /* 1372 */ 2959, 2886, 2609, 2630, 2609, 3105, 1645, 2948, 2609, 1646, 2609, 2964, 2609, 2963, 2787, 3114, 1604, 1979,
  /* 1390 */ 1977, 1796, 2976, 2290, 2289, 2873, 1605, 2968, 1608, 3115, 1607, 1606, 2873, 2288, 1605, 2974, 2981, 2987,
  /* 1408 */ 2981, 2987, 2999, 3009, 3011, 2609, 2641, 2650, 2636, 3018, 2742, 3022, 1823, 3026, 3033, 3037, 3041, 3044,
  /* 1426 */ 3048, 3052, 3058, 3054, 3062, 2609, 2609, 2827, 2835, 3075, 2527, 1992, 1847, 2609, 3081, 2609, 3147, 3095,
  /* 1444 */ 2609, 2609, 2609, 2583, 2646, 2609, 2609, 2528, 1992, 2609, 2609, 2609, 2609, 1585, 1586, 1591, 2645, 3135,
  /* 1462 */ 2527, 1995, 2609, 2609, 2828, 2929, 3104, 2609, 2609, 2609, 2621, 3081, 2174, 2609, 2609, 2829, 2795, 2629,
  /* 1480 */ 3100, 2609, 2018, 2643, 2975, 2609, 2432, 2609, 3120, 2609, 2609, 2829, 2837, 2395, 3133, 2609, 1994, 2599,
  /* 1498 */ 2603, 2609, 1659, 1661, 2912, 1698, 1602, 1696, 1748, 2609, 2609, 3140, 2609, 3145, 1991, 2609, 2643, 2609,
  /* 1516 */ 1993, 1994, 2609, 2609, 2644, 3201, 3465, 3465, 3465, 3465, 3205, 3272, 3465, 3465, 3202, 3207, 3465, 3257,
  /* 1534 */ 3465, 3209, 3211, 3213, 3222, 3220, 3221, 3220, 3215, 3215, 3215, 3216, 3219, 3217, 3220, 3217, 3224, 3225,
  /* 1552 */ 3224, 3244, 3227, 3235, 3237, 3229, 3228, 3230, 3231, 3239, 3231, 3232, 3233, 3471, 3248, 3595, 3604, 3386,
  /* 1570 */ 3623, 3606, 3606, 3606, 3152, 3404, 3405, 3606, 3606, 3151, 3193, 3606, 3606, 3620, 3241, 3254, 3565, 3565,
  /* 1588 */ 3565, 3565, 3606, 3565, 3459, 3606, 3606, 3159, 3419, 3628, 3606, 3840, 3840, 3840, 3840, 3430, 3606, 3606,
  /* 1606 */ 3606, 3157, 3269, 3253, 3606, 3253, 3605, 3606, 3623, 3623, 3623, 3619, 3606, 3606, 3161, 3606, 3153, 3606,
  /* 1624 */ 3561, 3417, 3156, 3243, 3410, 3429, 3839, 3606, 3606, 3617, 3616, 3243, 3411, 3837, 3839, 3243, 3410, 3411,
  /* 1642 */ 3411, 3565, 3606, 3606, 3606, 3159, 3251, 3566, 3243, 3411, 3411, 3411, 3838, 3838, 3838, 3840, 3840, 3606,
  /* 1660 */ 3565, 3565, 3565, 3473, 3606, 3606, 3243, 3411, 3838, 3840, 3621, 3606, 3356, 3595, 3604, 3386, 3473, 3606,
  /* 1678 */ 3243, 3243, 3244, 3429, 3259, 3254, 3565, 3565, 3242, 3196, 3606, 3836, 3441, 3606, 3606, 3395, 3606, 3254,
  /* 1696 */ 3243, 3243, 3243, 3840, 3840, 3840, 3606, 3249, 3840, 3840, 3606, 3606, 3606, 3160, 3606, 3524, 3386, 3610,
  /* 1714 */ 3523, 3606, 3606, 3401, 3781, 3282, 3177, 3286, 3623, 3274, 3623, 3278, 3624, 3388, 3288, 3290, 3178, 3179,
  /* 1732 */ 3623, 3623, 3623, 3623, 3181, 3625, 3292, 3623, 3623, 3276, 3180, 3184, 3298, 3623, 3624, 3609, 3613, 3606,
  /* 1750 */ 3606, 3606, 3698, 3708, 3623, 3280, 3283, 3284, 3294, 3623, 3279, 3296, 3301, 3302, 3304, 3306, 3307, 3309,
  /* 1768 */ 3311, 3324, 3315, 3314, 3313, 3323, 3323, 3606, 3622, 3582, 3415, 3818, 3275, 3623, 3297, 3317, 3319, 3321,
  /* 1786 */ 3327, 3326, 3322, 3329, 3606, 3606, 3186, 3606, 3558, 3560, 3606, 3606, 3242, 3606, 3261, 3387, 3606, 3606,
  /* 1804 */ 3243, 3243, 3254, 3339, 3597, 3606, 3152, 3460, 3782, 3176, 3192, 3201, 3202, 3465, 3465, 3559, 3200, 3342,
  /* 1822 */ 3521, 3606, 3186, 3154, 3616, 3606, 3606, 3834, 3606, 3152, 3464, 3609, 3398, 3403, 3606, 3606, 3606, 3506,
  /* 1840 */ 3606, 3606, 3606, 3835, 3152, 3606, 3835, 3606, 3606, 3253, 3606, 3197, 3606, 3614, 3190, 3606, 3152, 3606,
  /* 1858 */ 3606, 3470, 3749, 3831, 3441, 3597, 3606, 3153, 3158, 3606, 3619, 3606, 3610, 3247, 3464, 3247, 3256, 3606,
  /* 1876 */ 3606, 3254, 3606, 3606, 3247, 3432, 3606, 3435, 3606, 3606, 3333, 3606, 3466, 3203, 3606, 3360, 3606, 3524,
  /* 1894 */ 3538, 3299, 3364, 3364, 3364, 3362, 3363, 3366, 3368, 3369, 3371, 3373, 3373, 3374, 3375, 3374, 3374, 3377,
  /* 1912 */ 3377, 3377, 3378, 3383, 3383, 3382, 3379, 3380, 3606, 3606, 3606, 3162, 3473, 3173, 3606, 3606, 3606, 3163,
  /* 1930 */ 3247, 3428, 3834, 3772, 3599, 3606, 3606, 3606, 3546, 3606, 3464, 3606, 3606, 3344, 3606, 3423, 3606, 3606,
  /* 1948 */ 3606, 3170, 3586, 3606, 3587, 3391, 3606, 3606, 3349, 3606, 3606, 3643, 3606, 3606, 3385, 3606, 3606, 3606,
  /* 1966 */ 3606, 3826, 3782, 3606, 3606, 3606, 3186, 3441, 3606, 3606, 3775, 3606, 3157, 3269, 3567, 3606, 3606, 3584,
  /* 1984 */ 3440, 3822, 3606, 3606, 3606, 3189, 3821, 3606, 3606, 3606, 3196, 3606, 3606, 3606, 3197, 3606, 3774, 3573,
  /* 2002 */ 3564, 3606, 3563, 3566, 3461, 3606, 3457, 3425, 3461, 3449, 3537, 3456, 3606, 3771, 3441, 3597, 3606, 3157,
  /* 2020 */ 3606, 3622, 3606, 3606, 3460, 3454, 3606, 3606, 3606, 3331, 3458, 3455, 3606, 3606, 3394, 3606, 3454, 3456,
  /* 2038 */ 3606, 3606, 3606, 3254, 3572, 3606, 3606, 3606, 3836, 3606, 3606, 3606, 3345, 3606, 3607, 3167, 3504, 3183,
  /* 2056 */ 3606, 3459, 3448, 3396, 3606, 3459, 3606, 3157, 3710, 3606, 3161, 3456, 3253, 3197, 3606, 3444, 3536, 3606,
  /* 2074 */ 3476, 3480, 3479, 3478, 3485, 3490, 3492, 3490, 3490, 3490, 3490, 3494, 3494, 3490, 3490, 3487, 3489, 3496,
  /* 2092 */ 3496, 3496, 3496, 3498, 3503, 3558, 3606, 3163, 3833, 3438, 3606, 3835, 3194, 3544, 3606, 3164, 3499, 3161,
  /* 2110 */ 3606, 3607, 3508, 3386, 3606, 3606, 3609, 3198, 3596, 3606, 3355, 3628, 3606, 3606, 3606, 3498, 3503, 3606,
  /* 2128 */ 3606, 3609, 3511, 3606, 3606, 3609, 3513, 3535, 3606, 3609, 3169, 3172, 3534, 3606, 3606, 3606, 3407, 3606,
  /* 2146 */ 3606, 3607, 3520, 3609, 3617, 3532, 3597, 3157, 3403, 3606, 3347, 3606, 3609, 3528, 3530, 3606, 3527, 3529,
  /* 2164 */ 3535, 3452, 3460, 3195, 3456, 3269, 3558, 3462, 3772, 3606, 3606, 3607, 3606, 3606, 3552, 3441, 3606, 3606,
  /* 2182 */ 3405, 3606, 3547, 3592, 3271, 3406, 3340, 3606, 3606, 3606, 3561, 3461, 3782, 3551, 3537, 3386, 3606, 3606,
  /* 2200 */ 3606, 3347, 3536, 3825, 3544, 3606, 3171, 3159, 3419, 3700, 3606, 3606, 3606, 3469, 3606, 3508, 3386, 3606,
  /* 2218 */ 3833, 3434, 3606, 3617, 3532, 3597, 3630, 3606, 3630, 3172, 3566, 3569, 3509, 3583, 3415, 3270, 3576, 3819,
  /* 2236 */ 3451, 3386, 3606, 3174, 3606, 3606, 3452, 3152, 3456, 3606, 3606, 3580, 3582, 3414, 3593, 3559, 3428, 3400,
  /* 2254 */ 3271, 3428, 3450, 3253, 3606, 3606, 3606, 3444, 3606, 3556, 3566, 3444, 3606, 3606, 3606, 3459, 3606, 3182,
  /* 2272 */ 3591, 3400, 3594, 3819, 3633, 3606, 3606, 3606, 3431, 3606, 3580, 3582, 3415, 3594, 3167, 3562, 3606, 3606,
  /* 2290 */ 3413, 3566, 3606, 3606, 3602, 3606, 3606, 3606, 3460, 3449, 3591, 3817, 3819, 3459, 3503, 3606, 3452, 3152,
  /* 2308 */ 3622, 3606, 3606, 3617, 3170, 3817, 3820, 3606, 3606, 3606, 3463, 3606, 3606, 3606, 3412, 3606, 3415, 3700,
  /* 2326 */ 3459, 3606, 3186, 3515, 3606, 3164, 3615, 3267, 3252, 3673, 3386, 3452, 3438, 3606, 3606, 3416, 3824, 3160,
  /* 2344 */ 3627, 3820, 3606, 3606, 3162, 3606, 3162, 3606, 3606, 3556, 3613, 3606, 3347, 3597, 3157, 3157, 3356, 3403,
  /* 2362 */ 3606, 3606, 3346, 3596, 3606, 3699, 3403, 3606, 3606, 3607, 3347, 3597, 3606, 3606, 3162, 3608, 3606, 3596,
  /* 2380 */ 3158, 3158, 3584, 3632, 3340, 3606, 3189, 3606, 3606, 3606, 3182, 3591, 3606, 3606, 3622, 3622, 3606, 3606,
  /* 2398 */ 3606, 3406, 3606, 3606, 3635, 3830, 3835, 3622, 3397, 3637, 3657, 3652, 3652, 3659, 3652, 3652, 3652, 3649,
  /* 2416 */ 3651, 3655, 3661, 3661, 3661, 3661, 3606, 3553, 3597, 3606, 3606, 3606, 3265, 3669, 3673, 3671, 3606, 3197,
  /* 2434 */ 3606, 3606, 3170, 3606, 3606, 3157, 3628, 3606, 3607, 3676, 3678, 3667, 3666, 3606, 3606, 3425, 3461, 3458,
  /* 2452 */ 3680, 3670, 3606, 3606, 3427, 3570, 3783, 3606, 3682, 3606, 3242, 3196, 3444, 3606, 3606, 3607, 3685, 3687,
  /* 2470 */ 3671, 3606, 3606, 3428, 3441, 3606, 3606, 3606, 3684, 3686, 3688, 3606, 3606, 3606, 3518, 3690, 3692, 3558,
  /* 2488 */ 3674, 3548, 3426, 3336, 3533, 3773, 3606, 3606, 3606, 3555, 3557, 3606, 3607, 3166, 3266, 3268, 3693, 3433,
  /* 2506 */ 3711, 3645, 3702, 3597, 3606, 3243, 3840, 3694, 3694, 3694, 3606, 3152, 3460, 3454, 3606, 3170, 3466, 3335,
  /* 2524 */ 3606, 3332, 3334, 3606, 3155, 3606, 3606, 3606, 3663, 3255, 3336, 3772, 3597, 3704, 3170, 3269, 3433, 3813,
  /* 2542 */ 3453, 3606, 3606, 3606, 3540, 3606, 3698, 3161, 3606, 3345, 3440, 3442, 3606, 3704, 3170, 3584, 3706, 3525,
  /* 2560 */ 3606, 3606, 3457, 3606, 3563, 3461, 3454, 3456, 3170, 3597, 3606, 3606, 3466, 3606, 3606, 3606, 3390, 3337,
  /* 2578 */ 3606, 3606, 3606, 3562, 3163, 3404, 3696, 3606, 3606, 3470, 3407, 3606, 3153, 3152, 3606, 3606, 3606, 3589,
  /* 2596 */ 3169, 3829, 3586, 3606, 3345, 3603, 3772, 3442, 3606, 3606, 3606, 3164, 3585, 3606, 3606, 3606, 3606, 3153,
  /* 2614 */ 3152, 3407, 3606, 3606, 3155, 3578, 3663, 3606, 3606, 3606, 3609, 3182, 3591, 3606, 3578, 3606, 3606, 3606,
  /* 2632 */ 3607, 3156, 3606, 3577, 3403, 3606, 3460, 3606, 3402, 3606, 3710, 3606, 3606, 3606, 3610, 3606, 3606, 3616,
  /* 2650 */ 3606, 3606, 3606, 3823, 3606, 3606, 3713, 3718, 3606, 3720, 3642, 3606, 3641, 3606, 3722, 3197, 3606, 3606,
  /* 2668 */ 3617, 3182, 3165, 3725, 3724, 3724, 3727, 3730, 3730, 3730, 3730, 3351, 3729, 3352, 3732, 3730, 3730, 3733,
  /* 2686 */ 3733, 3730, 3735, 3737, 3737, 3606, 3606, 3481, 3459, 3737, 3737, 3737, 3737, 3608, 3571, 3456, 3606, 3253,
  /* 2704 */ 3253, 3197, 3606, 3836, 3606, 3467, 3350, 3606, 3345, 3640, 3639, 3647, 3652, 3652, 3653, 3661, 3606, 3832,
  /* 2722 */ 3606, 3606, 3498, 3606, 3606, 3741, 3574, 3743, 3606, 3348, 3606, 3606, 3250, 3406, 3745, 3714, 3716, 3606,
  /* 2740 */ 3358, 3600, 3606, 3153, 3609, 3470, 3746, 3715, 3606, 3606, 3498, 3617, 3596, 3606, 3606, 3606, 3467, 3606,
  /* 2758 */ 3606, 3606, 3617, 3185, 3748, 3451, 3606, 3606, 3498, 3763, 3468, 3779, 3606, 3751, 3606, 3606, 3524, 3606,
  /* 2776 */ 3753, 3468, 3756, 3758, 3604, 3604, 3482, 3597, 3606, 3393, 3395, 3606, 3606, 3606, 3242, 3243, 3498, 3754,
  /* 2794 */ 3420, 3256, 3759, 3765, 3525, 3759, 3814, 3483, 3606, 3396, 3606, 3606, 3606, 3161, 3161, 3606, 3606, 3748,
  /* 2812 */ 3606, 3399, 3417, 3417, 3606, 3467, 3748, 3459, 3537, 3597, 3606, 3606, 3524, 3619, 3606, 3606, 3606, 3607,
  /* 2830 */ 3762, 3188, 3420, 3406, 3760, 3188, 3420, 3256, 3406, 3604, 3777, 3606, 3606, 3536, 3606, 3606, 3606, 3403,
  /* 2848 */ 3770, 3606, 3560, 3606, 3403, 3563, 3461, 3467, 3767, 3632, 3606, 3606, 3760, 3597, 3606, 3606, 3543, 3606,
  /* 2866 */ 3606, 3713, 3562, 3606, 3606, 3460, 3456, 3606, 3253, 3606, 3616, 3770, 3560, 3606, 3606, 3560, 3606, 3606,
  /* 2884 */ 3617, 3182, 3606, 3470, 3606, 3606, 3561, 3606, 3606, 3606, 3355, 3468, 3560, 3606, 3606, 3561, 3813, 3403,
  /* 2902 */ 3263, 3606, 3606, 3606, 3619, 3606, 3606, 3163, 3460, 3456, 3242, 3243, 3243, 3243, 3243, 3694, 3840, 3840,
  /* 2920 */ 3840, 3260, 3618, 3154, 3606, 3469, 3606, 3607, 3763, 3420, 3830, 3597, 3606, 3408, 3505, 3780, 3537, 3456,
  /* 2938 */ 3606, 3606, 3785, 3251, 3421, 3606, 3606, 3606, 3622, 3582, 3566, 3597, 3606, 3606, 3562, 3606, 3606, 3606,
  /* 2956 */ 3354, 3162, 3617, 3619, 3606, 3469, 3606, 3606, 3763, 3472, 3567, 3606, 3253, 3606, 3606, 3157, 3161, 3157,
  /* 2974 */ 3253, 3606, 3617, 3606, 3606, 3606, 3541, 3157, 3269, 3606, 3157, 3246, 3162, 3269, 3606, 3617, 3606, 3409,
  /* 2992 */ 3461, 3776, 3455, 3606, 3606, 3606, 3247, 3413, 3606, 3413, 3606, 3416, 3606, 3606, 3169, 3829, 3337, 3186,
  /* 3010 */ 3186, 3187, 3187, 3606, 3606, 3584, 3696, 3173, 3606, 3173, 3606, 3250, 3474, 3606, 3173, 3616, 3787, 3168,
  /* 3028 */ 3501, 3606, 3434, 3644, 3549, 3500, 3417, 3417, 3789, 3794, 3794, 3794, 3791, 3793, 3796, 3798, 3798, 3800,
  /* 3046 */ 3800, 3798, 3799, 3798, 3798, 3802, 3799, 3804, 3804, 3804, 3805, 3809, 3807, 3804, 3804, 3804, 3810, 3606,
  /* 3064 */ 3606, 3606, 3645, 3606, 3606, 3617, 3606, 3437, 3768, 3455, 3606, 3467, 3357, 3606, 3606, 3606, 3739, 3606,
  /* 3082 */ 3606, 3812, 3606, 3606, 3606, 3611, 3499, 3161, 3606, 3606, 3606, 3598, 3606, 3606, 3612, 3418, 3606, 3607,
  /* 3100 */ 3166, 3418, 3606, 3606, 3606, 3608, 3606, 3606, 3606, 3665, 3606, 3606, 3609, 3606, 3606, 3606, 3616, 3606,
  /* 3118 */ 3606, 3467, 3606, 3609, 3828, 3606, 3446, 3262, 3456, 3166, 3161, 3606, 3606, 3606, 3782, 3610, 3606, 3616,
  /* 3136 */ 3606, 3606, 3606, 3517, 3166, 3606, 3606, 3606, 3704, 3609, 3617, 3606, 3606, 3606, 3816, 1073872896,
  /* 3152 */ 131072, 0, 32, 0, 64, 0, 128, 0, 192, 256, 0, 256, 1, 2, 2, 4, 32, 8, 128, 256, 256, 1024, 0, 400, 262146,
  /* 3177 */ 262160, 524304, 1048592, 16, 20, 16, 32, 16, 48, 0, 1024, 1024, 2048, 0, 1280, 268566528, 131072, 131072,
  /* 3195 */ 36, 0, 512, 0, 520, 262160, 537133056, -2147221504, 262144, 0x80000000, 262160, 33816576, 268444864, 10560,
  /* 3209 */ 262144, 33816576, 278528, 278528, 278544, 537149440, 168034304, 168034304, 235143168, 235143168, 168034304,
  /* 3220 */ 772014080, 772014080, 278530, 537149440, -1375469568, 772014080, 772030464, 163872, 294944, -2147188704,
  /* 3230 */ 294944, -2145091522, -2145091522, 772046880, -1910210498, 163840, 2392096, 294944, 537165856, -2111537090,
  /* 3240 */ -2145091522, 14, 0, 32768, 32768, 32800, 8256, 0, 65536, 65536, 16, 1024, 4096, 32768, 0, 16384, 65536,
  /* 3257 */ 262144, 8768, 2129952, 2129920, 16, 131072, 8388608, 0x80000000, 12, 8, 384, 512, 1024, 16384, 98304,
  /* 3272 */ 262144, 262174, 2, 1073774592, 16, 131088, 20, 48, 16, 165675008, 80, 272, 272, 524560, 1048592, 268435472,
  /* 3288 */ 48, 1048848, 1572880, 524304, 48, 524304, 1048592, 1114416, 84, 20, 21, 16, 344064064, -165649452,
  /* 3302 */ -165649452, 372, -165649451, -165649451, -701430800, -701430800, -164559888, -700906512, -164535312,
  /* 3311 */ -700906508, -164535312, -164535308, -164273164, -164535308, -164535312, 112, 21, 53, 140515349, 140539925,
  /* 3322 */ 140540573, -164535308, -164535308, -164273168, 140540573, 140540573, 140540605, -164273164, -26141771,
  /* 3331 */ 163577856, 0, 716800, 998244352, 0, 786432, 3145728, 0x80000000, 100663296, 536870912, 0x80000000, 4096,
  /* 3343 */ 138412032, 12582912, 0, 1048576, 8, 4194304, 0, 1576960, 201326592, 201326592, 201326594, 4, 128, 4096,
  /* 3357 */ 65536, 0, -2097152000, 1076887552, 1076887552, 50348065, 50348065, 327303168, 327303168, -2097135583,
  /* 3367 */ -1020248031, 276971585, 276971585, 310526017, 310526019, 327303233, 277235779, 327303265, 327303265,
  /* 3376 */ 327303267, 998961152, 998961152, 998961706, 998961249, 998961771, 998961770, 998961706, 998961706, 3145728,
  /* 3386 */ 1073741824, 0, 24, 304, 147456, 327155712, 411648, 1, 16384, 50331648, 0, 8388608, 2048, 8192, 8192, 16384,
  /* 3402 */ 131072, 33554432, 0, 524288, 524288, 1048576, 0, 28672, 32768, 32, 32, 128, 1024, 6144, 8192, 64, 64, 256,
  /* 3420 */ 4096, 49152, 0x80000000, 147456, 276824064, 12288, 32768, 65536, 1048576, 2097152, 2129920, 0, 264192,
  /* 3433 */ 65536, 786432, 0, 329728, 12288, 131072, 536870912, 2097152, 268435456, 1073741824, 0x80000000, 2097152,
  /* 3445 */ 1073741824, 36, 134225920, 8192, 8388608, 50331648, 67108864, 134217728, 8388608, 33554432, 268435456,
  /* 3456 */ 536870912, 0, 33554432, 134217728, 0, 131072, 524288, 2097152, 0, 262144, 262144, 0, 2048, 4096, 0, 4096,
  /* 3472 */ 4096, 16384, 0, 5120, 37, 37, 1140883458, 1140850690, 1140850690, 0, 67108864, 402653184, 0x80000000,
  /* 3485 */ -2143288824, 1141162274, 271057920, 271188992, 271057920, 1412220194, 1412220194, 405275648, 405275685,
  /* 3494 */ 1420608802, 1412220194, 1597898226, 1597898226, 1, 4, 64, 68608, 68608, 32, 8192, 32768, 131072, 343932928,
  /* 3508 */ 2, 67108864, 1073741824, 288, 311296, 1312, 2932736, 2621440, 268435456, 2752512, 0, 201326592, 1060, 0,
  /* 3522 */ 239075328, 11321344, 0, 268435456, 0x80000000, 2, 7664, 4055040, 251658240, 1342177280, 512, 4194304,
  /* 3534 */ 67108864, 1342177280, 0, 134217728, 268435456, 268500992, 2, 288, 16384, 10485760, 0, 536870912, 2, 496,
  /* 3548 */ 1024, 20480, -1073741824, 2097152, 117440512, 134217728, 536870912, 2, 32, 256, 32768, 262144, 524288, 0,
  /* 3562 */ 8192, 0, 12288, 16384, 16384, 32768, 0x80000000, 262144, 2097152, 4194304, 131072, 58720256, 0, 3674112,
  /* 3576 */ 262144, 1048576, 16777216, 33554432, 2, 16, 32, 448, 1024, 524288, 3145728, 0, 310378496, 2, 1073741824,
  /* 3591 */ 448, 6144, 24576, 98304, 1048576, 4194304, 0x80000000, 0, -1073741824, 0, -1023410176, 256, 2097152,
  /* 3604 */ 8388608, 16777216, 0, 0, 1, 0, 2, 0, 3, 4, 0, 4, 8, 0, 8, 16, 0, 12, 0, 16, 16, 17, 304, 6144, 65536,
  /* 3629 */ 33554432, 128, 33554432, 1048576, 134217728, 1073741824, 8192, 16777280, 8388608, 536870912, -2147467264,
  /* 3640 */ -2147467264, 0, 537001984, 0, 1073741824, 256, 16384, 131104, -1879031808, 1079284611, 1078236035,
  /* 3651 */ 1078760323, -800795773, -800795773, -800793725, 1615106947, 1616155523, -800795901, -800795773, -800795757,
  /* 3660 */ -800795773, -729950321, -729950321, 32, 131072, -1879048192, 0, 1610612736, 0, 898, 53248, -805306368, 0,
  /* 3673 */ 262144, 4194304, 268435456, 898, 36864, 262144, 5242880, 1, 770, 55296, 0, 1, 1934, 53248, 851968,
  /* 3688 */ 74448896, -805306368, 2, 384, 512, 20480, 32768, 2129920, 1048576, 536870912, 2, 128, 65536, 50331648,
  /* 3702 */ 262144, 268435456, 2, 8, 3145728, 67108864, 256, 268435456, 256, 3145728, 4194304, 2, 2048, 10342400,
  /* 3716 */ -1660944384, 0, 8192, 33554432, 4194560, 2048, 512, 1075838976, 526336, 526336, 0, 56, 1579008, 201334784,
  /* 3730 */ 202905600, 202905600, 68687872, 68687872, 202905600, 739907584, 1278744576, -1650598715, -1650598715, 56,
  /* 3740 */ 0, 1708032, 738197504, 1275068416, 0, 1, 1220, 2048, 4096, 1572864, 0, 3670016, 0, 4, 1216, 2048, 49152,
  /* 3757 */ 65536, 262144, 1572864, 8388608, 134217728, 4, 192, 1024, 16777216, 134217728, 4096, 524288, 33554432, 512,
  /* 3771 */ 2097152, 67108864, 268435456, -1073741824, 41943040, 58720256, 134217728, 0x80000000, 49152, 524288,
  /* 3781 */ 58720256, 268435456, 0, 914, 1, 192, 32, 1024, 512, 49216, 12289, 12305, 12289, 65, 1089, 12297, 12297,
  /* 3798 */ 61505, 61505, 62529, 61505, 62529, 62529, 327, 327, 16711, 1351, 1351, 33095, 62791, 61767, 1, 64,
  /* 3814 */ 16777216, 67108864, 1, 8192, 65536, 2097152, 50331648, 134217728, 805306368, 0, 16777216, 8388608, 131072,
  /* 3827 */ 75497472, 4, 256, 524288, 8388608, 67108864, 0, 4194304, 8388608, 0, 2097152, 2097184, 2097184, 2129920,
  /* 3841 */ 2129920
];

XQueryParser.TOKEN =
[
  "(0)",
  "IntegerLiteral",
  "DecimalLiteral",
  "DoubleLiteral",
  "StringLiteral",
  "URIQualifiedName",
  "PredefinedEntityRef",
  "'\"\"'",
  "EscapeApos",
  "ElementContentChar",
  "QuotAttrContentChar",
  "AposAttrContentChar",
  "PITarget",
  "CharRef",
  "NCName",
  "QName",
  "StringConstructorChars",
  "S",
  "S",
  "CommentContents",
  "PragmaContents",
  "Wildcard",
  "DirCommentContents",
  "DirPIContents",
  "CDataSectionContents",
  "EOF",
  "'!'",
  "'!='",
  "'\"'",
  "'#'",
  "'#)'",
  "'$'",
  "'%'",
  "''''",
  "'('",
  "'(#'",
  "'(:'",
  "')'",
  "'*'",
  "'+'",
  "','",
  "'-'",
  "'-->'",
  "'.'",
  "'..'",
  "'/'",
  "'//'",
  "'/>'",
  "':'",
  "':)'",
  "'::'",
  "':='",
  "';'",
  "'<'",
  "'<!--'",
  "'<![CDATA['",
  "'</'",
  "'<<'",
  "'<='",
  "'<?'",
  "'='",
  "'=>'",
  "'>'",
  "'>='",
  "'>>'",
  "'?'",
  "'?>'",
  "'@'",
  "'NaN'",
  "'['",
  "']'",
  "']]>'",
  "']``'",
  "'``['",
  "'`{'",
  "'allowing'",
  "'ancestor'",
  "'ancestor-or-self'",
  "'and'",
  "'array'",
  "'as'",
  "'ascending'",
  "'at'",
  "'attribute'",
  "'base-uri'",
  "'boundary-space'",
  "'by'",
  "'case'",
  "'cast'",
  "'castable'",
  "'catch'",
  "'child'",
  "'collation'",
  "'comment'",
  "'construction'",
  "'context'",
  "'copy-namespaces'",
  "'count'",
  "'decimal-format'",
  "'decimal-separator'",
  "'declare'",
  "'default'",
  "'descendant'",
  "'descendant-or-self'",
  "'descending'",
  "'digit'",
  "'div'",
  "'document'",
  "'document-node'",
  "'element'",
  "'else'",
  "'empty'",
  "'empty-sequence'",
  "'encoding'",
  "'end'",
  "'eq'",
  "'every'",
  "'except'",
  "'exponent-separator'",
  "'external'",
  "'following'",
  "'following-sibling'",
  "'for'",
  "'function'",
  "'ge'",
  "'greatest'",
  "'group'",
  "'grouping-separator'",
  "'gt'",
  "'idiv'",
  "'if'",
  "'import'",
  "'in'",
  "'infinity'",
  "'inherit'",
  "'instance'",
  "'intersect'",
  "'is'",
  "'item'",
  "'lax'",
  "'le'",
  "'least'",
  "'let'",
  "'lt'",
  "'map'",
  "'minus-sign'",
  "'mod'",
  "'module'",
  "'namespace'",
  "'namespace-node'",
  "'ne'",
  "'next'",
  "'no-inherit'",
  "'no-preserve'",
  "'node'",
  "'of'",
  "'only'",
  "'option'",
  "'or'",
  "'order'",
  "'ordered'",
  "'ordering'",
  "'parent'",
  "'pattern-separator'",
  "'per-mille'",
  "'percent'",
  "'preceding'",
  "'preceding-sibling'",
  "'preserve'",
  "'previous'",
  "'processing-instruction'",
  "'return'",
  "'satisfies'",
  "'schema'",
  "'schema-attribute'",
  "'schema-element'",
  "'self'",
  "'sliding'",
  "'some'",
  "'stable'",
  "'start'",
  "'strict'",
  "'strip'",
  "'switch'",
  "'text'",
  "'then'",
  "'to'",
  "'treat'",
  "'try'",
  "'tumbling'",
  "'type'",
  "'typeswitch'",
  "'union'",
  "'unordered'",
  "'validate'",
  "'variable'",
  "'version'",
  "'when'",
  "'where'",
  "'window'",
  "'xquery'",
  "'zero-digit'",
  "'{'",
  "'{{'",
  "'|'",
  "'||'",
  "'}'",
  "'}`'",
  "'}}'"
];

// End
