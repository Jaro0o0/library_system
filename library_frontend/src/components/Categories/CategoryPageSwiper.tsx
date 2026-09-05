import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


//APi_BOOKS
const genre = "fantasy";
const amount = 10;

const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=${amount}&key=${import.meta.env.VITE_Google_BOOKS_API_KEY}`;

// const getBooksData = async () => {
//     const res =  await fetch(url);
//     const data =  await res.json();
//     console.log(data)
// }

function CategoryPageSwiper() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Błąd API: ${res.status}`);
                }
                const data = await res.json();
                setBooks(data.items || []);
            } catch (err) {
                console.error('Nie udało się pobrać danych:', err);
            }
        })();
    }, []);

    return (
        <>
            {/* TEXT_BOX */}
            <div>
                <h2>Explore {genre}</h2>
            </div>
            <Swiper
                slidesPerView={'auto'}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {books.map((book) => {
                    const volume = book.volumeInfo;
                    const cover = volume.imageLinks?.thumbnail;
                    return (
                        <SwiperSlide key={book.id} style={{ width: 250 }}>
                            <div style={{ textAlign: 'center' }}>
                                {cover ? (
                                    <img
                                        src={cover}
                                        alt={volume.title}
                                        style={{ width: 128, height: 192, objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{ width: 128, height: 192, margin: '0 auto', background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        Brak okładki
                                    </div>
                                )}
                                <h3>{volume.title}</h3>
                                <p>{volume.authors?.join(', ')}</p>
                                {/* <p style={{ fontSize: 14 }}>{volume.description}</p> */}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
      );
}

export default CategoryPageSwiper;