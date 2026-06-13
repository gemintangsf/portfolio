/**
 * Utility function to combine classnames dynamically.
 * Works similarly to classnames or clsx without external dependencies.
 */
export function cn(...inputs: (string | undefined | null | boolean | Record<string, boolean>)[]) {
  const classes: string[] = [];
  inputs.forEach((input) => {
    if (!input) return;
    if (typeof input === "string") {
      classes.push(input);
    } else if (typeof input === "object") {
      Object.keys(input).forEach((key) => {
        if (input[key]) {
          classes.push(key);
        }
      });
    }
  });
  return classes.join(" ");
}

/**
 * Format Date string to a standard local display format.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
