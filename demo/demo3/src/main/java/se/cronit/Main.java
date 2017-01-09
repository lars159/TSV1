package se.cronit;
import java.io.File;
import java.io.IOException;

import javax.xml.ws.RespectBinding;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
 


@SpringBootApplication
public class Main {

 

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Main.class, args);
    }
     

	
}

 