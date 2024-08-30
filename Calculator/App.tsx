import React, { useState } from 'react';

const Calculator = () => {
  const [typingDisplay, setTypingDisplay] = useState('');
  const [answerDisplay, setAnswerDisplay] = useState('');
  const [scientificMode, setScientificMode] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === 'C') {
      setTypingDisplay('');
      setAnswerDisplay('');
    } else if (key === '=') {
      try {
        const result = eval(typingDisplay);
        setAnswerDisplay(result.toString());
      } catch (error) {
        setAnswerDisplay('Error');
      }
    } else if (key === 'scientific') {
      setScientificMode(!scientificMode);
    } else {
      setTypingDisplay(typingDisplay + key);
    }
  };

  const handleScanPicture = () => {
    // This feature is not possible in a web application without access to the device's camera
    // and image processing capabilities. It would require a native mobile app or a desktop application.
    alert('This feature is not available in this web application');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex flex-col mb-4">
        <div className="text-2xl font-bold">Typing Display:</div>
        <input
          type="text"
          value={typingDisplay}
          className="w-full p-2 text-2xl text-right bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="flex flex-col mb-4">
        <div className="text-2xl font-bold">Answer Display:</div>
        <input
          type="text"
          value={answerDisplay}
          className="w-full p-2 text-2xl text-right bg-gray-200 border border-gray-400 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
          readOnly
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('7')}
        >
          7
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('8')}
        >
          8
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('9')}
        >
          9
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('/')}
        >
          /
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('4')}
        >
          4
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('5')}
        >
          5
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('6')}
        >
          6
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('*')}
        >
          *
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('1')}
        >
          1
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('2')}
        >
          2
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('3')}
        >
          3
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('-')}
        >
          -
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('0')}
        >
          0
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('.')}
        >
          .
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('C')}
        >
          C
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => handleKeyPress('=')}
        >
          =
        </button>
        {scientificMode && (
          <div className="grid grid-cols-4 gap-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
              onClick={() => handleKeyPress('sin(')}
            >
              sin
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
              onClick={() => handleKeyPress('cos(')}
            >
              cos
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
              onClick={() => handleKeyPress('tan(')}
            >
              tan
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
              onClick={() => handleKeyPress('log(')}
            >
              log
            </button>
          </div>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={() => setScientificMode(!scientificMode)}
        >
          Scientific
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-lg"
          onClick={handleScanPicture}
        >
          Scan Picture
        </button>
      </div>
    </div>
  );
};

export default Calculator;