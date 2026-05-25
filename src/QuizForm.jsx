export default function QuizForm({ onStart }) {
  return (
    <>
      <h1>QUIZ GAME</h1>

      <label>Name:</label>
      <input type="text" size="15" /><br /><br />

      <label>Age:</label>
      <select>
        <option>--Enter Age--</option>
        <option>16</option>
        <option>17</option>
        <option>18+</option>
      </select><br /><br />

      <label>Email:</label>
      <input type="email" size="15" /><br /><br />

      <button className="button" onClick={onStart}>
        Start Quiz
      </button>
    </>
  );
}
