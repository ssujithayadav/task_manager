const mongoose =  require('mongoose')
  

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});
    
// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('invalid email!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minlength: 7,
//         trim: true,
//         validate(value){
//             if(value.includes('password')){
//                 throw new Error('Password cannot contain "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value){
//             if(value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '    Sujitha   ',
//     email: 'sujitha@gmail.com',
//     password: '    lnjdfsdbj   '
// })
// me.save().then(() => {
//   console.log(me)
// }).catch((error) => {
//     console.log('error', error)
// })




// const Task = mongoose.model(('Task'), {
//     description: {
//         type: String,
//         required: true,
//         trim : true
//     },
//     completed: {
//         type: Boolean,
//         default: false

//     }
// })


// const task = new Task({
//     description: 'learn',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// }) 
