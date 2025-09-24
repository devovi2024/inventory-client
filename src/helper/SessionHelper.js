class SessionHelper {
    // Token
    setToken(token) {
        localStorage.setItem("token", token);
    }
    getToken() {
        return localStorage.getItem("token");
    }

    // User Details
    setUserDetails(userDetails) {
        localStorage.setItem("UserDetails", JSON.stringify(userDetails));
    }
    getUserDetails() {
        const data = localStorage.getItem("UserDetails");
        return data ? JSON.parse(data) : null;
    }

    // Email
    setEmail(email) {
        localStorage.setItem("Email", email);
    }
    getEmail() {
        return localStorage.getItem("Email");
    }

    // OTP
    setOTP(otp) {
        localStorage.setItem("OTP", otp);
    }
    getOTP() {
        return localStorage.getItem("OTP");
    }

    // Optional: Clear all session
    clearSession() {
        localStorage.removeItem("token");
        localStorage.removeItem("UserDetails");
        localStorage.removeItem("Email");
        localStorage.removeItem("OTP");
    }
}
