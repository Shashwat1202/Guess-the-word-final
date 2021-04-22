p1_name= localStorage.getItem("player1")
p2_name= localStorage.getItem("player2")
document.getElementById("player1_name").innerHTML=p1_name+" : "
document.getElementById("player2_name").innerHTML=p2_name+" : ";
p1_score=0;
p2_score=0;
document.getElementById("player1_score").innerHTML=p1_score;
document.getElementById("player2_score").innerHTML=p2_score;

qturn="player1";
aturn="player2";
document.getElementById("Question_turn").innerHTML="Question turn- "+p1_name;
document.getElementById("Answer_turn").innerHTML="Answer turn-"+p2_name;

function send(){
    get_word=document.getElementById("word_input").value;
    qword=get_word.toLowerCase();
    console.log(qword);

    letter1=qword.charAt(1);
    console.log(letter1);

    replace1=qword.replace(letter1,"_");
    console.log(replace1);

    x=qword.length-1;
    console.log(x);
    letter2=qword.charAt(x);
    console.log(letter2)
    replace2=replace1.replace(letter2,"_");
    console.log(replace2);

    y=Math.floor(qword.length/2)
    console.log(y)
    letter3=qword.charAt(y);
    console.log(letter3);
    replace3=replace2.replace(letter3,"_");
    console.log(replace3);

    qtag=`<h4 id="word_display">Q. ${replace3} <h4>`
    atag=`<br>Ans <input type="text" id="answer_input"><br><br>`
    buttontag=`<button class="btn btn-success" onclick=check()>Check</button>`

    document.getElementById("output").innerHTML=qtag+atag+buttontag;
    document.getElementById("word_input").value=""


}

function check(){
    get_answer=document.getElementById("answer_input").value
    answer=get_answer.toLowerCase();

    if (answer == qword){
        if (aturn == "player1") {
            p1_score= p1_score+1;
            document.getElementById("player1_score").innerHTML=p1_score;
        } else {
           p2_score= p2_score+1;
           document.getElementById("player2_score").innerHTML=p2_score;

        }
    }
    if (qturn == "player1") {
        qturn= "player2";
        document.getElementById("Question_turn").innerHTML="Question turn- "+p2_name;

    } else {
        qturn="player1"
        document.getElementById("Question_turn").innerHTML="Question turn- "+p1_name;
    }
    if (aturn == "player1") {
        aturn="player2"
        document.getElementById("Answer_turn").innerHTML="Answer turn-" + p2_name;
    } else {
        aturn="player1"
        document.getElementById("Answer_turn").innerHTML="Answer turn-"+p1_name;
    }
}