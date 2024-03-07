import Editor from "@/components/NewEditor/Editor";
import "katex/dist/katex.min.css";

export default function NewRealEditor() {
  Editor.modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: [1, 2, 3, false] }],

      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "formula"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <Editor />
    </>
  );
}
