import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const email = req.body.email;

    const data = await prisma.newsletter.create({
      data: {
        email: email,
      },
    });

    console.log(data);

    res.status(201).json({ message: "Success", data: email });
  } else {
    res.status(404).json({ message: "something went wrong" });
  }
};

export default handler;
