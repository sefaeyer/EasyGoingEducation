const { config } = require("./config");

export const getGenderValues = () => {
	return config.genders.map((item) => item.value);
};

export const getTermValues = () => {
	return config.educationTerms.map((item) => item.value);
};

export const getDayValues = () => {
	return config.days.map((item) => item.value);
};

export const getTermLabel = (val) => {
	const term = config.educationTerms.find((t) => t.value === val);
	return term?.label ?? "";
};

export const getDayLabel = (val) => {
	const day = config.days.find((t) => t.value === val);
	return day?.label ?? "";
};

export const getLessonNames = (lessons) => {
	return lessons.map(item=> item.lessonName).join("-");
}