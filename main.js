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
function speak12(){
    console.log("You have passed Parameter2")
    spetext1 = "The first prediction is " + hatext1 + "and ";
    spetext2 = "The second prediction is " + hatext2;

    synth = window.speechSynthesis;
    utterThis = new SpeechSynthesisUtterance(spetext1 + spetext2);
    synth.speak(utterThis);
    
}

link = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eM4I2N6xf/model.json" , start);

//PARAMETER3 IS IN THE INITILISZATION SECTION
function start(){
    console.log("You have passed parameter3");
}

function handslap(){
    image = document.getElementById("imu");
    link.classify(image , chocker);
}

function chocker(error ,  result){
    if(error){
        console.error(error);      
    }
    else{
        console.log(result);        

        document.getElementById("pro1").innerHTML = result[0].label;
        hatext1 = result[0].label;
        
        document.getElementById("pro2").innerHTML = result[1].label;
        hatext2 = result[1].label;

        speak12();
        
        if(result[0].label == "SUPERB"){
            document.getElementById("pro3").innerHTML = "&#128076;"; 
        }
        if(result[0].label == "UP POINTER"){
            document.getElementById("pro3").innerHTML = "&#128070;"; 
        }
        if(result[0].label == "SPLIT FINGER"){
            document.getElementById("pro3").innerHTML = "&#128406;"; 
        }
        if(result[0].label == "SPIDERMAN"){
            document.getElementById("pro3").innerHTML = "&#129304;"; 
        }
        if(result[0].label == "YO"){
            document.getElementById("pro3").innerHTML = "&#9996;"; 
        }



        if(result[1].label == "SUPERB"){
            document.getElementById("pro4").innerHTML = "&#128076;"; 
        }
        if(result[1].label == "UP POINTER"){
            document.getElementById("pro4").innerHTML = "	&#128070;";  
        }
        if(result[1].label == "SPLIT FINGER"){
            document.getElementById("pro4").innerHTML = "&#128406;"; 
        }
        if(result[1].label == "SPIDERMAN"){
            document.getElementById("pro4").innerHTML = "&#129304;";  
        }
        if(result[1].label == "YO"){
            document.getElementById("pro4").innerHTML = "&#9996;";   
        }

    }
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