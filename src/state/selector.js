import { selector } from "recoil";
import { priceState, priceFilterState } from "./atom";
import conversionRateData from '../assets/data/conversionRate.json';

export const filteredPriceState = selector({
    key: 'FilteredPriceState',
    get: ({get}) => {
      const {base, convert} = get(priceFilterState);
      const list = get(priceState);
    //   if ( base != convert){
    //     const [conversionRate] = conversionRateData
    //     const x = conversionRate.conversion_rates
    //     const [lis] = list.filter((item) => item.currency === base)
    //     // return lis.prices.map((element => {
    //     //     element.sendPrice = element.sendPrice * conversionRate[convert]
    //     //     element.recievePrice = element.recievePrice * conversionRate[convert]
    //     //     return element;
    //     // }
        
    //     // ));
    //     return ["NGN"]
        
    //   }
      return list.filter((item) => item.currency === base);
    },
});