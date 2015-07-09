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
    Template.teachers.helpers({
	"get_teachers":function(){
	    return Teachers.find(); //change to template-level subs maybe?
	}
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
