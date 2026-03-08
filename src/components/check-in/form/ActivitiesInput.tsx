import {
    FC,
    type KeyboardEvent,
    useState
} from 'react'

import {FormControl} from '@/components/ui/form.tsx'
import {Input} from '@/components/ui/input.tsx'


type ActivitiesInputProps = {
    add: (activity: string) => void
}

const ActivitiesInput: FC<ActivitiesInputProps> = ({
    add
}) => {
    const [input, setInput] = useState('')

    const onKeyDown = (
        e: KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key !== 'Enter') return

        e.preventDefault()
        add(input)
        setInput('')
    }

    return (
        <FormControl>
            <Input
                placeholder="Add activity, press Enter"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="no-focus placeholder:opacity-40"
            />
        </FormControl>
    )
}

export default ActivitiesInput