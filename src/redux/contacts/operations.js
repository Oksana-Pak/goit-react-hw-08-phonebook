import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { errorMessage } from 'components/services/notifications';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', newContact);
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (newContact, thunkAPI) => {
    console.log(newContact);
    const contactId = newContact.id;
    const { name, number } = newContact;

    const contact = { name, number };
    try {
      const response = await axios.patch(`/contacts/${contactId}`, contact);
      return response.data;
    } catch (error) {
      errorMessage('Something wrong. Try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
