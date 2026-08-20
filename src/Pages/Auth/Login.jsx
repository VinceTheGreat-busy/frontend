import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [seePass, setSeePass] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleSeePass = () => {
        setSeePass(prev => !prev);
    }

    const handleLogin = (e) => {
        setLoading(true)
        try {
            login(email, password);

            navigate('/dashboard');
        } catch (e) {
            console.error(e);
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            
        </form>
    )
}