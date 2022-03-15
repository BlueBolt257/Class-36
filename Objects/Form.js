class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Enter your name");
        this.playButton = createButton("Play");
        this.titleIMG = createImg("Iages/title.png","game title");
        this.greeting = createElement("h3");
    }

    setElementsPosition(){
        this.titleIMG.position(120, 50);
        this.input.position(width/2-100,height/2-100);
        this.playButton.position(width/2-80,height/2-40);
        this.greeting.position(width/2-300,height/2-100);
    }

    setElementsStyle(){
        this.titleIMG.class("gameTitle")
        this.input.class("customInput")
    }
    
    hide(){
        this.input.hide();
        this.playButton.hide();
        this.greeting.hide();
    }

    display(){
        this.setElementsPosition()
    }
}
/*
HTML - creates web pages
    1. Head - Info about the page
    2. Body - visible content on the screen

    Elements of the body:
        1. Heading - h1, h2... h6
        2. Input - username of the player
        3. button - Ready/play

    DOM - Document Object Model
*/


