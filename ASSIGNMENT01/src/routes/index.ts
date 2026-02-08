import {Router} from 'express';

const appRouter = Router();

//testing route

appRouter.get("/test", (_req, res) => {
    res.json({message: "Welcome, API is working fine!"});
});

export default appRouter;
