class MyClass {
  constructor(text) {
    this.text = text
  }
  print() {
    console.log(this.text)
  }
  addToDom() {
    const body = document.querySelector("body")

    body.textContent = this.text
  }
}

export { MyClass }
