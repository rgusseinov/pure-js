import upload from "./components/upload";

upload('#file', {
  multi: true,
  accept: [".jpg",".png", ".gif"]
})