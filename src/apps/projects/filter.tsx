import { Dropdown } from "@/components/dropdown";
import { Route } from "@/routes/projects";
import { useState } from "react";
import { FILTERS_OPTIONS } from "./constants";

type FilterValue = ProjectCategoryFilter | "all";

export function ProjectFilter() {
    const navigate = Route.useNavigate();
    const { filter } = Route.useSearch();

    const [filteredProjects, setFilteredProjects] = useState<FilterValue>(filter || "all");

    function applyFilter(value: FilterValue) {
        navigate({
            search: (state) => ({ ...state, filter: value === "all" ? undefined : value }),
        });
    }

    function handleFilterChange(value: FilterValue) {
        setFilteredProjects(value);
        applyFilter(value);
    }

    return (
        <section className="text-white">
            <aside>
                <Dropdown onChange={handleFilterChange} options={FILTERS_OPTIONS} value={filteredProjects} />
            </aside>

            <aside></aside>
        </section>
    );
}
