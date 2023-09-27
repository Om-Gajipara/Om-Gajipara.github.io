import { useState } from "react";
import "./index.css"


export function Calculator() {
  const [myexp , setExp] = useState('')
  const [display , setDisplay] = useState(myexp)

    function appendCharacter(c) {
        // var expression = document.getElementById('expression');
        // expression.value += character;

        setExp((pre)=>pre+c)
      }
      
      function eraseCharacter() {
        //var expression = document.getElementById('expression').value=toString(0,-1);
        
        setExp((prev)=>{ return prev.slice(0,-1)}) 

      }
  
      function clearExpression() {
        // var expression = document.getElementById('expression');
        // expression.value = '';
       setExp('')
      }
  
    function calculate() {
        var result;
        
         try {
          result = eval(myexp);
          setExp(result)

          //document.getElementById('expression').value= result;
  
        } catch (error) {
          var erorrMsg = 'invalid input';
          setExp(erorrMsg)

          //document.getElementById('result').innerText = 'Invalid expression';
        }
    }

    return(
        <>
        <div class="container">
        <div class="calculator">
          <div type="text" style={{height:40}} id="expression" class="form-control"  placeholder="Enter expression" >
            {myexp}
          </div>
          
          <br />
          <div class="row">
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="*" onClick={()=>{appendCharacter('*')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="÷" onClick={()=>{appendCharacter('/')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-secondary btn-block" value="<-" onClick={()=>{eraseCharacter()}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-secondary btn-block" value="C" onClick={()=>{clearExpression()}} />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="1" onClick={()=>{appendCharacter('1')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="2" onClick={()=>{appendCharacter('2')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="3" onClick={()=>{appendCharacter('3')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="%" onClick={()=>{appendCharacter('%')}} />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="4" onClick={()=>{appendCharacter('4')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="5" onClick={()=>{appendCharacter('5')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="6" onClick={()=>{appendCharacter('6')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="+" onClick={()=>{appendCharacter('+')}} />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="7" onClick={()=>{appendCharacter('7')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="8" onClick={()=>{appendCharacter('8')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="9" onClick={()=>{appendCharacter('9')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="-" onClick={()=>{appendCharacter('-')}} />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="." onClick={()=>{appendCharacter('.')}} />
            </div>
            <div class="col-3">
              <input type="button" class="btn btn-primary btn-block" value="0" onClick={()=>{appendCharacter('0')}} />
            </div>
            <div class="col-5">
              <input type="button" class="btn btn-primary btn-block" value="=" onClick={()=>{calculate()}} />
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-3">
            </div>
            <div class="col-3">
            </div>
          </div>
          <br />
          <div id="result"></div>
        </div>
      </div>
        </>
    );
}
