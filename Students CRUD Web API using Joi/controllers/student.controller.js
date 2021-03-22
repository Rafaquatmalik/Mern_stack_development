const Student = require('../models/student.model');

exports.test=(req, res)=>{
res.send("Greetings From the server for test");
}
//http://localhost:3000/students/create
exports.student_create=(req, res)=>{
    let student=new Student({
        name: req.body.name,
        gender: req.body.gender,
        city: req.body.city,
        age: req.body.age
    });
    student.save((err)=>{
        if(err){
            return next(err);
        }
        res.send('Student Created successfully');
    });
};
//http://localhost:3000/students/id
exports.student_details=(req, res)=>{
    Student.findById(req.params.id,(err, student)=>{
            if(err) return next(err);
            res.send(student);
    });
};
//http:localhost:3000/students/id/update
exports.student_update=(req, res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if(err) return next(err);
        res.send("Student Updated Successfully!!");
    });
};
//http:localhost:3000/students/id/delete
exports.student_delete=(req, res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if(err) return next(err);
        res.send("Student Deleted Successfully");
    });
};
