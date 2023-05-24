import { SIGNATURE_HEADER_NAME } from "@sanity/webhook";
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
    const signature = req.headers[SIGNATURE_HEADER_NAME].toString();
    if (
      !isValidSignature(
        JSON.stringify(req.body),
        signature,
        process.env.WEBHOOK_SECRET
      )
    )
      return res.status(401).json({ msg: "Invalid signature" });
    const { slug } = req.body;
    await res.revalidate(`/`);
    return NextResponse("ok")
  } catch (error) {
    return NextResponse("not ok")
  }
};

export default handler;
