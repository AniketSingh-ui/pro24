class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options= {
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
		
		

		this.body=Bodies.rectangle(x,y,width,height,options)
		
        this.width=width;
        this.height=height;
        World.add(world, this.body);
	}
	display()
	{
			var p=this.body.position;
            var angle = this.body.angle;		
			push()
			translate(p.x, p.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            rect(0,0,this.width,this.height);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}