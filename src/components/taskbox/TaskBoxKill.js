import AutoCompleteInput from "../AutoCompleteInput"

const creatures = require("../../data/creatures-unique.json")

export default function TaskBoxKill({ step, type }) {
  return (
    <>
      <input type="number" id={ step + "-" + type + "-amount" } placeholder="Nombre de kills" />
      <AutoCompleteInput id={ step + "-" + type + "-creature_id" } options={creatures} placeholder="Entitée" />
    </>
  )
}