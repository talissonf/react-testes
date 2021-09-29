import React from 'react';
import DayPicker from 'react-day-picker';
// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import './App.css';

function App() {
  function handleDayChange(selectedDay: any, modifiers: any, dayPickerInput: any) {
    console.log({ selectedDay, modifiers, dayPickerInput })
    const input = dayPickerInput.getInput();
    console.log({
      input,
      selectedDay,
      isEmpty: !input.value.trim(),
      isValidDay: typeof selectedDay !== 'undefined',
      isDisabled: modifiers.disabled === true,
    })
  }

  return (
    <div className="App">
      <div>
        <DayPickerInput
          dayPickerProps={{
            initialMonth: new Date(2021, 8),
            disabledDays: [
              {
                after: new Date(2021, 1, 1),
                before: new Date(2021, 1, 2),
              },// desabilita range de datas antes e depois de determinada
              new Date(2021, 8, 11),
              new Date(2021, 8, 15), // desabilita dias especificos
              { daysOfWeek: [6, 0] } // desabilita fds
            ],
          }}
          onDayChange={handleDayChange}
        />
      </div>
    </div>
  );
}

export default App;
