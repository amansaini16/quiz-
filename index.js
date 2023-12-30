const questions=[
    {
        question:"which is largest animal in the world",
        answer: [
            {text:"shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},

        ]
    },
    {
    question:"which is the smallest continent in the world",
    answer: [
        {text:"Asia",correct:false},
        {text:"Australia",correct:true},
        {text:"Artic",correct:false},
        {text:"Afica",correct:false},

    ]
},
{
    question:"which is the largest desert in the world",
    answer: [
        {text:"Kalahari",correct:false},
        {text:"Gobi",correct:false},
        {text:"Sahara",correct:false},
        {text:"Antartica",correct:true},

    ]
},
{
question:"which is smallest country in the world",
answer: [
    {text:"Vatician City",correct:true},
    {text:"Bhutan",correct:false},
    {text:"Nepal",correct:false},
    {text:"Shri Lanka",correct:false},

]
}
]
let questionelement=document.getElementById("question");
let answerelement=document.getElementById("idbutton");
let nextelement=document.getElementById("Nxt");
let currentquestionindex=0;
let score=0;
function startquiz(){
    currentquestionindex=0;
    score=0;
    nextelement.innerHTML="next";
    questiondisplay();

}
function questiondisplay(){
    resetbutton();
let currentquestion=questions[currentquestionindex];
let questionnumber=currentquestionindex+1;
questionelement.innerHTML=questionnumber+"."+currentquestion.question;
currentquestion.answer.forEach(answers=>{
    const button=document.createElement("button");
    button.innerHTML=answers.text;
    button.classList.add("btn");
    answerelement.appendChild(button);
    if(answers.correct){
        button.dataset.correct=answers.correct;
    }
    button.addEventListener("click",selectanswer);
});
}

function resetbutton(){
    nextelement.style.display="none";
    while(answerelement.firstChild){
        answerelement.removeChild(answerelement.firstChild);
    }
}
function selectanswer(e){
    const selectBtn=e.target;
    const iscorrect=selectBtn.dataset.correct==="true";
   if(iscorrect){
    selectBtn.classList.add("correct");
    score++;
   }
   else{
    selectBtn.classList.add("incorrect");
   }
   Array.from(answerelement.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
    button.disabled=true;
   });
   nextelement.style.display="block";
}
function showscore(){
    resetbutton();
    questionelement.innerHTML=`you scored ${score} out of ${questions.length}!`
  nextelement.innerHTML="Play again";
  nextelement.style.display="block";  
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        questiondisplay();
    }else{
        showscore();
    }
}



nextelement.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handlenextbutton();
    }else{
        startquiz();
    }
})
startquiz();
