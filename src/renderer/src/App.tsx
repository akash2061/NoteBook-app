import { Content, RootLayout, Sidebar, DragableTopBar, ActionButtonRow, NotePreviewList, MarkdownEditor } from "@/components";
const App = () => {
	return (
		// <div className="flex h-screen items-center justify-center">
		// 	<span className="text-4xl text-cyan-500">Hello... Morningstar_2061...!</span>
		// </div>
		<>
			<RootLayout>
				<DragableTopBar />
				<Sidebar className="p-2">
					<ActionButtonRow className="flex justify-between mt-1" />
					<NotePreviewList className="mt-3 space-y-1" />
				</Sidebar>
				<Content className="border-l bg-zinc-900/50 border-l-white/20">
					<MarkdownEditor />
				</Content>
			</RootLayout>
		</>
	)
}

export default App
