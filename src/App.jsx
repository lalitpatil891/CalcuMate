import { useState } from 'react'
import './App.css'

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const fn = parseFloat(firstNumber);
    const sn = parseFloat(secondNumber);

    if (isNaN(fn) || isNaN(sn)) {
      setResult('Invalid Input');
      return;
    }

    switch (operator) {
      case '+': setResult(fn + sn); break;
      case '-': setResult(fn - sn); break;
      case '*': setResult(fn * sn); break;
      case '/': setResult(sn !== 0 ? fn / sn : 'Cannot divide by zero'); break;
      case '%': setResult(fn % sn); break;
      case '^': setResult(fn ** sn); break;
      default: setResult('Unknown Operation');
    }
  };

  const resetCalculator = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">CalcuMate</h2>
        <p className="text-lg text-gray-600 text-center mb-6">
          Do quick math without the stress — just input and click!
        </p>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <input
            type="text"
            placeholder="First Number"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Second Number"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            className="p-3 rounded border border-gray-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Result"
            value={result}
            readOnly
            className="p-3 rounded border border-gray-300 text-center bg-gray-100"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 w-full max-w-xs">
          {['+', '-', '*', '/', '%', '^'].map((op) => (
            <button
              key={op}
              onClick={() => calculate(op)}
              className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition text-xl font-semibold"
            >
              {op}
            </button>
          ))}
        </div>

        <button
          onClick={resetCalculator}
          className="mt-6 mb-16 bg-red-400 w-full max-w-xs py-2 rounded hover:bg-red-600 transition font-semibold"
        >
          Reset
        </button>
      </div>

      <footer className="w-full py-3 text-center text-sm text-gray-700 fixed bottom-0 left-0 bg-gray-100">
        Made with ❤️ by{' '}
        <a
          href="https://github.com/lalitpatil891"
          target="_blank"
          rel="noopener noreferrer"
          className="relative text-blue-600 hover:underline group"
        >
          Lalit Patil
          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Visit my GitHub 🚀
          </span>
        </a>
        {' '}— CalcuMate: Simplify Your Calculations!
      </footer>

    </>
  );
}

export default App;