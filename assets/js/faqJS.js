
$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAjA71CfHUU-mTezrsCpbdReUQnaxra6Dg",
        authDomain: "jsjswim-198914.firebaseapp.com",
        databaseURL: "https://jsjswim-198914.firebaseio.com",
        projectId: "jsjswim-198914",
        storageBucket: "",
        messagingSenderId: "626450746575"
      };
      firebase.initializeApp(config);

    var databaseFAQ=firebase.database();

    var questionRef=$('#inputQuestion');
    var answerRef=$('#answerText');
    var Q='';
    var t=$('.accordion');
    // $('#test').append(t);
//   function initializeScreen(){
    databaseFAQ.ref("/FAQ").on("child_added", function(childSnapshot){
   
    // var Q = $('<li class="accordion-item" data-accordion-item>');
    // var aTag=$('<a href="#" class="accordion-title">')
    // aTag.text(childSnapshot.val().questionText);
    // var divC =$('<div class="accordion-content" data-tab-content>')
    // divC.html('<p>'+childSnapshot.val().answerText+'</p>');
    // Q.append(aTag);
    // Q.append(divC);
    // Q.html('<a href="#" class="accordion-title">'+childSnapshot.val().questionText+'</a>'+
    //         '<div class="accordion-content" data-tab-content >'+
    //          +
    //         '</div>');
    // <a href="#" class="accordion-title" aria-controls="vc0uhz-accordion" role="tab" id="vc0uhz-accordion-label" aria-expanded="false" aria-selected="false">Accordion 3</a>
    // <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="vc0uhz-accordion-label" aria-hidden="true" id="vc0uhz-accordion">
    //         Type your name!
    //         <input type="text">
    //       </div>
      //  console.log(childSnapshot.val());
    // Q='<li class="accordion-item" data-accordion-item>'+
    //         '<a href="#" class="accordion-title" aria-controls="vc0uhz-accordion" role="tab" id="vc0uhz-accordion-label" aria-expanded="false" aria-selected="false">'+
    //         childSnapshot.val().questionText+'</a>'+
    //         '<div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="vc0uhz-accordion-label" aria-hidden="true" id="vc0uhz-accordion">'+
    //             '<p>'+childSnapshot.val().answerText+'</p>'+
    //         '</div>'+
    //        '</li>';

           Q='<li class="accordion-item" data-accordion-item>'+
           '<a href="#"  class="accordion-title" >'+
           childSnapshot.val().questionText+'</a>'+
           '<div class="accordion-content" data-tab-content >'+
               '<p>'+childSnapshot.val().answerText+'</p>'+
           '</div>'+
          '</li>';
          console.log(Q);
        //   <div class="accordion-content" data-tab-content="" role="tabpanel" aria-labelledby="vs0xdk-accordion-label" aria-hidden="false" id="vs0xdk-accordion" style="display: block;">
        //     <p>Panel 1. Lorem ipsum dolor</p>
        //     <span class="badge primary"><a href:"https:="" www.google.com="" maps="" dir="" "="">Cick here for Directions</a></span>
        //     <a href="https://www.google.com/maps/dir/">Directions</a>
        //   </div>
        //   <a href="#" class="accordion-title" aria-controls="kd3bdg-accordion" role="tab" id="kd3bdg-accordion-label" aria-expanded="true" aria-selected="true">Accordion 1</a>
    // Q=$('<li>');
    // Q.addClass('accordion-item')
    // Q.attr('data-accordion-item','true');
    // var A=$('<a>');
    // A.addClass('accordion-title');
    // A.text(childSnapshot.val().questionText);
    // var D=$('<div>');
    // D.addClass('accordion-content');
    // D.attr('data-tab-content','true');
    // D.html( '<p>'+childSnapshot.val().answerText+'</p>');

    // Q.append(A);
    // Q.append(D);


        console.log(Q);

        t.append(Q); 

        Foundation.reInit('accordion');
        
    });

    $('li>a').on('click', function(){
        
    })
//   }

//   $("#submit-form").on("click", function() {
//       alert("here");
//     event.preventDefault();
//     var Q=questionRef.val().trim();
//     var A=answerRef.val().trim();
//     console.log("Q: "+Q+" "+"A: "+A);
//     databaseFAQ.ref("/FAQ").push({
//       questionText:Q,
//       answerText:A,
//     });
//     questionRef.val("");
//     answerRef.val("");
    
//   });
});