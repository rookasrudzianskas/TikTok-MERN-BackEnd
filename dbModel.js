import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
    // defining how the collection should look like
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
});

// collection inside the huge database
// something
export default mongoose.model('tiktokVideos', tiktokSchema);