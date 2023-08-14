const base_url = "https://stage-api.nris.ca/";
const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbG9jYWwtbW92aWZsZXguaW5cL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjg5NDE5NTEyLCJleHAiOjE2ODk0MjMxMTIsIm5iZiI6MTY4OTQxOTUxMiwianRpIjoiaXRxTnR1REpQS0E3ZE9oRiIsInN1YiI6MSwicHJ2IjoiYTQyM2I2ZDgzY2I3MTEwMjdmMWU5OTBiMjA3OGY2YTY4NDQ5Y2FlOSJ9.UpilgGwdqSUD4tIYhTjA_13UmIG-QxfVR3DdkbaZO-w";
const headers = {
  "Content-type": "application/json",
  Authorization: `Basic ${token}`,
};
//register users

const register= async(userData)=>
{
    const response= await fetch();
    return response.data;
}


//login users

const login = async (userData) => {
    const response= await fetch();
    return response.data;
}



const authService = {
    register,
    login
    
  };
  
  export default authService;
  