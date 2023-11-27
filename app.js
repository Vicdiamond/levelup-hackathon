'use strict'

const containers = document.querySelectorAll('.main-form-body-1')
const checkers = document.querySelectorAll('.checker')
const contents = document.querySelectorAll('.main-form-body-1-content-p')
const main = document.querySelector('.main-form-body')
const checkedImages = document.querySelector('.checked-img')
const checkContainers = document.querySelectorAll('.check-container')

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

// let clicked

// let checked
main.addEventListener('click', function (e) {
  const newClicked = e.target.closest('.checker')

  if (!newClicked) return

  contents.forEach(content => content.classList.add('open-content'))

  // newClicked.classList.add('open-content')
  // newClicked.nextElementSibling.classList.remove('main-form-body-1-img')

  newClicked.parentElement.parentElement.nextElementSibling.children[1].children[1].classList.remove(
    'open-content'
  )

  // for (let i = 0; i < containers.length; i++) {

  //   console.log(containers[i])
  // }
  containers.forEach(container => {
    const iconContainer = container.querySelector('.icons-img')
    const icon = iconContainer.querySelector('.checked-img')

    // console.log(
    //   newClicked.parentElement.parentElement.nextElementSibling.children[0]
    //     .children[1]
    // )

    // if (icon.classList.contains('main-form-body-1-img')) {
    //   console.log('clicked')
    //   // return
    // } else {
    //   console.log('not clicked')
    // }
  })
})

// containers.forEach(container => {
//   container.addEventListener('click', function (e) {
//     const clickedChecker = e.target
//     if (!e.target.classList.contains('checker')) return

//     //Change the empty and clicked images
//     clickedChecker.classList.add('open-content')
//     clickedChecker.nextElementSibling.classList.remove('main-form-body-1-img')

//     // not to show the content of the current clicked
//     if (clicked) {
//       // clickedChecker.parentElement.nextElementSibling.children[1].classList.remove(
//       //   'open-content'
//       // )
//     } else {
//       clickedChecker.parentElement.nextElementSibling.children[1].classList.add(
//         'open-content'
//       )
//       if (container.contains(clickedChecker))
//         container.classList.remove('main-form-body-1-opened')
//     }

//     if (container.nextElementSibling === null) return

//     // container.nextElementSibling.children[1].children[1].classList.remove(
//     //   'open-content'
//     // )
//     // container.nextElementSibling.classList.add('main-form-body-1-opened')

//     // if (
//     //   !container.nextElementSibling.children[1].children[1].classList.contains(
//     //     'open-content'
//     //   )
//     // ) {
//     //   // return ''
//     //   // container.nextElementSibling.children[1].children[1].classList.remove(
//     //   //   'open-content'
//     //   // )
//     //   // container.nextElementSibling.classList.add('main-form-body-1-opened')
//     // } else {
//     //   container.nextElementSibling.children[1].children[1].classList.remove(
//     //     'open-content'
//     //   )
//     //   container.nextElementSibling.classList.add('main-form-body-1-opened')
//     // }

//     //   return

//     // clicked ? (clicked = false) : (clicked = true)
//     clicked = false
//   })
// })
