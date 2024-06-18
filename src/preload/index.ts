import { GetNotes, ReadNote, WriteNote } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
	throw new Error('contextIsolation must be enabled in BrowserWindow')
}
try {
	contextBridge.exposeInMainWorld('context', {
		locate: navigator.language,
		platform: process.platform,
		getNotes: (...args: Parameters<GetNotes>) => ipcRenderer.invoke('getNotes', ...args),
		readNote: (...args: Parameters<ReadNote>) => ipcRenderer.invoke('readNote', ...args),
		writeNote: (...args: Parameters<WriteNote>) => ipcRenderer.invoke('writeNote', ...args)
	})
} catch (error) {
	console.log(error)
}