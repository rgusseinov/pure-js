import { Select } from "./components/select";


const select = new Select('.select', {
    placeholder: 'Need to select item',
    selectedId: 3,
    data: [
      {id: 1, name: 'React'},
      {id: 2, name: 'Angular'},
      {id: 3, name: 'Vue'},
      {id: 4, name: 'Node JS'},
      {id: 5, name: 'Redux'},
    ],
});

window.s = select

/*

open()
close()
select('2')
clear()
destroy()


*/