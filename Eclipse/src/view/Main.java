package view;

import controller.Controller;
import processing.core.PApplet;

public class Main extends PApplet {
	
	private Controller c;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		PApplet.main(Main.class.getName());
	}
	
	public void settings() {
		size(500, 500);
	}
	
	public void setup() {
		c = new Controller(this);
	}
	
	public void draw() {
		
	}
}