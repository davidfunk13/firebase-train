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

  
    // for (var i = 0; i < ?.length; i++) {

    // }
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        trainName = $("#train-name-input").val();
        trainDestination = $("#destination-input").val();
        trainFrequency = $("#frequency-input").val();
        firstTrainTime = $("#first-train-time-input").val();

        database.ref().set({
            trainNameDatabase: trainName,
            trainDestinationDatabase: trainDestination,
            trainFrequencyDatabase: trainFrequency,
            firstTrainTimeDatabase: firstTrainTime,
        })

    });
    database.ref().on("value", function (snap) {
        snapVal = snap.val();
        console.log(snapVal)
        $("#train-name-cell").text(snapVal.trainNameDatabase);
        // trainDestination = $("#destination-input").val();
        // trainFrequency = $("#frequency-input").val();
        // firstTrainTime = $("#first-train-time-input").val();
    });


});