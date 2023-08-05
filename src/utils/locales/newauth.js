import {configureStore} from '@reduxjs/toolkit'
import { Provider} from 'react-redux'
import React from 'react'
import ReacrDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from './app/store'
import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import * as 

export const store = configureStore({
    reducer:  {},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch





ReactDOM.render(
    <Provider store={store}>
        <App/>

    </Provider>
    document.getElementById('root')

)

