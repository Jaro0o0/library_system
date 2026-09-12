import { useParams } from "react-router";
import Profuct_Img from '../assets/images/temporaryImages/pragmatic-programmer-img.jpg'
import { Button } from "@mui/material";
import Container from "../components/common/Container";
import Header from "../components/common/Header";
import {  useDispatch } from "react-redux";
import { addItem } from "../store/ShoppingCardSlice/ShoppingCardSlice";
import { useEffect, useState } from "react";

import toast from 'react-hot-toast';

type Book = {
    id: number;
    tytul: string;
    autor: string;
    isRented: boolean;
};

function ProductPage () {

    const {productName} = useParams();
    const dispatch = useDispatch();
    const [book, setBook] = useState<Book | null>(null);


    useEffect(() => {
        const getBook = async () => {
            if (!productName) return;

            const res = await fetch(`http://localhost:5110/search/Books/search-books?title=${encodeURIComponent(productName)}`);
            if (!res.ok) return;

            const books: Book[] = await res.json();
            setBook(books.find((item) => item.tytul === productName) ?? null);
        };

        getBook();
    }, [productName]);

    // handlers
    const handleAddItem = () => {
        if (!book) return;

        if (book.isRented) {
            toast.error("This book is rented, you can't rent it.");
            return;
        }

        dispatch(addItem({
            title: book.tytul,
            authors: [book.autor],
        }));
        toast.success("This book was added to your card.");
    }


    
    return ( 
        <>
            
            <div className="w-full min-h-screen bg-slate-50 py-16">
                <Header/>

                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 max-w-5xl mx-auto">
                        <div className="p-6 md:p-8 bg-slate-100">
                                <img src={Profuct_Img} alt="product img" className="w-full h-full max-h-[480px] object-cover rounded-2xl shadow-md"/>
                        </div>
                        {/* info */}
                        <div className="p-8 md:p-12 flex flex-col justify-center gap-5">
                            <span className="text-sm font-semibold uppercase tracking-widest text-green-500">Book details</span>
                            <h1 className="font-[400] text-slate-900 text-3xl leading-tight">{productName}</h1>
                            <h2 className="text-slate-500 text-lg">{book?.autor ?? "Author"}</h2>
                            {/* Buttons */}
                            <div className="pt-3">
                                <Button variant="contained" className="!bg-green-500 !rounded-xl !px-6 !py-3" onClick={handleAddItem} disabled={!book}>Add to card</Button>

                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        </>
     );
}

export default ProductPage ;
