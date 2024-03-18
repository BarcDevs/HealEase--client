import {HTMLProps} from 'react'


type SetState<T> = React.Dispatch<React.SetStateAction<T>>
type ClassName = HTMLProps<HTMLElement>['className']
