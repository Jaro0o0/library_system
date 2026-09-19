// import { useState } from "react"
// import Typography from "@mui/material/Typography"
// import TextField from "@mui/material/TextField"
// import InputAdornment from "@mui/material/InputAdornment"
// import IconButton from "@mui/material/IconButton"
// import LocalLibrary from "@mui/icons-material/LocalLibrary"
// import SearchIcon from "@mui/icons-material/Search"
// import Close from "@mui/icons-material/Close"
// import Header from "../common/Header"

// function Hero() {
//     const [searchQuery, setSearchQuery] = useState("")
//     return ( 
//         <>
//       <Header/>
//       <div className="min-h-[40vh] bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 flex flex-col items-center justify-center pt-24 pb-12 px-4">
//         <div className="flex items-center gap-3 mb-4">
//           <LocalLibrary sx={{ fontSize: 40, color: "#4ade80" }} />
//           <Typography variant="h3" className="!text-white !font-bold">
//             Library Catalog
//           </Typography>
//         </div>
//         <Typography variant="subtitle1" className="!text-gray-300 mb-8">
//           Discover thousands of books waiting for you
//         </Typography>

//         <div className="w-full max-w-3xl">
//           <TextField
//             fullWidth
//             placeholder="Search by title, author, ISBN, or keyword..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             variant="outlined"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 backgroundColor: "rgba(255,255,255,0.95)",
//                 borderRadius: "16px",
//                 fontSize: "1.1rem",
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//                 "& fieldset": { borderColor: "transparent" },
//                 "&:hover fieldset": { borderColor: "#4ade80" },
//                 "&.Mui-focused fieldset": { borderColor: "#22c55e", borderWidth: 2 },
//               },
//             }}
//             slotProps={{
//               input: {
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SearchIcon sx={{ color: "#6b7280", fontSize: 28 }} />
//                   </InputAdornment>
//                 ),
//                 endAdornment: searchQuery && (
//                   <InputAdornment position="end">
//                     <IconButton size="small" onClick={() => setSearchQuery("")}>
//                       <Close fontSize="small" />
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               },
//             }}
//           />
//         </div>
//       </div>
//       </>
//      );
// }

// export default Hero;