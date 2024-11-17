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

        if (yourPoints > classAverage) {
            return true;
        }
        else {
            return false;
        }
      
        // Return the comparison directly
        // return yourPoints > classAverage;
    }
    console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

    const scores = [10, 15, 20, 8];

const totalScore = scores.reduce((acc, score) => {
    return acc + score;
}, 0);
console.log(totalScore);

//Another method 
function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    var classAvg = 0;
    for (var i = 0; i < classPoints.length; i++){
      classAvg += classPoints[i]; 
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg;
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
