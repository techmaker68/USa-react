import React from "react";
import ReactQuill from "react-quill";
import "../Assets/css/reactQuill.css";

const Editor = ({ editorHtml, handleChange }) => {
  return (
    <div>
      <ReactQuill
        // readOnly={true}
        theme="snow"
        onChange={handleChange}
        value={editorHtml}
        modules={Editor.modules}
        formats={Editor.formats}
        bounds={".app"}
        placeholder="Message"
      />
    </div>
  );
};

export default Editor;

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    // [{ size: [] }],
    ["bold", "italic", "underline", { color: [] }],
    [
      { align: null },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "size",
  "bold",
  "italic",
  "underline",
  "list",
  "align",
  "bullet",
  "link",
  "image",
  "video",
  "color",
  "header",
];
