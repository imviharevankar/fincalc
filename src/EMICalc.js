import React, { useState, useEffect } from 'react';


import Result from "./Result";
import Chart from "./Chart";
import "./EMICalc.css";

function EMICalc() {

  const [amount, setAmount] = useState(100000);
  const [interest, setInterest] = useState(11);
  const [term, setTerm] = useState(2);
  const [emi, setEmi] = useState(4660.78);
  const [totalInterest, setTotalInterest] = useState(11858.81);
  const [totalAmount, setTotalAmount] = useState(111858.81);

  useEffect(()=> {
    setAmount(amount);
    setInterest(interest);
    setTerm(term);
    setEmi(emi);
    setTotalAmount(totalAmount);
    setTotalInterest(totalInterest);
    calculate();
  }, [amount, interest, term,  emi, totalAmount, totalInterest, calculate]);

  function getAmount(event) {
    event.preventDefault();
    setAmount(event.target.value);
  }

  function getInterest(event) {
    event.preventDefault();
    setInterest(event.target.value);
  }

  function getTerm(event) {
    event.preventDefault();
    setTerm(event.target.value);
  }

  function calculate() {

    const intLoan = ((interest / 12 ) / 100 );
    const termLoan = (term * 12);

    const E = Math.pow((1 + intLoan), termLoan)
      /
      (Math.pow((1 + intLoan), termLoan) - 1);

    setEmi(E * amount * intLoan);
    setTotalAmount(emi * termLoan);
    setTotalInterest(totalAmount - amount);
  }

  // Button functions

  const home = () => {
    document.querySelector("#home").classList.add("emiCalc__buttons__active");
    document.querySelector("#personal").classList.remove("emiCalc__buttons__active");
    document.querySelector("#car").classList.remove("emiCalc__buttons__active");

    setAmount(5000000);
    setInterest(10.5);
    setTerm(20);

    calculate();
  }

  const personal = () => {
    document.querySelector("#home").classList.remove("emiCalc__buttons__active");
    document.querySelector("#personal").classList.add("emiCalc__buttons__active");
    document.querySelector("#car").classList.remove("emiCalc__buttons__active");

    setAmount(350000);
    setInterest(17.5);
    setTerm(3);

    calculate();
  }

  const car = () => {
    document.querySelector("#home").classList.remove("emiCalc__buttons__active");
    document.querySelector("#personal").classList.remove("emiCalc__buttons__active");
    document.querySelector("#car").classList.add("emiCalc__buttons__active");

    setAmount(400000);
    setInterest(12.5);
    setTerm(5);

    calculate();
  }

    return (
        <div className="emiCalc">
            <div>
            <div className="emiCalc__buttons">

            <button id="home" onClick={home}        className="emiCalc__buttons__active">
                Home Loan
            </button>

            <button id="personal" onClick={personal}>   Personal Loan
            </button>
            
            <button id="car" onClick={car}>
                Car Loan
            </button>
            </div>
        <div className="emiCalc__form">
        <form className="emiCalc__form"
         onSubmit={e => {
          e.preventDefault();
          calculate()
        }}>
        
          <input type="number"
                 placeholder={`₹ ${amount}`}
                 onChange={getAmount}
                 required
                 min={1}
                 max={25000000}
                 step={1000}
                 id="amount"
          />
  

          {/* <Slider min={1} 
                  max={25000000}
                  unit="Rupees (₹)"
                  id="rangeInput"
                  value={amount}
                  onInput={getAmount}
          /> */}


          <input type="number"
                 placeholder={`${interest} %`}
                 onChange={getInterest}
                 required
                 min={5.0}
                 max={15.0}
                 step={0.01}
                 kind="interest"
          />

          {/* <Slider min={5} max={15} unit="%" /> */}

          <input type="number"
                 placeholder={`${term} Years`}
                 onChange={getTerm}
                 required
                 min={1}
                 max={20}
                 step={1}
                 kind="term"
          />

          {/* <Slider min={1} max={20} name="amount" unit="Years" /> */}

          <input type="submit" value="Calculate"/>
        </form>
        </div>
        </div>

      <Result textOne="Loan EMI"
              textTwo="Total Interest Payable"
              textThree="Total Payment"
              emi={emi || 1000} 
              totalInterest={totalInterest || 1000}
              totalAmount={totalAmount || 1000}
      />

      <Chart labelOne="Principal Loan Amount"
             labelTwo="Total Interest"
             amount={amount || 1000}
             totalInterest={totalInterest || 1000}
      />
            
      </div>
    )
}

export default EMICalc;
