import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const data = await prisma.comment.create({
      data: newComment,
    });

    console.log(data);
    const result = (newComment.id = result.insertedId);
    res.status(201).json({ message: "Added coment" });
  }

  if (req.method === "GET") {
    const comments = await prisma.comment.findMany();

    res
      .status(200)
      .json({ message: "Fetching successful", comments: comments });
  }
};

export default handler;
