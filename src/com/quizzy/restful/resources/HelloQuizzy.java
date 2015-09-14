package com.quizzy.restful.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

@Path("/helloworld")
public class HelloQuizzy {
	
	@GET
	@Produces("text/plain")
	public String showHelloWorld() {
		return "Hello Quizzy!";
	}

}
