import React, { useState } from "react"

export default function TaskBoxSelector({ onChange }) {
  const [taskType, setTaskType] = useState("")

  const handleChange = (e) => {
    setTaskType(e.target.value)
    onChange(e.target.value)
  }

  return (
    <select onChange={handleChange} className="form-select" style={{display: "inline-flex"}}>
      <option selected disabled>Choisir un type de mission</option>
      <option value="0">Tuer</option>
      <option value="1">Cibler</option>
      <option value="2">Aller</option>
      <option value="3">Mini-jeu</option>
    </select>
  )
}