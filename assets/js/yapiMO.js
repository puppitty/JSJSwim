$(document).ready(function(){

    // $.get('https://www.googleapis.com/youtube/v3/channels', {
    //     part:'contentDetails',
    //     forUserName:'goswim098',
    //     key:'AIzaSyCpZp25lr8vvjPkK0GrWL-P089Vqrjo3a0'
    //     }, function(data) {
    //         $.each(data.items, function(i, item){
    //             console.log(item);
    //         });

    //     }
    // )
    var plistID="";
    var apiKey='AIzaSyCpZp25lr8vvjPkK0GrWL-P089Vqrjo3a0';

    function display( vID, vDescription ){
        
            
            var html='<div class="media-object stack-for-small">'+
                '<div class="media-object-section">'+
                '<iframe width="350" height="200" '+
                'src="https://www.youtube.com/embed/'+vID+'" ';
            html+=' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen'
                +'></iframe></div>'
                + "<div class='media-object-section'>"+
                vDescription+
                "</div></div>"
            console.log(html);
            $("#results").append(html);
    
    };
    

    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=goswim098&key='+apiKey,
        method: "GET"
    }).done(function(response) {
        console.log(response);
        console.log(response.items[0].contentDetails.relatedPlaylists.uploads);
        plistID = response.items[0].contentDetails.relatedPlaylists.uploads;

        query2="https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+plistID+
        "&maxResults=10&key="+apiKey;
        console.log(query2);
        $.ajax({
            url: query2,
            method: "GET" 
        }).done(function(results){

            $("#results").empty();
            for( var i=0;i<results.items.length;i++){
                
               console.log(results.items[i].snippet.resourceId.videoId);
                //var videoID=results.items[i].snippet.resourceId.videoId;
                display(results.items[i].snippet.resourceId.videoId, results.items[i].snippet.description);
            
            }

        });

    });

    $("#btnSubmit").on('click', function(){
        
        var query="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=UCPpmXSYfseQrcSdB0PTgw_w&q="+$('#idS').val()+"&key="+apiKey
        console.log(query);
        $.ajax({
            url:query,
            method: "GET",
        }).done( function(results){
            $("#results").empty();
            for( var i=0;i<results.items.length;i++) {
                
                console.log(results.items[i].id.videoId);
                //var videoID=results.items[i].id.videoId;
                display(results.items[i].id.videoId, results.items[i].snippet.description);
            
            }
        });

    });

    
})



