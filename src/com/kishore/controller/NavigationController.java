package com.kishore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
public class NavigationController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String getHomePage(){
		return "index";
	}

}
