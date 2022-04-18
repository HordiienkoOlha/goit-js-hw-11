export const getRefs = () => {
    return {
        formRef: document.querySelector('.js-search-form'),
        inputRef: document.querySelector('.js-input'),
        btnSearchRef: document.querySelector('.js-search-btn'),
        btnLoadMoreRef: document.querySelector('.js-btn-load-more'),
        galleryContainer: document.querySelector('.gallery'),
    };
};
