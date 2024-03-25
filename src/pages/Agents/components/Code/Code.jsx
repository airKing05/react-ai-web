import { Editor } from '@monaco-editor/react'
import React, { useRef, useState } from 'react'
import LanguageSelector from './components/LanguageSelector';
import "./Code.css"
import { CODE_SNIPPETS, languageOptions } from './constants';



export default function Code() {
    const [codeValue, setCodeValue] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0])

    const codeEditorRef = useRef(null);

    const handleEditorDidMount = (editor, monaco) => {
        codeEditorRef.current = editor;
        editor.focus();
    }

    const handleSelectionChange = (language) => {
        setSelectedLanguage(language);
        setCodeValue(CODE_SNIPPETS[language.value])
    }

    const handleCopyCode =  async() => {
        try {
            await navigator.clipboard.writeText(codeValue);
            alert('Content copied to clipboard');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }


    return (
        <div>
        <div className='row'>
                <div className='col-6 language_selector__section'>
                    <span>Language :</span>
                    <LanguageSelector
                        selectedLanguage={selectedLanguage}
                        handleSelectionChange={handleSelectionChange}
                        languageOptions={languageOptions}
                    />
                </div>
            <div className='col-6 copy__btn'>
                <button
                onClick={handleCopyCode}
                >Copy</button>
            </div>
        </div>
            

            <div className='code_editor_container'>
                <Editor
                    height="70vh"
                    defaultLanguage={selectedLanguage.value}
                    defaultValue={CODE_SNIPPETS[selectedLanguage.value]}
                    theme='vs-dark'
                    value={codeValue}
                    onChange={(value) => setCodeValue(value)}
                    onMount={handleEditorDidMount}
                />
            </div>
        </div>
    )
}
