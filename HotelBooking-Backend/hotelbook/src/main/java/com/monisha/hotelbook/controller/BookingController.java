package com.monisha.hotelbook.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.monisha.hotelbook.entity.Booking;
import com.monisha.hotelbook.service.BookingService;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {
	      @Autowired
	      BookingService Bservice;
	      @GetMapping("/")
	      public List <Booking> getDetails(){
	      return Bservice.getAllDetails();
	      }
	      @PostMapping("/")
	      public String getDetails(@RequestBody Booking s) {
	      Bservice.saveDetails(s);
	      return "Value added";
	      }
	      
	      @PutMapping("/{book_id}")
	      public Booking putDetails(@RequestBody Booking s ) {
	      return Bservice.changeDetails(s);
	      }
	      @DeleteMapping("/{book_id}")
	      public String deleteInfoById(@PathVariable int book_id){
	      Bservice.deleteDetailsById(book_id);
	      return "Deleted succsessfully";
	      } 	
}
