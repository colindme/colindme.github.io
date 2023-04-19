var i =0;
var phraseIndex = 0;
var writing=true;
var phrases= [
    "enjoy hiking in unsafe temperatures",
    "spend my mornings practicing Japanese",
    "play video games for just a bit too long",
    "occasionally run (when kept accountable)",
    "hang out with my cat and dog",
    "spend extra time making stuff like this"
];
var writeSpeed = 45;
var fullPause = 1500;
var emptyPause = 300;
var eraseSpeed = 40;

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
                setTimeout(typeWriter, fullPause);
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
                setTimeout(typeWriter, emptyPause);
            }
        }
    }
}

function chooseNextPhrase()
{
    phraseIndex++;
    if(phraseIndex == phrases.length) phraseIndex = 0;
}