let hobbies = [
  { id: "0", name: "Hockey", years: 30 },
  { id: "1", name: "Dancing", years: 0 },
];

export function fetchHobbies() {
  return Promise.resolve(hobbies);
}

export function fetchHobby(id) {
  const hobby = hobbies.find((hobby) => hobby.id === id);

  return Promise.resolve(hobby);
}

export function saveHobby(hobby) {
  if (hobby.id) {
    // Edit

    const hobbyToEdit = hobbies.find((_hobby) => {
      return _hobby.id === hobby.id;
    });

    Object.assign(hobbyToEdit, hobby);

    return Promise.resolve(hobbyToEdit);
  }

  // Create a hobby
  const newHobby = {
    id: String(hobbies.length),
    ...hobby,
  };

  hobbies.push(newHobby);

  return Promise.resolve(newHobby);
}

export function deleteHobby(id) {
  hobbies = hobbies.filter((hobby) => {
    return hobby.id !== id;
  });

  return Promise.resolve();
}
