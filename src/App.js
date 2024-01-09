import React, { useState } from "react"
import { useLanguage } from './components/LanguageContext'

import TaskBox from "./components/TaskBox"

const App = () => {
		const {language, setLanguage} = useLanguage()

    const [taskList, setTaskList] = useState([])

		const handleLanguageChange = (event) => setLanguage(event.target.value)

    const onAddTaskButtonClick = event => {
      setTaskList(taskList.concat(<TaskBox key={taskList.length} step={taskList.length} />))
    }

    const submit = event => {
			const types = [
				"T",
				"C",
				"A",
				"M"
			]

			let tasks = []
			let event_key = ""

			document.querySelectorAll("input[type=number], input[type=text], input[type=hidden], select").forEach((item) => {
				if (item.id == "") return

				const id = item.id.split("-")
				// [0] = step
				// [1] = type
				// [2] = key
				// .value = value

				const step = id[0]
				const type = id[1]

				// Si la tâche n'existe pas encore, on la crée
				if (!tasks[step]) tasks[step] = {}

				tasks[step]["type"] = types[type]
				tasks[step][id[2]] = item.value
			})

			for (const task of tasks) {
				for (const key in task) {
					event_key += task[key] + "-"
				}
			}

			if (event_key.endsWith("-")) event_key = event_key.slice(0, -1)

			alert(event_key)
			navigator.clipboard.writeText(btoa(encodeURIComponent(event_key)))
    }

    return (
      <div>
        <div className="card">
            <div className="card-body">
                <button onClick={onAddTaskButtonClick} type="button" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                    </svg>

                    Add task
                </button>

								<select className="form-select" value={language} onChange={handleLanguageChange} style={{display: "inline-flex"}}>
									<option disabled>Choisir une langue</option>
									<option value="enUS" selected>EN</option>
									<option value="frFR">FR</option>
									<option value="esES">ES</option>
								</select>
            </div>
        </div>

        <br />

        {taskList}

        <div className="card">
            <div className="card-body">
                <button onClick={submit} type="button" className="btn btn-primary">
                    Copy event to clipboard !
                </button>
            </div>
        </div>

      </div>
    )
}

export default App