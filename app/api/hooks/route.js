import { SIGNATURE_HEADER_NAME } from "@sanity/webhook";

const handler = async (req, res) => {
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
    res.status(200).json({ msg: "ok" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export default handler;
