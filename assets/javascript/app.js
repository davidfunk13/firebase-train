$(document).ready(function () {
    var trainName = $("#train-name-input").val();
    var trainDestination = $("#destination-input").val();
    var trainFrequency = $("#frequency-input").val();
    var firstTrainTime = $("#first-train-time-input").val();
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        console.log({"Train Name: ":trainName});
        console.log({"Destination: ": trainDestination});
        console.log({"Frequency: ":trainFrequency});
        console.log({"First Train Time: ": firstTrainTime});
    })

});