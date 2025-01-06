// 1.
// for communication , ie we need to upload details and save that in localhost(server). for that we need api calls.
// here we done api calls by using axios amethod.
// for that first install axios. 
// create a seperate file to hold common api call.
// method, url and data re predefined keys in config

import axios from "axios"

const commonAPI =async(httpMethod, url,reqBody)=>{

    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody
    }
    //axios return a promise
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}
export default commonAPI