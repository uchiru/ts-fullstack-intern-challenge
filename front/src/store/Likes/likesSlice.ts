import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LikesTypeInterface } from '../../Types/LikesType/LikesTypeInterface';
import { getLikes, postLike, deleteLike, LikesApiInterface } from '../../utils/likesApi/likesApi';

export interface LikesState {
    value: LikesTypeInterface[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: LikesState = {
    value: [],
    status: 'loading'
}

export const getUserLikes = createAsyncThunk(
    'likes/getUserLikes',
    async (token:string, { rejectWithValue }) => {
      try{
        const response = await getLikes(token);
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        return data;
      }
      catch(err:any) {
        return rejectWithValue(err.message);
      }

    }
  );

  export const postUserLike = createAsyncThunk(
    'likes/postUserLike',
    async ({catId, url, token}: LikesApiInterface, { rejectWithValue})  => {
      try{
        const response = await postLike({catId, url, token});
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        return data;
      }
      catch(err:any) {
        return rejectWithValue(err.message);
      }

    }
  );

  export const deleteUserLike = createAsyncThunk(
    'likes/deleteUserLike',
    async ({catId, token}: LikesApiInterface, { rejectWithValue }) => {
      try {
        const response = await deleteLike({catId, token});
        if(!response.ok){
          throw new Error(response.statusText)
        }
        const data = await response.json();
        return data;
      }
      catch(err:any) {
        return rejectWithValue(err.message);
      }

    }
  );

export const likesSlice = createSlice({
    name: 'likes',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder

          .addCase(getUserLikes.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getUserLikes.fulfilled, (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
          })
          .addCase(getUserLikes.rejected, (state) => {
            state.status = 'failed';
          })

          .addCase(postUserLike.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(postUserLike.fulfilled, (state) => {
            state.status = 'idle';
          })
          .addCase(postUserLike.rejected, (state) => {
            state.status = 'failed';
          })

          .addCase(deleteUserLike.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(deleteUserLike.fulfilled, (state, action) => {
            state.value = state.value.filter(cat => cat.cat_id !== action.payload.cat_id);
            state.status = 'idle';
          })
          .addCase(deleteUserLike.rejected, (state) => {
            state.status = 'failed';
          })
      },
})

export const { } = likesSlice.actions;

export default likesSlice.reducer;