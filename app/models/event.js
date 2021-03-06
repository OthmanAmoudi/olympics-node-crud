const mongoose = require('mongoose'),
Schema = mongoose.Schema;

// create schema
const eventSchema = new Schema ({
    name:String,
    slug:{
        type:String,
        unique:true
    },
    description:String
});


// middleware
eventSchema.pre('save',(next)=>{
    this.slug = slugify(this.name);
    next();
});

const eventModel = mongoose.model('Event',eventSchema);
module.exports = eventModel;


function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}