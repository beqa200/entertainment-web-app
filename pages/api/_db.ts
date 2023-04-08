import mongoose from "mongoose";

export function connectDB() {
  if (process.env.DB_CONNECT) {
    mongoose.connect(process.env.DB_CONNECT);
  }

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected!");
  });

  db.on("error", (error) => {
    console.error("Error connecting to database:", error);
  });
}

const thumbnailSchema = new mongoose.Schema({
  small: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
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
    trending: {
      type: thumbnailSchema,
      required: true,
    },
    regular: {
      type: thumbnailSchema,
      required: true,
    },
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

export { movieSchema };
