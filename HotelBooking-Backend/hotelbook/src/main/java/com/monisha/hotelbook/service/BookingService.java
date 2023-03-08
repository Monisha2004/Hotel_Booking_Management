package com.monisha.hotelbook.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.monisha.hotelbook.entity.Booking;
import com.monisha.hotelbook.repository.BookingRepository;
@Service
public class BookingService {
	
	      @Autowired
	      BookingRepository btRepo;
	      public List <Booking> getAllDetails() {
	  		return btRepo.findAll();
	  	}
	  	public Booking saveDetails(Booking e)
	  	{
	  	return btRepo.save(e);
	  	}
	  	public Booking changeDetails(Booking s) {
	  		
	  		return btRepo.saveAndFlush(s);
	  		}
	  	public void deleteDetailsById(int book_id) {
	  		btRepo.deleteById(book_id);
	  		}

	}

	

	
	

	

