import { Select } from "./components/select";


const select = new Select(document.querySelector('.select'), [
  {id: 1, name: 'React'},
  {id: 2, name: 'Angular'},
  {id: 3, name: 'Vue'},
  {id: 4, name: 'Node JS'},
  {id: 5, name: 'Redux'},
]);
