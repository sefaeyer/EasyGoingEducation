import { Welcome } from "@/components/about/welcome";
import { Slider } from "@/components/home/slider";
import { Spacer } from "@/components/common/spacer/spacer";
import React from "react";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { MobileApp } from "@/components/home/mobile-app";

const Page = () => {
	return <>
	
		<Slider/>
		<Spacer/>
		<Welcome/>
		<Spacer/>
		<FeaturedCourses/>
		<Spacer/>
		<UpcomingEvents/>
		<Spacer/>
		<MobileApp/>

		
	</>;
};

export default Page;
