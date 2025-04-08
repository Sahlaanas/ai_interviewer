export async function GET() {
  return Response.json(
    {
      success: true,
      data: "THANK YOU!",
    },
    { status: 200 }
  );
}

export async function POST(request) {
    const { type, role, level, techstack, amount, userid } = await request.json();

    try {
        const { text } = await generateText()
    } catch (error) {
        console.error(error);
        return Response.json({success: false, error}, { status : 500 });
    }
}