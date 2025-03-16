import React from 'react'
import {Button} from "@/components/ui/button"
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';

function HomePage(){
  return <>
    <Hero/>
    <FeaturedProducts/>
  </>
};
export default HomePage;
