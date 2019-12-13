import { firestore } from "../../firebase/helpers.firebase";
import actionTypes from "./data.types";

// Async Action Creators
// ======================
const fetchProductFromStoreStart = products => ({
  type: actionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_START
});

const fetchProductFromStoreSuccess = products => ({
  type: actionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_SUCCESS,
  payload: products
});

const fetchProductFromStoreFailure = error => ({
  type: actionTypes.FETCH_PRODUCTS_FROM_FIRESTORE_FAILURE,
  payload: error
});

export const fetchProductFromStoreAsync = () => {
  return dispatch => {
    dispatch(fetchProductFromStoreStart());
    const collectionRef = firestore.collection("products");
    collectionRef
      .get()
      .then(collectionSnapshot => {
        const docSnapshot = collectionSnapshot.docs;
        const dataArray = docSnapshot.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const products = dataArray.reduce((acc, product) => {
          acc[product.title.toLowerCase()] = product;
          return acc;
        }, {});

        dispatch(fetchProductFromStoreSuccess(products));
      })
      .catch(error => {
        dispatch(fetchProductFromStoreFailure(error.message));
      });
  };
};
// ==========================================================
