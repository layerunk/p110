console.log(ml5.version);
hatext1 = "";
hatext2 = "";


Webcam.set({
    height: 200,
    width: 270,
    image_format: "png",
    png_quality: 120
});

Webcam.attach("#CAMERA");

//PARAMETER 1 IS IN CLICKITY
function clickity(){
    console.log("You have passed Parameter1")
    Webcam.snap(function(potatoe){
        document.getElementById("RESULT").innerHTML = '<img id = "imu" src = "' + potatoe + '" onclick = "justwhy()"/>'
    });
}

//PARAMETER 2 IS IN speak
function speak(){
    console.log("You have passed Parameter2")
    spetext = "The first prediction is " + hatext1 + "and ";
    spetext = "The second prediction is " + hatext2;

    synth = window.speechSynthesis;
    utterThis = new SpeechSynthesisUtterance(spetext1 + spetext2);
    synth.speak(utterThis);
    
}

link = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rymJg6zuk/model.json" , start);

//PARAMETER3 IS IN THE INITILISZATION SECTION
function start(){
    console.log("You have passed parameter3");
}


function justwhy(){
    console.log("WHY WHY WHY WHY WHY WHY WHY");
    document.getElementById("tak").innerHTML = "Why Asked The Why Man Of The Why Kingdom From The House Of Why";
    document.getElementById("tak1").innerHTML = "WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY";
    document.getElementById("tak2").innerHTML = "WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY";
    document.getElementById("tak3").innerHTML = "WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY WHY";
    document.getElementById("tak4").innerHTML = "WHY WHY WHY WHY ";
    document.getElementById("tak5").innerHTML = "WHY WHY WHY WHY ";
    document.getElementById("EMOTION").innerHTML = "WHY";
    document.getElementById("SNAP").innerHTML = "WHY";
    document.getElementById("pro1").innerHTML = "WHY WHY WHY WHY WHY WHY";
    document.getElementById("pro2").innerHTML = "WHY WHY WHY WHY WHY WHY";
    document.getElementById("title").innerHTML = '"THY KINGDOM OF WHY"';
}