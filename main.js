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
        document.getElementById("Result").innerHTML = 'img id="capture_img" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zYlw_C1Qr/model.json', modelLoaded);

function modelLoaded() 
{
    console.log("Model has been loaded succesful");
}

