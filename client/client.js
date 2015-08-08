Template.teachers.events({
    "click .teacher-list a": function(e){
        console.log(e.target);
        var target_id = e.target.id;
        //if (!(e.target.hasClass("active"))) {
        //really?  another jquery selector?  maybe it's time to go back to vanilla js..
        if (!($("#"+target_id).hasClass("active"))){
            //$(".teacher-list .active").toggleClass("active");
            $(".active").toggleClass('inactive'); //get rid of active on both
            $(".active").toggleClass('active'); //get rid of active on both
                        //$("#bio-" + target_id).toggleClass("active");
            $("#bio-" + target_id).toggleClass("inactive"); //also make new visible
            $("#bio-" + target_id).toggleClass("active"); //also make new visible
            $("#" + target_id).toggleClass("active"); //make the new one active


        } //just...rewrite...everything.  list has active only, bio has inactive only
        return false;
    }

});

Template.teachers.helpers({
    "get_inner": function(str){

        var div = document.createElement('div');
        div.innerHTML = str;
        console.log("div", div);
        /*
        var inner = _.reduce(div.childNodes, function(memo, node){
            console.log(node.innerHTML);
            memo = memo + node.innerHTML;
            return memo
        }, "");
        console.log("inner", inner);
        return div.firstChild.innerHTML;
        */

        return div.innerHTML;

    },
    "teach_id": function(teacher){
        //return first name
        console.log(teacher.name.split(" "));
        return teacher.name.split(" ")[0];
    }
});


Template.contactForm.helpers({
    contactFormSchema: function() {
        return Schema.contact;
    }
});



var hooksObject = {
    onSuccess: function(formType, result){
        console.log(formType);
        console.log("Successfully sent email");
        Materialize.toast("Successfully sent email", 4000);
    },
    onError: function(formType, error){
        console.log(formType);
        console.log(error);
    }
};
AutoForm.addHooks('contactForm', hooksObject);