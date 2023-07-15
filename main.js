function startclassifaction(){
    navigator.mediaDevices.getUserMedia({
        audio:true

    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelready)
    
}
function modelready(){
    classifier.classify(gotresults)
}
function gotresults(error,results){
    if (error){
        console.error(error)
    }
    else{

        r=Math.floor(Math.random()*256)
        g=Math.floor(Math.random()*256)
        b=Math.floor(Math.random()*256)


        console.log(results)
        document.getElementById('result').innerHTML=results[0].label
        document.getElementById('accuracy').innerHTML=(results[0].confidence*100).toFixed(2)
        document.getElementById('Result1').style.color="rgb("+r+","+g+","+b+")"
        document.getElementById('Accuracy1').style.color="rgb("+r+","+g+","+b+")"
        img1=document.getElementById('hear')
        if(results[0].label=="Barking"){
            img1.src="dog.png"
        }
        if(results[0].label=="Meowing"){
            img1.src="cat.png"
        }
        else{
          img1.src="R.png"
        }
    }
}