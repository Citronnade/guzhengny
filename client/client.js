Template.teachers.events({
    "click #teacher-list": function(e){
        console.log(e.target.id);
        var target = e.target.id;
        console.log$("#"+target);
        $(".active").attr("class", "inactive");
        $("#" + target).attr("class", "active");

    }

});

Template.teachers.helpers({
    "get_inner": function(str){
        var div = document.createElement('div');
        div.innerHTML = str;
        console.log("uhm", div.firstChild.innerHTML);
        return div.firstChild.innerHTML;
    },
    "teach_id": function(teacher){
        //return first name
        console.log(teacher.name.split(" "));
        return teacher.name.split(" ")[0];
    }
});

