function handleMenu() {
    const name = document.getElementById("name").value
    const option = parseInt(document.getElementById("option").value)

    if (!name) {
      alert("Enter with you name!")
    } else if (option === 1) {
      alert(`Hi, ${name}.`)
    } else if (option === 2) {
      alert(`${name}, loading system.`)
    } else if (option === 3) {
      alert(`Bye, ${name}!`)
    } else {
      alert("Choice a valid option: 1, 2 or 3.")
    }
  }