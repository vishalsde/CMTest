import client from "../../lib/contentfulService";

export default async (): Promise<any> => {
  try {
    const result = await client.getEntries({ content_type: "newsConfig" });
    
    return result;
  } catch (error) {
    return error;
  }
};
