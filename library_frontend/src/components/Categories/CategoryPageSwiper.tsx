import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




//library_APi



//Google APi

//APi_BOOKS
const genre = "fantasy";
const amount = 10;

// const getBooksData = async () => {
//     const res =  await fetch(url);
//     const data =  await res.json();
//     console.log(data)
// }

function CategoryPageSwiper() {

    //library_API
    const [booksData, setBooksData] = useState<any[]>([]);
    //Google Books
    const [books, setBooks] = useState<any[]>([]);


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:5110/search/Books/category/fantasy');
            const data = await res.json();
            setBooksData(data);
        })();
    },[])

    useEffect(() => {
        (async () => {
            try {
                const titles = (Array.isArray(booksData) ? booksData : []).map(b => b.tytul).filter(Boolean);
                const results = [];
                for (const t of titles.slice(0, amount)) {
                    const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(t)}&maxResults=1&key=${import.meta.env.VITE_Google_BOOKS_API_KEY}`;
                    const res = await fetch(url);
                    if (!res.ok) continue;
                    const data = await res.json();
                    if (data.items?.length) results.push(data.items[0]);
                    console.log('Fetched book data:', data.items?.[0]);
                }
                setBooks(results);
            } catch (err) {
                console.error('Nie udało się pobrać danych:', err);
            }
        })();
    }, [booksData]);

    return (
        <>
            {/* TEXT_BOX */}
            <div>
                <h2>Explore {genre}</h2>
            </div>
            <Swiper
                 slidesPerView={3}
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