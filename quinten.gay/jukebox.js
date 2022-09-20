(function () {
    "use strict";
})();

var currentGreet;

var linkList = [['<a href="https://www.youtube.com/watch?v=xcb2R-WpxVg">&#x1F512&#x26D3&#x1F511;</a></div>'],
['<a href="https://youtu.be/Co0tTeuUVhU?t=11">&#x1F494;</a></div>'],
['<a href="https://www.youtube.com/watch?v=qfAqtFuGjWM">&#x1F3CE;</a></div>'],
['<a href="https://youtu.be/wV1FrqwZyKw?t=210">&#x1F984&#x1F5A4;</a></div>'],
['<a href="https://youtu.be/AJtDXIazrMo?t=60">&#x1F469;&#x1F3FC;</a></div>'],
['<a href="https://youtu.be/fTNnwzXrVdg?t=45">&#x1F9B6;&#x1F3FB;&#x1F460;</a></div>'],
['<a href="https://www.youtube.com/watch?v=8nBQ8xv2oLY&t=6s">&#x26B0;&#xFE0F;</a></div>'],
['<a href="https://www.youtube.com/watch?v=jH1RNk8954Q">&#x1F934;&#x1F3FC;&#x1F451;&#x1F478;&#x1F3FC;</a></div>'],
['<a href="https://www.youtube.com/watch?v=5L6xyaeiV58">&#x2694;&#xFE0F;&#x1F493;'],
['<a href="https://www.youtube.com/watch?v=oSRcQ6eV10Q">&#x2708;&#xFE0F;'],
['<a href="https://www.youtube.com/watch?v=vTAOh1ARBOI">&#x1F49A;&#x1F52A;'],
['<a href="https://www.youtube.com/watch?v=ZQ_6Xo8cqxk">&#x1F48D;&#x1F3F3;&#xFE0F;&#x200D;&#x1F308;'],
['<a href="https://www.youtube.com/watch?v=vs61OHs2g-w">&#x1F321;&#xFE0F;&#x1F975;'],
['<a href="https://www.youtube.com/watch?v=rdCVGY-CrWs">&#x1F9CD;&#x200D;&#x2642;&#xFE0F;&#x1F52B;'],
['<a href="https://www.youtube.com/watch?v=IYj2hex99gY">&#x200D;&#x26D3;&#xFE0F;&#x200D;&#x1F3BC;&#x200D;']

];

var tracker = 1;

function addButtonActions() {
    var refreshButton = document.getElementById("refreshButton");
    
    refreshButton.addEventListener("click", function () {
        randomGreeting()
    });

    var nextButton = document.getElementById("nextButton");
    
    nextButton.addEventListener("click", function () {
        nextTrack()
    });

    var previousButton = document.getElementById("previousButton");
    
    previousButton.addEventListener("click", function () {
        previousTrack()
    });
}

function randomGreeting(){
    tracker = Math.floor(Math.random() * linkList.length);
    rng = linkList[tracker]
    if (currentGreet == rng) {
        randomGreeting()
    }
    else {
        document.getElementById("titleText").innerHTML = (linkList, rng);
        currentGreet = rng
    }
}

function nextTrack(){
    if (tracker < linkList.length) {
    tracker ++
    rng = linkList[tracker]
    document.getElementById("titleText").innerHTML = (linkList, rng);
    console.log(tracker)
    }
    if (tracker >= linkList.length) {
    tracker = 0
    rng = linkList[tracker]
    document.getElementById("titleText").innerHTML = (linkList, rng);
    console.log(tracker)
    }
}

function previousTrack(){
    if (tracker < linkList.length) {
    tracker --
    rng = linkList[tracker]
    document.getElementById("titleText").innerHTML = (linkList, rng);
    console.log(tracker)
    }
    if (tracker < 0) {
    tracker = linkList.length -1
    rng = linkList[tracker]
    document.getElementById("titleText").innerHTML = (linkList, rng);
    console.log(tracker)
    }
}

addButtonActions()
randomGreeting()

