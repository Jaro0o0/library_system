import {  useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";
import AccountHeader from "../components/common/AccountHeader";
import { useState  } from "react";
import {motion} from 'framer-motion';
import { fadeInUp } from "../animations/commonAnimations";





function Register( {  }) {
    const [email , setEmail] = useState('');
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();




    //handdlers
    const registerHandler =  async (event: any) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:5000/auth/Account/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password, email }),
            });

            if (!res.ok) {
                setError(await res.text());
                return;
            }

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem("accessToken", data.accesToken);
                navigate(`/users/${userName}`); 

            }
        

        } catch {
            setError("Nie można połączyć się z API.");
        } finally {
            setIsLoading(false);
        }
    }

    //disabledHandler
    const disabledHandler = () => {
        return email.trim() === '' || userName.trim() === '' || password.trim() === '';
    }


    return (
        <>
        <AccountHeader />
           
                {/* Register_BOX */}
            <motion.div 
                variants={fadeInUp }
                initial='hidden'
                animate="visible"
                className="w-full h-screen">
                     
                    <form onSubmit={registerHandler} className="absolute top-1/2 left-1/2 -translate-1/2  w-full max-w-md  p-12 flex flex-col  gap-6 rounded-2xl shadow-md">
                        <h1 className="text-3xl">Register</h1>
                            <div className="flex flex-col gap-3">
                                <span>E-mail</span>
                                <TextField id="userName" label="Email" variant="outlined" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                    
                                            '&:hover fieldset': {
                                                borderColor: '#4ade80', // hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#4ade80', // focus
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#4ade80', // label color
                                        },
                                    }}
                                    />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>Username</span>
                                <TextField id="userName" label="Username" variant="outlined" fullWidth value={userName} onChange={(event) => setUserName(event.target.value)} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                    
                                            '&:hover fieldset': {
                                                borderColor: '#4ade80', // hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#4ade80', // focus
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#4ade80', // label color
                                        },
                                    }}
                                    />
                            </div>
                            <div className="flex flex-col gap-3">
                                <span>Password</span>
                                <TextField id="password" label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} 
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                    
                                            '&:hover fieldset': {
                                                borderColor: '#4ade80', // hover
                                            },
                                            '&.Mui-focused fieldset': {
                                                borderColor: '#4ade80', // focus
                                            },
                                        },
                                        '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#4ade80', // label color
                                        },
                                    }}
                                    
                                    />
                            </div>
                            {error && <p className="text-red-600">{error}</p>}
                            <Button  className="!bg-green-400"    variant="contained" type="submit" disabled={disabledHandler() || isLoading}>{isLoading ? "Logging in..." : "Login"}</Button>
                            {/* <Link to="/recomend">Recomend</Link>
                        */}
                    </form>
                </motion.div>
       
        </>
      );
}

export default Register;
