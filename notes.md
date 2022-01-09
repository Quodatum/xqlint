 ```
 translator.js

 this.FunctionCall = function(node){
        this.visitOnly(node, ['ArgumentList']);
        var name = translator.getFirstChild(node, 'EQName');

declare function local:test($hello){
     $hello
};
```

TOKEN : declare
WS :  
TOKEN : function
WS :  
EQName : local:test
FunctionName : undefined
EQName : undefined
TOKEN : (
TOKEN : $
EQName : hello
FunctionName : undefined
EQName : undefined
Param : undefined
ParamList : undefined
TOKEN : )
TOKEN : {
WS : 
     
Statements : undefined
TOKEN : $
EQName : hello
FunctionName : undefined
EQName : undefined
VarName : undefined
VarRef : undefined
PrimaryExpr : undefined
PostfixExpr : undefined
StepExpr : undefined
RelativePathExpr : undefined
PathExpr : undefined
SimpleMapExpr : undefined
ValueExpr : undefined
UnaryExpr : undefined
ArrowExpr : undefined
CastExpr : undefined
CastableExpr : undefined
TreatExpr : undefined
InstanceofExpr : undefined
IntersectExceptExpr : undefined
UnionExpr : undefined
MultiplicativeExpr : undefined
AdditiveExpr : undefined
RangeExpr : undefined
StringConcatExpr : undefined
FTContainsExpr : undefined
ComparisonExpr : undefined
AndExpr : undefined
OrExpr : undefined
ExprSimple : undefined
ExprSingle : undefined
Expr : undefined
StatementsAndOptionalExpr : undefined
WS : 

TOKEN : }
FunctionDecl : undefined
AnnotatedDecl : undefined
TOKEN : ;
Separator : undefined
Prolog : undefined
WS : 


Statements : undefined
StatementsAndOptionalExpr : undefined
Program : undefined
MainModule : undefined
Module : undefined
EOF : 
XQuery : undefined

```xml
  <XQuery>
    <Module>
      <MainModule>
        <Prolog>
          <AnnotatedDecl>
            <TOKEN>declare</TOKEN>
            <TOKEN>
            </TOKEN>
            <WS> </WS>
            <WS>
            </WS>
            <FunctionDecl>
              <TOKEN>function</TOKEN>
              <TOKEN>
              </TOKEN>
              <WS> </WS>
              <WS>
              </WS>
              <EQName>local:test</EQName>
              <EQName>
              </EQName>
              <TOKEN>(</TOKEN>
              <TOKEN>
              </TOKEN>
              <ParamList>
                <Param>
                  <TOKEN>$</TOKEN>
                  <TOKEN>
                  </TOKEN>
                  <EQName>hello</EQName>
                  <EQName>
                  </EQName>
                </Param>
              </ParamList>
              <TOKEN>)</TOKEN>
              <TOKEN>
              </TOKEN>
              <TOKEN>{</TOKEN>
              <TOKEN>
              </TOKEN>
              <WS>
     </WS>
              <WS>
              </WS>
              <StatementsAndOptionalExpr>
                <Statements>
                </Statements>
                <Expr>
                  <ExprSingle>
                    <ExprSimple>
                      <ArrowExpr>
                        <PrimaryExpr>
                          <VarRef>
                            <TOKEN>$</TOKEN>
                            <TOKEN>
                            </TOKEN>
                            <VarName>
                              <EQName>hello</EQName>
                              <EQName>
                              </EQName>
                            </VarName>
                          </VarRef>
                        </PrimaryExpr>
                      </ArrowExpr>
                    </ExprSimple>
                  </ExprSingle>
                </Expr>
              </StatementsAndOptionalExpr>
              <WS>
</WS>
              <WS>
              </WS>
              <TOKEN>}</TOKEN>
              <TOKEN>
              </TOKEN>
            </FunctionDecl>
          </AnnotatedDecl>
          <Separator>
            <TOKEN>;</TOKEN>
            <TOKEN>
            </TOKEN>
          </Separator>
        </Prolog>
        <WS>

</WS>
        <WS>
        </WS>
        <Program>
          <StatementsAndOptionalExpr>
            <Statements>
            </Statements>
          </StatementsAndOptionalExpr>
        </Program>
      </MainModule>
    </Module>
    <EOF>
    </EOF>
  </XQuery>
```