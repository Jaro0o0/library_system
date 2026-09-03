import CommonHeading from "../common/CommonHeading"
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
import FavoriteBorder from "@mui/icons-material/FavoriteBorder"
import Person from "@mui/icons-material/Person"
import CalendarToday from "@mui/icons-material/CalendarToday"
import Visibility from "@mui/icons-material/Visibility"

const recomendationBooks = [
    {
    id: 12,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    year: 1997,
    rating: 4.6,
    cover: "https://picsum.photos/seed/book12/300/450",
    available: true,
    language: "English",
  },

]


function Recomend() {
    return ( 
      <>
        <div className="container mx-auto max-w-7xl">
            <CommonHeading>Recomedations</CommonHeading>
            <h2 className="text-2xl">See recomendation based of your last books</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {recomendationBooks.map((item) => {
                return (
                    <Card
                key={item.id}
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
                    image={item.cover}
                    alt={item.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-2 left-2">
                    <Chip
                      label={item.genre}
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
                      label={item.available ? "Available" : "Borrowed"}
                      size="small"
                      sx={{
                        backgroundColor: item.available
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
                    {item.title}
                  </Typography>

                  <div className="flex items-center gap-1 mt-1">
                    <Person sx={{ fontSize: 14, color: "#9ca3af" }} />
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                      {item.author}
                    </Typography>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <Rating value={item.rating} precision={0.1} size="small" readOnly />
                    <div className="flex items-center gap-1 text-gray-400">
                      <CalendarToday sx={{ fontSize: 12 }} />
                      <Typography variant="caption" color="text.secondary">
                        {item.year}
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
                )
            })}

        </div>
      </>
     );
}

export default Recomend;