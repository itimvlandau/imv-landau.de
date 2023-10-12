export const ab2str = (uint8array: Uint8Array): string => {
  return new TextDecoder().decode(uint8array);
};
