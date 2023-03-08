package com.monisha.hotelbook.entity;

import java.sql.Date;

import jakarta.persistence.*;
@Entity
@Table(name="hotelbookingApps")
public class Booking {
	           @Id
	           @GeneratedValue(strategy =GenerationType.AUTO)
	           @Column(name="book_id")
	           private int book_id;
	           @Column(name="f_name")
	           private String f_name;
	           @Column(name="hotelname")
	           private String hotelname;
	           @Column(name="lname")
	           private String lname;
	           @Column(name="age")
	           private int age;
	           @Column(name="room_type")
	           private String room_type;
	           @Column(name="no_per")
	           private int no_per;
	           @Column(name="days")
	           private int days;
	           @Column(name="froms")
	           private Date froms;
	           @Column(name="t_o")
	           private Date t_o;
	           @Column(name="ph_no")
	           private long ph_no;
	           public int getBook_id() {
	                   return book_id;
	               }
	           public void setBook_id(int book_id) {
	                   this.book_id = book_id;
	               }
	           public String getFname() {
	                   return f_name;
	               }
	           public void setFname(String f_name) {
	                   this.f_name = f_name;
	               }
	          public String getLname() {
	                   return hotelname;
	               }
	          public void setLname(String hotelname) {
	                   this.hotelname = hotelname;
	               }
	          public String getHname() {
                  return lname;
              }
              public void setHname(String lname) {
                  this.lname = lname;
              }
	          public int getAge() {
	                  return age;
	               }
	          public void setAge(int age) {
	                  this.age = age;
	               }
	          public String getRoom_type() {
	                  return room_type;
	               }
	          public void setRoom_type(String room_type) {
	                 this.room_type =room_type;
	                }
	          public int getNo_per() {
	                 return no_per;
	                }
	          public void setNo_per(int no_per) {
	                 this.no_per=no_per;
	                }
	          public int getDays() {
	                 return days;
	                }
	          public void setDays(int days) {
	                 this.days = days;
	                }
	          public Date getFrom() {
	                  return froms;
	                }
	          public void setFrom(Date froms) {
	                  this.froms = froms;
	                 }
	          public Date getTo() {
	                  return t_o;
	                  }
	          public void setTo(Date t_o) {
	                   this.t_o=t_o;
	                  }
	           public long getPh_no() {
	                   return ph_no;
	                  }
	          public void setPh_no(long ph_no) {
	                  this.ph_no = ph_no;
	                  }
	         public Booking(int book_id, String f_name,String lname,String hotelname,int age,String room_type,int no_per,int days,Date froms,Date t_o,long ph_no) {
	                     super();
	                     this.book_id =book_id;
	                     this.f_name = f_name;
	                     this.hotelname=hotelname;
	                     this.age=age;
	                     this.room_type=room_type;
	                     this.no_per=no_per;
	                     this.days=days;
	                     this.froms=froms;
	                     this.t_o=t_o;
	                     this.lname=lname;
	                     this.ph_no=ph_no;
	    }
	public Booking() {
	    }

	
}
