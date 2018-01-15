$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyDnZpb3lF__TGvr4SaYDA5T1MhfpUbDzhc",
        authDomain: "fir-train-b6793.firebaseapp.com",
        databaseURL: "https://fir-train-b6793.firebaseio.com",
        projectId: "fir-train-b6793",
        storageBucket: "fir-train-b6793.appspot.com",
        messagingSenderId: "182416136011"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        trainName = $("#train-name-input").val().trim();
        trainDestination = $("#destination-input").val().trim();
        trainFrequency = $("#frequency-input").val().trim();
        firstTrainTime = $("#first-train-time-input").val().trim();
        database.ref().push({
            trainNameDatabase: trainName,
            trainDestinationDatabase: trainDestination,
            trainFrequencyDatabase: trainFrequency,
            firstTrainTimeDatabase: firstTrainTime,
            currentTime: firebase.database.ServerValue.TIMESTAMP
        })

    });
    database.ref().on("child_added", function (snap) {
        snapVal = snap.val();
        console.log({"Snap":snapVal})
        trainName = snapVal.trainNameDatabase;
        trainDestination = snapVal.trainDestinationDatabase;
        trainFrequency = snapVal.trainFrequencyDatabase;
        firstTrainTime = moment(snapVal.firstTrainTimeDatabase, "hh:mm");
        console.log(firstTrainTime);
        // DIFF BETWEEN NOW AND FIRST TRAIN TIME ARRIVAL IN MINUTES % FREQUENCY = 
        var timeRemainder = moment().diff(firstTrainTime, "minutes") % trainFrequency;
        var minutesLeft = trainFrequency - timeRemainder;
        var arrivalTime = moment().add(minutesLeft, "m").format("HH:mm A");
        console.log(minutesLeft, timeRemainder, arrivalTime)
        postHtml(trainName, trainDestination, trainFrequency, firstTrainTime);
    });

    function postHtml(trainName, trainDestination, trainFrequency, firstTrainTime) {
        $("#table-body").prepend("<tr id='new-train-row'></tr>")
        $("#new-train-row").append("<td id='train-name'></td>");
        $("#new-train-row").append("<td id='train-destination'></td>");
        $("#new-train-row").append("<td id='train-frequency'></td>");
        $("#new-train-row").append("<td id='train-next-arrival'></td>");
        $("#train-name").html(trainName);
        $("#train-destination").html(trainDestination);
        $("#train-frequency").html(trainFrequency);
        $("#train-next-arrival").html(firstTrainTime);
        $("")
    }

    function getNextArrival(firstTrainTime, trainFrequency) {
        
    }

});