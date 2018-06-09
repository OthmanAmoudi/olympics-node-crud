const event = require('../models/event');
module.exports = {
    showEvents: (req,res) =>{
        //return a view with data
        res.render('pages/events',{events: events});
    },

    showSingle: (req,res) => {
    const event = {name:'Weightlifting',slug:'gym', description: 'I will be body builder.'}
        res.render('pages/single',{event: event});
    },

    //seed db
    seedEvents:(req,res) => {
        const events = [
        {name:'Basketball',description:'Throwing into a basket.'},
        {name:'Swimming',description:'im a dolphin.'},
        {name:'Weightlisting',description:'I will be body builder.'}

        ];

        for(event of events){
           var newEvent = new Event(event);
           newEvent.save();
        }

        res.send('Databse seeded');
    }
};