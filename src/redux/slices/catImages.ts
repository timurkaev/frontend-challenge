import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'b93574b7-087f-400a-b329-78161c4b0be4';

interface Cat {
  id: string;
  url: string;
  liked: boolean;
}

interface CatsState {
  loading: boolean;
  loadingMore: boolean;
  cats: Cat[];
  favorites: Cat[];
}

export const fetchCats = createAsyncThunk<Cat[], void>('cats/fetchCats', async () => {
  const response = await axios(
    `https://api.thecatapi.com/v1/images/search?limit=20&mime_types=jpg,pn&api_key=${API_KEY}`,
  );
  return (await response.data) as Cat[];
});

const initialState: CatsState = {
  cats: [],
  favorites: [],
  loading: false,
  loadingMore: false,
};

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<string>) {
      const cat = state.cats.find((cat) => cat.id === action.payload);
      if (cat === undefined) return;
      if (state.favorites.some((item) => item.id === cat.id)) {
        return;
      }
      cat.liked = true;
      state.favorites.push(cat);
    },
    removeFromFavorite(state, action: PayloadAction<string>) {
      const cat = state.cats.find((cat) => cat.id === action.payload);
      if (cat === undefined) return;
      cat.liked = false;
      state.favorites = state.favorites.filter((cat) => cat.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCats.fulfilled, (state, action: PayloadAction<Cat[]>) => {
        state.cats = action.payload;
        state.cats = state.cats.map((cat) => {
          cat.liked = false;
          return cat;
        });
        state.loading = false;
      });
  },
});

export const { addToFavorite, removeFromFavorite } = catsSlice.actions;

export default catsSlice.reducer;
