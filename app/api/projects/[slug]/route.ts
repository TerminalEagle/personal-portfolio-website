import mongoose, { Schema, Model } from "mongoose";

mongoose.connect("mongodb+srv://portfolio:3234n7hKctuGLx7p@datacluster.fptcmom.mongodb.net/portfolio?retryWrites=true&w=majority");
const projectSchema = new Schema({
  slug: String,
  title: String,
  description: String,
  skills: [String],
  technologies: [String],
  visitWebsiteLink: String,
  solutionLink: String,
  projectBackground: String,
});

// Define the Project model interface
interface IProject extends Document {
  slug: string;
  title: string;
  description: string;
  skills: string[];
  technologies: string[];
  visitWebsiteLink: string;
  solutionLink: string;
  projectBackground: string;
}

// Check if the model already exists before defining it
const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const project = await Project.find({ slug: params.slug });
  return Response.json(project);
}
