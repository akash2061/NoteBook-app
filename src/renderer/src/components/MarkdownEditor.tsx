import { MDXEditor } from "@mdxeditor/editor";

export const MarkdownEditor = () => {
    return <MDXEditor markdown={'# Hello From MDX-Editor'}
        contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-violet-500" />
}