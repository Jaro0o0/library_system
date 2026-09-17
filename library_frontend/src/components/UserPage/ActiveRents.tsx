import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import type { RentalHistory } from '../../types';

import { useEffect, useState } from 'react';

function ActiveRents() {
  const [data, setData] = useState<RentalHistory>([]);

  useEffect(() => {
    const getHistory = async () => {
      const res = await fetch('http://localhost:5110/search/Books/rent-history', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (res.ok) {
        setData(await res.json());
      }
    };

    getHistory();
  }, []);

  const nowDatae = new Date().toLocaleDateString();

  return (
    <>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {data[0]?.endDate && data[0].endDate > nowDatae  ? (
          <p>you don't have active rents yet</p>
        ) : (
          data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 bg-white rounded-2xl shadow-md hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <img
                  src={`http://localhost:5110/images/Images?title=${encodeURIComponent(item.book.tytul)}`}
                  alt="book-img"
                  className="max-h-[200px] w-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-5">
                <div className="bg-white shadow-sm rounded-xl p-4">
                  <span className="font-medium text-slate-600">
                    {item.book.tytul}
                  </span>

                  <p className="text-sm text-slate-500 mt-1">
                    {item.book.autor}
                  </p>

                  <p className="flex items-center gap-1 text-sm text-slate-500 mt-2">
                    <CalendarMonthIcon fontSize="small" />
                    End date: {item.endDate
                      ? new Date(item.endDate).toLocaleDateString()
                      : '-'}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
    </>
  );
}

export default ActiveRents;
