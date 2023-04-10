import mongoose from "mongoose";

 async function connectDB() {
  if (!process.env.DB_URL) {
    throw new Error("Database URL is not defined in environment variables!");
  }

  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

const thumbnailSchema = new mongoose.Schema({
  small: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: false,
  },
  large: {
    type: String,
    required: true,
  },
});

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    trending: thumbnailSchema,
    regular: thumbnailSchema,
  },
  year: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  isBookmarked: {
    type: Boolean,
    default: false,
  },
  isTrending: {
    type: Boolean,
    default: false,
  },
});

 movieSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});


const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);


export { connectDB, Movie };