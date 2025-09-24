import cogoToast from "cogo-toast";

const EmailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MobileRegx = /^[0-9]{10,15}$/;

class FormHelper {
    IsEmpty(value) {
        return !value || value.trim().length === 0;
    }

    IsMobile(value) {
        return MobileRegx.test(value);
    }

    IsEmail(value) {
        return EmailRegx.test(value);
    }

    ErrorToast(msg) {
        cogoToast.error(msg, { position: "bottom-center" });
    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
}

export default new FormHelper();
