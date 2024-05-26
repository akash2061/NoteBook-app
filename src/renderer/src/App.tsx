import { Content, RootLayout, Sidebar, DragableTopBar, ActionButtonRow, NotePreviewList, MarkdownEditor, FloatingNoteTitle } from "@/components";
import { useEffect, useRef } from "react";

const App = () => {

	const constantContainerRef = useRef<HTMLDivElement>(null)
	const resetScroll = () => {
		constantContainerRef.current?.scrollTo(0, 0)
	}

	useEffect(() => {
		// Check if the platform information is available before using it
		if (window.context && window.context.platform) {
			const platform = window.context.platform;
			if (platform === 'linux') {
				document.documentElement.style.setProperty('--default-font-size', '18px'); // Adjust font size for Linux
				// console.log("Platform : ", platform);
			} else {
				document.documentElement.style.setProperty('--default-font-size', '16px'); // Default font size
				// console.log("Platform : ", platform);
			}
		} else {
			console.error('Platform information is not available');
		}
	}, []);

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
