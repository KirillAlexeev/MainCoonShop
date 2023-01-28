let employees = [{
    picture: 'Images/employees/Woman1.jpg',
    name: 'Женщина №1',
    position: 'Уборщица лотков',
    speech: 'Надоело убирать вонючие лотки',
    vkLink: '',
    twitterLink: '',
    facebookLink: ''
},
    {
        picture: 'Images/employees/Woman2.jpg',
        name: 'Женщина №2',
        position: 'Насыпатель корма',
        speech: 'Эти мейн куны жрут больше меня',
        vkLink: '',
        twitterLink: '',
        facebookLink: ''
    },
    {
        picture: 'Images/employees/Sergey.jpg',
        name: 'Серёжа Попов',
        position: 'Основатель питомника',
        speech: 'Наш питомник занимается разведением Мейн-Кунов на протяжении 15 лет. Мы в ответе за каждого приобретенного вами питомца',
        vkLink: '',
        twitterLink: '',
        facebookLink: ''
    }]


let templateContent = document.querySelector('#employee-template').content;
let employeeElement = templateContent.querySelector('div');
let teamMembersSection = document.querySelector('.team-member-container')

let prevButton = document.querySelector('.previous-member-button');
let nextButton = document.querySelector('.next-member-button');
let currentEmployeeNumber = 2;
let currentTime = new Date().valueOf();
let leftMember;
let rightMember;
let middleMember;


let createEmployeeElement = function (employeeData, className) {
    console.log(employeeData)
    let employee = employeeElement.cloneNode(true);
    if (className) {
        employee.classList.add(className);
    }
    let image = employee.querySelector('img');
    image.src = employeeData.picture;
    image.alt = employeeData.name;
    let name = employee.querySelector('.team-member-name')
    name.textContent = employeeData.name;
    let position = employee.querySelector('.team-member-position-text')
    position.textContent = employeeData.position;
    let speech = employee.querySelector('.team-member-article-text')
    speech.textContent = employeeData.speech;

    return employee;
}

addInitialEmployees();

prevButton.onclick = function () {
    if (new Date().valueOf() - currentTime > 600) {
        previousEmployee();
    }
}

nextButton.onclick = function () {
    if (new Date().valueOf() - currentTime > 600) {
        nextEmployee();
    }
}

function previousEmployee() {
    leftMember.remove();
    middleMember.classList.add('team-member-move-left');
    leftMember = middleMember;
    rightMember.classList.remove('team-member-move-right');
    middleMember = rightMember;


    if (currentEmployeeNumber === 0) {
        rightMember = createEmployeeElement(employees[employees.length - 1], 'team-member-move-right');
        currentEmployeeNumber = employees.length - 1;
    } else {
        rightMember = createEmployeeElement(employees[currentEmployeeNumber - 1], 'team-member-move-right');
        currentEmployeeNumber--;
    }
    teamMembersSection.append(rightMember);

    currentTime = new Date().valueOf();
}

function nextEmployee() {

    rightMember.remove();
    middleMember.classList.add('team-member-move-right');
    rightMember = middleMember;
    leftMember.classList.remove('team-member-move-left');
    middleMember = leftMember;


    if (currentEmployeeNumber === employees.length - 1) {
        leftMember = createEmployeeElement(employees[0], 'team-member-move-left');
        currentEmployeeNumber = 0;
    } else {
        leftMember = createEmployeeElement(employees[currentEmployeeNumber + 1], 'team-member-move-left');
        currentEmployeeNumber++;
    }
    teamMembersSection.append(leftMember);
    currentTime = new Date().valueOf();
}


function addInitialEmployees() {

    leftMember = createEmployeeElement(employees[currentEmployeeNumber - 1], 'team-member-move-left');
    middleMember = createEmployeeElement(employees[currentEmployeeNumber]);
    rightMember = createEmployeeElement(employees[currentEmployeeNumber - 2], 'team-member-move-right');

    teamMembersSection.append(leftMember);
    teamMembersSection.append(middleMember);
    teamMembersSection.append(rightMember);

}
