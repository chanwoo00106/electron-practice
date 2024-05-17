import { notesMock } from '@renderer/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { cn } from '@renderer/utils'

export const NotePreviewList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (!notesMock.length) {
    return (
      <ul className={cn('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title + note.lastEditTime} {...note} />
      ))}
    </ul>
  )
}
