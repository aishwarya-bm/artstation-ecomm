 const compose =
    (...args) =>
    (a, b) =>
      args.reduce((acc, curr) => {
        return curr(a, acc);
      }, b);

export {compose};