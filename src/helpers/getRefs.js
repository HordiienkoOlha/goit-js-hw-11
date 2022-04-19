export const getRefs = () => {
    return {
        formRef: document.querySelector('.js-search-form'),
        inputRef: document.querySelector('.js-input'),
        btnSearchRef: document.querySelector('.js-search-btn'),
        loadMoreBtn  : document.querySelector('.js-btn-load-more'),
        galleryContainer: document.querySelector('.gallery'),
    };
};
