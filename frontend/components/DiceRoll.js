// import { useState } from "react";
// import { rollDice } from "../services/gameService";

// export default function DiceRoll() {
//   const [result, setResult] = useState(null);

//   const handleRoll = async () => {
//     const res = await rollDice();
//     setResult(res);
//   };

//   return (
//     <div>
//       <button onClick={handleRoll}>Roll Dice</button>
//       {result && <p>Rolled: {result.diceRoll}</p>}
//     </div>
//   );
// }
import { useState } from "react";
import { rollDice } from "../services/gameService";

export default function DiceRoll() {
  const [result, setResult] = useState(null);

  const handleRoll = async () => {
    const res = await rollDice();
    setResult(res);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <button
        onClick={handleRoll}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition"
      >
        Roll Dice
      </button>

      {result && <p className="mt-4 text-2xl font-bold text-yellow-300">🎲 Rolled: {result.diceRoll}</p>}
    </div>
  );
}
