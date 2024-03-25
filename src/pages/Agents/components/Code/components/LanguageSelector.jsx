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
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            background: state.isFocused ? 'rgb(30,30,30)' : 'rgb(20, 20, 20)',
            outline: 'none',
            boxShadow: 'none',
            border: state.isFocused ? 'hsla(0, 0%, 100%, .2)' : 'hsla(0, 0%, 100%, .2)',
            // borderColor: state.isFocused ? 'red' : 'green',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'rgb(30, 30, 30)' : 'inherit',
            color: state.isSelected ? 'hsla(0, 0%, 100%, .8)' : '#eff7ff9c',
          })
        }}
          />
    </div>
  )
}
