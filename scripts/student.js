const createStudentComponent = (name, subject, info, score) => {
    return `
        <div class="student">
            <h1>${name}</h1>
            <section>${subject}</section>
            <aside>${info}</aside>
            <aside>${score}</aside
        </div>
    `
}

let studentContainer = document.querySelector("#container")
console.log(studentContainer)

const h1 = (title, style) => {
    return `<h2 class = "${style}">${title}</h2>`;
}

const section = (title, style) => {
    return `<section class="bordered dash ${style}">${title}</section>`
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}

const student = (name, subject, info, score) => `
    <div id="student">
        ${h1(name, "xx-large passing")}
        ${section(subject, "section--padded")}
        ${aside(info, "pushRight")}
        ${aside(score, "pushRight")}
    </div>`

const studentF = (name, subject, info, score) => `
<div id="studentF">
    ${h1(name, "xx-large failing")}
    ${section(subject, "section--padded")}
    ${aside(info, "pushRight")}
    ${aside(score, "pushRight")}
</div>`

for (let i = 0; i < students.length; i++) {
    console.log(students[i])

    if (students[i].score >= 60) {
        studentContainer.innerHTML += student(students[i].name, students[i].subject, students[i].info, students[i].score);

    } else
        studentContainer.innerHTML += studentF(students[i].name, students[i].subject, students[i].info, students[i].score);
}