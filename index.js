const getOtp = (length=6) => {
    try{
        let digits = "0123456789";
        let OTP = "";
        let len = digits.length;
        for (let i = 0; i < length; i++) {
          OTP += digits[Math.floor(Math.random() * len)];
        }
    
        return OTP;
    }catch(error){
        console.log('error in generating one time password: ', error);
        throw error;
    }
}
module.exports = getOtp
