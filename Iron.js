class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options= {
		restitution:0.8,
		friction:3,
		density:30
	}
		
		this.width=width;
        this.height=height;

		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            rect(0,0,this.width,this.height);
			//draw the ellipse here to display the rubber ball

			pop()
	}

}