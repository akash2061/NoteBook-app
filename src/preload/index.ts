import { GetNotes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
	throw new Error('contextIsolation must be enabled in BrowserWindow')
}
try {
	contextBridge.exposeInMainWorld('context', {
		locate: navigator.language,
		platform: process.platform,
		getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args)
	})
} catch (error) {
	console.log(error)
}