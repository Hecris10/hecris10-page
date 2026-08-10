/**
 * Pure date helpers with no Firebase import, safe to use in both server and
 * client components. Keeping these out of `~/services/firestore/*` prevents
 * the Firebase SDK (which runs top-level `getAuth()` etc.) from being pulled
 * into the browser bundle.
 */

/** Convert any of the date-like values Firestore/Next may hand us to epoch ms. */
export function getDateTime(date: unknown): number {
    if (!date) return 0;

    if (date instanceof Date) return date.getTime();

    if (typeof date === "string" || typeof date === "number") {
        return new Date(date).getTime();
    }

    if (typeof date === "object" && "toDate" in date && typeof date.toDate === "function") {
        return (date as { toDate: () => Date }).toDate().getTime();
    }

    return 0;
}

/** Best-effort extraction of a project's date as a JS Date (or null). */
export function getProjectDate<T extends Record<string, unknown>>(
    project: T
): Date | null {
    const ms = getDateTime(
        project.publishedAt ?? project.createdAt ?? project.initialDate
    );
    return ms > 0 ? new Date(ms) : null;
}
