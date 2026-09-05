import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


//APi_BOOKS
const genre = "fantasy";
const amount = 20;

const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=${amount}&key=${import.meta.env.VITE_Google_BOOKS_API_KEY}`;

// const getBooksData = async () => {
//     const res =  await fetch(url);
//     const data =  await res.json();
//     console.log(data)
// }

function CategoryPageSwiper() {
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Błąd API: ${res.status}`);
                }
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error('Nie udało się pobrać danych:', err);
            }
        })();
    }, []);

    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </>
      );
}

export default CategoryPageSwiper;