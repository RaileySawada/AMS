import type { DocumentState } from "../types";

export function getDocumentState(
  document: string,
  missingDocuments: string[],
  duplicateSummary: string,
  completeness: number,
): DocumentState {
  if (missingDocuments.includes(document)) {
    return "Missing";
  }

  if (
    duplicateSummary !== "None detected" &&
    duplicateSummary.toLowerCase().includes(document.toLowerCase())
  ) {
    return "Duplicate";
  }

  if (document === "Pictures of Delivered Items or Goods" && completeness < 100) {
    return "Pending";
  }

  return "Uploaded";
}
