var _a;
//listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeOutput = "\n        <h1> Editable Resume</h1>\n        <p><strong>Name:</strong><span contenteditable=\"ture\"> ".concat(name_1, " </span></p>\n        <p><strong>Email:</strong><span contenteditable=\"ture\"> ").concat(email, " </span></p>\n        <p><strong>Contact:</strong><span contenteditable=\"ture\"> ").concat(contact, " </span></p>\n        \n        <h3>Education</h3>\n        <p contenteditable=\"ture\">").concat(education, "</p>\n        \n         <h3>Experience</h3>\n        <p contenteditable=\"ture\">").concat(experience, "</p>\n        \n         <h3>Skills</h3>\n        <p contenteditable=\"ture\">").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output element are missingg');
        }
    }
    else {
        console.error('one or more output  element are missing');
    }
});
