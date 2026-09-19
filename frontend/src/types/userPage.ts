export type RentalHistory = {
  id: number;
  endDate: string | null;
  book: {
    tytul: string;
    autor: string;
  };
}[];


export type RecomendedBok = {
    id: number;
    tytul: string;
    autor: string;
    gatunek: string;
};

