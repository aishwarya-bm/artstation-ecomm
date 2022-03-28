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

const getCheckoutDetails = cart =>
    cart.length > 0
      ? cart.reduce((acc, curr) => {
          acc.price = acc.price + Number(curr.qty) * Number(curr.orig_price);
          acc.discount =
            acc.discount +
            Number(curr.qty) *
              (Number(curr.orig_price) - Number(curr.curr_price));
          acc.netAmount = acc.price - acc.discount;
          return acc;
        },  {
    price: 0,
    discount: 0,
    netAmount: 0,
        })
      : 0;

        
export {calculateDiscount,calculatePrice,getCheckoutDetails}