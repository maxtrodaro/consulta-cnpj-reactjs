const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const storeController = require("./controllers/StoreController");
const searchController = require("./controllers/SearchController");
const profileController = require("./controllers/ProfileController");
const loginController = require("./controllers/LoginController");
const tokenController = require("./controllers/TokenController");
const serverController = require("./controllers/ServerController");

const authMiddleware = require("./middlewares/authorization");

const routes = express.Router();

routes.get("/store", storeController.getStore);
routes.post(
	"/store",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required(),
			cnpj: Joi.string().required().length(14),
			cod_emp: Joi.string().required().length(8),
			serv_ip: Joi.string().required().min(8).max(15),
		}),
	}),
	storeController.postStore
);
routes.delete(
	"/store/:cnpj",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			cnpj: Joi.string().required().length(14),
		}),
	}),
	storeController.deleteStore
);
routes.put(
	"/store/:cnpj",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			cnpj: Joi.string().required().length(14),
		}),
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required(),
			cnpj: Joi.string().required().length(14),
			cod_emp: Joi.string().required().length(8),
			serv_ip: Joi.string().required().min(8).max(15),
		}),
	}),
	storeController.editStore
);

routes.get(
	"/searchStore",
	celebrate({
		[Segments.HEADERS]: Joi.object()
			.keys({
				cnpj: Joi.string().required().length(14),
			})
			.unknown(),
	}),
	searchController.getStore
);

routes.get("/profile", profileController.getProfile);
routes.post(
	"/profile",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required().min(4),
			username: Joi.string().required().min(4),
			password: Joi.string().required().min(3),
		}),
	}),
	profileController.postProfile
);
routes.delete(
	"/profile/:username",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			username: Joi.string().required().min(4),
		}),
	}),
	profileController.deleteProfile
);
routes.put(
	"/profile/:oldUsername",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			oldUsername: Joi.string().required().min(4),
		}),
	}),
	profileController.editProfile
);

routes.post(
	"/login",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			username: Joi.string().required().min(4),
		}),
	}),
	loginController.loginProfile
);

routes.post(
	"/authenticate",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			username: Joi.string().required().min(4),
			password: Joi.string().required(),
		}),
	}),
	loginController.jwtProfile
);

routes.get("/server", serverController.getServer);
routes.post(
	"/server",
	celebrate({
		[Segments.BODY]: Joi.object().keys({
			name: Joi.string().required().min(3),
			ip: Joi.string().required().min(8).max(15),
		}),
	}),
	serverController.createServer
);
routes.delete(
	"/server/:name",
	celebrate({
		[Segments.PARAMS]: Joi.object().keys({
			name: Joi.string().required().min(3),
		}),
	}),
	serverController.deleteServer
);

routes.use(authMiddleware);
routes.get("/token", tokenController.getToken);

module.exports = routes;
