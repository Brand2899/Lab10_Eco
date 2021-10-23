package controller;

import model.Logic;
import processing.core.PApplet;

public class Controller {
	
	private Logic l;
	
	public Controller(PApplet app) {
		l = new Logic(app);
	}
}
