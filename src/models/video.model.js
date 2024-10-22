import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema(
  {
    vidoeFile: {
      type: String, //cloudnary url
      required: true,
    },
    thumbNail: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
        type: String,
        required: true
    },
    duration: {
       type: Number,
       required: true 
    },
    views: {
        type: String,
        default: 0
    },
    isPublished: {
        type: Boolean,
        defaullt: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);