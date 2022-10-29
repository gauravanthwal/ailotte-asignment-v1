import {configureStore} from '@reduxjs/toolkit';
import stepperReducer from './features/stepper/stepperSlice';
import usersReducer from './features/users/userSlice';

const store = configureStore({
    reducer: {
        stepper: stepperReducer,
        users: usersReducer
    }
})

export default store;
