ebnf parked here ,temp
# simple 1---
test/xqlint_queries/3.xq
let $v:=42
return $v
---
startNonterminal XQuery
startNonterminal Module
startNonterminal MainModule
startNonterminal Prolog
endNonterminal Prolog
startNonterminal QueryBody
startNonterminal Expr
startNonterminal ExprSingle
startNonterminal FLWORExpr
startNonterminal InitialClause
startNonterminal LetClause
TERMINAL: TOKEN let
startNonterminal LetBinding
TERMINAL: TOKEN $
startNonterminal VarName
startNonterminal EQName
startNonterminal QName
startNonterminal FunctionName
TERMINAL: QName v
endNonterminal FunctionName
endNonterminal QName
endNonterminal EQName
endNonterminal VarName
TERMINAL: TOKEN :=
startNonterminal ExprSingle
startNonterminal OrExpr
startNonterminal AndExpr
startNonterminal ComparisonExpr
startNonterminal StringConcatExpr
startNonterminal RangeExpr
startNonterminal AdditiveExpr
startNonterminal MultiplicativeExpr
startNonterminal UnionExpr
startNonterminal IntersectExceptExpr
startNonterminal InstanceofExpr
startNonterminal TreatExpr
startNonterminal CastableExpr
startNonterminal CastExpr
startNonterminal ArrowExpr
startNonterminal UnaryExpr
startNonterminal ValueExpr
startNonterminal SimpleMapExpr
startNonterminal PathExpr
startNonterminal RelativePathExpr
startNonterminal StepExpr
startNonterminal PostfixExpr
startNonterminal PrimaryExpr
startNonterminal Literal
startNonterminal NumericLiteral
TERMINAL: IntegerLiteral 42
endNonterminal NumericLiteral
endNonterminal Literal
endNonterminal PrimaryExpr
endNonterminal PostfixExpr
endNonterminal StepExpr
endNonterminal RelativePathExpr
endNonterminal PathExpr
endNonterminal SimpleMapExpr
endNonterminal ValueExpr
endNonterminal UnaryExpr
endNonterminal ArrowExpr
endNonterminal CastExpr
endNonterminal CastableExpr
endNonterminal TreatExpr
endNonterminal InstanceofExpr
endNonterminal IntersectExceptExpr
endNonterminal UnionExpr
endNonterminal MultiplicativeExpr
endNonterminal AdditiveExpr
endNonterminal RangeExpr
endNonterminal StringConcatExpr
endNonterminal ComparisonExpr
endNonterminal AndExpr
endNonterminal OrExpr
endNonterminal ExprSingle
endNonterminal LetBinding
endNonterminal LetClause
endNonterminal InitialClause
startNonterminal ReturnClause
TERMINAL: TOKEN return
startNonterminal ExprSingle
startNonterminal OrExpr
startNonterminal AndExpr
startNonterminal ComparisonExpr
startNonterminal StringConcatExpr
startNonterminal RangeExpr
startNonterminal AdditiveExpr
startNonterminal MultiplicativeExpr
startNonterminal UnionExpr
startNonterminal IntersectExceptExpr
startNonterminal InstanceofExpr
startNonterminal TreatExpr
startNonterminal CastableExpr
startNonterminal CastExpr
startNonterminal ArrowExpr
startNonterminal UnaryExpr
startNonterminal ValueExpr
startNonterminal SimpleMapExpr
startNonterminal PathExpr
startNonterminal RelativePathExpr
startNonterminal StepExpr
startNonterminal PostfixExpr
startNonterminal PrimaryExpr
startNonterminal VarRef
TERMINAL: TOKEN $
startNonterminal VarName
startNonterminal EQName
startNonterminal QName
startNonterminal FunctionName
TERMINAL: QName v
endNonterminal FunctionName
endNonterminal QName
endNonterminal EQName
endNonterminal VarName
endNonterminal VarRef
endNonterminal PrimaryExpr
endNonterminal PostfixExpr
endNonterminal StepExpr
endNonterminal RelativePathExpr
endNonterminal PathExpr
endNonterminal SimpleMapExpr
endNonterminal ValueExpr
endNonterminal UnaryExpr
endNonterminal ArrowExpr
endNonterminal CastExpr
endNonterminal CastableExpr
endNonterminal TreatExpr
endNonterminal InstanceofExpr
endNonterminal IntersectExceptExpr
endNonterminal UnionExpr
endNonterminal MultiplicativeExpr
endNonterminal AdditiveExpr
endNonterminal RangeExpr
endNonterminal StringConcatExpr
endNonterminal ComparisonExpr
endNonterminal AndExpr
endNonterminal OrExpr
endNonterminal ExprSingle
endNonterminal ReturnClause
endNonterminal FLWORExpr
endNonterminal ExprSingle
endNonterminal Expr
endNonterminal QueryBody
endNonterminal MainModule
endNonterminal Module
TERMINAL: EOF 
endNonterminal XQuery
---
  <XQuery>
    <Module>
      <MainModule>
        <Prolog>
        </Prolog>
        <QueryBody>
          <Expr>
            <ExprSingle>
              <FLWORExpr>
                <InitialClause>
                  <LetClause>
                    <TOKEN>let</TOKEN>
                    <TOKEN>
                    </TOKEN>
                    <WS> </WS>
                    <WS>
                    </WS>
                    <LetBinding>
                      <TOKEN>$</TOKEN>
                      <TOKEN>
                      </TOKEN>
                      <VarName>
                        <EQName>v</EQName>
                        <EQName>
                        </EQName>
                      </VarName>
                      <TOKEN>:=</TOKEN>
                      <TOKEN>
                      </TOKEN>
                      <ExprSingle>
                        <PrimaryExpr>
                          <Literal>
                            <NumericLiteral>
                              <IntegerLiteral>42</IntegerLiteral>
                              <IntegerLiteral>
                              </IntegerLiteral>
                            </NumericLiteral>
                          </Literal>
                        </PrimaryExpr>
                      </ExprSingle>
                    </LetBinding>
                  </LetClause>
                </InitialClause>
                <WS>
