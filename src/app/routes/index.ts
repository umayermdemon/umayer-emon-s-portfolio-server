import { Router } from "express";
import { skillRoutes } from "../modules/skill/skill.route";
import { authRoutes } from "../modules/auth/auth.route";

const router = Router();

const routes = [
  {
    path: "/skill",
    route: skillRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
