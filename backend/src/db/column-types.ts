// Default to "timestamp" (postgres-compatible).
// buildDataSource() patches this to "datetime" for sqljs connections at runtime.
export const timestampColumnType: "datetime" | "timestamp" = "timestamp";
