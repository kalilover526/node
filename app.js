
const EventEmitter=require('events');
const Logger=require('./logger');
const logger=new Logger();
 logger.addListener('messageLogged',(args)=>{
     console.log('Loggig in :',args);
 });
logger.log('message');