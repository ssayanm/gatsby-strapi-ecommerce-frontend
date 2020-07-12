// import React, { useState } from "react"

// export const myContext = React.createContext()

// const Provider = props => {
//   const [isDark, setTheme] = useState(false)

//   return (
//     <myContext.Provider
//       value={{
//         isDark,
//         changeTheme: () => setTheme(!isDark),
//       }}
//     >
//       {props.children}
//     </myContext.Provider>
//   )
// }

// export default ({ element }) => <Provider>{element}</Provider>
import React, { useReducer, createContext } from "react"
import AppReducer from "./src/context/AppReducer"
// import axios from "axios";
// import SHOP_DATA from "./ShopData";
// import DIRECTORY_DATA from "./DirectoryData";

//initial State
const initialState = {
  cartItems: [],
  hidden: true,
}

//Create Context
export const GlobalContext = createContext(initialState)

// Provider component
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Actions

  const toggleCartHidden = () =>
    dispatch({
      type: "TOGGLE_CART_HIDDEN",
    })

  const addItem = item =>
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    })

  const removeItem = item => ({
    type: "REMOVE_ITEM",
    payload: item,
  })

  const getCartTotal = item =>
    dispatch({
      type: "GET_CART_TOTAL",
      payload: item,
    })

  // const clearItemFromCart = (item) => ({
  //   type: "CLEAR_ITEM_FROM_CART",
  //   payload: item,
  // });

  // const getTodos = async () => {
  //   try {
  //     const res = await axios.get("/api/v1/todos");

  //     dispatch({
  //       type: "GET_TODOS",
  //       payload: res.data.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TODO_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // };

  // const deleteTodo = async (id) => {
  //   try {
  //     await axios.delete(`/api/v1/todos/${id}`);
  //     dispatch({
  //       type: "DELETE_TODO",
  //       payload: id,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TODO_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // };

  // // Toggle Complete
  // const markComplete = async (id) => {
  //   try {
  //     await axios.patch(`/api/v1/todos/${id}`);
  //     dispatch({
  //       type: "COMPLETED_TODO",
  //       payload: id,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TODO_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // };

  // const addTodo = async (todo) => {
  //   const config = {
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const res = await axios.post("/api/v1/todos", todo, config);

  //     dispatch({
  //       type: "ADD_TODO",
  //       payload: res.data.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TODO_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // }

  return (
    <GlobalContext.Provider
      value={{
        cartItems: state.cartItems,
        hidden: state.hidden,
        addItem,
        removeItem,
        toggleCartHidden,
        getCartTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default ({ element }) => <Provider>{element}</Provider>
