import { NoteInfo } from "./models";

export type GetNotes = () => Promise<NoteInfo[]>