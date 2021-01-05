const bcryptjs = require('bcryptjs');

const users =[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcryptjs.hashSync('123456',10),
        isAdmin: true,
    },
    {
        name:'Anna Doe',
        email:'anna@example.com',
        password:bcryptjs.hashSync('123456',10),
    },
      {
        name:'Amna Mer',
        email:'amna@example.com',
        password:bcryptjs.hashSync('123456',10),
    },
      {
        name:'John Doe',
        email:'john@example.com',
        password:bcryptjs.hashSync('123456',10),
    },
    
]
// export default users; 
module.export = users; 