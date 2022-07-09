
exports.getDate=function (){
    const  today = new Date();

const  options= {
    weekday:"long",
    day:"numeric",
    month:"long"


};

return day =today.toLocaleDateString("hi-IN",options)






}
exports.getDay=function(){
   const today = new Date();

const options= {
    weekday:"long",
   


};

return today.toLocaleDateString("en-UN",options)


}
