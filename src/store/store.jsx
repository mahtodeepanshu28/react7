import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./studentData"

export default configureStore({
  reducer: {
    users: usersReducer,
  },
})