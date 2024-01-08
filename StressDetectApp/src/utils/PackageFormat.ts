import {id} from 'date-fns/locale';

export const packageModelFormat = (packageList: any, filterObj: any) => {
  let plans: any = [];
  let package_mod: any;

  packageList.map((plan: any, index: number) => {
    let products: any = [];
    let package_price = 0;
    package_mod = {
      package_type: plan.package_type.name,
      name: plan.name,
      id: plan.id,
      price: plan.price,
      category_id: plan.category_id,
      code: plan.code,
    };
    const {package_has_product} = plan;
    if (filterObj && filterObj.discount_code) {
      package_mod.save = plan.save_price_discount + plan.save_price_package;
    } else {
      package_mod.save = plan.save_price_package;
    }
    package_has_product.map((pack_has_prod: any, index: any) => {
      const product = pack_has_prod.products;
      //   let products_mod = {};
      let products_mod: any = {
        name: product.name,
        id: product.id,
        type: product.type,
        is_addon: product.is_addon,
        is_featured: product.is_featured,
        description: product.description,
        more_information: product.more_information,
        code: product.code,
      };

      if (filterObj && !filterObj.square_foot && !filterObj.zip_code) {
        products.push(products_mod);
      } else {
        const productVarient = product.product_variant_price;
        if (productVarient) {
          return productVarient.map((productVari: any, index: any) => {
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

            const packageProductVarient =
              productVari.package_has_product_variant;
            if (packageProductVarient) {
              packageProductVarient.map(
                (packageProductVari: any, index: any) => {
                  if (
                    packageProductVari.package_id === plan.id &&
                    packageProductVari.price
                  ) {
                    const discountPrice =
                      checkDiscountPrice(packageProductVari);
                    if (discountPrice) {
                      products_mod.price = discountPrice;
                      products_mod.initialPrice = packageProductVari.price;
                    } else {
                      products_mod.price = packageProductVari.price;
                      products_mod.initialPrice = packageProductVari.price;
                    }
                  }
                },
              );
            } else {
              products_mod.price = productVari.price;
              products_mod.initialPrice = productVari.price;
            }

            package_price = package_price + parseInt(products_mod.price);
            products.push(products_mod);
          });
        }
      }
    });
    package_mod.products = products;
    package_mod.price = package_price;
    plans.push(package_mod);
  });

  return plans;
};

const checkDiscountPrice = (packageProductVarient: any) => {
  const packageProductDiscount =
    packageProductVarient.package_product_variant_discount;
  let discountPrice = null;

  if (packageProductDiscount && packageProductDiscount.length > 0) {
    discountPrice = packageProductDiscount[0].price;
  }

  return discountPrice;
};
