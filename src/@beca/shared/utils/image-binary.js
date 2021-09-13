export const converterImage = (file, setPicture) => {
  var reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function () {
    return setPicture(reader.result)
  }
}
