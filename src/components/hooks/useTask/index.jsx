import { KeyboardReturn } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

function useTask(n="") {
  console.log("call hook useTask, newTitle = ", n);
  const [title, setTitle] = useState(n);

  return {
    id: uuid(),
    title: title,
    isFinish: false,
    changeTitle: (newTitle) => setTitle(newTitle)
  };
  
}

export default useTask;