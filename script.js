let input = document.querySelector(".inputtask");
const btn = document.querySelector(".btn");
const part1 = document.querySelector(".part1");
const part2 = document.querySelector(".part2");

function activity(event){
  event.preventDefault();
  //getting value from input
  const task = input.value;
  console.log(task);

  //reseting value to empty for next entry
  input.value = "";

  //create div and adding to its parent class
  const taskcontainer = document.createElement("div");
  taskcontainer.classList.add("task");
  part1.appendChild(taskcontainer);

  //creating p inside its parent class
  const p = document.createElement("p");
  taskcontainer.appendChild(p);

  //adding task to p
  p.innerText = task;

  //creating logo class
  const logocontainer = document.createElement("div");
  part2.appendChild(logocontainer);
  logocontainer.classList.add("logo");

  //creating two i class
  const checklogo = document.createElement("i");
  const deletelogo = document.createElement("i");

  checklogo.classList.add("ri-check-double-fill","check");
  deletelogo.classList.add("ri-delete-bin-line");

  logocontainer.appendChild(checklogo);
  logocontainer.appendChild(deletelogo);
 
  let click = 0;
  checklogo.addEventListener("click",()=>{
    if(click === 0){
      p.style.textDecoration = "line-through";
      click = 1;
    }
    else{
      p.style.textDecoration = "none";
      click = 0;
    }
    
  });

  deletelogo.addEventListener("click", () => {
    taskcontainer.remove(); // remove the task
    logocontainer.remove(); // remove the icons
  });
}

btn.addEventListener("click", activity);