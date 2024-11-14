import React from 'react';

const HelloWorld = () => {
    // Function to display "Hello World!" as a string
    function helloWorld(){
        return "Hello World!";
    }

    // Calculate the average of the classPoints
    // Check if yourPoints are better than the average
    // Return true if they are, false otherwise
    function betterThanAverage(classPoints, yourPoints) {
        const total = classPoints.reduce((sum, current) => sum + current, 0);
        const classAverage = total / classPoints.length;
      
        // Return the comparison directly
        return yourPoints > classAverage;
    }

  return (
    <div>
        <h1>CodeWars Practice</h1>
        <h3>{helloWorld()}</h3>
        <h1>Calculate the average of the classPoints and Check if yourPoints are better than the average</h1>
        <h3>betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)?</h3>
        <h3>Better than average: {betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) ? 'Yes' : 'No'}</h3>
        <h3>betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)?</h3>
        <h3>Better than average: {betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)? 'Yes' : 'No'}</h3>
    </div>
  );
}

export default HelloWorld;
