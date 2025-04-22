
const fontSizeControls = document.querySelector('.book__control_font-size');
const book = document.getElementById('book');

fontSizeControls.addEventListener('click', function(event) {
  event.preventDefault(); 

  const target = event.target;
 
  if (target.classList.contains('font-size')) {
    const fontSizeLinks = fontSizeControls.querySelectorAll('.font-size');
    fontSizeLinks.forEach(link => link.classList.remove('font-size_active'));

    target.classList.add('font-size_active');

    const size = target.dataset.size;

    book.classList.remove('book_fs-big', 'book_fs-small');

    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  }
});