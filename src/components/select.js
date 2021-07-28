const getSelectTemplate = (selectedId, items, placeholder) => {
  let text = (placeholder) ? placeholder : 'Please select item';
  
  const options = items.map(item => {
    if (item.id === selectedId) text = item.name;
    return `<div class="select__item ${(item.id === selectedId) ? 'hovered' : ''}" data-type="item" data-id="${item.id}"> ${item.name} </div>`;
  });

  return `<div class="select__header" data-type="select">
            <span class="select__current" data-type="select"> ${text} </span>
            <div class="select__icon"><i class="arrow down"></i></div>
          </div>
          <div class="select__body">${options.join('')}</div>`;
}

export class Select{

  constructor(element, options){
    this.$el = document.querySelector(element)
    this.options = options
    this.selectedId = options.selectedId
    this.#render();
    this.#addEventListeners();
  }

  #render(){
    const { data, placeholder } = this.options
    this.$el.innerHTML = getSelectTemplate(this.selectedId, data, placeholder);
  }

  #addEventListeners(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler); // on select click
  }

  clickHandler(e){
    const { type } = e.target.dataset
    if (type == 'select'){
      this.toggle()
    } else if (type == 'item'){

      const { id } = e.target.dataset
      this.$el.querySelector('.select__current').textContent = e.target.textContent
      if (this.selectedId === id){
        this.selectedId = null;
      } else {
        this.selectedId = id;
      }
      this.selectItems()
      this.toggle()
    }
  }

  selectItems(){
    const items = this.$el.querySelectorAll('.select__item')
    items.forEach(item => item.classList.remove('hovered'));
  
    if (this.selectedId){
      const selectedItem = this.$el.querySelector(`.select__item[data-id="${this.selectedId}"]`)
      selectedItem.classList.add('hovered')
    }
  }

  toggle(){
    this.isOpen ? this.close() : this.open();
  }

  get isOpen(){
    return this.$el.classList.contains('is-active')
  }
  
  open(){
    this.$el.classList.add('is-active');
    this.$el.querySelector('i.arrow').classList.remove('down');
    this.$el.querySelector('i.arrow').classList.add('up');
  }

  close(){
    this.$el.classList.remove('is-active');
    this.$el.querySelector('i.arrow').classList.remove('up');
    this.$el.querySelector('i.arrow').classList.add('down');
  }

  select(id){
    const findItem = this.$el.querySelector(`.select__item[data-id="${id}`)
    this.$el.querySelector('.select__current').textContent = findItem.textContent.trim()
  }

  destroy(){
    this.$el.removeEventListener('click', this.clickHandler);
    this.$el.innerHTML = ''
  }

}