import { GetNotes, ReadNote, WriteNote, CreateNote, DeleteNote } from '@shared/types';

declare global {
	interface Window {
		// electron: ElectronAPI
		context: {
			locale: string;
			platform: string;
			getNotes: GetNotes;
			readNote: ReadNote;
			writeNote: WriteNote;
			createNote: CreateNote;
			deleteNote: DeleteNote;
		}
	}
}
