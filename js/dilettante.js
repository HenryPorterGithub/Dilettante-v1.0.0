var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 5;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    var period = this.period;

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1); //number of letters to delete at a time
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1); //number of letters to add at a time
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'; //add letter

    var that = this;

    setTimeout(function () { //define time between letter addition
        that.tick();
    }, period);

};

//INITIATE TYPING FUNCTION
window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate'); //acquires all of the <spans> with class txt-rotate
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate'); //acquires words to type
        var period = elements[i].getAttribute('data-period'); //acquires time-frame in which to type??
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period); //initiate function that adds letters
        }
    }

    // INJECT CSS
    //var css = document.createElement("style"); //create a style element
    //css.type = "text/css"; //type of element is CSS
    //css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }"; //add a vertical line to the sentence
    //document.body.appendChild(css); //add to CSS
};

//summon triangle
function onTimerElapsed() {
    var myDiv = document.getElementById('triangle-right');
    myDiv.style.display = myDiv.style.display === 'none' ? 'block' : 'none';
}

//summon triangle button
    $(document).ready(function() {
        setTimeout(function() {

            $('#mybutton').css("display", "inline-block");
            $('#mybutton').addClass("wow fadeIn");
            $('#mybutton').toggleClass("wow animated");
        }, 2000);
    });



//remove blurb
    $(document).ready(function() {
        $("#mybutton").click(function() {

            <!-- remove blurb -->
            $("#animation").addClass("wow fadeOutRight");
            $("#animation").toggleClass("wow animated");
            $("#animation").hide();

            <!-- summon articles -->
            $(".row").css("display", "flex", "inline-block");
            $(".row").addClass("wow fadeInLeft");
            $(".row").toggleClass("wow animated");
        });
    });


