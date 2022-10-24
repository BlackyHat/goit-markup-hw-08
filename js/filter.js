const refs = {
  filter: document.querySelector('.filter'),
  projectItems: document.querySelectorAll('.project__item'),
};

function filter(category, items) {
  items.forEach(el => {
    const isItemFiltered = !el.classList.contains(category);
    const isShowAll = category === 'all';
    if (isItemFiltered && !isShowAll) {
      el.classList.add('anime');
    } else {
      el.classList.remove('hide');
      el.classList.remove('anime');
    }
  });
}

refs.filter.addEventListener('click', onClickFilterGallery);

function onClickFilterGallery(e) {
  const currentCategory = e.target.dataset.value;
  filter(currentCategory, refs.projectItems);
}

refs.projectItems.forEach(el => {
  el.ontransitionend = function () {
    if (el.classList.contains('anime')) {
      console.log('анімація завершена');
      el.classList.add('hide');
    }
  };
});
