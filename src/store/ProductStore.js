import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [];
    this._condition = [];
    this._product = [];
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
