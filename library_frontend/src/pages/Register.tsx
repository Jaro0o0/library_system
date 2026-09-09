import { Link, useNavigate } from "react-router";
import { TextField, Button } from "@mui/material";
import { useState, type FormEvent } from "react";




function Register( {  }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const rewhisterHandler =  async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:5110/auth/Account/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });

            if (!res.ok) {
                setError(await res.text());
                return;
            }

            if (res.ok) {
                const data = await res.json();
                localStorage.setItem("accessToken", data.accesToken);
                navigate("/recomend"); // Navigate to the recomend page after successful registration

            }
        

        } catch {
            setError("Nie można połączyć się z API.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
           <div className="w-full h-screen">
                {/* Login_BOX */}
                <form onSubmit={rewhisterHandler} className="absolute top-1/2 left-1/2 -translate-1/2  w-full max-w-md  p-12 flex flex-col  gap-6 rounded-2xl shadow-md">
                    <h1 className="text-3xl">Register</h1>
                        <span>Username</span>
                        <TextField id="userName" label="Username" variant="outlined" fullWidth  />
                        <span>E-mail</span>
                        <TextField id="email" label="E-mail" variant="outlined" fullWidth value={userName} onChange={(event) => setUserName(event.target.value)} />
                         <span>Password</span>
                        <TextField id="password" label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(event) => setPassword(event.target.value)} />
                        {error && <p className="text-red-600">{error}</p>}
                        <Button variant="contained" type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</Button>
                        <Link to="/recomend">Recomend</Link>
                    
                </form>
            </div>
        </>
      );
}

export default Register;
