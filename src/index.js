import { Select } from "./components/select";

const select = new Select('.select', {
    placeholder: 'Need to select item',
    selectedId: 3,
    data: [
      {id: 1, name: 'Almaty'},
      {id: 2, name: 'Astana'},
      {id: 3, name: 'Shymkent'},
      {id: 4, name: 'Atyrau'},
      {id: 5, name: 'Aktau'},
    ],
});