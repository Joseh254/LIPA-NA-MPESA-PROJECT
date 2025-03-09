import axios from 'axios';

export async function CreateToken(request, response, next) {
  try {
    const encodedCredentials = Buffer.from(
      `${process.env.CONSUMER}:${process.env.SECRET}`
    ).toString("base64");

    const res = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      }
    );

    console.log("Token Generated:", res.data);

    // Store token in request object for use in next middleware/controller
    request.token = res.data.access_token;

    next(); // Proceed to next middleware/controller
  } catch (error) {
    console.error("Token Generation Error:", error.response?.data || error.message);
    response.status(500).json({ error: "Failed to generate token" });
  }
}
