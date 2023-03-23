import React, { useState } from 'react';

function TimeInput() {
  const [selectedTime, setSelectedTime] = useState('');

  function handleTimeChange(event) {
    setSelectedTime(event.target.value);
    // console.log(selectedTime);
//   setSelectedTime(selectedTime);
const formattedTime = new Date(`1970-01-01T${selectedTime}`).toLocaleTimeString();
console.log(formattedTime);
  }

  return (
    <div>
      <label htmlFor="timeInput">Select a time:</label>
      <input type="time" id="timeInput" value={selectedTime} onChange={handleTimeChange} />
    </div>
  );
}
export default TimeInput
