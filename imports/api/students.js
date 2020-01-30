import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Students = new Mongo.Collection('students');

Meteor.methods({
    'students.insert'(stname, email, phone, dob, subjects){
        check(stname, String)
        check(email, String)
        check(phone, String)
        check(dob, String)
        check(subjects, String)
       

        Students.insert({
            stname,
            email,
            phone,
            dob,
            subjects,
            createdAt: new Date() 
        })
    }
})