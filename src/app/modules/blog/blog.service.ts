import status from "http-status";
import AppError from "../../errors/AppError";
import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

// Create a new blog
const createBlogIntoDb = async (payload: IBlog) => {
  const result = await Blog.create(payload);
  return result;
};

// Get all blogs (not deleted)
const getAllBlogsFromDb = async () => {
  const result = await Blog.find({ isDeleted: false });
  if (!result.length) {
    throw new AppError(status.NOT_FOUND, "There are no blogs!");
  }
  return result;
};

// Get a single blog by ID
const getSingleBlogFromDb = async (id: string) => {
  const result = await Blog.findOne({ _id: id, isDeleted: false });
  if (!result) {
    throw new AppError(status.NOT_FOUND, "Blog not found!");
  }
  return result;
};

// Get all featured blogs
const getFeaturedBlogsFromDb = async () => {
  const result = await Blog.find({ featured: true, isDeleted: false });
  if (!result.length) {
    throw new AppError(status.NOT_FOUND, "There are no featured blogs!");
  }
  return result;
};

// Update a blog by ID
const updateBlogIntoDb = async (id: string, payload: Partial<IBlog>) => {
  const isExistsBlog = await Blog.findOne({ _id: id, isDeleted: false });
  if (!isExistsBlog) {
    throw new AppError(status.NOT_FOUND, "Blog not found!");
  }
  const { isDeleted, featured, ...restPayload } = payload;
  const result = await Blog.findOneAndUpdate(
    { _id: isExistsBlog._id },
    restPayload,
    { new: true }
  );
  return result;
};

// Update only the 'featured' field of a blog
const updateBlogFeaturedStatus = async (id: string, featured: boolean) => {
  const isExistsBlog = await Blog.findOne({ _id: id, isDeleted: false });
  if (!isExistsBlog) {
    throw new AppError(status.NOT_FOUND, "Blog not found!");
  }
  const result = await Blog.findOneAndUpdate(
    { _id: isExistsBlog._id },
    { featured },
    { new: true }
  );
  return result;
};

// Soft delete a blog by ID
const softDeleteBlogFromDb = async (id: string) => {
  const isExistsBlog = await Blog.findOne({ _id: id, isDeleted: false });
  if (!isExistsBlog) {
    throw new AppError(status.NOT_FOUND, "Blog not found!");
  }
  const result = await Blog.updateOne(
    { _id: isExistsBlog._id },
    { isDeleted: true }
  );
  if (!result.modifiedCount) {
    throw new AppError(status.BAD_REQUEST, "Blog soft delete failed!");
  }
  return null;
};

// Hard delete a blog by ID
const deleteBlogFromDb = async (id: string) => {
  const isExistsBlog = await Blog.findOne({ _id: id });
  if (!isExistsBlog) {
    throw new AppError(status.NOT_FOUND, "Blog not found!");
  }
  const result = await Blog.deleteOne({ _id: isExistsBlog._id });
  if (!result.deletedCount) {
    throw new AppError(status.BAD_REQUEST, "Blog hard delete failed!");
  }
  return null;
};

export const BlogServices = {
  createBlogIntoDb,
  getAllBlogsFromDb,
  getSingleBlogFromDb,
  getFeaturedBlogsFromDb,
  updateBlogIntoDb,
  updateBlogFeaturedStatus,
  softDeleteBlogFromDb,
  deleteBlogFromDb,
};
