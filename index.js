// --------------GET ISSUE --------------//

function printGet() {

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function printGet() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("prints").innerHTML = xhttp.responseText;
       
    }
};

xhttp.open("GET", "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues", true);
xhttp.send();
 
};

// --------------GET  SINGLE ISSUE --------------//

function umaIssue() {

var selecoes = $("#selecoes").val();


var http = new XMLHttpRequest();
http.onreadystatechange = function umaIssue() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("prints").innerHTML = http.responseText;
    }
};

http.open("GET", "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues/" + selecoes, true);
http.send();
 
};


//==========DECLARAÇÕES=================//


var username = "stn6mazia"
var password = "Va92995ygb01000"
var conex = "Basic " + btoa(username + ":" + password)



function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = Base64.encode(tok);
  return "Basic " + hash;
}


$("form").submit(function(e){
        e.preventDefault();
    });

// -------------------------- POST ISSUE -----------------//

function postarIssue(){

var title = $("#title").val();
var body = $("#body").val();


$.ajax
  ({
   type: "POST",
    data: JSON.stringify({
      title: title,
      body: body,
      assignee: "stn6mazia"
    }),
    url: "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues",
    contentType: "application/json",
    complete: function(jqXHR, textStatus) {
      console.log("jqXHR", jqXHR);
      console.log("textStatus", textStatus);
    },

      success: function (data){ 
      alert('Post OK!'); 
  },

    async: true,
    headers: {
      "authorization": conex
    },
}); 
};



// ---------------------------EDIT ISSUE ------------------//
function editIssue() {

var title = $("#title").val();
var body = $("#body").val();
var numero = $("#numero").val();
var estado = $("#estado").val();


$.ajax
  ({
   type: "PATCH",
    data :JSON.stringify({
      title: title,
      body: body,
      assignee: "stn6mazia",
      state: estado,
    }),
    url: "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues/" + numero,
    contentType: "application/json",
    complete: function(jqXHR, textStatus) {
      console.log("jqXHR", jqXHR);
      console.log("textStatus", textStatus);
    },

      success: function (data){ 
      alert('Issue has been edited!'); 
  },

    async: true,
    headers: {
      "authorization": conex
    },
}); 

};


 // ------------------------- LOCK ISSUE ------------------//
function lockIssue() {

var bloqueia = $("#selecoes").val();

$.ajax
  ({
   type: "PUT",
    data :JSON.stringify(),
    url: "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues/" + bloqueia + "/lock",
    contentType: "application/json",
    complete: function(jqXHR, textStatus) {
      console.log("jqXHR", jqXHR);
      console.log("textStatus", textStatus);
    },

      success: function (data){ 
      alert('Issue has been locked!'); 
  },

    async: true,
    headers: {
      "authorization": conex
    },
}); 
};


//  ------------------------- UNLOCK ISSUE -----------------//
function unlockIssue() {

var desbloqueia = $("#selecoes").val();

$.ajax
  ({
   type: "DELETE",
    data :JSON.stringify(),
    url: "https://api.github.com/repos/stn6mazia/portifolio_mazia/issues/" + desbloqueia + "/lock",
    contentType: "application/json",
    complete: function(jqXHR, textStatus) {
      console.log("jqXHR", jqXHR);
      console.log("textStatus", textStatus);
    },

      success: function (data){ 
      alert('Issue has been unlocked!'); 
  },

    async: true,
    headers: {
      "authorization": conex
    },
}); 

};












