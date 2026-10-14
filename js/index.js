const typeWriterElement = document.getElementById("typewriter");

function initTypeWriter() {
    if (!typeWriterElement) return;

    const typewriter = new Typewriter(typewriterElement, {
        loop: true,
        delay: 50,
        deleteSpeed: 30,
        cursor: "|",
        autoStart: true,
    });

    typewriter
        .typeString("Hey, I'm Rieley Dechenne")
        .pauseFor(1500)
        .deleteAll()
        .pauseFor(500)
        .typeString("I currently attend Gonzaga University")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("I study Computer Science!")
        .pauseFor(2000)
        .deleteAll()
        .pauseFor(500)
        .typeString("I also competitively bass fish!")
        .pauseFor()
        .deleteAll()
        .start();
}