import mongoose from "mongoose";

// mengubah id menjadi name untuk parameter 
const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email : {
        type : String ,
    },
    gender : {
        type : String ,
    },
    active : {
        type: Boolean,
        
    }
})

// Set the "name" field as the primary key (_id)
User.virtual("id").get(function() {
    return this.name;
});


User.set("toJSON", {
    virtuals: true,
    transform: function(doc, ret) {
        delete ret._id;
    }
});

export default mongoose.model("Users" , User)