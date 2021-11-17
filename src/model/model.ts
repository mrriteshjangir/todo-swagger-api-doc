import * as mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title:{type: String,required:true}
  },
  {
    timestamps:true
  }
);

export default mongoose.model('todos',TodoSchema);
