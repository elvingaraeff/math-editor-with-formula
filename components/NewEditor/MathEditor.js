import "mathlive";
import React, { useEffect, useState } from "react";
import "./MathEditor.css";
import { handleClick, updateLatexOutput } from "../../utils/Math";
import layouts from "./Layouts";
import { Button } from "../ui/button";

const MathEditor = ({
  onSaveFormula,
  setMathEditorVisible,
  expressionEditable,
  setExpressionEditable,
}) => {
  const [latex, setLatex] = useState("f(x)=ax^2+bx+c");

  const handleMathFieldChange = (mathField) => {
    const newLatex = mathField.getValue();
    setLatex(newLatex);
  };

  const handleCancel = () => {
    setMathEditorVisible(false);
    const quill = document.querySelector("div.quill");
    if (quill) {
      quill.classList.remove("editor-blur");
    }
  };

  const handleSave = () => {
    onSaveFormula(
      latex,
      setMathEditorVisible,
      expressionEditable,
      setExpressionEditable
    );
    const quill = document.querySelector("div.quill");
    if (quill) {
      quill.classList.remove("editor-blur");
    }
  };

  useEffect(() => {
    const mathElement = document.getElementById("math");
    const mathField = document.getElementById("mathField");
    const latexOutput = document.getElementById("latex");
    const root = document.getElementById("mathProject");
    mathElement.isStyleChanged = false;

    const handleClickEvent = (event) => {
      handleClick(event, mathField, mathElement);

      mathField.addEventListener("focusin", () => {
        mathVirtualKeyboard.layouts = layouts;
      });
    };

    const updateLatexOutputEvent = () => {
      updateLatexOutput(mathField, latexOutput, setLatex);
    };

    root.addEventListener("click", handleClickEvent);
    mathField.addEventListener("input", updateLatexOutputEvent);

    return () => {
      root.removeEventListener("click", handleClickEvent);
      mathField.removeEventListener("input", updateLatexOutputEvent);
    };
  }, []);

  return (
    <div id="math">
      <math-field
        id="mathField"
        contenteditable="true"
        tabIndex="0"
        onChange={handleMathFieldChange}
      >
        {latex}
      </math-field>
      <textarea
        id="latex"
        className="output"
        autoCapitalize="off"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        value={latex}
        readOnly={true}
      />
      <div className="buttons">
        <Button
          variant="secondary"
          onClick={() => {
            handleCancel();
          }}
        >
          Bağla
        </Button>
        <Button
          variant="default"
          onClick={() => {
            handleSave();
          }}
        >
          Yadda saxla
        </Button>
      </div>
    </div>
  );
};

export default MathEditor;
