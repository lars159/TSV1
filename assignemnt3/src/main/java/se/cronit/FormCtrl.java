package se.cronit;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
public class FormCtrl {
	/*
	@RequestMapping(value="/uploadFile", method=RequestMethod.POST)
    public String postHandler(@RequestParam("file") MultipartFile file, @RequestParam("name") String name  ) throws IllegalStateException, IOException {
		System.out.println(file.getOriginalFilename() + "name");
		multipartToFile(file);
        return "";
    }
	
	public File multipartToFile(MultipartFile multipart) throws IllegalStateException, IOException 
	{
	    File convFile = new File("c:/workspace/" + multipart.getOriginalFilename());
	    multipart.transferTo(convFile);
	    return convFile;
	}
	
	*/
	@RequestMapping(value="/upload", method=RequestMethod.POST)
    public String postHandler( 
    						  @RequestParam("name") String name 
    						  )  {
		System.out.println(name); 
        return "Order done";
    }
}
