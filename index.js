for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let button_Inner = this.innerHTML
        play_sound(button_Inner)
        button_animation(button_Inner)
    })
}

document.addEventListener("keypress", function (event) {
    play_sound(event.key);
    button_animation(event.key)
})


function play_sound(key){
    let audio;
    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;

    }
}

function button_animation(key){
    let active_button = document.querySelector("." + key);
    active_button.classList.add("pressed");
    setTimeout(
        function () {
        active_button.classList.remove("pressed")},
        100)
}
