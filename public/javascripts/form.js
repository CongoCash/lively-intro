let inputValue = '';
function formClick() {
  console.log('hello world');
  console.log('form clicked');
  inputValue = document.getElementById('input').value;
  console.log(inputValue);
  setTimeout(function() {
    window.location.href = 'http://localhost:3000/success';
  }, 2000);
}

