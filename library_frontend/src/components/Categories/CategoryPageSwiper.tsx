import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import CircularProgress from '@mui/material/CircularProgress';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router';

import { Button } from '@mui/material';



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


//Redux
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../store/ShoppingCardSlice/ShoppingCardSlice';




function CategoryPageSwiper() {
    //Redux
    
    const dispatch = useDispatch();

    //Laoding
     const [loading,setLoading] = useState(true);

    //APIs
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
                        finally{

                            setLoading(false);
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


    //hendle add Item
    const handleAddItem = (book) => {
        dispatch(addItem(book));
    }

    return (
        <>
            {/* TEXT_BOX */}
            <div className="flex items-center justify-between mb-2">
                <div>
                    <span className="inline-block py-1.5 px-4 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/20 text-sm font-semibold uppercase tracking-wider mb-3">
                        Kategoria
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Explore <span className="text-green-500">{genre}</span>
                    </h2>
                </div>
                <Link
                    to="#"
                    className="hidden md:inline-flex items-center gap-2 text-green-500 hover:text-green-600 font-semibold transition-colors"
                >
                    Zobacz wszystkie
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={24}
                autoHeight={false}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper mt-6 !pb-12"
                breakpoints={{
                    0: { slidesPerView: 1, spaceBetween: 16 },
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
            >
                {books.map((book) => {
                    const volume = book.volumeInfo;
                    const cover = volume.imageLinks?.thumbnail;
                    return (
                        <SwiperSlide key={book.id} className='!h-[420px]'>
                            <div className='flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 hover:border-green-400 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 cursor-pointer group'>

                               
                                <div className="relative overflow-hidden">


                                     <div className="relative overflow-hidden">
                                                {loading ? (
                                                    <CircularProgress aria-label="Loading…" />
                                                ) : (
                                                    <>
                                                        {/* Okładka */}
                                                        {cover ? (
                                                            <img
                                                                src={cover}
                                                                alt={volume.title}
                                                                className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-[200px] flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 text-amber-600 font-medium">
                                                                Brak okładki
                                                            </div>
                                                        )}
                                                    </>
                                                )}
                                    </div>


                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="flex flex-col flex-1 p-5">
                                    <h3 className='text-lg font-bold text-slate-900 line-clamp-1 group-hover:text-green-600 transition-colors duration-300'>{volume.title}</h3>
                                    <p className="text-sm text-slate-500 mt-1">{volume.authors?.join(', ')}</p>
                                    <p className='text-sm text-slate-500 leading-relaxed mt-2 overflow-hidden line-clamp-3 flex-1'>
                                        {volume.description?.slice(0, 150)}{volume.description?.length > 150 ? '...' : ''}
                                    </p>
                                </div>
                                <Button onClick={() => handleAddItem(volume.title)} variant='contained' className='!bg-green-400'>Add to card</Button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
      );
}

export default CategoryPageSwiper;