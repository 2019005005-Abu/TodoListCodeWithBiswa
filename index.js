const addTask=document.getElementById('add-task');
const taskInput=document.getElementById('task');
const taskDiv=document.getElementById('allTask');
const errorDiv=document.getElementById('error-div');

console.log(addTask,taskInput,taskDiv,errorDiv);
addTask.addEventListener('submit',(event)=>{
     event.preventDefault();
     console.log("form has been submitted");
     const taskTextInputValue=taskInput.value;
    
     if(taskTextInputValue){
      console.log(taskTextInputValue);
       errorDiv.innerHTML=''
       taskInput.value=''
       //crete the div
       const singleTaskDiv=document.createElement('div');
       //create a class
       singleTaskDiv.classList.add('singleTask');
       //create a input filed
       const singleTaskText=document.createElement('input')
       //create type
       singleTaskText.type='text';
       //add value
       singleTaskText.value=taskTextInputValue;
       //add attribute
       singleTaskText.setAttribute('readonly','readonly')
       
       //add edit button
       const editButton=document.createElement('button');
       //add class in editt button
       editButton.classList.add('edit-Task');
       editButton.innerText='Edit'
       // create complte task
       const complteTaskButton=document.createElement('button');
       //add the class
        complteTaskButton.classList.add('complete-task');
        complteTaskButton.innerText=`Complete`

       //delete Task
       const deleteButton=document.createElement('button');
       //create classList
       deleteButton.classList.add('delete-task');
       //add inner Text
       deleteButton.innerText=`Delete`
      //apped all element
      singleTaskDiv.appendChild(singleTaskText);
      //appendchild edit task
      singleTaskDiv.appendChild(editButton);
      //appenchild complete task
      singleTaskDiv.appendChild(complteTaskButton);
      //append complete task
      singleTaskDiv.appendChild(deleteButton);
      //add all task
      taskDiv.appendChild(singleTaskDiv);


      //edit task function
        editButton.addEventListener('click',(e)=>{
          if(editButton.innerText=='Edit'){
            editButton.innerText='Save';
            singleTaskText.removeAttribute('readonly');
            singleTaskText.focus();
          }else{
            editButton.innerText='Edit'
            singleTaskText.setAttribute('readonly','readonly');
          }
          console.log('Text is editing')
        })
        //complte function
        complteTaskButton.addEventListener('click',(e)=>{
          if(complteTaskButton.innerText=='Complete'){
            complteTaskButton.innerText='Completed'
            singleTaskDiv.classList.add('task_completed');
            setTimeout(()=>{
              singleTaskDiv.classList.remove('task_completed')
            },1000)

          }
         console.log('Text is complted')
        })
        //delete function
        deleteButton.addEventListener('click',(e)=>{
          taskDiv.removeChild(singleTaskDiv)
          console.log('Task is deleting');
        })

       console.log(singleTaskDiv,singleTaskText,editButton,complteTaskButton.textContent,deleteButton.textContent);

     }else{
      errorDiv.innerHTML=`<p>Please write task name</p>`
     }
  

})