import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRouter } from "next/navigation";

interface Path {
  href: string;
  label: string;
}

interface MyBreadcrumbsProps {
  paths: Path[];
  currentPath: any;
}

const generateBreadcrumbs = (
  paths: Path[],
  currentPath: string,
  navigate: (path: string) => void
) => {
  return paths?.map((path, index) => (
    <Link
      key={index}
      sx={{
        fontFamily: path.href === currentPath ? "mySecondFont" : "myFourthFont",
        textDecoration:  path.href === currentPath ? "none" : "underline",
        cursor: "pointer"
      }}
      underline="hover"
      
      color={path.href === currentPath ? "#0E492E" : "#484644"}
      onClick={() => navigate(path.href)}
    >
      {path.label}
    </Link>
  ));
};

const MyBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({
  paths,
  currentPath,
}) => {
  const router = useRouter();
  const navigate = (path: string) => router.push(path);

  return (
    <Stack spacing={2} sx={{ marginTop: "24px" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {generateBreadcrumbs(paths, currentPath, navigate)}
      </Breadcrumbs>
    </Stack>
  );
};

const AllBreadcrumbs: React.FC<MyBreadcrumbsProps> = ({
  paths,
  currentPath,
}) => {
  return (
    <Box>
      <MyBreadcrumbs paths={paths} currentPath={currentPath} />
    </Box>
  );
};

export default AllBreadcrumbs;
