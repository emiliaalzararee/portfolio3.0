// ===============================
// OVERLAY CLOSE (GLOBAL)
// ===============================

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    overlay.innerHTML = '';
}


// ===============================
// INITIALIZATION
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById('overlay');

    // Taustaklikkaus sulkemiseen
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeOverlay();
        }
    });

    // Email button
    const emailButton = document.getElementById("emailButton");

    if (emailButton) {
        emailButton.addEventListener("click", function () {

            const email = "emilia.al-zararee@outlook.com";
            const subject = "Let's work together.";

            window.location.href =
                `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        });
    }

    // Courses overlay
    const coursesBox = document.querySelector('.courses-box');
    if (coursesBox) {
        coursesBox.addEventListener('click', createCoursesOverlay);
    }

    // Project cards
    document.querySelectorAll('.project-card').forEach(card => {

        card.addEventListener('click', function () {

            const projectId = this.dataset.projectId;
            const githubUrl = this.dataset.github;
            const liveUrl = this.dataset.live;

            createProjectOverlay(projectId, githubUrl, liveUrl);
        });

    });

    // Home section overlay
    const homeSection = document.getElementById("home");
    if (homeSection) {
        homeSection.addEventListener("click", createHomeOverlay);
    }

});


// ===============================
// HOME OVERLAY
// ===============================

function createHomeOverlay() {

    const overlay = document.getElementById('overlay');
    overlay.innerHTML = '';
    overlay.classList.add('active');

    const content = document.createElement('div');
    content.className = 'overlay-content';

    const title = document.createElement('h2');
    title.textContent = 'About Me';

    const text = document.createElement('p');
    text.textContent =
        'IT student focused on full stack development and clean design.';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.className = 'overlay-close';
    closeBtn.onclick = closeOverlay;

    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(closeBtn);

    overlay.appendChild(content);
}


// ===============================
// PROJECT DATA
// ===============================

const projectData = {
    1: {
        title: "My Portfolio",
        description: "A responsive portfolio showcasing my projects and skills."
    },
    2: {
        title: "A TODO App",
        description: "A JavaScript application that lets you manage your tasks."
    },
    3: {
        title: "Movie App",
        description: "A web application that allows users to search and view movie information."
    },
    4: {
        title: "SIM Throttle",
        description: "A desktop application that simulates throttle control for vehicles."
    },
    5: {
        title: "Kaunis Hymy",
        description: "A static page about oral health and hygiene. My first ever project!"
    }
};


// ===============================
// PROJECT OVERLAY
// ===============================

function createProjectOverlay(projectId, githubUrl, liveUrl) {

    const overlay = document.getElementById('overlay');
    overlay.innerHTML = '';
    overlay.classList.add('active');

    const project = projectData[projectId];

    const content = document.createElement('div');
    content.className = 'overlay-content';

    const title = document.createElement('h2');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    content.appendChild(title);
    content.appendChild(description);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'project-buttons';

    // GitHub button
    if (githubUrl && githubUrl.trim() !== "") {
        const githubBtn = document.createElement('a');
        githubBtn.href = githubUrl;
        githubBtn.target = "_blank";
        githubBtn.className = "project-btn";
        githubBtn.textContent = "GitHub Repository";
        buttonContainer.appendChild(githubBtn);
    }

    // Live demo button
    if (liveUrl && liveUrl.trim() !== "") {
        const liveBtn = document.createElement('a');
        liveBtn.href = liveUrl;
        liveBtn.target = "_blank";
        liveBtn.className = "project-btn";
        liveBtn.textContent = "Live Demo";
        buttonContainer.appendChild(liveBtn);
    }

    content.appendChild(buttonContainer);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.className = 'overlay-close';
    closeBtn.onclick = closeOverlay;

    content.appendChild(closeBtn);

    overlay.appendChild(content);
}


// ===============================
// COURSES DATA
// ===============================

const coursesData = {
    1: { title: 'Professional Communication in English', provider: 'Laurea University of Applied Sciences' },
    2: { title: 'Understanding Business and the Business Environment', provider: 'Laurea University of Applied Sciences' },
    3: { title: 'Introduction to Marketing', provider: 'Laurea University of Applied Sciences' },
    4: { title: 'Management and Leadership', provider: 'Laurea University of Applied Sciences' },
    5: { title: 'Swedish for Bachelors of Business Administration', provider: 'Laurea University of Applied Sciences' },
    6: { title: 'The ICT Environment and Infrastructure', provider: 'Laurea University of Applied Sciences' },
    7: { title: 'Basics of Programming', provider: 'Laurea University of Applied Sciences' },
    8: { title: 'Foundations of Web Development', provider: 'Laurea University of Applied Sciences' },
    9: { title: 'Information Management and Databases', provider: 'Laurea University of Applied Sciences' },
    10: { title: 'Data Networks and Information Security', provider: 'Laurea University of Applied Sciences' },
    11: { title: 'Service Design', provider: 'Laurea University of Applied Sciences' },
    12: { title: 'Corporate Social Responsibility', provider: 'Laurea University of Applied Sciences' },
    13: { title: 'Digital Marketing and Sales', provider: 'Laurea University of Applied Sciences' },
    14: { title: 'Data-driven Decision Making', provider: 'Laurea University of Applied Sciences' },
    15: { title: 'Project Management and Communication', provider: 'Laurea University of Applied Sciences' },
    16: { title: 'Dynamic Web Applications with JavaScript', provider: 'Laurea University of Applied Sciences' },
    17: { title: 'Full Stack Web Development', provider: 'Laurea University of Applied Sciences' },
    18: { title: 'Programming with C#', provider: 'Laurea University of Applied Sciences' },
    19: { title: 'Programming with PHP', provider: 'Laurea University of Applied Sciences' },
    20: { title: 'Robotic Process Automation (RPA)', provider: 'Laurea University of Applied Sciences' },
    21: { title: 'Introduction to Linux Operating System', provider: 'Laurea University of Applied Sciences' }
};


// ===============================
// COURSES OVERLAY
// ===============================

function createCoursesOverlay() {

    const overlay = document.getElementById('overlay');
    overlay.innerHTML = '';
    overlay.classList.add('active');

    const content = document.createElement('div');
    content.className = 'overlay-content';
    content.style.maxHeight = '80vh';
    content.style.overflowY = 'auto';

    const title = document.createElement('h2');
    title.textContent = 'My Courses';

    content.appendChild(title);

    Object.values(coursesData).forEach(course => {

        const box = document.createElement('div');
        box.className = 'course-item-box';

        const courseTitle = document.createElement('h3');
        courseTitle.textContent = course.title;

        const provider = document.createElement('p');
        provider.textContent = course.provider;

        box.appendChild(courseTitle);
        box.appendChild(provider);

        content.appendChild(box);
    });

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.className = 'overlay-close';
    closeBtn.onclick = closeOverlay;

    content.appendChild(closeBtn);

    overlay.appendChild(content);
}