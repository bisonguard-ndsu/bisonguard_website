export const sendFormSubmissionEmail = async (submission: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Email API error:", data);
      throw new Error(data.details ?? data.error ?? "Failed to send email");
    }

    console.log("Form submission email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending form submission email:", error);
    throw error;
  }
};
