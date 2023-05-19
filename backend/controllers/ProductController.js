import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
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
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ mssg: error.message });
  }
};

export const createProduct = async (req, res) => {
  const { name, price } = req.body;

  try {
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
