const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 203423 },
  { text: "Ramen is my food ever", id: 123423 },
  { text: "Nice Nice Nice", id: 525523 },
];

const years = [
  { name: "Nay", year: 1989 },
  { name: "Neil", year: 1990 },
  { name: "Gloria", year: 1971 },
  { name: "Nora", year: 1981 },
  { name: "Jesus", year: 1996 },
  { name: "Heraclio", year: 1970 },
];

const isAdult = years.some(function (person) {
  const current = new Date().getFullYear();
  console.log(current - person.year);
  if (current - person.year >= 19) {
    return true;
  }
});

// .some checks is any of the element of the array is true
const isReallyAdult = years.some((person) => {
  return new Date().getFullYear() + person.year >= 19;
});

// .every is like an interator, so it validates every element of the array by its validation
const isEveryAdult = years.every((person) => {
  return new Date().getFullYear() + person.year >= 19;
});

// .find is like filter but just for catching one element
const finding = comments.find((element) => {
  return element.id === 203423;
});

//
const findByIndex = comments.findIndex((element) => {
  return element.id === 823423;
});

const newCommets = [...comments.slice(0, index), ...comments.slice(index + 1)];
