import React from 'react';
import "./Result.css";

function Result({ textOne, textTwo, textThree, emi, totalInterest, totalAmount }) {

    const formatRupee = (val) => {
        return(
            val.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR"
            })
        )

    }
    return (
        <div className="result">

        <h3>{textOne} : 
        <span className="result__bold">
        {formatRupee(emi)}
        </span>
        </h3>

        <h3>{textTwo} :
        <span className="result__bold">
        {formatRupee(totalInterest)}
        </span>
        </h3>

        <h3>{textThree} : 
        <span className="result__bold">
        {formatRupee(totalAmount)}
        </span>
        </h3>
        </div>
    )
}

export default Result;
