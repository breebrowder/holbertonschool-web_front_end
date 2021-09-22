function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students = [];
  for (let idx = 0; idx < numberOfStudents; idx++) {
    let student = studentSeat(idx + 1);
    students.push(student);
  }
  return students;
}

let classRoom = createClassRoom(10);
