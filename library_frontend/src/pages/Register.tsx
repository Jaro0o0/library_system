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
            const res = await fetch("http://localhost:5110/account/Register/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password }),
            });

            if (!res.ok) {
                setError(await res.text());
                return;
            }

            const data = await res.json();
            localStorage.setItem("accessToken", data.accesToken);
            navigate("/");
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
                <form onSubmit={rewhisterHandler} className="absolute top-1/2 left-1/2 -translate-1/2  w-full max-w-md  p-12 flex flex-col bg-white border border-green-900 bords gap-6 rounded-2xl shadow-sm">
                    <h1 className="text-3xl">Login</h1>
                        <span>E-mail</span>
                        <TextField id="userName" label="E-mail" variant="outlined" fullWidth value={userName} onChange={(event) => setUserName(event.target.value)} />
                         <span>Pasword</span>
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
