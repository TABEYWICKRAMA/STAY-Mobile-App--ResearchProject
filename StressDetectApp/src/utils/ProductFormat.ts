export const productModelFormat = (productList: any, filterObj: any) => {
  let formatedProductList: any = [];

  productList.map((product: any, index: number) => {
    let products_mod: any = {
      name: product.name,
      id: product.id,
      type: product.product_type.name,
      is_addon: product.is_addon,
      is_featured: product.is_featured,
      description: product.description,
      more_information: product.more_information,
      product_photos: product.product_photos,
      code: product.code,
      price: product.price,
    };
    if (!filterObj.squarefoot && !filterObj.zip_code) {
      formatedProductList.push(products_mod);
    } else {
      const productVarient = product.product_variant_price;
      if (productVarient && productVarient.length > 0) {
        //   return productVarient.map((productVari, index) => {
        const productVari = productVarient[0];
        const squarefoot = productVari.squarefoot_id;
        const flat_rate = productVari.flat_rate;
        const per_photo = productVari.per_photo;
        const unit = squarefoot
          ? squarefoot
          : flat_rate
          ? 'Flat rate'
          : per_photo
          ? 'Per Photo'
          : null;
        products_mod.time = productVari.service_time;
        products_mod.unit = unit;
        products_mod.market = productVari.market_id;
        const discountPrice = checkDiscountPrice(productVari);

        if (discountPrice) {
          products_mod.initialPrice = productVari.price;
          products_mod.price = +discountPrice;
          products_mod.discount = productVari.price - discountPrice;
        } else {
          products_mod.initialPrice = productVari.price;
          products_mod.price = productVari.price;
          products_mod.discount = 0;
        }
        //  });
      }
    }

    formatedProductList.push(products_mod);
  });
  return formatedProductList;
};

const checkDiscountPrice = (productVarient: any) => {
  const productDiscount = productVarient.product_variant_discount;
  let discountPrice = null;

  if (productDiscount && productDiscount.length > 0) {
    discountPrice = productDiscount[0].price;
  }

  return discountPrice;
};
