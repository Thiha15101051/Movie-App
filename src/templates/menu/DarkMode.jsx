import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { MoonStars, Sun } from "tabler-icons-react";

export function ActionToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  return (
    <Group position="center" my="xl">
      <ActionIcon
        className="flex items-center hover"
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? (
          <Sun size="1.8rem" color="yellow" />
        ) : (
          <MoonStars size="1.5rem" color="black" />
        )}
      </ActionIcon>
    </Group>
  );
}
