class Disk {
    // création du constructor, définition des propriété avec valeur par defaut
        // color, radius, position x & y
    constructor(color, radius, posX, posY){
        this._color = color;
        this._radius = radius;
        this._posX = posX;
        this._posY = posY;
    }

    // declarer les getter et setter en rapport avec les propriétés du constructor
    get posX(){
        return this._posX;
    }
    set posX(newPosX){
        this._posX = newPosX;
    }

    get posY(){
        return this._posY;
    }
    set posY(newPosY){
        this._posY = newPosY;
    }

    get radius(){
        return this._radius;
    }
    set radius(newRadius){
        this._radius = newRadius;
    }

    get color(){
        return this._color;
    }
    set color(newColor){
        this._color = newColor;
    }

    // une derniere méthode draw(argument à trouver)
    draw(ctx, startAngle, endAngle, isCounterClockWise){
        ctx.beginPath();    
        ctx.fillStyle = getRandomColor();
        ctx.arc(this.posX, this.posY, getRandomInt(100) + 10, startAngle, endAngle, isCounterClockWise);
        ctx.fill();    
    }
}

export default Disk;