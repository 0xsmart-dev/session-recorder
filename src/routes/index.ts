import express from "express";
import recorderMiddleware from "../middlewares/recorder.middleware";
import apiController from "../controllers/api.controller";

const router = express.Router();

// API routes
router.get("/api/records", apiController.getRecords);

// Page routes
router.get("/", recorderMiddleware, (req, res) => {
  res.render("index");
});

router.get("/page1", recorderMiddleware, (req, res) => {
  res.render("page1");
});

router.get("/page2", recorderMiddleware, (req, res) => {
  res.render("page2");
});

router.get("/page3", recorderMiddleware, (req, res) => {
  res.render("page3");
});

router.get("/page4", recorderMiddleware, (req, res) => {
  res.render("page4");
});

router.get("/page5", recorderMiddleware, (req, res) => {
  res.render("page5");
});

export default router;
