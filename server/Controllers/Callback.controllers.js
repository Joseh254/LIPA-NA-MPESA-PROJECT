export async function callback(request,response){
    const callbackData = req.body;

    // Check the result code
    const result_code = callbackData.Body.stkCallback.ResultCode;
    if (result_code !== 0) {
      // If the result code is not 0, there was an error
      const error_message = callbackData.Body.stkCallback.ResultDesc;
      const response_data = { ResultCode: result_code, ResultDesc: error_message };
      return res.json(response_data);
    }
  
    // If the result code is 0, the transaction was completed
    const body = req.body.Body.stkCallback.CallbackMetadata;
  
    // Get amount
    const amountObj = body.Item.find(obj => obj.Name === 'Amount');
    const amount = amountObj.Value
  
    // Get Mpesa code
    const codeObj = body.Item.find(obj => obj.Name === 'MpesaReceiptNumber');
    const mpesaCode = codeObj.Value 
  
    // Get phone number
    const phoneNumberObj = body.Item.find(obj => obj.Name === 'PhoneNumber');
    const phone = phoneNumberObj.Value
  
    // Save the variables to a file or database, etc.
    // ...
  
    // Return a success response to mpesa
    return res.json("success");
}