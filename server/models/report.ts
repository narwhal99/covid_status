import mongoose, { Schema } from "mongoose";

const ReportSchema: Schema = new Schema({
  infected: { type: Number },
  activeInfected: { type: Number },
  deceased: { type: Number },
  recovered: { type: Number },
  quarantined: { type: Number },
  tested: { type: Number },
  sourceUrl: { type: String },
  lastUpdatedAtSource: { type: Date },
  lastUpdatedAtApify: { type: Date },
});

export default mongoose.model("Report", ReportSchema);
