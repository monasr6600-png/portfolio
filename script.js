/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".navbar nav a").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


/* ================= PROJECT DATA ================= */

const projects = {

    diabetes: {

        category: "MACHINE LEARNING",

        title: "Diabetes Prediction",

        problem:
            "The goal was to use available data to build a Machine Learning solution capable of making useful predictions.",

        action:
            "Built and evaluated Machine Learning models for diabetes prediction.",

        method:
            "Used Python for data preprocessing, model training, and model evaluation.",

        result:
            "Selected the best-performing model and turned the Machine Learning workflow into a practical prediction solution."

    },


    gpa: {

        category: "ML + WEB APP",

        title: "Student GPA Prediction",

        problem:
            "Students need a simple way to estimate their expected GPA based on available input data.",

        action:
            "Developed a Machine Learning pipeline for GPA prediction.",

        method:
            "Used Python, preprocessing, model evaluation, and Streamlit deployment.",

        result:
            "Created a simple Web App that provides a GPA prediction on a 0–4 scale."

    },


    classification: {

        category: "CLASSIFICATION",

        title: "Classification Models Comparison",

        problem:
            "Different classification algorithms can produce different levels of performance on the same dataset.",

        action:
            "Built and compared KNN, Naive Bayes, and Decision Tree models.",

        method:
            "Trained the three models and evaluated their accuracy and performance.",

        result:
            "Compared the results and identified the most suitable model based on performance."

    }

};


/* ================= OPEN PROJECT ================= */

function openProject(projectName) {

    const project = projects[projectName];

    if (!project) {
        return;
    }


    document.getElementById("modalCategory").textContent =
        project.category;


    document.getElementById("modalTitle").textContent =
        project.title;


    document.getElementById("modalProblem").textContent =
        project.problem;


    document.getElementById("modalAction").textContent =
        project.action;


    document.getElementById("modalMethod").textContent =
        project.method;


    document.getElementById("modalResult").textContent =
        project.result;


    document.getElementById("projectModal")
        .classList.add("show");


    document.body.classList.add("modal-open");

}


/* ================= CLOSE PROJECT ================= */

function closeProject() {

    document.getElementById("projectModal")
        .classList.remove("show");


    document.body.classList.remove("modal-open");

}


/* Close modal when clicking outside */

document.getElementById("projectModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {

            closeProject();

        }

    });


/* Close modal with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* ================= SCROLL ANIMATION ================= */

const animatedElements =
    document.querySelectorAll(
        ".service-card, .project-card, .skill, .about-item"
    );


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    observer.observe(element);

});