</WS>
                <WS>
                </WS>
                <ReturnClause>
                  <TOKEN>return</TOKEN>
                  <TOKEN>
                  </TOKEN>
                  <WS> </WS>
                  <WS>
                  </WS>
                  <ExprSingle>
                    <PrimaryExpr>
                      <VarRef>
                        <TOKEN>$</TOKEN>
                        <TOKEN>
                        </TOKEN>
                        <VarName>
                          <EQName>v</EQName>
                          <EQName>
                          </EQName>
                        </VarName>
                      </VarRef>
                    </PrimaryExpr>
                  </ExprSingle>
                </ReturnClause>
              </FLWORExpr>
            </ExprSingle>
          </Expr>
        </QueryBody>
      </MainModule>
    </Module>
    <EOF>

# simple2
    startNonterminal XQuery 0
startNonterminal Module 0
startNonterminal MainModule 0
startNonterminal Prolog 0
endNonterminal Prolog
startNonterminal QueryBody 0
startNonterminal Expr 0
startNonterminal ExprSingle 0
startNonterminal OrExpr 0
startNonterminal AndExpr 0
startNonterminal ComparisonExpr 0
startNonterminal StringConcatExpr 0
startNonterminal RangeExpr 0
startNonterminal AdditiveExpr 0
startNonterminal MultiplicativeExpr 0
startNonterminal UnionExpr 0
startNonterminal IntersectExceptExpr 0
startNonterminal InstanceofExpr 0
startNonterminal TreatExpr 0
startNonterminal CastableExpr 0
startNonterminal CastExpr 0
startNonterminal ArrowExpr 0
startNonterminal UnaryExpr 0
startNonterminal ValueExpr 0
startNonterminal SimpleMapExpr 0
startNonterminal PathExpr 0
startNonterminal RelativePathExpr 0
startNonterminal StepExpr 0
startNonterminal PostfixExpr 0
startNonterminal PrimaryExpr 0
startNonterminal Literal 0
startNonterminal NumericLiteral 0
TERMINAL: IntegerLiteral 42
endNonterminal NumericLiteral
endNonterminal Literal
endNonterminal PrimaryExpr
endNonterminal PostfixExpr
endNonterminal StepExpr
endNonterminal RelativePathExpr
endNonterminal PathExpr
endNonterminal SimpleMapExpr
endNonterminal ValueExpr
endNonterminal UnaryExpr
endNonterminal ArrowExpr
endNonterminal CastExpr
endNonterminal CastableExpr
endNonterminal TreatExpr
endNonterminal InstanceofExpr
endNonterminal IntersectExceptExpr
endNonterminal UnionExpr
endNonterminal MultiplicativeExpr
endNonterminal AdditiveExpr
endNonterminal RangeExpr
endNonterminal StringConcatExpr
endNonterminal ComparisonExpr
endNonterminal AndExpr
endNonterminal OrExpr
endNonterminal ExprSingle
endNonterminal Expr
endNonterminal QueryBody
endNonterminal MainModule
endNonterminal Module
TERMINAL: EOF 
endNonterminal XQuery
  <XQuery>
    <Module>
      <MainModule>
        <Prolog>
        </Prolog>
        <QueryBody>
          <Expr>
            <ExprSingle>
              <PrimaryExpr>
                <Literal>
                  <NumericLiteral>
                    <IntegerLiteral>42</IntegerLiteral>
                    <IntegerLiteral>
                    </IntegerLiteral>
                  </NumericLiteral>
                </Literal>
              </PrimaryExpr>
            </ExprSingle>
          </Expr>
        </QueryBody>
      </MainModule>
    </Module>
    <EOF>
    </EOF>
  </XQuery>