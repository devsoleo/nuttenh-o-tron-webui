import { useState } from "react"
import AutoCompleteInput from "../AutoCompleteInput"
const creatures = require("../../data/creatures-unique.json")


export default function TaskBoxTarget({ step, type }) {
  const [ targetType, setTargetType ] = useState("")

  const handleChange = (e) => setTargetType(e.target.value)

  return (
    <>
      <select onChange={handleChange} className="form-select" style={{display: "inline-flex"}} >
        <option value="" selected disabled>Choisir un type de cible</option>
        <option value="1">Creature</option>
        <option value="2">Joueur</option>
      </select>

      {
        targetType == "1" ? (
          <AutoCompleteInput id={ step + "-" + type + "-creature_id" } options={creatures} placeholder="Entitée" />
        ) : (
          <input type="text" id={ step + "-" + type + "-player_name" } placeholder="Entitée" />
        )
      }
    </>
  )
}