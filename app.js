var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;

var mylocation = "";

$("#loader1").click(function () {
  if ($("#loader1").css("display") == "block") {
    $(document).keydown();
  }
});
$(document).keydown(function (e) {
  if ($("#loader1").css("display") == "block") {
    $("#loader1").css("display", "none");
    $("#loader2").fadeIn("slow", () => {
      new TypeIt("#typedText", {
        cursorChar: "_",
        speed: 50,
        afterComplete: (instance) => {
          $("#loader2").css("display", "none");
          $("#main-content").fadeIn();
        },
      })
        .type(
          "It is the emptiness between two atoms which makes them the unique two,"
        )
        .break()
        .type(
          "it is the silence between two musical notes that makes the sound,"
        )
        .break()
        .type("it is the emptiness in a world full of energy and matter,")
        .break()
        .type("it is the emptiness between everything,")
        .break()
        .type("yet it encompasses everything.")
        .break()
        .type("Nothing exists without the void,")
        .break()
        .type("the void is the existence.")
        .break()
        .type(" The void is what you breathe in,")
        .break()
        .type("the void is what you breathe out.")
        .break()
        .type("The void is you.")
        .break()
        .type("You are void ")
        .pause(500)
        .go();
    });
  }
});

function ipLookUp() {
  $.ajax("http://ip-api.com/json").then(
    function success(response) {
      console.log("User's Location Data is ", response);
      console.log("User's Country", response.country);

      if (response.lat > 0) {
        if (response.lon > 0) {
          mylocation =
            " " +
            response.lon.toFixed(2) +
            " N, " +
            response.lat.toFixed(2) +
            " E, " +
            response.country;
        } else {
          mylocation =
            " " +
            response.lon.toFixed(2) +
            " S, " +
            response.lat.toFixed(2) +
            " E, " +
            response.country;
        }
      } else {
        if (response.lon > 0) {
          mylocation =
            " " +
            response.lon.toFixed(2) +
            " S, " +
            response.lat.toFixed(2) +
            " E, " +
            response.country;
        } else {
          mylocation =
            " " +
            response.lon.toFixed(2) +
            " S, " +
            response.lat.toFixed(2) +
            " W, " +
            response.country;
        }
      }

      new TypeIt("#typedText1", {
        cursorChar: "_",
        speed: 50,
      })
        .type("An error has occurred. To continue:")
        .break()
        .type(" Press Enter to return to system, or ")
        .break()
        .type("Press CTRL+ALT+DEL to restart your computer. If you do this,")
        .break()
        .type("you will lose any unsaved information in all open applications.")
        .break()
        .break()
        .break()
        .type("Date: " + today + " " + mylocation)
        .break()
        .type("Come and enter into the void.")
        .break()
        .break()
        .type("                Press any key to continue")
        .go();
    },

    function fail(data, status) {
      console.log("Request failed.  Returned status of", status);
    }
  );
}
ipLookUp();
