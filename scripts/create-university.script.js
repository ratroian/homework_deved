const menu = document.querySelector('#menu');
const universityTemplate = document.querySelector('#university-template').innerHTML;
const studentTemplate = document.querySelector('#students-template').innerHTML;

const htmlToElement = (html) => {
  const template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
};

const getUniversity = ({ id, name, students } = {}) => {
  const html = universityTemplate
    .replace('{{university-id}}', id)
    .replace('{{university-name}}', name);

  const university = htmlToElement(html);
  students.forEach((student) => {
    const studentHtml = studentTemplate
      .replace('{{student-id}}', student.id)
      .replace('{{student-name}}', student.name)
      .replace('{{student-rating}}', student.rating);
    university.lastElementChild.append(htmlToElement(studentHtml));
  });

  return university;
};

const addUniversity = (university) => {
  menu.append(getUniversity(university));
};

const getUniversitiesInfo = async () => {
  try {
    const response = await fetch('http://localhost:3000/university-raiting', {
      method: 'GET',
    });
    const data = await response.json();
    data.result.forEach(addUniversity);
  } catch (error) {
    return error;
  }
};

const handleClickMenu = (event) => {
  const element = event.target.closest('.menu-item');
  if (element) {
    element.classList.toggle('active');
  }
};

getUniversitiesInfo();
menu.addEventListener('click', handleClickMenu);

