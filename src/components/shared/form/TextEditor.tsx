import { useState } from 'react'

import ReactQuill from 'react-quill-new'

import { REACT_QUILL_SETUP } from '@/constants/reactQuillSetup.ts'

import 'react-quill-new/dist/quill.snow.css'

type EditorProps = {
    onBlur: () => void,
    onChange: (content: string) => void

    initialValue?: string
    placeholder?: string
}

const TextEditor = ({
    onBlur,
    onChange,
    placeholder,
    initialValue = ''
}: EditorProps) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (content: string) => {
        setValue(content)
        onChange(content)
    }

    const { modules, formats } = REACT_QUILL_SETUP

    return (
        <ReactQuill
            theme="snow"
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            modules={modules}
            formats={formats}
            placeholder={placeholder}
            style={{ height: '350px', marginBottom: '50px' }}
        />
    )
}

export default TextEditor
