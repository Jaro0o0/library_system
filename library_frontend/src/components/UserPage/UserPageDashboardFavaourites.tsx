import { useState, useEffect } from "react";

import Container from "../common/Container";
import useGetUser from "../../hooks/useGetUser";

function UserPageDashboardFavaourites() {
    const [data, setData] = useState([]);

    const { userName } = useGetUser();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5110/search/Books/recomended?userName=${encodeURIComponent(userName)}`,
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                        },
                    }
                );

                if (!res.ok) {
                    throw new Error(await res.text());
                }

                const data = await res.json();
                console.log(data)

                setData(data);
            } catch (error) {
                console.error(
                    "Nie udało się pobrać rekomendowanych książek:",
                    error
                );
            }
        };

        if (userName) {
            getData();
        }
    }, [userName]);

    return (
        <div className="flex flex-col gap-10 justify-start p-10 overflow-y-auto bg-slate-50/50">
            <Container>
                <div className="overflow-y-auto">
                    <h1 className="text-3xl mb-4 font-semibold text-slate-800">
                        Recommended books
                    </h1>

                    {data.length === 0 ? (
                        <p>No recommended books yet.</p>
                    ) : (
                        data.map((item, index) => (
                            <div
                                key={index}
                                className="p-4 shadow-md flex justify-between items-center"
                            >
                                <div>
                                    <h2 className="font-semibold">
                                        {item.tytul}
                                    </h2>

                                    <p>{item.autor}</p>

                                    <p>{item.gatunek}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    );
}

export default UserPageDashboardFavaourites;