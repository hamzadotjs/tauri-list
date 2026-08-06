import { useEffect } from "react";
import "@m3e/react/all";
import "./App.css"
import "material-symbols/outlined.css";


function App() {
  function saveTasks() {
   const tasks = [...document.querySelectorAll("#taskList m3e-list-item")].map(
  (li) => li.firstChild.textContent,
    );
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
function addTaskElement(text) {
  const item = document.createElement("m3e-list-item");
  item.textContent = text;

  const removeBtn = document.createElement("m3e-icon-button");
  removeBtn.setAttribute("variant", "filled");
  removeBtn.setAttribute("slot", "trailing");
  removeBtn.setAttribute("aria-label", "Remove");
  removeBtn.className = "remove";

  const icon = document.createElement("m3e-icon");
  icon.setAttribute("name", "check");
  removeBtn.appendChild(icon);

  removeBtn.onclick = () => {
    item.remove();
    saveTasks();
  };

  item.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(item);
}

  function addTask() {
    const input = document.getElementById("fld");
    const text = input.value.trim();
    if (!text) return;
    addTaskElement(text);
    input.value = "";
    saveTasks();
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]");
    saved.forEach(addTaskElement);
  }, []);

  return (
    <>
    <m3e-heading variant="display" size="large">Tasker </m3e-heading>
    <div className="Tasks-menu">
        {/* <input id="taskInput" type="text" placeholder="New task..." /> */}
        {/*<TextField className="Tasks-menu-input" id="taskInput" placeholder="New task..." size="small" />
        <button onClick={addTask}>Add</button>
        <Button className="Add" variant="contained" onClick={addTask}>Add</Button>*/}
        <m3e-form-field variant="outlined" class="density-1">
            <label slot="label" for="fld">New Task :3</label>
            <input id="fld" />
          </m3e-form-field>
        <m3e-button className="Add" variant="tonal" shape="square" onClick={addTask}>Add</m3e-button>
        {/*<ul id="taskList"></ul>*/}
      </div>
      <m3e-list id="taskList" variant="segmented"></m3e-list>
    </>
  )
}

export default App;
