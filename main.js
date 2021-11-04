const json = new Promise((resolve, reject) => {
  console.log("ok je commence a chercher les données")

  const data = [
    {
      name: "John Snow"
    },
    {
      name: "Hodor"
    },
  ]

  setTimeout(() => {
    resolve(data)
  }, 3000)
})

getData
  .then(result => {
    console.log(result)
  })






  fetch()
    .then()
    .catch()