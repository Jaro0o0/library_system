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

    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:5110/search/Books/category/fantasy');
                const data = await res.json();
                const localBooks: any[] = Array.isArray(data) ? data : [];

                const merged: any[] = [];
                for (const book of localBooks.slice(0, amount)) {
                    const googleBook: any = { volumeInfo: {} };
                    if (book.tytul) {
                        try {
                            const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(book.tytul)}&maxResults=1&key=${import.meta.env.VITE_Google_BOOKS_API_KEY}`;
                            const gRes = await fetch(url);
                            if (gRes.ok) {
                                const gData = await gRes.json();
                                if (gData.items?.length) {
                                    Object.assign(googleBook.volumeInfo, gData.items[0].volumeInfo);
                                }
                            }
                        } catch (e) {
                            console.warn('Google Books fetch failed for:', book.tytul, e);
                        }
                    }

                    merged.push({
                        id: book.id ?? book.tytul ?? Math.random().toString(),
                        local: book,
                        volumeInfo: {
                            title: googleBook.volumeInfo.title ?? book.tytul ?? 'Brak tytułu',
                            authors: googleBook.volumeInfo.authors ?? (book.autor ? [book.autor] : []),
                            description: googleBook.volumeInfo.description ?? book.opis ?? '',
                            imageLinks: googleBook.volumeInfo.imageLinks ?? null,
                        },
                    });
                }
                setBooks(merged);
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
                                <p style={{ fontSize: 14 }}>{volume.description?.slice(0, 150)}{volume.description?.length > 150 ? '...' : ''}</p>
                            </div>

                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
      );
}

export default CategoryPageSwiper;