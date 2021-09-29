import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { getAllBecas as all } from '../../../shared/services/beca'

export const getAllBecas = createAsyncThunk('beca/all', async () => await all())

export const setOneBeca = createAction('beca/setone')
