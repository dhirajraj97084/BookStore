import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from '../../../public/list/List.json';
import Slider from "react-slick";
import Cards from '../cards/Cards';

function FreeBook() {
    const freeData = List.filter((data) => data.category === 'free');

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div>
            <div className="max-w-screen-2xl px-4 md:px-24 container mx-auto py-7">
                <h1 className='text-2xl font-semibold'>Free Offered Courses</h1>
                <h2 className='text-balance'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis. Beatae repudiandae porro voluptatum <br className='hidden md:block' /> suscipit rem possimus fugiat ipsam ab!</h2>
                <div className="slider-container container mx-auto">
                    <Slider {...settings}>
                        {freeData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default FreeBook;
