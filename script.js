$(document).ready(function() {
  createRandomPatterns();
  jobMenu();
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createRandomPatterns() {

  function randColor() {
    var item = colorOptionsCopy[getRandomInt(0, colorOptionsCopy.length - 1)];
    colorOptionsCopy.splice(colorOptionsCopy.indexOf(item), 1);
    return item;
  }

  for (var a = 0; a < 6; a++) {
    var currChild = a+1;
    var originOptions = ['top', 'bottom', 'left', 'right', 'center'];
    var colorOptions = ['#e67e22', '#e74c3c', '#c0392b'];
    var colorOptionsCopy = colorOptions;
    var newOrigin = getRandomInt(0, 4);

    var bgColor = randColor();
    var halfColor1 = randColor();
    var halfColor2 = randColor();

    if (originOptions[newOrigin] == 'top') {
      $('#panel-'+currChild+' > .background').addClass('reverse');
    }

    $('#panel-'+currChild).css('backgroundColor', bgColor);
    $('#panel-'+currChild+' > .background > .c1').css('backgroundColor', halfColor1);
    $('#panel-'+currChild+' > .background > .c2').css('backgroundColor', halfColor2);

    $('#panel-'+currChild+' > .background').css({
      'transformOrigin': originOptions[newOrigin] + ' center',
      'webkitTransformOrigin': originOptions[newOrigin] + ' center',
      'mozTransformOrigin': originOptions[newOrigin] + ' center',
      'msTransformOrigin': originOptions[newOrigin] + ' center'
    });
  }
}

function jobMenu() {
  var checkedInfo = [];
  var jobHeadings = ['Künstler', 'Game Designer', 'Programmierer', 'Sound Designer', 'Story Writer', 'Komponist'];
  var jobDescriptions = [];

  var jobDescArtist = 'Als Künstler bist du für das Aussehen des Spiels zuständig. Dein Aufgabenbereich reicht von Conceptart bis Levelaussehen und Charakterdesign. Ohne einen durchgehenden Artstyle kann ein Spieler schnell aus der Erfahrung herausfallen und einige Spiele werden allein für ihre Schönheit gespielt.' +
                      'Als Künstler solltest du einen breiten Wissensstand in deiner Rolle haben und/oder bereit sein für dieses Projekt Neues zu Lernen. Da der Artstyle des Spiels noch nicht feststeht, kannst du dich maßgeblich bei der Entwicklung des Themas beteiligen.' +
                      'Dinge, auf die du Lust haben solltest um bei diesem Projekt mitzuarbeiten:<br/><br/>Immer mal wieder einen Nachmittag oder eine Freistunde opfern um im Team arbeiten.<br/>Spieleentwicklung.<br/>Durch dieses Projekt etwas im Künstlerischen Themenbereich dazulernen :D';

  var jobDescGameDes = 'Game Designer erstellen Systeme und Mechaniken, die ein spaßiges Spiel ermöglichen. Als Game Designer musst du noch mehr im Team arbeiten als in den anderen Rollen, da du selber keinen Teil des Spiels bearbeitest, sondern eher eng mit den anderen zusammenarbeitest um zu garantieren, dass deine Ideen richtig umgesetzt werden. Um hier mitzumachen, ' +
                       'solltest du dich bereits einmal mit Game Design auseinandergesetzt haben. Falls nicht, solltest du dir nochmal überlegen ob du wirklich den ganzen Stoff nachholen möchtest. Wir sind gerne bereit dir entsprechendes Material zur Verfügung zu stellen, aber es wird für dich wesentlich stressiger sein. Folgende Dinge solltest du tun können, ' +
                       'um bei diesem Projekt mitzumachen:<br/><br/>Regelmäßig Zeit für Teambesprechungen haben.<br/>Deine Ideen mit anderen Game Designern absprechen und dann auch dem Rest des Teams Illustrieren können.<br/>Spaß daran haben anderen Spaß zu bringen :D';

  var jobDescProgrammer = 'Was Programmierer machen, weicht in Spielen nicht viel von den normalen Anforderungen des Jobs ab. Unterschiede können darin liegen, dass einige durch Programmieren festgelegte Regeln direkten Einfluss auf das das Spielerlebnis haben und deshalb stark mit den Game Designern abgesprochen werden müssen. Außerdem gibt es manchmal Probleme vom Rest des Teams die nur von einem Programmierer gelöst werden können. Du solltest also auch dazu in der Lage sein. ' +
                          'Zusätzlich wird eventuell eine Entwicklungsumgebung genutzt, was für dich eventuell gut oder schlecht ist. In Unity oder ähnlichem wird zwar der benötigte Code stark reduziert, aber dafür musst du dich in ein völlig neues System reinlesen. Zum Glück hast du als Programmierer wie jede andere Rolle auch ein Mitspracherecht und kannst das wenn es dir nicht passt eventuell verhindern. Programmierer haben viel Gewicht auf den Schultern, ' +
                          'da sie die direkte Translation von Ideen in Mechaniken darstellen. Je besser das ausgefüllt wird, desto besser spielt sich das Spiel. Wenn du Programmierer werden möchtest solltest du also:<br/><br/>Mit der ausgewählten Sprache und Umgebung klarkommen.<br/>Im Team arbeiten und auch teamfähigen Code schreiben (Dokumentation etc).<br/>Zeit für dieses Projekt haben (sei es Weiterarbeit oder Besprechungen).<br/>Und ein Spiel programmieren wollen :D';

  var jobDescSoundDes = 'Als Sound Designer wirst du dich um alle Sounds kümmern die das Spiel hat, um das Thema zu verdeutlichen und die Mechaniken zu verbessern. Diese Rolle hat erst einmal nichts mit Musik zu tun. Dafür musst du dich an die Komponistenrolle wenden. Es ist aber durchaus möglich, beide Rollen parallel auszuüben, da sich das Themengebiet ein wenig überschneidet und Sound Design außerdem vermutlich nicht so arbeitsintensiv wird. ' +
                        'Eine Ausnahme könnte hier Voice Acting sein, wenn die Story Writer darauf bestehen und du bereit bist das zu machen. Dabei kannst du aber auf das Team für Akteure zählen, du musst also nicht selber rekrutieren, wenn du nicht möchtest. Dennoch würde das einen Mehraufwand bedeuten der vielleicht dafür sorgt, dass die Qualität singt, wenn du Komposition und Sound Design kombinierst. Ich denke mal, Sound Design für ein Spiel sollte bei allen ziemlich neu sein, ' +
                        'was heißt dass du kaum Vorwissen brauchst. Du musst nur bereit sein zu lernen. Außerdem wichtig ist:<br/><br/>Du solltest Zeit für dieses Projekt haben (sei es Weiterarbeit oder Besprechungen).<br/>Du solltest selber gerne spielen und in der Lage sein das Sound Design einiger Spiele zu analysieren.<br/>Du musst bereit sein viel zu lernen.<br/>Du solltest natürlich auch Lust haben mitzuarbeiten :D';

  var jobDescStoryWriter = 'Story Writer schreiben, wie der Name schon erkennen lässt die Story. Tatsächlich ist schreiben auch ein großer Teil des Jobs. Aber es ist nicht das einzige, wofür du verantwortlich bist. Da du die Story schreibst, darfst du den Game Designern auftragen diese in den Mechaniken zu verankern und den Künstlern durch eine detailreiche Welt ihr Leben schwer zu machen :D. Wenn du gern mal eine interaktive Story, ' +
                           'oder eine durch Gameplay verbesserte Story schreiben wolltest bist du hier an der richtigen Stelle. Bedenke nur, dass du vermutlich auch die Texte fürs Voice Acting schreiben musst. Wenn dich also als Story Writer anmeldest, solltest du:<br/><br/>Bereit sein, eine an das Spiel angepasste Story zu schreiben.<br/>Zeit und Lust haben mit deinem Team das Spiel durchzusetzen :D';

  var jobDescKomponist = 'Ziemlich selbsterklärend. Als Komponist komponierst du den Soundtrack des Spiels. Es wird höchstwahrscheinlich keine dynamische Musik geben, also einfach nur gute alte Stücke die gut zu einem Spiel passen. Du solltest dich bereits mit Komposition auseinandergesetzt haben oder sehr schnell lernen. Bedenke, dass Videospielmusik sich ein wenig von anderer Musik unterscheidet. Aber inwiefern kriegst du auch so mit. Du solltest also:<br/><br/>Zeit haben.<br/>' +
                         'Komponier-Vorwissen haben.<br/>Lust haben :D';

  jobDescriptions.push(jobDescArtist, jobDescGameDes, jobDescProgrammer, jobDescSoundDes, jobDescStoryWriter, jobDescKomponist);

  var leaveButton = document.getElementById('leave-site');
  var submitButton = document.getElementById('send-info');

  // Event Listener hinzufügen

  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    loadDoc(0);
  });

  $('#fullscreen-div').css('height', window.innerHeight);

  $(window).resize(function() {
    $('#fullscreen-div').css('height', window.innerHeight);
  });

  $('.card').click(function() {
    var id = $(this).attr('id');
    var jobNum = id.slice(6, 7);
    var alreadyChecked;

    if ($('.job-warning').hasClass('show')) {
      if (jobHeadings[jobNum-1] == $('#currentlySelected').text()) {
        $('.job-warning').removeClass('show');
        $('#send-info').removeClass('disabled');
      }
    }

    // Textänderung von overlay
    $('#job-heading').text(jobHeadings[jobNum-1]);
    document.getElementById('job-description').innerHTML = jobDescriptions[jobNum-1];

    $('#fullscreen-div').addClass('show');
    $('body').css({
      'height': window.innerHeight,
      'overflow': 'hidden',
    });
    $('section').addClass('zoom');

    if (checkedInfo.length == 0) {
      checkedInfo.push(jobHeadings[jobNum-1]);
    }

    for (var a = 0; a < checkedInfo.length; a++) {
      if (jobHeadings[jobNum-1] != checkedInfo[a]) {
        alreadyChecked = false;
      } else {
        alreadyChecked = true;
        break;
      }
    }

    if (alreadyChecked === false) {
      checkedInfo.push(jobHeadings[jobNum-1]);
    }
  });

  $('#close-menu').click(function() {
    $('#fullscreen-div').removeClass('show');
    $('body').css({
      'height': '',
      'overflow': '',
    });
    $('section').removeClass('zoom');
  });

  $('#job-wrapper').click(function(e) {
    e.preventDefault();
  });

  $('.option-wrap li').click(function() {
    var alreadyChecked;
    var currId = $('#' + $(this).attr('id'));
    var currText = $(this).text();

    if (!(currId).hasClass('selected')) {
      $('.option-wrap li').removeClass('selected');
      $(currId).addClass('selected');
      $('#currentlySelected').text(currText);
    }

    if (checkedInfo.length == 0) {
      $('.job-name').text($('#currentlySelected').text());
      $('.job-warning').addClass('show');
      $('#send-info').addClass('disabled');
      submitButton.disabled = true;
      return;
    }

    for (var a = 0; a < checkedInfo.length; a++) {
      if ($('#currentlySelected').text() != checkedInfo[a]) {
        alreadyChecked = false;
      } else {
        alreadyChecked = true;
        break;
      }
    }

    if (alreadyChecked === false) {
      $('.job-name').text($('#currentlySelected').text());
      $('.job-warning').addClass('show');
      $('#send-info').addClass('disabled');
      submitButton.disabled = true;
      return;
    } else {
      if ($('.job-warning').hasClass('show')) {
        $('.job-warning').removeClass('show');
        $('#send-info').removeClass('disabled');
        submitButton.disabled = false;
      }
    }
  });
}

