export default function TaskBoxGame({ step, type }) {
  return (
    <select className="form-select" id={ step + "-" + type + "-value" } style={{display: "inline-flex"}}>
      <option value="" selected disabled>Choisir un type de mission</option>
      <option value="1">Mémo</option>
      <option value="2">Pendu</option>
      <option value="4">Juste prix</option>
      <option value="4">Simon says / Mala'dit</option>
      <option value="5">Floor is lava</option>
      <option value="5">Death Roll</option>
      <option value="5">Jeux des batons </option>
      <option value="5">Puzzle</option>
      <option value="5">TicTacToe</option>
      <option value="5">Question personnalisée</option>
      <option value="5">Quel est ce son ?</option>
      <option value="5">Qui est ce modèle 3D ?</option>
      <option value="5">Quelle est cette icone ?</option>
    </select>
  )
}