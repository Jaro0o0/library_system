import { TextField } from "@mui/material";
import{ Button } from "@mui/material";
import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router";
import AccountHeader from "../components/common/AccountHeader";
import { motion } from "framer-motion";
import { loginAnimations,item } from "../animations/loginAnimations";


type LoginResponse = {
    accesToken: string;
};


function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:5110/auth/Account/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });

            if (!response.ok) {
                setError(await response.text());
                return;
            }

            const data = await response.json();
            localStorage.setItem("accessToken", data.accesToken);
            navigate("/");
        } catch {
            setError("Nie można połączyć się z API.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
             <AccountHeader/>
            <div className="w-full h-screen">
                {/* Login_BOX */}
                <motion.div className="absolute top-1/2 left-1/2 -translate-1/2  w-full max-w-md  p-12 flex flex-col bg-white  gap-6 rounded-2xl shadow-lg"
                    variants={loginAnimations}
                    initial='initiaal'
                    animate="animate"
                    exit="exit"

                >
                    <h1 className="text-3xl">Login</h1>
                    <motion.div
                     variants={item}
                      initial='initiaal'
                    animate="animate"
                     >
                          <h1 className="text-3xl">Login</h1>
                          <form onSubmit={loginHandler} >
                     

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
                                <span>Pasword</span>
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
                    </form>
                     {error && <p className="text-red-600">{error}</p>}
                            <Button variant="contained" className="!bg-green-400" type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</Button>
                            {/* <Link to="/recomend">Recomend</Link> */}
                            <p className="text-center font-medium">You don't have account?</p>
                            <Button variant="text" className="!text-green-500 !font-md" component={Link} to='/register'>Register</Button>
                    </motion.div>
                  
                </motion.div>
            </div>
        </>
      );
}

export default LoginPage;
