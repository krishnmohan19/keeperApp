import React, { useState } from "react";

function CreateArea(props) {
  const [contentInfo, setContentInfo] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContentInfo((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          value={contentInfo.title}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handleChange}
          value={contentInfo.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            event.preventDefault();
            props.addNote(contentInfo);
            setContentInfo({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
