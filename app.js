'use strict'

const containers = document.querySelectorAll('.main-form-body-1')
const checkers = document.querySelectorAll('.checker')
const contents = document.querySelectorAll('.main-form-body-1-content-p')
const main = document.querySelector('.main-form-body')
const checkedImages = document.querySelector('.checked-img')
const checkContainers = document.querySelectorAll('.check-container')
const checkBoxes = document.querySelectorAll('.checkbox')
const progress = document.querySelector('.prog-bar')
const progEl = document.querySelector('.prog-el')
const myStoreContent = document.querySelector('.my-store')
const alertContent = document.querySelector('.alert')

// close trial section
document
  .querySelector('.main-trial-close-icon')
  .addEventListener('click', function () {
    document.querySelector('.main-trial').classList.add('close-trial')
  })

document
  .querySelector('.main-form-body')
  .addEventListener('click', function (e) {
    const clickedH3 = e.target

    if (!e.target.classList.contains('h3')) return

    clickedH3.nextElementSibling.classList.remove('open-content')
    containers.forEach(container => {
      if (container.contains(clickedH3))
        container.classList.add('main-form-body-1-opened')
    })
  })

// Toggle for the store section
let active = true
document
  .querySelector('.nav-notify-icon')
  .addEventListener('click', function () {
    active
      ? myStoreContent.classList.add('my-store-active')
      : myStoreContent.classList.remove('my-store-active')

    active = !active
  })

let alertActive = true
document
  .querySelector('.nav-notify-btn')
  .addEventListener('click', function () {
    alertActive
      ? alertContent.classList.add('alert-active')
      : alertContent.classList.remove('alert-active')

    alertActive = !alertActive
  })

// function
function updateProgressBar () {
  const checkedCount = document.querySelectorAll('.checkbox:checked').length

  const totalCheckboxes = checkBoxes.length

  const progressValue = (checkedCount / totalCheckboxes) * 5
  console.log(progressValue)
  progress.value = progressValue
  progEl.textContent = progressValue
}

// Event Listener
main.addEventListener('click', function (e) {
  const newClicked = e.target.closest('.checker')

  if (!newClicked) return

  checkBoxes.forEach(checkBox => {
    checkBox.addEventListener('click', function (e) {
      const clicked = e.target

      if (checkBox.checked) {
        // change images
        clicked.previousElementSibling.children[0].classList.add('open-content')
        clicked.previousElementSibling.children[1].classList.remove(
          'main-form-body-1-img'
        )

        // Close the clicked content
        clicked.parentElement.nextElementSibling.children[1].classList.add(
          'open-content'
        )
        // Close the clicked content image for destop mode
        clicked.parentElement.nextElementSibling.nextElementSibling.classList.remove(
          'main-form-body-1-img-active'
        )
        clicked.parentElement.nextElementSibling.nextElementSibling.classList.add(
          'main-form-body-1-img'
        )
        updateProgressBar()

        // Check if there is anyone remaining; if true, show its content
        if (checkBox === checkBoxes[checkBoxes.length - 1]) {
          let foundUnchecked = false

          checkBoxes.forEach((checkbox, index) => {
            if (!checkbox.checked && !foundUnchecked) {
              // Add the image for desktop mode

              contents[index].parentElement.nextElementSibling.classList.add(
                'main-form-body-1-img-active'
              )
              contents[index].classList.add('main-form-body-1-desktop')
              contents[index].classList.remove('open-content') //original code
              foundUnchecked = true
            }
          })
        }
        // check if it is the last element; return immedieately if true
        if (clicked.parentElement.parentElement.nextElementSibling === null)
          return

        // Check if the next content is not clicked yet
        if (
          !clicked.parentElement.parentElement.nextElementSibling.children[0]
            .children[1].checked
        ) {
          contents.forEach(content => {
            // Hide all the active classes first
            content.classList.add('open-content')
            content.parentElement.nextElementSibling.classList.remove(
              'main-form-body-1-img-active'
            )
          })

          clicked.parentElement.parentElement.nextElementSibling.children[2].classList.add(
            'main-form-body-1-img-active'
          )

          clicked.parentElement.parentElement.nextElementSibling.children[1].children[1].classList.remove(
            'open-content'
          )
        }
      } else {
        // change the images if unclicked
        // console.log(clicked.previousElementSibling)
        clicked.previousElementSibling.children[0].classList.remove(
          'open-content'
        )
        clicked.previousElementSibling.children[1].classList.add(
          'main-form-body-1-img'
        )
        updateProgressBar()
      }
    })
  })
})
