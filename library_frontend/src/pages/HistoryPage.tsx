import Container from "../components/common/Container";
import { useState, useEffect } from "react";

type RentalHistory = {
    id: number;
    startDate: string;
    endDate: string;
    book: {
        id: number;
        tytul: string;
        autor: string;
        gatunek: string | null;
    };
};

function HistoryPage() {

    const [data, setData] = useState<RentalHistory[]>([]);

    useEffect(() => {
        const getHistory = async () => {
            const res = await fetch('http://localhost:5110/search/Books/rent', {
                headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
            });

            if (res.ok) {
                setData(await res.json());
            }
        };

        getHistory();
    }, [])


    return ( 
        <div className="w-full h-screen">
            <Container>
                <h1>History of rents</h1>
                <div>
                        {data.length === 0 ? (
                            <p>No rented books yet.</p>
                        ) : (
                            data.map((rental) => (
                                <div key={rental.id}>
                                    <p>{rental.book.tytul} — {rental.book.autor}</p>
                                    <p>Rented: {new Date(rental.startDate).toLocaleDateString()}</p>
                                    <p>Due: {new Date(rental.endDate).toLocaleDateString()}</p>
                                </div>
                            ))
                        )}
                </div>
            </Container>

        </div>
     );
}

export default HistoryPage;
