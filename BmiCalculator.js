import React, { useState } from 'react';
const BmiCalculator = () => {
    const styles = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
       
      };
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBmi = () => {
    
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      determineCategory(bmiValue);
    }
  };

  const determineCategory = (bmi) => {
    if (bmi < 18.5) {
      setCategory('Underweight');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      setCategory('Normal weight');
    } else if (bmi >= 25 && bmi < 29.9) {
      setCategory('Overweight');
    } else {
      setCategory('Obesity');
    }
  };

  return (
    //
    <div style={styles}>
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2 style={{color:"red"}}>BMI Calculator</h2>
      <div>
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBmi} style={{color:"orange",backgroundColor:"red"}}>Calculate BMI</button>

      {bmi && (
        <div style={{ marginTop: '20px' }}>
          <h3>Your BMI: {bmi}</h3>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default BmiCalculator;