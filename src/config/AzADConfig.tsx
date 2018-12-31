import IAzADConfig from '../interfaces/IAzADConfig';

// export const AzADConfig: IAzADConfig = {
//     auth: {
//         clientId: "e86f54a8-a894-4446-bafc-9527bf648f1e",
//         authority: "https://login.microsoftonline.com/71530602-cd4f-4243-81ca-9e66bcf73a39",
//         redirectUri: "http://localhost:3000",
//         graphScopes: ["openid", "profile", "User.Read"]
//     }
// };


export const AzADConfig: IAzADConfig = {
    auth: {
        clientId: "7ada44e4-c58d-4655-bfb7-c09981cd6f78",
        authority: "https://login.microsoftonline.com/20093d99-aa75-47ce-8170-9cfe0c88b6b5",
        redirectUri: "http://localhost:3000",
        graphScopes: ["openid", "profile", "User.Read"]
    }
};