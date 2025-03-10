import { getAccessToken } from "@/utils/access-token";
import { RightBrainClient } from "@/generated";

export async function POST(request: Request) {
  const accessToken = await getAccessToken(request);

  try {
    const formData = await request.formData();
    const imageFile = formData.get("image") as File;

    if (!imageFile) {
      return new Response("Missing image file in request body", {
        status: 400,
      });
    }

    const rightbrain = RightBrainClient.getInstance({
      accessToken: accessToken.token.access_token as string,
      baseUrl: process.env.RB_API_URL as string,
      organizationId: process.env.RB_ORG_ID as string,
      projectId: process.env.RB_PROJECT_ID as string,
    });

    const fileBlob = new Blob([await imageFile.arrayBuffer()], {
      type: imageFile.type,
    });

    const response = await rightbrain.run_profile_image_verification(
      {},
      fileBlob as File
    );
    return Response.json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Error processing form data", { status: 400 });
  }
}
