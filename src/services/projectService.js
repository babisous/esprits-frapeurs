import supabase from "../utils/supabaseclient";

export const fetchSliderProjects = async () => {
	let { data, error } = await supabase
		.from("projects")
		.select("id, name, type, img, slider")
		.filter("slider", "eq", true);

	if (error) {
		console.error("Erreur lors de la récupération des projets", error);
	} else {
		return data;
	}
};
