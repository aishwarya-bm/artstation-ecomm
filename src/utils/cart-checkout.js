const calculateDiscount = (cart) => cart.length > 0 ? cart.reduce(
          (acc, curr) =>
            acc +
            Number(curr.qty) *
              (Number(curr.orig_price) - Number(curr.curr_price)),
          0
        ) : 0

const calculatePrice = (cart) => cart.length > 0 ?   cart.reduce(
          (acc, curr) => acc + Number(curr.qty) * Number(curr.orig_price),
          0
        ) : 0
        
export {calculateDiscount,calculatePrice}