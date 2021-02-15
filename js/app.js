const textAnim = document.querySelector("h1");

new Typewriter(textAnim, {
    // loop: true,
    deleteSpeed: 20
})
.changeDelay(50)
.typeString("Moi c'est Diallo Thierno")
.pauseFor(300)
.typeString("<strong>, Développeur web Front End</strong> !")
.pause(2000)
.deleteChars(12)
.pauseFor(1000)
.typeString('<span style="color: blue"> Javascript</span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: blue"> VueJS</span> !')
.start()
