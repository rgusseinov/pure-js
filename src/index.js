import { Select } from "./components/select";

const select = new Select('.select', {
    placeholder: 'Need to select item',
    selectedId: 3,
    data: [
      {id: 1, name: 'Kazakhstan'},
      {id: 2, name: 'Uzbekistan'},
      {id: 3, name: 'Russia'},
      {id: 4, name: 'Ukraine'},
      {id: 5, name: 'Kyrgystan'},
      {id: 6, name: 'Tadjikistan'},
      {id: 7, name: 'Belarus'}
    ],
});