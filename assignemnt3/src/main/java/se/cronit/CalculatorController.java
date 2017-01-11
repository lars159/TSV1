package se.cronit;

import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

	@RequestMapping("/hello")
	public String hello(HttpSession session){
		session.setAttribute("login", "value");
		return "hello world";
	}	
	
	
	@RequestMapping("/add")
	public int add(int a, int b){
		return a+b;
	}
	
	@RequestMapping(value="/upload", method=RequestMethod.POST)
	public String add2(String namn, String kommentar){
		System.out.print("Order " +namn +" " +kommentar );
		return "order done";
	}
	
}
