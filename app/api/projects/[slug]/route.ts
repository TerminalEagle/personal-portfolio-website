import { Project } from "../route";

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const project = await Project.find({ slug: params.slug });
  return Response.json(project);
}
