import React, { useState } from 'react';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';


const testimonialsData = [
  {
    quote: `InnoGrowth's dedication to results is truly impressive. Their data-driven strategies and creative campaigns have consistently delivered outstanding outcomes for our e-commerce store. Our sales have soared, and we owe it all to the expertise of the InnoGrowth team.`,
    author: 'Mark Rodriguez, Founder, FashionEmpire'
  },
  {
    quote: `Partnering with InnoGrowth was the best decision we made for our startup. Their tailored strategies and attention to detail have transformed our brand's visibility. Our social media engagement has skyrocketed, attracting a wider audience and driving business growth.`,
    author: 'Alex Walker, Co-Founder, FoodieFiesta'
  },
  {
    quote: `I can't recommend InnoGrowth enough! Their team's professionalism and deep understanding of digital marketing trends have been instrumental in revamping our online presence. Our website traffic has doubled, and the quality of leads generated has improved significantly.`,
    author: 'Emily Collins, Marketing Director, GlobalTech'
  },
  // Add more testimonials data
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  return (
    <div>
      <div className="slider">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            
            <p>{testimonial.quote}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </div>
      
      <button className="prev-btn" onClick={prevSlide}><WestIcon/></button>
      <button className="next-btn" onClick={nextSlide}><EastIcon/></button>
    </div>
  );
};

export default TestimonialsSlider;
