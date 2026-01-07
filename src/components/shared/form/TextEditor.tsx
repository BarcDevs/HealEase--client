import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'
import {useState} from 'react'

type EditorProps = {
    onBlur: () => void,
    onChange: (content: string) => void

    initialValue?: string
    placeholder?: string
}

const TextEditor = ({onBlur, onChange, placeholder, initialValue = ''}: EditorProps) => {
    const [value, setValue] = useState(initialValue)

    const handleChange = (content: string) => {
        setValue(content)
        onChange(content)
    }

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'align': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'align',
        'list', 'bullet',
        'indent',
        'link', 'image'
    ]

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
