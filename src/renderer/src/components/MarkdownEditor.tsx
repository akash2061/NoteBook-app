import {
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    tablePlugin
} from "@mdxeditor/editor";
import { useMarkdownEditor } from "@renderer/hooks/useMarkdownEditor";
import { useCallback } from "react";

export const MarkdownEditor = () => {

    const { editorRef, selectedNote, handleAutoSave, handleBlur } = useMarkdownEditor()

    const handleChange = useCallback((newContent) => {
        if (newContent.includes('MakeTable')) {
            const tableMarkdown = `
| Header 1 | Header 2 |
| -------- | -------- |
| R-1  C-1 | R-1  C-2 |
| R-2  C-1 | R-2  C-2 |
            `;
            const updatedContent = newContent.replace('MakeTable', tableMarkdown);
            handleAutoSave(updatedContent);
        } else {
            handleAutoSave(newContent);
        }
    }, [handleAutoSave]);

    if (!selectedNote) return null

    return (
        <MDXEditor
            ref={editorRef}
            key={selectedNote.title}
            markdown={selectedNote.content}
            onChange={handleChange}
            onBlur={handleBlur}
            plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin(), tablePlugin()]}
            contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 
            prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 
            prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] 
            prose-code:after:content-['']"
        />
    )
}