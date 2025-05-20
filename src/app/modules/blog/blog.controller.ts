import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.service";

const createBlogIntoDb = catchAsync(async (req, res) => {
  console.log(req?.user);
  const result = await BlogServices.createBlogIntoDb(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getAllBlogsFromDb = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllBlogsFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All blogs are retrieved successfully",
    data: result,
  });
});

const getSingleBlogFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.getSingleBlogFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog is retrieved successfully",
    data: result,
  });
});

const getFeaturedBlogsFromDb = catchAsync(async (req, res) => {
  const result = await BlogServices.getFeaturedBlogsFromDb();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Featured blogs are retrieved successfully",
    data: result,
  });
});

const updateBlogIntoDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlogIntoDb(id, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const updateBlogFeaturedStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { featured } = req.body;
  const result = await BlogServices.updateBlogFeaturedStatus(id, featured);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog featured status updated successfully",
    data: result,
  });
});

const softDeleteBlogFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.softDeleteBlogFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog soft deleted successfully",
    data: result,
  });
});

const deleteBlogFromDb = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlogFromDb(id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogControllers = {
  createBlogIntoDb,
  getAllBlogsFromDb,
  getSingleBlogFromDb,
  getFeaturedBlogsFromDb,
  updateBlogIntoDb,
  updateBlogFeaturedStatus,
  deleteBlogFromDb,
  softDeleteBlogFromDb,
};
