const debounce = (fn, wait) => {
    let timeout;

    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, arguments), (wait || 1));
    };
};

export default debounce;
