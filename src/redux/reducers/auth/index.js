// import clientUtils from "./../../../utils/client-utils"

// const initState = () =>{
//     let currentUser = "";
//     if (currentUser) clientUtils.auth = (currentUser.token || "");
//     return {
//         currentUser
//     };
// };

// const reducer = (state = initState(), action) => {
//     const {type, payload } = action;
//     switch (type)
//     {
//         case "AUTH-UPDATE-DATA":
//             return {... state, ...payload}; 
//         default:
//             return state;
//     }
// };