import { notesAtom, selectedNoteIndexAtom } from '@renderer/store'
import { useAtomValue, useAtom } from 'jotai'

interface Props {
  onSelect?: () => void
}

export const useNoteList = ({ onSelect }: Props) => {
  const notes = useAtomValue(notesAtom)

  const [selectedNoteIndex, setSelectedNoteIndex] = useAtom(selectedNoteIndexAtom)

  const handleNoteSelect = (index: number) => async () => {
    setSelectedNoteIndex(index)

    if (onSelect) {
      onSelect()
    }
  }

  return {
    notes,
    selectedNoteIndex,
    handleNoteSelect
  }
}
