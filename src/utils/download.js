export const downloadFile = (file) => {
  fetch(`http://20.203.31.58/upload/${file}`).then((response) => {
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = url;
      a.download = file.split('/')[1];
      a.click();
    });
  });
};
