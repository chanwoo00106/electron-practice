import {
  ActionButtonRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  NotePreviewList,
  RootLayout,
  Sidebar
} from './components'
import { MarkdownEditor } from './components/MarkdownEditor'

const App = (): JSX.Element => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex justify-between mt-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingNoteTitle className="pt-2" />
          <MarkdownEditor />
        </Content>
      </RootLayout>
    </>
  )
}

export default App
