import {Editor} from '@tinymce/tinymce-react'
import config from '@/config'
import {useRef} from 'react'

type EditorProps = {
    onBlur: () => void,
    onChange: (content: string) => void

    initialValue?: string
    placeholder?: string
}

const TextEditor = ({onBlur, onChange, placeholder, initialValue = ''}: EditorProps) => {
    const editorRef = useRef<any>(null)

    return (
        <Editor
            apiKey={config.tinyMceApiKey}
            onInit={(_evt, editor) => editorRef.current = editor}
            initialValue={initialValue}
            onBlur={onBlur}
            onEditorChange={(content) => onChange(content)}
            init={{
                height: 350,
                menubar: false,
                plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'preview', 'anchor',
                    'searchreplace', 'visualblocks', 'fullscreen', 'lists',
                    'insertdatetime', 'media', 'table', 'help', 'wordcount', 'fullscreen'
                ],
                toolbar: `undo redo |
                 blocks |
                 bold italic backcolor |
                 alignleft aligncenter alignright alignjustify |
                 bullist numlist outdent indent |
                 removeformat |
                 table insertdatetime |
                 fullscreen help`,
                content_style: `body { font-family:Helvetica,Arial,sans-serif; font-size:14px; } 
                                .mce-content-body[data-mce-placeholder] { opacity: 0.4; }`,
                skin: 'oxide',
                placeholder
            }}
        />
    )
}

export default TextEditor
