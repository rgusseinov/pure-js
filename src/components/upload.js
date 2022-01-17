

function upload(selector, options){

  const file = document.querySelector(selector);
  file.style.display = 'none';

  const openButton = document.querySelector("label");

  const dropArea = document.querySelector("#drop-area");
  const gallery = document.querySelector(".gallery");

  if (options.multi){
    file.setAttribute("multiple", true);
  }

  if (options.accept){
    file.setAttribute("accept", options.accept.join(","));
  }


  // 1. Drag and Drop handlers
  const preventDefaults = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
  };

  const addHightlight = () => {
    dropArea.classList.add('highlight');
  }

  const removeHightlight = () => {
    dropArea.classList.remove('highlight');
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventType => {
    dropArea.addEventListener(eventType, preventDefaults);
  });


  // highlight drop area
  ['dragenter', 'dragover'].forEach(eventType => {
    dropArea.addEventListener(eventType, addHightlight);
  });

  ['dragleave', 'drop'].forEach(eventType => {
    dropArea.addEventListener(eventType, removeHightlight);
  })

  dropArea.addEventListener("drop", handleDrop, false);

  function handleDrop(evt){
    const {files} = evt.dataTransfer;
    renderFiles(files);
  }


  // 2. Normal select areas
  const handleSelectFile = () => file.click();
  const handleSelectFileChange = (evt) => {
    const {files} = evt.target;
    renderFiles(files);
  }


  
  const renderFiles = (files) => {
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function(e){
        const src = e.target.result;
        preparePreview(src);
      }      
    })
  }

  const preparePreview = (src) => {
    const img = document.createElement("img");
    img.src = src;        
    gallery.appendChild(img);
  }
  
  openButton.addEventListener("click", handleSelectFile)
  file.addEventListener("change", handleSelectFileChange)

}


export default upload;