import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [
      { id: 1, name: "Электросамокаты" },
      { id: 2, name: "Электровелосипеды" },
    ];
    this._condition = [
      { id: 1, name: "Новые" },
      { id: 2, name: "Поддержанные" },
    ];
    this._product = [
      {
        id: 1,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 2,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 3,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 4,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 5,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 6,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 7,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
      {
        id: 8,
        name: "Kugp",
        price: 25000,
        img: "https://girosmart.ru/image/catalog/sw_photos/1614/elektrosamokat-kugoo-kirin-s1-pro-1.jpg",
      },
    ];
    this._selectedType = {};
    this._conditionType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setCondition(condition) {
    this._condition = condition;
  }
  setProduct(product) {
    this._product = product;
  }
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedCondition(condition) {
    this._conditionType = condition;
  }
  get types() {
    return this._types;
  }
  get condition() {
    return this._condition;
  }
  get product() {
    return this._product;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedCondition() {
    return this._conditionType;
  }
}
