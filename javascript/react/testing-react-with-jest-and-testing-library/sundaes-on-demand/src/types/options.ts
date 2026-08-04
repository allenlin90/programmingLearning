export interface OptionType {
  name: string;
  imagePath: string;
  updateItemCount?: (name: string, currentValue: string | number) => void;
}
