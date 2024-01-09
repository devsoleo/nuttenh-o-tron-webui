import React, { useState } from "react"

import AutoCompleteInput from "./AutoCompleteInput"
const creatures = require("../data/creatures-unique.json")

export default function TaskBox(props) {

    const [taskType, setTaskType] = useState("")

    function updateForm(e) {
        setTaskType(<TaskSelectorStep2 step={props.step} type={e.target.value} />)
    }

    return (
        <div className="box" style={{ padding: "8px 0" }}>
            <div className="card">
                <div className="card-body">
                    <select onChange={updateForm} className="form-select" style={{display: "inline-flex"}}>
                        <option selected disabled>Choisir un type de mission</option>
                        <option value="0">Tuer</option>
                        <option value="1">Cibler</option>
                        <option value="2">Aller</option>
                        <option value="3">Mini-jeu</option>
                    </select>

                    {taskType}
                </div>
            </div> 
        </div>
    )
}

function TaskSelectorStep2(props) {
    let type = props.type
    let step = props.step

    if (type == "0") {
        return (
            <>
                <input type="number" id={ step + "-" + type + "-amount" } placeholder="Nombre de kills" />
                <AutoCompleteInput id={ step + "-" + type + "-creature_id" } options={creatures} placeholder="Entitée" />
            </>
        )
    } else if (type == "1") {
        return (
            <input type="text" id={ step + "-" + type + "-value" } placeholder="Entitée" />
        )
    }  else if (type == "3") {
        return (
            <select className="form-select" id={ step + "-" + type + "-value" } style={{display: "inline-flex"}}>
                <option selected disabled>Choisir un type de mission</option>
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
}
