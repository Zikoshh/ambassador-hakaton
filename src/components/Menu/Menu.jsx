import {
  Persons,
  Picture,
  ListCheck,
  TShirt,
  ChartPie,
} from "@gravity-ui/icons";
import Stack from "@mui/material/Stack";
import MenuButton from "../../ui/MenuButton/MenuButton";
export default function Menu() {
  return (
    <Stack
      sx={{ width: "224px", display: "flex", margin: "20px auto", gap: "4px" }}
      useFlexGap
      spacing={2}
    >
      <MenuButton startIcon={<Persons />}>Профили</MenuButton>
      <MenuButton startIcon={<Picture />}>Контент</MenuButton>
      <MenuButton startIcon={<ListCheck />}>Задачи</MenuButton>
      <MenuButton startIcon={<TShirt />}>Мерч</MenuButton>
      <MenuButton startIcon={<ChartPie />}>Аналитика</MenuButton>
    </Stack>
  );
}
