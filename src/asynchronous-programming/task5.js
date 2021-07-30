const urls = [
  'http://www.json-generator.com/api/json/get/cfVGucaXPC',
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

function parallelResponses(arr) {
  Promise.all(arr.map(url => fetch(url).then(response => response.json()))).then(values =>
    console.log('getArrayParallelly', values)
  );
}

function sequenceResponses(arr) {
  arr
    .reduce(
      (prom, url) =>
        prom.then(values =>
          fetch(url)
            .then(response => response.json())
            .then(data => [...values, data])
        ),
      Promise.resolve([])
    )
    .then(data => {
      console.log('getArraySequentially', data);
    });
}
