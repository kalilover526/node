const EventEmitter=require('events');


class Logger extends EventEmitter{
log(message){
    //send an Http request
console.log(message);  

    //raising an event

this.emit('messageLogged',{ data: {
    name :'rahul',
    class:'b3'
}});

}

}
module.exports=Logger;