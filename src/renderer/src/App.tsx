import { Content, RootLayout, Sidebar, DragableTopBar } from "./components"

const App = () => {
	return (
		// <div className="flex h-screen items-center justify-center">
		// 	<span className="text-4xl text-cyan-500">Hello... Morningstar_2061...!</span>
		// </div>
		<>
			<DragableTopBar />
			<RootLayout>
				<Sidebar className="p-2">Sidebar</Sidebar>
				<Content className="border-l bg-zinc-900/50 border-l-white/20">Contect</Content>
			</RootLayout>
		</>
	)
}

export default App
