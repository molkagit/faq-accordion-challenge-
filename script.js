wrappers=document.querySelectorAll(".wrapper");
wrappers.forEach(wrapper => {
  const plus=wrapper.querySelector(".icon-plus");
  const minus=wrapper.querySelector(".icon-minus");
  const answer=wrapper.querySelector(".answer");
  const question=wrapper.querySelector(".question");

  plus.addEventListener("click",()=>{
       answer.hidden=false;
       question.setAttribute("aria-expanded", "true");
  });
  minus.addEventListener("click",()=>{
        answer.hidden=true;
        question.setAttribute("aria-expanded", "false");
  });
});