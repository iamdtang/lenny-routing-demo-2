let hobbies = [
  { id: "0", name: "Skateboarding", years: 27 },
  { id: "1", name: "Hockey", years: 30 },
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
    const hobbyToUpdate = hobbies.find((_hobby) => _hobby.id === hobby.id);

    Object.assign(hobbyToUpdate, hobby);

    return Promise.resolve(hobbyToUpdate);
  }

  // Create
  const newHobby = {
    id: hobbies.length,
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
