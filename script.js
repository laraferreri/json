let contentGridElement = document.getElementById('contentGrid');
let jsonDatabase = [
  {
    "title" : "Kate Hudson",
    "Newimage" : "2002.jpg" ,
    "Year" : "2002"
  },
  {
    "title" : "Nicole Kidman",
    "Newimage" : "2003.jpg",
    "Year" : "2003"
  },
  {
    "title" : "20 Real Women",
    "Newimage" : "2004.jpg",
    "Year" : "2004"
  },
  {
    "title" : "Sarah Jessica Parker",
    "Newimage" : "2005.jpg",
    "Year" : "2005"
  },
  {
    "title" : "Kirsten Dunst",
    "Newimage" : "2006.jpg",
    "Year" : "2006"
  },
  {
    "title" : "Sienna Miller",
    "Newimage" : "2007.jpg",
    "Year" : "2007"
  },
  {
    "title" : "Keira Knightley",
    "Newimage" : "2008.jpg",
    "Year" : "2008"
  },
  {
    "title" : "Charlize Theron",
    "Newimage" : "2009.jpg",
    "Year" : "2009"
  },
  {
    "title" : "Halle Berry",
    "Newimage" : "2010.jpg",
    "Year" : "2010"
  },
  {
    "title" : "Kate Moss",
    "Newimage" : "2011.jpg",
    "Year" : "2011"
  },
  {
    "title" : "Lady Gaga",
    "Newimage" : "2012.jpg",
    "Year" : "2012"
  },
  {
    "title" : "Jennifer Lawrence",
    "Newimage" : "2013.jpg",
    "Year" : "2013"
  },
  {
    "title" : "The Instagirls",
    "Newimage" : "2014.jpg",
    "Year" : "2014"
  },
  {
    "title" : "Beyoncé",
    "Newimage" : "2015.jpg",
    "color" : "#ff0072",
    "Year" : "2015"
  },
  {
    "title" : "Kendall Jenner",
    "Newimage" : "2016.jpg",
    "Year" : "2016"
  },
  {
    "title" : "Jennifer Lawrence",
    "Newimage" : "2017.jpg",
    "Year" : "2017"
  },
  {
    "title" : "Beyoncé",
    "Newimage" : "2018.jpg",
    "Year" : "2018"
  },
  {
    "title" : "Taylor Swift",
    "Newimage" : "2019.jpg" ,
    "Year" : "2019"
  },

]

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {

  var newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');


let newYear = document.createElement("h3");
newYear.classList.add('Year');
newYear.innerText = incomingJSON['Year'];
newContentElement.appendChild(newYear);

  let newCover = document.createElement("IMG");
  newCover.classList.add('newCover');
  newCover.src = incomingJSON['Newimage'];
  newContentElement.appendChild(newCover);

  let newName = document.createElement("h3");
  newName.classList.add('title');
  newName.innerText = incomingJSON['title'];
  newContentElement.appendChild(newName);


  contentGridElement.appendChild(newContentElement);

}
