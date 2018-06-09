module.exports = {
    showEvents: (req,res) =>{
        const events = [
            {name:'Basketball',slug:'basketball',description:'Throwing into a basket.'},
            {name:'Swimming',slug:'swimming',description:'im a dolphin.'},
            {name:'Weightlisting',slug:'gym',description:'I will be body builder.'}

        ];

        //return a view with data
        res.render('pages/events',{events: events});
    },

    showSingle: (req,res) => {
        const event = {name:'Weightlifting',slug:'gym', description: 'I will be body builder.'}
        res.render('pages/single',{event: event});
    }
};