import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const response = await prisma.product.findMany();

    if (response.length === 0) {
      return res
        .status(200)
        .json({ mssg: "Data belum ada, silahkan create data dulu" });
    }

    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ mssg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const productId = parseInt(req.params.id);

    const response = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!response) {
      return res.status(200).json({ mssg: "Data not found" });
    }

    return res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ mssg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
    // cek jika data sudah ada
    const existingProduct = await prisma.product.findFirst({
      where: {
        name: name,
        price: price
      },
    });

    if (existingProduct) {
      return res.status(400).json({ mssg: "Data already exists" });
    }

    const product = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ mssg: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price } = req.body;
  const productId = parseInt(req.params.id);

  try {
    const updatedProduct = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: name,
        price: price,
      },
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ mssg: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const productId = parseInt(req.params.id);

  try {
    const product = await prisma.product.delete({
      where: {
        id: productId,
      },
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ mssg: error.message });
  }
};
