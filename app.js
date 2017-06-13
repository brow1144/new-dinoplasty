/*
  TODO: Add some special style
*/

class App {
  constructor(selectors) {
    this.dinos = []
    this.carnivoreDinos = []
    this.herbivoreDinos = []
    this.omnivoreDinos = []
    this.max = 0
    this.list = document
      .querySelector(selectors.listSelector)

    document
      .querySelector('.menu-text')
      .addEventListener('click', this.addAllList.bind(this))

    document
      .querySelector('.carnivore-menu')
      .addEventListener('click', this.addCarnivoreList.bind(this))

    document
      .querySelector('.herbivore-menu')
      .addEventListener('click', this.addHerbivoreList.bind(this))

    document
      .querySelector('.omnivore-menu')
      .addEventListener('click', this.addOmnivoreList.bind(this))

    document
      .querySelector('.searchBar')
      .addEventListener('keyup', this.search.bind(this))


    this.carnivoreList = document
      .querySelector(selectors.carnivoreSelector)
    
    this.herbivoreList = document
      .querySelector(selectors.herbivoreSelector)
    
    this.omnivoreList = document
      .querySelector(selectors.omnivoreSelector)



    this.template = document
      .querySelector(selectors.templateSelector)
    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', this.addDinoFromForm.bind(this))

    this.load()

  }

  search(ev) {
    const searchBar = document.querySelector('.searchBar')

    let test = false;
    
    for (let i = 0; i < this.carnivoreDinos.length; i++) {
      if (this.carnivoreDinos[i].name.includes(searchBar.value)) {
        if (this.carnivoreList.hasChildNodes()) {
          var children = this.carnivoreList.childNodes;
          for (var j = 0; j < children.length; j++) {
            if (!children[j].childNodes[1].textContent.includes(searchBar.value)) {
              children[j].classList.add('template')
              test = true;
            } else {
              children[j].classList.remove('template')
              children[j].style.borderTop = '1px solid #ddd'
              children[j].style.transition = 'none'
              test = true;
            }
          }
        }
      }
      if (test === false) {
        var children = this.carnivoreList.childNodes;
        for (var k = 0; k < children.length; k++) {
          children[k].classList.add('template')
        }
      } 
      if (searchBar.value === '') {
        // var children = this.carnivoreList.childNodes;
        // for (var k = 0; k < children.length; k++) {
        //   children[k].classList.remove('template')
        // }
        var children = this.carnivoreList.childNodes
        for (var j = 0; j < children.length; j++) {
          children[j].style.borderTop = 'none'
        }
        children[0].style.border = '1px solid #ddd'
      }
    }

    test = false
    for (let i = 0; i < this.herbivoreDinos.length; i++) {
      if (this.herbivoreDinos[i].name.includes(searchBar.value)) {
        if (this.herbivoreList.hasChildNodes()) {
          var children = this.herbivoreList.childNodes;
          for (var j = 0; j < children.length; j++) {
            if (!children[j].childNodes[1].textContent.includes(searchBar.value)) {
              children[j].classList.add('template')
              test = true
            } else {
              children[j].classList.remove('template')
              children[j].style.borderTop = '1px solid #ddd'
              children[j].style.transition = 'none'
              test = true
            }
          }
        }
      } 
      if (test === false) {
        var children = this.herbivoreList.childNodes;
        for (var l = 0; l < children.length; l++) {
          children[l].classList.add('template')
        }
      } 
      if (searchBar.value === '') {
        let children = this.herbivoreList.childNodes;
        for (var j = 0; j < children.length; j++) {
          children[j].style.borderTop = 'none'
        }
        children[0].style.border = '1px solid #ddd'
      }
    }
    
    test = false
    for (let i = 0; i < this.omnivoreDinos.length; i++) {
      if (this.omnivoreDinos[i].name.includes(searchBar.value)) {
        if (this.omnivoreList.hasChildNodes()) {
          var children = this.omnivoreList.childNodes;
          for (var j = 0; j < children.length; j++) {
            if (!children[j].childNodes[1].textContent.includes(searchBar.value)) {
              children[j].classList.add('template')
              test = true
            } else {
              children[j].classList.remove('template')
              children[j].style.borderTop = '1px solid #ddd'
              children[j].style.transition = 'none'
              test = true
            }
          }
        }
      } 
    }
    if (test === false) {
        var children = this.omnivoreList.childNodes;
        for (var n = 0; n < children.length; n++) {
          children[n].classList.add('template')
        }
      } 
      if (searchBar.value === '') {
        children = this.omnivoreList.childNodes;
        for (var j = 0; j < children.length; j++) {
          children[j].style.borderTop = 'none'
        }
        children[0].style.border = '1px solid #ddd'
      }
  }

