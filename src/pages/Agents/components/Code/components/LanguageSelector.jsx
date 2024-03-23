import React, { useState } from 'react'
import ReactSelect from 'react-select'



export default function LanguageSelector(props) {
    const { selectedLanguage, handleSelectionChange, languageOptions } = props;

  return (
    <div className='language__selector'>
          <ReactSelect
              className="basic-single"
              classNamePrefix="select"
            //   defaultValue={languageOptions[0]}
              value={selectedLanguage}
              name="language"
              options={languageOptions}
              onChange={handleSelectionChange}
          />
    </div>
  )
}
