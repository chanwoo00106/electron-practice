import { selectedNoteAtom } from '@renderer/store'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { useAtomValue } from 'jotai'

export const FloatingNoteTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const selectedNote = useAtomValue(selectedNoteAtom)

  if (selectedNote === null) return null

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{selectedNote.title}</span>
    </div>
  )
}
