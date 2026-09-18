import { Button, TextField } from "@mui/material";
import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router";
import AccountHeader from "../components/common/AccountHeader";
import {motion} from 'framer-motion';
import { fadeInUp } from "../animations/commonAnimations";



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
            const response = await fetch(
                "http://localhost:5110/auth/Account/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName,
                        password,
                    }),
                }
            );

            if (!response.ok) {
                const message = await response.text();
                throw new Error(message);
            }

            const data = await response.json();

            localStorage.setItem("accessToken", data.accesToken);

            navigate("/");
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("An unexpected error occurred.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AccountHeader />

            <motion.div className="w-full h-screen"
                variants={fadeInUp }
                initial='hidden'
                animate="visible"
            >
                <form
                    onSubmit={loginHandler}
                    className="absolute top-1/2 left-1/2 -translate-1/2 w-full max-w-md p-12 flex flex-col bg-white gap-6 rounded-2xl shadow-lg"
                >
                    <h1 className="text-3xl text-gray-900 font-medium">
                        Login
                    </h1>

                    <div className="flex flex-col gap-3">
                        <span className="text-gray-900 font-medium">
                            Username
                        </span>

                        <TextField
                            id="userName"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            value={userName}
                            onChange={(event) =>
                                setUserName(event.target.value)
                            }
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#4ade80",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4ade80",
                                    },
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#4ade80",
                                },
                            }}
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="text-gray-900 font-medium">
                            Password
                        </span>

                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    "&:hover fieldset": {
                                        borderColor: "#4ade80",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#4ade80",
                                    },
                                },
                                "& .MuiInputLabel-root.Mui-focused": {
                                    color: "#4ade80",
                                },
                            }}
                        />
                    </div>

                    {error && (
                        <p className="text-red-600">
                            {error}
                        </p>
                    )}

                    <Button
                        variant="contained"
                        className="!bg-green-400"
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </Button>

                    <p className="text-center font-medium text-gray-900">
                        You don't have an account?
                    </p>

                    <Button
                        variant="text"
                        className="!text-green-500 !font-md"
                        component={Link}
                        to="/register"
                    >
                        Register
                    </Button>
                </form>
            </motion.div>
        </>
    );
}

export default LoginPage;