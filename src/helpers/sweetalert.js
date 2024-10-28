import Swal from "sweetalert2";

export const swAlert = (title, icon = "info", text = "") => {
	// icon: success | error | info | warning | question

	Swal.fire({
		title,
		text,
		icon,
	});
};

export const swConfirm = (
	title,
	icon = "warning",
	text = "",
	confirmButtonText = "Yes"
) => {
	// icon: success | error | info | warning | question

	return Swal.fire({
		title,
		text,
		icon,
		confirmButtonText,
		showCancelButton: true,
	});
};