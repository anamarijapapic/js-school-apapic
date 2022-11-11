var steps = [
    {
        "id": 0,
        "question": "Did you create a REEF account?",
        "yes": ["id", 1],
        "no": ["end", "Create a REEF account"]
    },
    {
        "id": 1,
        "question": "Will your grades be in your course and grade software/Learning Management System?<br/><small>(Example: Blackboard, Canvas, Desire2Learn, Moodle, Sakai, etc.)</small>",
        "yes": ["id", 2],
        "no": ["id", 6]
    },
    {
        "id": 2,
        "question": "Does the student ID in your REEF profile match the one used in your school's course and grade software?",
        "yes": ["id", 3],
        "no": ["end", "Change the student ID to match the ID in your course and grade software."]
    },
    {
        "id": 3,
        "question": "Is your email in your REEF profile your university email address?",
        "yes": ["id", 4],
        "no": ["end", "Change your email to be your university email address. Don't create a new account or you may not receive credit for all your votes."]
    },
    {
        "id": 4,
        "question": "Did your instructor provide a REEF link in your course and grade software/Learning Management System?",
        "yes": ["id", 5],
        "no": ["id", 6]
    },
    {
        "id": 5,
        "question": "Have you clicked that link?",
        "yes": ["id", 6],
        "no": ["end", "Click the link to sync REEF to your LMS gradebook"]
    },
    {
        "id": 6,
        "question": "Are you using a clicker?",
        "yes": ["id", 7],
        "no": ["id", 8]
    },
    {
        "id": 7,
        "question": "Did you add your clicker ID to your REEF profile?",
        "yes": ["id", 8],
        "no": ["end", "Add your clicker ID"]
    },
    {
        "id": 8,
        "question": "Did you add your course to your REEF account?",
        "yes": ["id", 9],
        "no": ["end", "Add your course to your course list in REEF"]
    },
    {
        "id": 9,
        "question": "Do you have more than one account?",
        "yes": ["end", "Vote with one account to avoid losing grade points and contact REEF support as soon as you can"],
        "no": ["end", "Still not working?<br/><small>Contact our knowledgeable staff at REEF Support</small>"]
    },
];

$(function() {
    var endReached;
    var id;
    var troubleshootingSteps = [];

    $('.btn-start').click(function() {
        endReached = false;
        id = 0;
        troubleshootingSteps = [];
        troubleshootingSteps.push(steps[id].id);
        $('.question').html(steps[id].question);
        $('.btn-nav').css('background-color', '');
        $('.questionnaire').removeClass('hidden');
        if (this.id == "startHere") {
            $(this).addClass('hidden');
        } else if (this.id == "startAgain") {
            $('.solution').addClass('hidden');
        }
    });

    $('.btn-yes').click(function() {
        if (steps[id].yes[0] == "id") {
            newId = steps[id].yes[1];
            id = newId;
            troubleshootingSteps.push(steps[id].id);
            $('.question').html(steps[id].question);
            $('.btn-nav').css('background-color', '#00AA9F');
        } else {
            endReached = true;
            $('.answer').html(steps[id].yes[1]);
            $('.questionnaire').addClass('hidden');
            $('.solution').removeClass('hidden');
        }
    });

    $('.btn-no').click(function() {
        if (steps[id].no[0] == "id") {
            newId = steps[id].no[1];
            id = newId;
            troubleshootingSteps.push(steps[id].id);
            $('.question').html(steps[id].question);
            $('.btn-nav').css('background-color', '#00AA9F');
        } else {
            endReached = true;
            $('.answer').html(steps[id].no[1]);
            $('.questionnaire').addClass('hidden');
            $('.solution').removeClass('hidden');
        }
    });

    $('.btn-back').click(function() {
        if (id > 0) {
            prevId = troubleshootingSteps[troubleshootingSteps.length - 2];
            id = prevId;
            troubleshootingSteps.pop();
            $('.question').html(steps[id].question);
            if (id > 0) {
                $('.btn-nav').css('background-color', '#00AA9F');
            } else {
                $('.btn-nav').css('background-color', '');
            }
        }
    });
});