var SchonInfoGelesen = 1;

function CallPHP(arg1, arg2, arg3){
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "PHP_vom_Server.php?Name=" +arg1+"&ID="+arg2+"&Line="+arg3+"&t=" + Math.random(), false);
  xhttp.send();
}

function Confirm(xml){
  var Job=0;
  switch(document.getElementById('currentlySelected').value){
     case "Künstler":
		   Job=0;
		   break;
	   case "Game Designer":
		   Job=1;
		   break;
	   case "Programmierer":
		   Job=2;
		   break;
	   case "Sound Designer":
		   Job=3;
		   break;
	   case "Story Writer":
		   Job=4;
		   break;
	   case "Komponist":
		   Job=5;
		   break;
}

var xmlDoc = xml.responseXML;
var x = xmlDoc.getElementsByTagName("APPLICANT");

for (i = 0; i <x.length; i++) {
	if(document.getElementById('myInput').value==x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue){
		var TestObSelberJob=0;

		for(TestObSelberJob=x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue; TestObSelberJob>5;TestObSelberJob-=6){}
    if(TestObSelberJob==Job) {return "Bitte nicht zweimal Anmelden";}
	}
}

for (i = 0; i < x.length; i++) {
  if(Job==x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue || Job==x[0].getElementsByTagName("ID")[0].childNodes[0].nodeValue) {
    Job+=6;
  }
}

for(i = 0; i < x.length; i++) {
	if (x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue>Job) {
		break;
	}
}

  var Line=1+(4*i);
  CallPHP(document.getElementById('myInput').value, Job, Line)
  loadDoc(1);
  return "Eintrag wurde gemacht";
}

