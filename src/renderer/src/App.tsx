import { Content, RootLayout, Sidebar, DragableTopBar, ActionButtonRow, NotePreviewList, MarkdownEditor, FloatingNoteTitle } from "@/components";
import { useRef } from "react";

const App = () => {

	const constantContainerRef = useRef<HTMLDivElement>(null)
	const resetScroll = () => {
		constantContainerRef.current?.scrollTo(0, 0)
	}
	return (
		<>
			<RootLayout>
				<DragableTopBar />
				<Sidebar className="p-2">
					<ActionButtonRow className="flex justify-between mt-1" />
					<NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
				</Sidebar>

				<Content ref={constantContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
					<FloatingNoteTitle className='pt-2' />
					<MarkdownEditor />
				</Content>
			</RootLayout>
		</>
	)
}

export default App
