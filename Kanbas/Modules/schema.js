import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
        lessons: [
            {
                name: String,
                description: String,
                module: { type: mongoose.Schema.Types.ObjectId, ref: "ModuleModel" },
            },
        ],
    },
    { collection: "modules" }
);
export default moduleSchema;
