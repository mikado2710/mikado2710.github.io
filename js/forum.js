/* getting all the required DOM elements */
var btn_add = document.getElementById('add');
var form = document.querySelector('form');
var subject = document.querySelector('#subject');
var description = document.querySelector('#description');
var container = document.querySelector('.test');

/* array of questions */
var questions = [];


/* validates input values, if valid creates object and pushes to array of questions */
btn_add.addEventListener('click', (event) => {
    event.preventDefault();
    let required = [
        subject,
        description,
    ];
    for (let i = 0; i < required.length; i++) {
        if (required[i].value === '') {
            alert('Please fill all the required fields!');
            return;
        }
    }
    addQuestion({
        subject: subject.value,
        description: description.value
    });
    form.reset();
});

function addQuestion(question) {
    questions.push(question);
    // creating html elements
    let divquestion = document.createElement('div'),
        divimg = document.createElement('div'),
        imguser = document.createElement('img'),
        divcol6 = document.createElement('div'),
        h4subject = document.createElement('h4'),
        details = document.createElement('a'),
        divcollapse = document.createElement('div'),
        divcardbody = document.createElement('div'),
        pdetails = document.createElement('p'),
        divcol3 = document.createElement('div'),
        buttonAnswer = document.createElement('button'),
        divanswer = document.createElement('div'),
        h3answers = document.createElement('h3')

        // Helper Function to set attributes
        function setAttributes(el, attrs) {
            for(var key in attrs) {
              el.setAttribute(key, attrs[key]);
        }
        }
    // Setting attributes to created elements
    setAttributes(divquestion, {"class": "row question justify-content-between align-items center"});
    setAttributes(divimg, {"class": "img col-2"});
    setAttributes(imguser, {"class": "rounded-circle", "src": "img/default-profile.png"});
    setAttributes(divcol6, {"class": "col-6"});
    setAttributes(details, {"href": "#details", "data-toggle": "collapse", "class": "details", "role": "button", "aria-expanded": "false"});
    setAttributes(divcollapse, {"class": "collapse", "id": "details"});
    setAttributes(divcardbody, {"class": "card-body card"});
    setAttributes(divcol3, {"class": "col-3 text-right"});
    setAttributes(buttonAnswer, {"type": "button", "class": "btn btn-success answer-btn", "data-toggle": "modal", "data-target": "#answerbox"});
    setAttributes(divanswer, {"class": "answer"});

    // adding content 
    h4subject.innerText = question.subject;
    pdetails.innerText = question.description;
    buttonAnswer.innerText = "Answer";
    details.innerText = "Details...";
    h3answers.innerText = "Answers";

    // Appending child/nesting created elements 
    container.appendChild(divquestion);
    divquestion.appendChild(divimg);
    divquestion.appendChild(divcol6);
    divquestion.appendChild(divcol3);

    divimg.appendChild(imguser);

    divcol6.appendChild(h4subject);
    divcol6.appendChild(details);
    divcol6.appendChild(divcollapse);

    divcollapse.appendChild(divcardbody);
    divcollapse.appendChild(divanswer);
    divanswer.appendChild(h3answers)

    divcardbody.appendChild(pdetails);

    divcol3.appendChild(buttonAnswer);

};

var btn_submit = document.getElementById("submitanswer");
var answerform = document.querySelector(".answerbox");
var answertext = document.querySelector(".answertext");
var divcollapse = document.querySelector("#details");

var answers = [];

btn_submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (answertext.value === '') {
        alert('Please fill all the required fields!');        
        return;
    }
    addAnswer({
        answertext: answertext.value,
    });
});

function addAnswer(answer){
    answers.push(answer);
    
    let divanswer = document.createElement('div'),
        answersheading = document.createElement('h3')
        textareaAnswer = document.createElement('textarea');

        divanswer.setAttribute('class', 'answer');
        textareaAnswer.setAttribute('name', 'actualanswer');
        textareaAnswer.setAttribute('id', 'actualanswer');
        textareaAnswer.setAttribute('rows', '8');
        textareaAnswer.setAttribute('style', 'width: 100%');

        textareaAnswer.innerText = answer.answertext;

        divcollapse.appendChild(divanswer);
        divanswer.appendChild(answersheading);
        divanswer.appendChild(textareaAnswer);
}
