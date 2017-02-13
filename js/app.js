/**
 * Created by Christian on 2017-01-29.
 */

var app = new Vue({
    el: '#app',
    data : {
        message : 'hover me!',
        load : "You loaded this page on the "+ new Date(),
        visible : true
    },
    //          Events:
    beforeCreate: function(){
        console.log("before created!");
    },
    created: function(){
        console.log("app created!");
    },
    beforeMount: function () {
        console.log("Before mount!");
    },
    mounted: function () {
        console.log("mounted!");
    },
    beforeUpdate: function () {
        console.log("before update!");
    },
    updated: function () {
        console.log("updated!");
    },
    beforeDestroy: function(){
        console.log("before destroy!");
    },
    destroyed: function () {
        console.log("Destroyed!");
    },
    //          Applied through pipes for text transmutation
    filters: {
        capitalize : function (value) {
            if (!value) return "";
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1);

        }
    }

});

var app2 = new Vue({
    el : '#app2',
    data : {
        visible : true,
        buttonText : "Hide text"
    },
    methods : {
        toggle : function () {
            if (this.visible == true){
                this.buttonText = "Show text"
            } else {
                this.buttonText = "Hide text"
            }
            this.visible = !this.visible
        }
    }
});

var app3 = new Vue({
    el : '#app3',
    data : {
        todos : [
            { text : 'Learn JavaScript'},
            { text : 'Learn Vue'},
            { text : 'Build something awsome'}
        ]
    }
});

var app4 = new Vue({
    el : "#app4",
    data : {
        message : "Reverse Me!"
    },
    methods : {
        reverseMessage : function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});