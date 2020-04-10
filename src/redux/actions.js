export const  userAction = (data) => {
    console.log("yeh chalega kya????", data);
    return {
        type:'USERLOGGED',
        data:data
    }
}