  load() {
    const carnivoreDinoJSON = localStorage.getItem('carnivoreDinos')
    const herbivoreDinoJSON = localStorage.getItem('herbivoreDinos')
    const omnivoreDinoJSON = localStorage.getItem('omnivoreDinos')

    const carnivoreDinoArray = JSON.parse(carnivoreDinoJSON)
    if (carnivoreDinoArray) {
      carnivoreDinoArray
        .reverse()
        .map(this.addDino.bind(this))
    }

    const herbivoreDinoArray = JSON.parse(herbivoreDinoJSON)
    if (herbivoreDinoArray) {
      herbivoreDinoArray
        .reverse()
        .map(this.addDino.bind(this))
    }

    const omnivoreDinoArray = JSON.parse(omnivoreDinoJSON)
    if (omnivoreDinoArray) {
      omnivoreDinoArray
        .reverse()
        .map(this.addDino.bind(this))
    }
  }

  addCarnivoreList() {
    this.list.style.display = 'none'
    this.carnivoreList.style.display = 'unset'
    document.querySelector('.carnivore-menu').classList.add('clicked')

    this.herbivoreList.style.display = 'none'
    document.querySelector('.herbivore-menu').classList.remove('clicked')

    this.omnivoreList.style.display = 'none'
    document.querySelector('.omnivore-menu').classList.remove('clicked')

    this.save()
  }

  addHerbivoreList() {
    this.list.style.display = 'none'
    this.carnivoreList.style.display = 'none'   
    document.querySelector('.carnivore-menu').classList.remove('clicked')

    this.herbivoreList.style.display = 'unset'
    document.querySelector('.herbivore-menu').classList.add('clicked')

    this.omnivoreList.style.display = 'none'
    document.querySelector('.omnivore-menu').classList.remove('clicked')
    
    this.save()
  }

  addOmnivoreList() {
    this.list.style.display = 'none'
    this.carnivoreList.style.display = 'none'
    document.querySelector('.carnivore-menu').classList.remove('clicked')

    this.herbivoreList.style.display = 'none'
    document.querySelector('.herbivore-menu').classList.remove('clicked')

    this.omnivoreList.style.display = 'unset'
    document.querySelector('.omnivore-menu').classList.add('clicked')

    this.save()
  }

  addAllList() {
    this.list.style.display = 'none'

    this.carnivoreList.style.display = 'unset'
    this.carnivoreList.parentElement.style.marginBottom = '1rem'
    document.querySelector('.carnivore-menu').classList.remove('clicked')

    this.herbivoreList.style.display = 'unset'
    this.herbivoreList.parentElement.style.marginBottom = '1rem'
    document.querySelector('.herbivore-menu').classList.remove('clicked')

    this.omnivoreList.style.display = 'unset'
    this.omnivoreList.parentElement.style.marginBottom = '1rem'
    document.querySelector('.omnivore-menu').classList.remove('clicked')

    this.save()
  }

  addDino(dino) {

    if (dino.diet === 'carnivore') {
      const listItem = this.renderListItem(dino, this.carnivoreList, this.carnivoreDinos)

      this.carnivoreDinos.unshift(dino)
      this.carnivoreList.insertBefore(listItem, this.carnivoreList.firstChild)
    } else if (dino.diet === 'herbivore') {
      const listItem = this.renderListItem(dino, this.herbivoreList, this.herbivoreDinos)

      this.herbivoreDinos.unshift(dino)
      this.herbivoreList.insertBefore(listItem, this.herbivoreList.firstChild)
    } else if (dino.diet === 'omnivore') {
      const listItem = this.renderListItem(dino, this.omnivoreList, this.omnivoreDinos)

      this.omnivoreDinos.unshift(dino)
      this.omnivoreList.insertBefore(listItem, this.omnivoreList.firstChild)
    } else {
      const listItem = this.renderListItem(dino, this.list)

      this.list.insertBefore(listItem, this.list.firstChild)
    }
    
    this.save()

    if (dino.id > this.max) {
      this.max = dino.id
    }
  }

  addDinoFromForm(ev) {
    ev.preventDefault()

    const dino = {
      id: this.max + 1,
      name: ev.target.dinoName.value,
      fav: false,
      diet: ev.target.diet.value,
    }

    this.addDino(dino)
    
    ev.target.reset()
  }

