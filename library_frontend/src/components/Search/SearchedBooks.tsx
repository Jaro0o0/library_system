import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Chip from "@mui/material/Chip"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Rating from "@mui/material/Rating"
import Button from "@mui/material/Button"
import Pagination from "@mui/material/Pagination"
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Person from "@mui/icons-material/Person"
import CalendarToday from "@mui/icons-material/CalendarToday"
import Visibility from "@mui/icons-material/Visibility"
import { useDispatch, useSelector } from "react-redux"

import Container from "../common/Container"
import type { AppDispatch, RootState } from "../../store"

const mockBooks = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    year: 1925,
    rating: 4.5,
    cover: "https://picsum.photos/seed/book1/300/450",
    available: true,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopia",
    year: 1949,
    rating: 4.7,
    cover: "https://picsum.photos/seed/book2/300/450",
    available: false,
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Classic",
    year: 1960,
    rating: 4.8,
    cover: "https://picsum.photos/seed/book3/300/450",
    available: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    rating: 4.6,
    cover: "https://picsum.photos/seed/book4/300/450",
    available: true,
  },
]

function SeaarchedBooks() {
    const searchedBooks = useSelector((state: RootState) => state.searchedBooks)
    const dispatch = useDispatch<AppDispatch>()

    void searchedBooks
    void dispatch

    return (  
      
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockBooks.map((book) => (
                <Card
                    key={book.id}
                    sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                    },
                    }}
                >
                    <div className="relative">
                    <CardMedia
                        component="img"
                        height="240"
                        image={book.cover}
                        alt={book.title}
                        sx={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-2 left-2">
                        <Chip
                        label={book.genre}
                        size="small"
                        sx={{
                            backgroundColor: "rgba(22,163,74,0.9)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.7rem",
                            borderRadius: "8px",
                        }}
                        />
                    </div>
                    <div className="absolute top-2 right-2">
                        <Tooltip title="Add to favorites">
                        <IconButton
                            sx={{
                            backgroundColor: "rgba(255,255,255,0.9)",
                            "&:hover": { backgroundColor: "white" },
                            }}
                            size="small"
                        >
                            <FavoriteBorder fontSize="small" sx={{ color: "#ef4444" }} />
                        </IconButton>
                        </Tooltip>
                    </div>
                    <div className="absolute bottom-2 right-2">
                        <Chip
                        label={book.available ? "Available" : "Borrowed"}
                        size="small"
                        sx={{
                            backgroundColor: book.available
                            ? "rgba(34,197,94,0.9)"
                            : "rgba(239,68,68,0.9)",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.65rem",
                            borderRadius: "8px",
                        }}
                        />
                    </div>
                    </div>

                    <CardContent sx={{ pb: 1 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                        fontWeight: 700,
                        lineHeight: 1.3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        }}
                    >
                        {book.title}
                    </Typography>

                    <div className="flex items-center gap-1 mt-1">
                        <Person sx={{ fontSize: 14, color: "#9ca3af" }} />
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                        {book.author}
                        </Typography>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                        <Rating value={book.rating} precision={0.1} size="small" readOnly />
                        <div className="flex items-center gap-1 text-gray-400">
                        <CalendarToday sx={{ fontSize: 12 }} />
                        <Typography variant="caption" color="text.secondary">
                            {book.year}
                        </Typography>
                        </div>
                    </div>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                    <Button
                        size="small"
                        startIcon={<Visibility />}
                        fullWidth
                        variant="contained"
                        sx={{
                        borderRadius: "10px",
                        textTransform: "none",
                        fontWeight: 600,
                        backgroundColor: "#16a34a",
                        "&:hover": { backgroundColor: "#15803d" },
                        }}
                    >
                        View Details
                    </Button>
                    </CardActions>
                </Card>
                ))}
            </div>

            <div className="flex justify-center mt-10 mb-6">
                <Pagination
                count={5}
                color="primary"
                size="large"
                sx={{
                    "& .MuiPaginationItem-root": { borderRadius: "10px" },
                    "& .Mui-selected": { backgroundColor: "#16a34a !important" },
                }}
                />
            </div>
          </Container>
        
    );
}

export default SeaarchedBooks;
