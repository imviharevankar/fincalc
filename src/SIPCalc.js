import React, { useState, useEffect } from 'react';

import Result from "./Result";
import Chart from "./Chart";
import "./SIPCalc.css";

function SIPCalc() {

    const [sipAmount, setSipAmount] = useState(500);
    const [sipRate, setSipRate] = useState(11);
    const [sipTerm, setSipTerm] = useState(2);
    const [investedAmount, setInvestedAmount] = useState(12000);
    const [estReturns, setEstReturns] = useState(1476);
    const [totalValue, setTotalValue] = useState(13476);

    useEffect(()=> {
        setSipAmount(sipAmount);
        setSipRate(sipRate);
        setSipTerm(sipTerm);
        setInvestedAmount(investedAmount);
        setEstReturns(estReturns);
        setTotalValue(totalValue);
        calculateSip();
      }, [sipAmount, sipRate, sipTerm, investedAmount, estReturns, totalValue, calculateSip ]);
    
    function getSipAmount(event) {
        event.preventDefault();
        setSipAmount(event.target.value);
      }
    
      function getSipRate(event) {
        event.preventDefault();
        setSipRate(event.target.value);
      }
    
      function getSipTerm(event) {
        event.preventDefault();
        setSipTerm(event.target.value);
      }

    function calculateSip () {
         
        const n = sipTerm * 12;
        const i = (sipRate / 100) / 12;

        setInvestedAmount(sipAmount * n);
        
        setEstReturns( ( sipAmount *
                      ((Math.pow((1 + i), n) - 1) / i) *
                      (1 + i)
                    ) - investedAmount)

        setTotalValue(investedAmount + estReturns);
    }

    
    return (
        <div className="sipCalc">
          <div className="sipCalc__form">
            <form onSubmit={e => {
                    e.preventDefault();
                    calculateSip()
            }}>
          <input type="number"
                 placeholder={`Monthly Investement (₹)`}
                 onChange={getSipAmount}
                 required
                 min={500}
                 max={200000}
                 step={10}
                 id="amount"
          />

          {/* <Slider min={1} 
                  max={25000000}
                  unit="Rupees (₹)"
                  id="rangeInput"
                  value={sipAmount}
                  onInput={getSipAmount}
                  name="sipAmountSlider"
          /> */}


          <input type="number"
                 placeholder={`Expected Return Rate (%)`}
                 onChange={getSipRate}
                 required
                 min={1.0}
                 max={30.0}
                 step={1}
          />

          {/* <Slider min={5} max={15} unit="%" /> */}

          <input type="number"
                 placeholder={`Time Period (Yrs)`}
                 onChange={getSipTerm}
                 required
                 min={1}
                 max={30}
                 step={1}
          />

          {/* <Slider min={1} max={20} name="amount" unit="Years" /> */}

          <input type="submit" value="Calculate"/>
        </form>
        </div>

        <Result textOne="Invested Amount"
              textTwo="Est. Returns"
              textThree="Total Value"
              emi={investedAmount} 
              totalInterest={estReturns}
              totalAmount={totalValue}
        />

      <Chart labelOne="Invested Amount"
             labelTwo="Est. Returns"
             amount={investedAmount || 1000}
             totalInterest={estReturns || 1000}
      />
      </div>
    )
}

export default SIPCalc;
