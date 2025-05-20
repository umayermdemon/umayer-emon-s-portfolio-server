import { Router } from "express";
import { skillRoutes } from "../modules/skill/skill.route";
import { authRoutes } from "../modules/auth/auth.route";
import { projectRoutes } from "../modules/project/project.route";

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
  {
    path: "/projects",
    route: projectRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
