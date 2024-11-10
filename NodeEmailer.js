const nm=require('nodemailer');    //importing nodemailar npm package into our application

//this transporter takes the authentication for gmail
const transporter=nm.createTransport(
    {
        host:"smtp.gmail.com",       //this is host for gamil
        port:587,                    //this is port number for gmail
        secure:false,                //security is false to send temprarily
        auth:{                       //this is the details of user and app password
            user:'seelamlavanyaravikumar211@gmail.com',
            pass:'egzs folx rwuh ckvl'
        }
    }
);

const options={                                //these are the options object we have to send to send mail function
    from:'seelamlavanyaravikumar211@gmail.com',
    to:'seelamlavanya211@gmail.com',
    subject:"TESTING NODE EMAILS",
    // text:"Hello! welcome to our application"  //this is for sending text content in mail
    html:`<h1>LAVANYA RAVI KUMAR<h1>            
    <img src='cid:food' width:'200px'>
    <img src='cid:animal' width:'200px'>
    <button>click me</button>`,                 //this is for sending html content in mail
    attachments:[
      {
        filename:'food.jpeg',
        path:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cid:'food'
      },
      {
        filename:'animal.jpeg',
        path:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        cid:'animal'
      },
    ]
}

transporter.sendMail
(options,function(err,info){
  if(err){
    console.log(err);
  }
  else{
    console.log(sent);
  }
})