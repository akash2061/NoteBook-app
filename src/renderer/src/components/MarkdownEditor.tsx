import {
    InsertTable,
    MDXEditor,
    headingsPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    quotePlugin,
    tablePlugin,
    toolbarPlugin,
    linkPlugin,
    codeBlockPlugin,
    codeMirrorPlugin,
    sandpackPlugin,
    ConditionalContents,
    ChangeCodeMirrorLanguage,
    ShowSandpackInfo,
    InsertCodeBlock,
    InsertSandpack
} from "@mdxeditor/editor";
import { useMarkdownEditor } from "@renderer/hooks/useMarkdownEditor";

// Default snippet content for Sandpack
const defaultSnippetContent = `
export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
`.trim();

// Sandpack configuration
const simpleSandpackConfig = {
    defaultPreset: 'react',
    presets: [
        {
            label: 'React',
            name: 'react',
            meta: 'live react',
            sandpackTemplate: 'react',
            sandpackTheme: 'light',
            snippetFileName: '/App.js',
            snippetLanguage: 'jsx',
            initialSnippetContent: defaultSnippetContent
        },
    ]
};

export const MarkdownEditor = () => {
    const { editorRef, selectedNote, handleAutoSave, handleBlur } = useMarkdownEditor();
    if (!selectedNote) return null;

    return (
        <MDXEditor
            ref={editorRef}
            key={selectedNote.title}
            markdown={selectedNote.content}
            onChange={handleAutoSave}
            onBlur={handleBlur}
            plugins={[
                headingsPlugin(),
                listsPlugin(),
                quotePlugin(),
                tablePlugin(),
                toolbarPlugin({
                    toolbarContents: () => (
                        <ConditionalContents
                            options={[
                                { when: (editor) => editor?.editorType === 'codeblock', contents: () => <ChangeCodeMirrorLanguage /> },
                                { when: (editor) => editor?.editorType === 'tableblock', contents: () => <InsertTable /> },
                                {
                                    fallback: () => (
                                        <div className="toolbar-icon">
                                            <InsertCodeBlock />
                                            <InsertTable />
                                        </div>
                                    )
                                }
                            ]}
                        />
                    )
                }),
                linkPlugin(),
                codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                //sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
                codeMirrorPlugin({
                    codeBlockLanguages: {
                        c: 'C',
                        cpp: 'C++',
                        rust: 'Rust',
                        java: "Java",
                        js: 'JavaScript',
                        python: "Python",
                        html: "HTML",
                        css: 'CSS',
                    }
                }),
                markdownShortcutPlugin()
            ]}
            contentEditableClassName="font-lato outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 
            prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 
            prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] 
            prose-code:after:content-['']"
        />
    );
};
