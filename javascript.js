var i =0;
var phraseIndex = 0;
var writing=true;
var phrases= [
    "Test 1",
    "Test 2",
    "Test 3"
];
var writeSpeed = 100;
var endPause = 1000;
var eraseSpeed = 75;

function typeWriter() {
    if(writing)
    {
        if(i < phrases[phraseIndex].length)
        {
            document.getElementById("typewriter").innerHTML += phrases[phraseIndex].charAt(i);
            i++;
            if(i != phrases[phraseIndex].length)
            { 
                setTimeout(typeWriter, writeSpeed);
            }
            else
            {
                writing = false;
                setTimeout(typeWriter, endPause);
            }
            
        }
    }
    else 
    {
        if(i > 0)
        {
            var element = document.getElementById("typewriter").innerHTML;
            document.getElementById("typewriter").innerHTML = element.substring(0, element.length - 1);
            i--;
            if(i != 0)
            {
                setTimeout(typeWriter, eraseSpeed);
            }
            else
            {
                chooseNextPhrase();
                writing = true;
                setTimeout(typeWriter, endPause);
            }
        }
    }
}

function chooseNextPhrase()
{
    phraseIndex++;
    if(phraseIndex == phrases.length) phraseIndex = 0;
}