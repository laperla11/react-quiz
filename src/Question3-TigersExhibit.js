/*
 * ============= Question 3 =============
 *
 * The TigersExhibit component below receives 2 props:
 * - population which is a number
 * - habitats which is an array of strings
 *
 * Part A: Replace the dots (...) in the paragraph (<p>) element below with the
 * population prop.
 *
 * Part B: Replace the comment in the unordered list (<ul>) element below with a
 * list element (<li>) element for every habitat in the habitats prop
 *
 * HINT 1: you can transform an array using the .map method
 * HINT 2: when you are rendering a list in React, remember that you need to
 * provide a key prop which tells React which list item is which
 */

import React from "react";

function TigersExhibit(props) {
  return (
    <div className="tigers">
      <h2>Tigers</h2>
      <p>There are {props.population} tigers in the world</p>
      <ul>
        {props.habitats.map((habitat, index) => {
          return <li key={index}>{habitat}</li>;
        })}
      </ul>
    </div>
  );
}

export default TigersExhibit;
