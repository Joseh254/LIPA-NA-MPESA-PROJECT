import axios from 'axios';

export async function CreateToken(request, response, next) {
  // Declare the constants properly


  try {
    // Base64 encode the Consumer and Secret key
    const auth = Buffer.from(`${process.env.CONSUMER}:${process.env.SECRET}`).toString("base64");

  
    const res = await axios.get("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {
      headers: {
        Authorization: `Basic ${auth}`,
      }
    });

    console.log(res.data); 

    
    response.json(res.data);

  } catch (error) {
    console.log(error);
    next(error);
  }
}
