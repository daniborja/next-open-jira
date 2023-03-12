import mongoose, { Schema, model, Model } from 'mongoose';

import { Entry } from '@/interfaces';

export interface IEntryModel extends Entry {}

const EntrySchema = new Schema({
  description: {
    type: String,
    required: [true, 'Description is required!'],
    trim: true,
    min: 2,
    max: 100,
  },

  // without mongo's timestamp
  createdAt: {
    type: Number,
    required: [true, 'Created at is required!'],
  },

  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'completed'],
      message: '{VALUE} not allowed',
    },
    default: 'pending',
    required: [true, 'Status is required!'],
    trim: true,
  },
});

// export default model('Entry', EntrySchema); // node.js
const EntryModel: Model<IEntryModel> =
  mongoose.models.Entry || model('Entry', EntrySchema);

export default EntryModel;
