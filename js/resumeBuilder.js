/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Roman Tiulmankov",
  "role" : "Systems Administrator",
  "contacts": {
    "mobile": "647.111.1111",
    "email" : "roma.vt@gmail.com",
    "location" : "Toronto",
    "github" : "https://github.com/RomanTi"
  },
  "welcomeMsg" : "Hi All! That's Roman's Fake Resume",
  "skills" : ["Linux/Windows", "Computer Networks", "Web Dev", "Information Security", "Arduino/Raspeberry Pi"],
  "bioPic" : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAarAAAAJGY2NTlmYTdmLTUwNzgtNDIyNS04YjUyLTk4NDZmYWY1NDM1ZA.jpg"

};

bio.skills.display = function()  {
  "use strict";
  $("#header").append(HTMLskillsStart);
  for (let skill of bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%",skill);
    $("#header").append(formattedSkill);
  }
}

bio.display = function () {

  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#header").prepend(formattedName);
  var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
  $("#header").append(formattedWelcomeMsg);
  var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").append(formattedBioPic);
  bio.skills.display();
}


var education = {
  "schools": [
    {
      "name": "Saint-Petersburg State Polytechnical University",
      "location": "Saint-Petersburg, Russia",
      "degree": "Specialist",
      "major": "Radiotechnics",
      "dates": "2004 - 2010",
      "url": "http://retc.spbstu.ru/"
    },
    {
      "name": "Saint-Petersburg State Polytechnical University",
      "location": "Saint-Petersburg, Russia",
      "degree": "Specialist",
      "major": "Computer Networks",
      "dates": "2010 - 2012",
      "url": "http://www.avalon.ru/HigherEducation/MasterNetworking/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Introduction to Computer Science and Programming Using Python",
      "school": "edX",
      "date": "2012 - 2012",
      "url": "https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-6"
    },
    {
      "title": "An Introduction to Programming the Internet of Things (IOT)",
      "school": "Coursera",
      "date": "2015 - 2016",
      "url": "https://www.coursera.org/specializations/iot"
    },
    {
      "title": "Certified Information Systems Security Professional",
      "school": "Cybrary",
      "date": "2015 - 2016",
      "url": "https://www.cybrary.it/course/cissp/"
    }
  ]
};

education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
    $(".education-entry:last").append(formattedSchoolName);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolDegree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  };
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
    $("#education").append(formattedOnlineTitle);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    $("#education").append(formattedOnlineSchool);
    var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
    $("#education").append(formattedOnlineDates);
    var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $("#education").append(formattedOnlineURL);

  }
};


var work = {
  "jobs": [
    {
      "employer": "OANDA",
      "title": "Systems Administrator",
      "dates": "April 2013 - Future",
      "description": "Doing a lot of fun stuff - see projects",
      "location": "Toronto, Canada"
    },
    {
      "employer": "TOPS Consulting",
      "title": "IT Infrastructure Consultant",
      "dates": "January 2012 - February 2013",
      "description": "IT infrastructure Consulting for Dynamics CRM",
      "location": "Saint-Petersburg, Russia"
    },
  ]
};

work.display = function()  {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
    var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
    $(".work-entry:last").append(formattedWorkEmployer.concat(formattedWorkTitle));
    $(".work-entry:last").append(formattedWorkDates);
    $(".work-entry:last").append(formattedWorkDescription);
  }
};



var projects = {
  "projects": [
    {
      "title": "First Animal",
      "dates": 2012,
      "description": "Carriage quitting securing be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted. ",
      "image": "http://lorempixel.com/400/200/animals/"
    },
    {
      "title": "Second Animal",
      "dates": 2013,
      "description": "Travelling alteration impression six all uncommonly. Chamber hearing inhabit joy highest private ask him our believe. Up nature valley do warmly. Entered of cordial do on no hearted. Yet agreed whence and unable limits. Use off him gay abilities concluded immediate allowance. ",
      "image": "http://lorempixel.com/402/201/animals/"
    }
  ]
};



projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    var formattedProjectImage = HTMLprojectImage.replace("%data%",projects.projects[project].image);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);
    $(".project-entry:last").append(formattedProjectImage);
  }
};







bio.display();
projects.display();
work.display();
education.display();


$("#mapDiv").append(googleMap);




/*function inName(FullName) {
    var FullName = $('#name').html();
    var names = FullName.trim().split(" ");
    // Your code goes here!
    // Don't delete this line!
    return names[0] + " " + names[1].toUpperCase();
};

$("#main").append(internationalizeButton);
*/
//$("#main").prepend(bio.certs);





