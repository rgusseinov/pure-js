export class Select{

  constructor(element, options){
    this.$el = element
    this.options = options
    this.render();
    this.init()
  }

  render(){
    const items = this.options.map(item => {
      return `<div class="select__item" id="${item.id}"> ${item.name} </div>`
    }).join('')
    document.querySelector('.select__body').insertAdjacentHTML('afterbegin', items);
  }

  init(){
    const activeItem = this.$el.querySelector('.select__current')
    const items = this.$el.querySelectorAll('.select__item')

    activeItem.addEventListener('click', (evt) => {
      if (this.$el.classList.contains('is-active')){
        this.$el.classList.remove('is-active');
      } else {
        this.$el.classList.add('is-active');
      }
    })

    items.forEach(item => {
      item.addEventListener('click', this.select.bind(this))
    });

  }

  select(id){
    const activeItem = this.$el.querySelector('.select__current')
    activeItem.textContent = evt.target.textContent
  }

  close(){

  }

}