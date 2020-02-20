import Cookies from "js-cookie";

export  default class Cookie{
    static getBasket() {
        let current = Cookies.get('Basket');
        if (current)
            return JSON.parse(current); else
            return "";
    }

    static addToBasket(name, value)
    {
        let current = Cookies.get('Basket');
        if(current)
        {
            let obj = JSON.parse(current);
            obj.data.push({title: name, count: value, id: obj.data.length});
            Cookies.set('Basket', JSON.stringify(obj))
        }
        else
        {
            let obj = {
                data: [
                    {
                        id: 0,
                        title: name,
                        count: value
                    }
                ]
            };

            Cookies.set('Basket', JSON.stringify(obj));
        }
    }
}

