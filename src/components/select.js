const getSelectTemplate = (items, placeholder) => {
  const text = (placeholder) ? placeholder : 'Please select item';
  
  const options = items.map(item => {
    return `<div class="select__item" data-id="${item.id}"> ${item.name} </div>`;
  });

  return `<div class="select__header">
            <span class="select__current"> ${placeholder} </span>
            <div class="select__icon"> X </div>
          </div>
          <div class="select__body">${options.join('')}</div>`;
}

export class Select{

  constructor(element, options){
    this.$el = document.querySelector(element)
    this.options = options
    this.render();
    this.addEventListeners();
  }

  render(){
    const { data, placeholder } = this.options
    this.$el.innerHTML = getSelectTemplate(data, placeholder);
    this.$el.querySelector('.select__header').addEventListener('click', this.clickHandlerMain.bind(this));
  }

  addEventListeners(){
    const items = this.$el.querySelectorAll('.select__item')
    items.forEach(item => item.addEventListener('click', this.clickHandler.bind(this)));
  }

  clickHandlerMain(e){
    if (this.$el.classList.contains('is-active')){
      this.close()
    } else {
      this.open()
    }
  }

  clickHandler(e){
    const { id } = e.target.dataset
    this.$el.querySelector('.select__current').textContent = e.target.textContent
    this.close()
  }

  open(){
    this.$el.classList.add('is-active');
  }

  close(){
    this.$el.classList.remove('is-active');
  }

  select(id){
    const findItem = this.$el.querySelector(`.select__item[data-id="${id}`)
    this.$el.querySelector('.select__current').textContent = findItem.textContent.trim()
  }

}