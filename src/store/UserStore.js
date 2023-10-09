import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = "NO_USER";
    this._user = {};
    this._basket = {};
    this._order = [];
    this._review = [];
    this._baskets = [];
    this._orders = [];
    this._reviews = [];
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setUser(user) {
    this._user = user;
  }
  setBasket(basket) {
    this._basket = basket;
  }
  setOrder(order) {
    this._order = order;
  }
  setReview(review) {
    this._review = review;
  }
  setBaskets(baskets) {
    this._baskets = baskets;
  }
  setOrders(orders) {
    this._orders = orders;
  }
  setReviews(reviews) {
    this._reviews = reviews;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
  get basket() {
    return this._basket;
  }
  get order() {
    return this._order;
  }
  get review() {
    return this._review;
  }
  get baskets() {
    return this._baskets;
  }
  get orders() {
    return this._orders;
  }
  get reviews() {
    return this._reviews;
  }
}
