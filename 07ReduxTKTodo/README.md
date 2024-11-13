React Redux Toolkit steps

1. create a store using configureStore()
2. create reducers using createSlice in another folder features which will contain all the features that can be used to create alterations in store
3. inside the slice file, create an initial state of the store. It can be an object or an array.
4. create a slice using createSlice({}), it should include name, initialState and reducers (functions) defined at the time of decleration.
5. after creating reducers, export them individually.
6. after export them collectively to register them in store which is an object, register them in key value pairs. reducer: todoReducer

useDispatch to display something or add something

useDispatch uses reducers to update store
so create a function use useDispatch it expects a reducer and pass your value to it

useSelector is used access to state of the store

useSelector((state)=> state.values)

7. wrap the top container with provider and pass store