package com.coupon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.coupon.exception.CompanyDoestExistsException;
import com.coupon.exception.CouponDateException;
import com.coupon.exception.CouponPurchasedException;
import com.coupon.exception.CouponStockException;
import com.coupon.exception.CustomerExistsException;
import com.coupon.exception.LoginException;
import com.coupon.job.CouponExpirationDailyJob;

@SpringBootApplication
public class CouponApplication {
	public static void main(String[] args)
			throws CompanyDoestExistsException, CustomerExistsException,
			CouponPurchasedException, CouponDateException, CouponStockException, LoginException {
		ConfigurableApplicationContext ctx = SpringApplication.run(CouponApplication.class, args);

		CouponExpirationDailyJob job = ctx.getBean(CouponExpirationDailyJob.class);
		Thread t = new Thread(job);
		t.start();

		try {

		} finally {
			job.stop();
		}

	}
}
