import { useState } from "react";
import { v4 as uuid } from "uuid";

function useTask() {
  const [title, setTitle] = useState("");

  return {
    id: uuid(),
    title: title,
    isFinish: false,
    changeTitle: (newTitle) => setTitle(newTitle)
  };
}

export default useTask;