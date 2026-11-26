// Submit contact details through the configured Web3Forms endpoint.
const submitContactForm = async (formData) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
        throw new Error("Contact form is not configured.");
    }

    const data = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send message");
    }

    return result;
};

export default submitContactForm;