import { makeAutoObservable } from "mobx";

export default class ProductStore {
  constructor() {
    this._types = [];
    this._condition = [];
    this._product = [];
    this._selectedType = {};
    this._conditionType = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 6;
    this._totalSum = 0;
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
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  setTotalSum(sum) {
    this._totalSum = sum;
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
    this.setPage(1);
    return this._selectedType;
  }
  get selectedCondition() {
    this.setPage(1);
    return this._conditionType;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
  get totalSum() {
    return this._totalSum;
  }
}
