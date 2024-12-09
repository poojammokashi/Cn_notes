const quesJSON = [
    {
        correctAnswer: 'Three',
        options: ['Two','Three','Four','Five'],
        question: "How many pieces of bun are in a Mcdonald's Big Mac"
    },
    {
        correctAnswer: "L.Frank Baum",
        options: ['Suzanne Collins', 'James Fenimore Cooper', 'L.Frank Baum', 'Donna Leon'],
        question: "Which author wrote 'The Wonderful Wizard of Oz'?"
    },
    {
        correctAnswer: "Atlanta United",
        options: ['Atlanta United', 'Atlanta Impact', 'Atlanta Bulls', 'Atlanta Stars'],
        question: "Which of these is a soccer team based in Atlanta?"
    },
    {
        correctAnswer: "A Nanny",
        options: ['A Sow', 'A Lioness','A Hen', 'A Nanny'],
        question: 'A female goat is known as what?'
    },
    {
        correctAnswer: 'P.L.Travers',
        options:['J.R.R.Tolkien', 'P.L.Travers','Lewis Carroll', 'Enid Blyton'],
        question: 'Which author wrote "Mary Poppins"?'
    }
]

// const questionObj = {
//     category: 'Food & Drink',
//     id: 'qa-1',
//     
// }


const element = document.getElementById('question');
const optionEle = document.getElementById('option');
const scoreEle = document.getElementById('score');
const nextEle = document.getElementById('next');

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;
showQuestion();

nextEle.addEventListener('click', ()=>{
    scoreEle.textContent = `Score : ${score} / ${totalScore}`;
    nextQuestion();
})


function showQuestion(){
    //destructuring
    const {correctAnswer, options, question} = quesJSON[currentQuestion]

    // Question that is being displayed
    element.textContent = question;
    // Shuflle of options
    const shuffledOption = shuffleOption(options)
    shuffledOption.forEach((opt)=>{
        //creating button and appending it to the option div 
        const btn = document.createElement('button');
        btn.textContent = opt;
        optionEle.appendChild(btn);
    
        //Event handling on the button
        btn.addEventListener('click', ()=>{
            if(opt === correctAnswer){
                score++;
            }else{
                score = score - 0.25
            }
            console.log(score);
            scoreEle.textContent = `Score : ${score} / ${totalScore}`
            nextQuestion();
        })
    })
    
    function nextQuestion(){
        currentQuestion++;
        optionEle.textContent = ""
        if(currentQuestion >= quesJSON.length){
            element.textContent = 'Quiz Completed';
            nextEle.remove();
            optionEle.textContent = ""
        }else{
            showQuestion();
        }
    }

}






//Shuffling the options
function shuffleOption(options){
    for(let i=options.length-1; i>=0; i--){
        const j = Math.floor(Math.random()*i+1);
       [options[i], options[j]] = [options[j], options[i]]
    }
    return options;
}
//shuffleOption([1,2,3,4,5])



