import {Router} from 'express';
import { getAboutMe } from '../controllers/aboutMeController';
import { getMyProfile } from '../controllers/myProfilleController';
import { getProjects } from '../controllers/projectsController';
import { getContactMessages, submitContactForm } from '../controllers/contactMeController';

const appRouter = Router();

//testing route

appRouter.get("/test", (_req, res) => {
    res.json({message: "Welcome, API is working fine!"});
});

appRouter.get("/aboutMe", getAboutMe);
appRouter.get("/myProfile", getMyProfile);
appRouter.get("/projects", getProjects);
appRouter.get("/contactMe", getContactMessages);
appRouter.post("/contactMe", submitContactForm);




export default appRouter;
