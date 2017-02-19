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
    },
    /*
    computed getter, the getter is cached and not re-evaluated until the value it is based on changes
    opposed to methods, which run upon every request.
    Usually cache is the better solution, especially when the value is expensive to computed and other
    ars in turn depend on it.

    if cache is to be avoided => methods
     */
    computed: {
        reversedButtonText: function () {
            //'this' points to the app2 instance, meaning if app2.message is changed so is the reverse
            return this.buttonText.split('').reverse().join('');
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

var app5 = new Vue({
    el: '#app5',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        /*
        computed properties can also be used instead of watchers:
         data: {
             firstName: 'Foo',
             lastName: 'Bar',
             fullName: 'Foo Bar'
         },
         watch: {
             firstName: function (val) {
             this.fullName = val + ' ' + this.lastName
         },
             lastName: function (val) {
             this.fullName = this.firstName + ' ' + val
         }

         Use watcher when you want to react to data changes asynchronously or expensive operations
         e.g API access, rate limiting, state requirements and so on.
         */
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },
        fullName2: {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            //When fullName2 is being changed, the below setter will be invoked
            set: function (newValue) {
                var names = newValue.split(" ");
                this.firstName = names[0];
                this.lastName = names[names.length-1];

            }
        }
    }
});

var watchExample = new Vue({
        el: '#Watcher',
        data: {
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        },
        watch: {
            // whenever question changes, this function will run
            question: function (newQuestion) {
                this.answer = 'Waiting for you to stop typing...';
                this.getAnswer();
            }
        },
        methods: {
            // _.debounce is a function provided by lodash to limit how
            // often a particularly expensive operation can be run.
            // In this case, we want to limit how often we access
            // yesno.wtf/api, waiting until the user has completely
            // finished typing before making the ajax request. To learn
            // more about the _.debounce function (and its cousin
            // _.throttle), visit: https://lodash.com/docs#debounce
            getAnswer: _.debounce(
                function () {
                    if (this.question.indexOf('?') === -1) {
                        this.answer = 'Questions usually contain a question mark. ;-)';
                        return;
                    }
                    this.answer = 'Thinking...';
                    var vm = this;
                    axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                            vm.answer = _.capitalize(response.data.answer)
                        })
                        .catch(function (error) {
                            vm.answer = 'Error! Could not reach the API. ' + error
                        })
                },
                // This is the number of milliseconds we wait for the
                // user to stop typing.
                500
            )
        }
    });
