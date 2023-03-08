package com.monisha.hotelbook.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.monisha.hotelbook.entity.Booking;
public interface BookingRepository extends JpaRepository<Booking,Integer> {
	
	
}  
