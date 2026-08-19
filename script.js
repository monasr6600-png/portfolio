* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

body {
    font-family: Arial, sans-serif;
    background: #0f172a;
    color: white;
    line-height: 1.7;
}

header {
    background: #111827;
    padding: 20px 8%;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav h2 {
    color: #38bdf8;
}

.nav-links {
    display: flex;
    gap: 25px;
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.nav-links a:hover {
    color: #38bdf8;
}

.hero {
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 80px 10%;
    background: linear-gradient(135deg, #0f172a, #1e293b);
}

.hero .small {
    color: #38bdf8;
    letter-spacing: 2px;
}

.hero h1 {
    font-size: 55px;
    margin: 15px 0;
}

.hero h1 span {
    color: #38bdf8;
}

.hero h2 {
    color: #cbd5e1;
    margin-bottom: 20px;
}

.hero p {
    max-width: 650px;
    color: #cbd5e1;
}

.btn {
    display: inline-block;
    margin-top: 30px;
    padding: 12px 25px;
    background: #38bdf8;
    color: #0f172a;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
}

section {
    padding: 80px 10%;
}

section h2 {
    color: #38bdf8;
    font-size: 35px;
    margin-bottom: 30px;
}

section p {
    max-width: 850px;
    color: #cbd5e1;
}

.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
}

.skills-container div {
    background: #1e293b;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #334155;
}

.projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.project-card {
    background: #1e293b;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #334155;
}

.project-card h3 {
    color: #38bdf8;
    margin-bottom: 15px;
}

.tech {
    margin-top: 20px;
    color: #38bdf8 !important;
}

#contact {
    background: #111827;
}

footer {
    text-align: center;
    padding: 25px;
    background: #020617;
    color: #94a3b8;
}

@media (max-width: 700px) {

    nav {
        flex-direction: column;
        gap: 15px;
    }

    .nav-links {
        gap: 12px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero h1 {
        font-size: 40px;
    }

    section {
        padding: 60px 7%;
    }
}
