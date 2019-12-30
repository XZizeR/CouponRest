package com.coupon.exception;

public class CompanyDoestExistsException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CompanyDoestExistsException() {
		super("The company does not exist");
	}
	
}
