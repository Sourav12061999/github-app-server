const axios=require("axios");
const checkUsername = async (username) =>{
    try {
        await axios.get(`https://api.github.com/users/${username}`);
        return true;
    } catch (error) {
        return false;
    }
};

module.exports=checkUsername;