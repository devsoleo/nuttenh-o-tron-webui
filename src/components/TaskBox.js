import React, { useState } from "react"

import TaskBoxKill from "./taskbox/TaskBoxKill"
import TaskBoxTarget from "./taskbox/TaskBoxTarget"
import TaskBoxGame from "./taskbox/TaskBoxGame"
import TaskBoxSelector from "./TaskBoxSelector"

const taskComponents = {
  "0": TaskBoxKill,
  "1": TaskBoxTarget,
  "3": TaskBoxGame
}

export default function TaskBox({ step }) {
  const [taskType, setTaskType] = useState("")

  const handleTaskTypeChange = (value) => {
    setTaskType(value);
  };

  const SelectedTaskBox = taskComponents[taskType] || null

  return (
    <div className="box" style={{ padding: "8px 0" }}>
      <div className="card">
        <div className="card-body">
          <TaskBoxSelector onChange={handleTaskTypeChange} />
          {SelectedTaskBox && <SelectedTaskBox step={step} type={taskType} />}
        </div>
      </div>
    </div>
  );
}
