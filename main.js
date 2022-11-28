Webcam.set(
{
    width : 350,
    height : 300,
    image_format : 'png',
    png_quality : 90,
})

Webcam.attach("#camera");

function take_snapshot() 
{
    Webcam.snap(function (data_uri) 
    {
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/WUCetKyvV/model.json', modelLoaded);

function modelLoaded() 
{
    console.log("Model has been loaded succesful");
}

function check() 
{
    img = document.getElementById("capture_img");
    classifier.classify(img, result);
}

function result(error, results) 
{
    if (error) {
        console.log(error); 
    } else {
        console.log(results);
    } 
    
    document.getElementById("objects-name").innerHTML = results[0].label;
    document.getElementById("objects-accuracy").innerHTML = results[0].confidence.toFixed(2);

    var save = window.speechSynthesis;
    var data = "This is" + results[0].label;
    var utter = new SpeechSynthesisUtterance(data);
    save.speak(utter);
}













































