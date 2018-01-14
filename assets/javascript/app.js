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
    var trainName = "";
    var trainDestination = "";
    var trainFrequency = 0;
    var firstTrainTime = 0;

    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        trainName = $("#train-name-input").val();
        trainDestination = $("#destination-input").val();
        trainFrequency = $("#frequency-input").val();
        firstTrainTime = $("#first-train-time-input").val();
        $("#table-body").append("<tr id='train-row'></tr>")
        for (var i = 0; i < 5; i++) {
            $("#train-row").append("<td id='cell"+i+"'></td>");
        };


        database.ref().push({
            trainNameDatabase: trainName,
            trainDestinationDatabase: trainDestination,
            trainFrequencyDatabase: trainFrequency,
            firstTrainTimeDatabase: firstTrainTime,
        })

    });
    database.ref().on("child_added", function (snap) {
        snapVal = snap.val();
        console.log(snapVal)
        $('#cell0').text(snapVal.trainNameDatabase);
        $('#cell1').text(snapVal.trainDestinationDatabase);
        $('#cell2').text(snapVal.trainFrequencyDatabase);
        $('#cell3').text(snapVal.firstTrainTimeDatabase);
        $('#cell4').text("hey hey");
    });


});