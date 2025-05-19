import { Router } from "express";
import { skillRoutes } from "../modules/skill/skill.route";
import { authRoutes } from "../modules/auth/auth.route";

const router = Router();

const routes = [
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/skills",
    route: skillRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
