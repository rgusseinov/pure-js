const handleMainItemClick = (e) => {
  const classList = e.target.classList
  const element = e.target

  if (classList.contains('select__current')){
    if (element.closest('.select').classList.contains('is-active')){
      element.closest('.select').classList.remove('is-active');
    } else {
      element.closest('.select').classList.add('is-active');
    }
  }
}

const handleItemClick = (e) => {
  const optionValue = e.target.textContent
  document.querySelector('.select__current').textContent = optionValue;
  document.querySelector('.select').classList.remove('is-active');
}



const items = document.querySelectorAll('.select__body .select__item')
items.forEach(item => {
  item.addEventListener('click', handleItemClick);
})

const mainItem = document.querySelector('.select__current')
mainItem.addEventListener('click', handleMainItemClick);