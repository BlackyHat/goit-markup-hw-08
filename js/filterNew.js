class Filter {
  constructor({ filterBtn, projectItems }) {
    this.filterBtn = filterBtn;
    this.projectItems = projectItems;
  }

  addHide() {
    this.projectItems.forEach(el => {
      el.ontransitionend = function () {
        if (el.classList.contains('anime')) {
          el.classList.add('hide');
        }
      };
    });
  }

  filter(category, items) {
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

  onClickFilterGallery(e) {
    const curCateg = e.target.dataset.value;
    this.filter.bind(this)(curCateg, this.projectItems);
    this.addHide();
  }
  addListeners() {
    this.filterBtn.addEventListener(
      'click',
      this.onClickFilterGallery.bind(this),
    );
  }
  init() {
    this.addListeners();
  }
}

const refs = {
  filterBtn: document.querySelector('.filter'),
  projectItems: document.querySelectorAll('.project__item'),
};

new Filter(refs).init();
