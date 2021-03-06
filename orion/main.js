orion.dictionary.addDefinition('description', 'site', {
    type: String,
    label: "Title",
});

Teachers = new orion.collection("teachers",{
    singularName: 'teacher',
    pluralName: 'teachers',
    tabular: {
        columns: [
            { data: "name", title: "Name" },
        /**
         * If you want to show a custom orion attribute in
         * the index table you must call this function
         * orion.attributeColumn(attributeType, key, label)
         */
            orion.attributeColumn('file', 'image', 'Image'),
            orion.attributeColumn('froala', 'body', 'Biography'),
            orion.attributeColumn('createdBy', 'createdBy', 'Created By')
        ]
    }

});
if (Meteor.isClient){
/*
    Template.body.helpers({ //TODO: Move to own template
       exampleMapOptions: function(){
           if(GoogleMaps.loaded()){
               return{
                   center: new google.maps.LatLng(40.761153,-73.831819),
                   zoom: 8
               };
           }
       }
    });

    Template.body.onCreated(function(){
        GoogleMaps.ready('exampleMap', function(map){
            var marker = new google.maps.Marker({
                position: map.options.center,
                map: map.instance
            })
        })
    });
    */
/*
    Template.body.rendered(function(){
        var mapOptions = {
            center: new google.maps.LatLng(-34.397, 150.644),
            zoom: 8,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-container"), mapOptions);
    });
*/

    Template.teachers.helpers({
        "get_teachers":function(){
            return Teachers.find(); //change to template-level subs maybe?
        }
    });

    Template.home.onCreated(function(){ //testing
        console.log(Router.current().route.getName());
    })
}

orion.dictionary.addDefinition('logo', 'site', 
    orion.attribute('file', {
        label: 'Site Logo',
        optional: true
    })
);

Teachers.attachSchema(new SimpleSchema({
    name:{
        type: String
    },
    
    image: orion.attribute('file', {
        label: 'Teacher image',
        optional: true
    }),

    body: orion.attribute('froala',{
        label: 'Description/biography'
    }),

    createdBy: orion.attribute('createdBy') 
    
}));

Gallery = new orion.collection("gallery", {
    singularName: 'image',
    pluralName: 'images',
    link: {
        title: 'Gallery'
    },
    tabular:{
        columns:[
            {data: "title", title: "Title"},
            {data: "description", label: "Description"}, //uhm..,...
            orion.attributeColumn('image', 'image', 'Image'),
        ]
    }
});

Gallery.attachSchema(new SimpleSchema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    image: orion.attribute('image', {
        label: "Image"
    }),
}));

Schema = {};
Schema.contact = new SimpleSchema({
    name: {
        type: String,
        label: "Your name",
        max: 50
    },
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail address"
    },
    message: {
        type: String,
        label: "Message",
        max: 1000
    }
});