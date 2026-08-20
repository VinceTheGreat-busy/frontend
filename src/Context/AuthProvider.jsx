import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import api from "../Client/api";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /*
    |--------------------------------------------------------------------------
    | Get authenticated user
    |--------------------------------------------------------------------------
    */

    const fetchUser = async () => {
        try {
            const response = await api.get("/api/user");

            setUser(response.data.user);
            setError(null);

        } catch (error) {

            setUser(null);

            if (error.response?.status !== 401) {
                setError(
                    error.response?.data?.message ||
                    "Failed to fetch user."
                );
            }

        } finally {
            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Login
    |--------------------------------------------------------------------------
    */

    const login = async (email, password) => {

        setLoading(true);
        setError(null);

        try {

            // Get CSRF cookie first
            await api.get("/sanctum/csrf-cookie");

            // Login
            const response = await api.post("/login", {
                email,
                password
            });

            setUser(response.data.user);

            return response.data;

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Login failed."
            );

            throw error;

        } finally {
            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Register
    |--------------------------------------------------------------------------
    */

    const register = async (name, email, password, password_confirmation) => {

        setLoading(true);
        setError(null);

        try {

            // Get CSRF cookie first
            await api.get("/sanctum/csrf-cookie");

            // Register
            const response = await api.post("/api/register", {
                email,
                password,
                password_confirmation,
                first_name,
                last_name,
                phone,
                username
            });

            setUser(response.data.user);

            return response.data;

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration failed."
            );

            throw error;

        } finally {
            setLoading(false);
        }
    };


    /*
    |--------------------------------------------------------------------------
    | Logout
    |--------------------------------------------------------------------------
    */

    const logout = async () => {

        setLoading(true);
        setError(null);

        try {

            await api.post("/api/logout");

            setUser(null);

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Logout failed."
            );

            throw error;

        } finally {
            setLoading(false);
        }
    };


    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                error,
                login,
                register,
                logout,
                fetchUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}



export function useAuth() {
    return useContext(AuthContext);
}