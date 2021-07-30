function getUsersData() {
  const usersData = fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then(res => res.json())
    .then(data => data.getUsersData);

  if (usersData) {
    fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
      .then(res => res.json())
      .then(console.log);
  }
}
