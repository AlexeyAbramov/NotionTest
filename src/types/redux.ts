export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

// export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;
