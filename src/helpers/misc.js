const { config } = require("./config");

export const getGenderValues = () => {
	return config.genders.map((gender) => gender.value);
};