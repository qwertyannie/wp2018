function change1(){
  $('#button').attr('onclick', "location.href='https://i.imgur.com/rbJbNxv.jpg'");
  $('#img').attr('src','https://i.imgur.com/rbJbNxv.jpg');
  $('#content h1').html("The Gjovik<br>House");
  $('#content h6').html("A recent residence situated an<br>hour outside of Oslo, Norway<br>and designed by Norm Archi-<br>tects is an example of isolated<br>architecture, so beautiful.");
  $('#footer h6').html("<pre>Architecture     Norm architects    Nhat Vo           6 February 2018</pre>");
}

function change2(){
  $('#button').attr('onclick', "location.href='https://i.imgur.com/nsG1pTV.jpg'");
  $('#img').attr('src','https://i.imgur.com/nsG1pTV.jpg');
  $('#content h1').html("Clearview<br>Chalet");
  $('#content h6').html("Nestled on the edge of the Notta-<br>wasaga Bay in Ontario, Canada,<br>is the lovely Clearview Chalet.<br>The stunning home was designed<br>by AKB architect bureau.");
  $('#footer h6').html("<pre>Architecture     Shai Gil           Jillian Japka     9 november 2017</pre>");
}

$(function(){
  setInterval(change1, 3000);
  setInterval(change2, 6000);
});