  save() {
    localStorage
      .setItem('carnivoreDinos', JSON.stringify(this.carnivoreDinos))

    localStorage
      .setItem('herbivoreDinos', JSON.stringify(this.herbivoreDinos))
    
    localStorage
      .setItem('omnivoreDinos', JSON.stringify(this.omnivoreDinos))
  }

  renderListItem(dino, list, array) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = dino.id

    if (dino.fav) {
      item.classList.add('fav')
    }

    if (dino.diet) {
      item
        .querySelector('.dino-diet')
        .textContent = dino.diet
    }

    item
      .querySelector('.dino-name')
      .textContent = dino.name
    item
      .querySelector('.dino-name')
      .setAttribute('title', dino.name)

    item
      .querySelector('.dino-name')
      .addEventListener('keypress', this.saveOnEnter.bind(this, dino))
    item
      .querySelector('.dino-diet')
      .addEventListener('keypress', this.saveOnEnter.bind(this, dino))

    item
      .querySelector('button.remove')
      .addEventListener('click', this.removeDino.bind(this, array))
    item
      .querySelector('button.fav')
      .addEventListener('click', this.favDino.bind(this, dino))
    item
      .querySelector('button.move-up')
      .addEventListener('click', this.moveUp.bind(this, dino, list, array))
    item
      .querySelector('button.move-down')
      .addEventListener('click', this.moveDown.bind(this, dino, list, array))
    item
      .querySelector('button.edit')
      .addEventListener('click', this.editDino.bind(this, dino))

    this.save()

    return item
  }

  saveOnEnter(dino, ev) {
    if (ev.key === 'Enter') {
      this.editDino(dino, ev)
    }
    this.save()
  }

  editDino(dino, ev) {
    const listItem = ev.target.closest('.dino')
    const nameField = listItem.querySelector('.dino-name')
    const dietField = listItem.querySelector('.dino-diet')

    const btn = listItem.querySelector('.edit.button')
    const icon = btn.querySelector('i.fa')

    if (nameField.isContentEditable) {
      nameField.contentEditable = false
      dietField.contentEditable = false
      icon.classList.remove('fa-check')
      icon.classList.add('fa-pencil')
      btn.classList.remove('success')

      dino.name = nameField.textContent
      dino.diet = dietField.textContent
      this.save()
    } else {
      nameField.contentEditable = true
      dietField.contentEditable = true
      nameField.focus()
      icon.classList.remove('fa-pencil')
      icon.classList.add('fa-check')
      btn.classList.add('success')
    }
    this.save()
  }

  moveDown(dino, list, array, ev) {
    const listItem = ev.target.closest('.dino')

    const index = array.findIndex((currentDino, i) => {
      return currentDino.id === dino.id
    })

    if (index < array.length - 1) {
      list.insertBefore(listItem.nextElementSibling, listItem)

      const nextDino = array[index + 1]
      array[index + 1] = dino
      array[index] = nextDino
      this.save()
    }
    document.querySelector('#dino-carnivore').style.border = '1px solid #ddd'
    document.querySelector('#dino-herbivore').style.border = '1px solid #ddd'
    document.querySelector('#dino-omnivore').style.border = '1px solid #ddd'
    this.save()
  }

  moveUp(dino, list, array, ev) {
    const listItem = ev.target.closest('.dino')

    const index = array.findIndex((currentDino, i) => {
      return currentDino.id === dino.id
    })

    if (index > 0) {
      list.insertBefore(listItem, listItem.previousElementSibling)

      const previousDino = array[index - 1]
      array[index - 1] = dino
      array[index] = previousDino

      this.save()
    }
    document.querySelector('#dino-carnivore').style.border = '1px solid #ddd'
    document.querySelector('#dino-herbivore').style.border = '1px solid #ddd'
    document.querySelector('#dino-omnivore').style.border = '1px solid #ddd'
  }

  favDino(dino, ev) {
    const listItem = ev.target.closest('.dino')
    dino.fav = !dino.fav

    if (dino.fav) {
      listItem.classList.add('fav')
    } else {
      listItem.classList.remove('fav')
    }

    this.save()
  }

  removeDino(array, ev) {
    const listItem = ev.target.closest('.dino')
    listItem.remove()

    for (let i = 0; i < array.length; i++) {
      const currentId = array[i].id.toString()
      if (listItem.dataset.id === currentId) {
        array.splice(i, 1)
        break;
      }
    }

    this.save()
  }
}

const app = new App({
  formSelector: '#dino-form',
  listSelector: '#dino-list',
  carnivoreSelector: '#dino-carnivore',
  herbivoreSelector: '#dino-herbivore',
  omnivoreSelector: '#dino-omnivore',
  templateSelector: '.dino.template',
})