function loadDoc(TableSchreiben) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && TableSchreiben == 1) {
      myFunction(this);
    } else if (this.readyState == 4 && this.status == 200 && TableSchreiben == 0) {
      if (SchonInfoGelesen == 1 && document.getElementById('myInput').value != "") {
        Confirm(this);
      }
    }
  };

  xhttp.open("GET", "Applicant_List.xml?t=" + Math.random(), true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Künstler</th><th>Game Designer</th><th>Programmierer</th><th>Sound Designer</th><th>Story Writer</th><th>Komponist</th></tr>";
  var x = xmlDoc.getElementsByTagName("APPLICANT");

  var RausFliegKonditionFürLeerStellenFüller=0;
  var Zeile=0;
  for (i = 0; i <x.length; i++) {
	  while (x[i].getElementsByTagName("ID")[0].childNodes[0].nodeValue-(Zeile*6) != RausFliegKonditionFürLeerStellenFüller) {
		    table+="<td></td>";

        if (RausFliegKonditionFürLeerStellenFüller == 5) {
          RausFliegKonditionFürLeerStellenFüller =- 1;
          table+="<td></td>";
          Zeile+=1;
          table+="</tr>";
        }

        RausFliegKonditionFürLeerStellenFüller+=1;
		}

    table+="<td>"+x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+"</td>"

    if(RausFliegKonditionFürLeerStellenFüller == 5) {
      RausFliegKonditionFürLeerStellenFüller = 0;
      Zeile += 1;
      table += "</tr>";
    } else {
      RausFliegKonditionFürLeerStellenFüller += 1;
    }
 }
 document.getElementById("demo").innerHTML = table;
}
