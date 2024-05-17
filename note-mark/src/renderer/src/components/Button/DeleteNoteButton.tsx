import { ActionButton, ActionButtonProps } from './ActionButton'
import { FaRegTrashAlt } from 'react-icons/fa'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  return (
    <ActionButton {...props}>
      <FaRegTrashAlt />
    </ActionButton>
  )
}
