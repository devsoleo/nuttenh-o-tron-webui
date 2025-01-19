import React, { useState } from "react"
import { Typeahead } from "react-bootstrap-typeahead"

import { useLanguage } from './LanguageContext'

export default function AutoCompleteInput({ id, options, placeholder }) {
  const { language } = useLanguage()

  options = options.filter((x) => x[".locale"] == language).map((x) => {
    return { creature: x[".name"], uid: x[".entry"] }
  })

  const [value, setValue] = useState([])
  const [uid, setUid] = useState(0)

  const handleChange = (selected) => {
    setValue(selected)

    setUid(selected[0]?.uid)
  }

  return (
    <>
      <input type="hidden" id={id} value={uid} />

      <Typeahead
        style={{display: "inline-flex"}}
        labelKey="creature"
        onChange={handleChange}
        options={options}
        placeholder={placeholder}
        selected={value}
      />
    </>
  )
}