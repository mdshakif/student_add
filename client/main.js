import { Template } from 'meteor/templating';
import { Students } from '../imports/api/students'

import '../node_modules/bootstrap/dist/css/bootstrap'


import './main.html';

Template.students.helpers({
  allinfo() {
    return Students.find();
  },

  
});

Template.students.events({

  'click #delete': function(){
    event.preventDefault();
    Students.remove(this._id)
  }

})

Template.newStudent.events({
 'submit #student-form'(event, instance){
   event.preventDefault();
   let stname = event.target.stname.value;
   let email = event.target.email.value;
   let phone = event.target.phone.value;
   let dob = event.target.dob.value;
   let subjects = event.target.subjects.value;
   if(stname != '' && email != '' && phone != '' && dob != '' && subjects != '' ){
      Meteor.call('students.insert', stname, email, phone, dob, subjects, (err) => {
        if(err){
          alert(err.message)
        }else{
          // reset form
          event.target.reset()
        }
      })
   }else{
     alert('You must fill up all information')
   }
 
 }
 
});
