"use client";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
// import MessageIcon from "@mui/icons-material/Message";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SwitchAccountOutlinedIcon from "@mui/icons-material/SwitchAccountOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Menu,
  MenuItem,
} from "@mui/material";
import { usePathname } from "next/navigation";

const drawerWidth = 272;

type Props = {
  window?: () => Window;
  children?: React.ReactNode;
};

// type itemType = {
//   name: string;
//   icon: JSX.Element;
//   path: string;
//   children: Array<{ child: string; path: string }>;
// };

const navItems = [
  {
    name: "Portfolio",
    icon: <TrendingUpRoundedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/",
    children: [],
  },
  {
    name: "Invest",
    icon: (
      <CurrencyRupeeRoundedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/invest",
    children: [
      {
        child: "Deal-flow",
        path: "/deal-flow",
      },
      {
        child: "Deal-invites",
        path: "/deal-invites",
      },
      {
        child: "Commitments",
        path: "/commitment",
      },
    ],
  },
  {
    name: "Syndicates",
    icon: <Groups2OutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/syndicate",
    children: [],
  },
  {
    name: "Ledger",
    icon: (
      <TableChartOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/ledger",
    children: [],
  },
  {
    name: "Messages",
    icon: <ChatOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/messages",
    children: [],
  },
  {
    name: "Events",
    icon: (
      <CalendarMonthOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/events",
    children: [],
  },
  {
    name: "News & Blogs",
    icon: <FeedOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/news-blogs",
    children: [],
  },
  {
    name: "Help & Support",
    icon: (
      <ContactSupportOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/help-support",
    children: [],
  },
];

const syndicateNavItems = [
  {
    name: "Overview",
    icon: (
      <TableChartOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/syndicate-panel/overview",
    children: [],
  },
  {
    name: "Live deals",
    icon: (
      <CurrencyRupeeRoundedIcon sx={{ color: "#484644", fontSize: "20px" }} />
    ),
    path: "/syndicate-panel/live-deals",
    children: [],
  },
  {
    name: "MIS & Updates",
    icon: (
      <TrendingUpRoundedIcon
        sx={{
          color: "#484644",
          fontSize: "24px",
          border: "2px solid #484644",
          borderRadius: "4px",
          padding: "2px",
        }}
      />
    ),
    path: "/syndicate-panel/mis-update",
    children: [],
  },
  {
    name: "Requests",
    icon: <Groups2OutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/syndicate-panel/request",
    children: [],
  },
  {
    name: "Messages",
    icon: <ChatOutlinedIcon sx={{ color: "#484644", fontSize: "20px" }} />,
    path: "/syndicate-panel/message",
    children: [],
  },
  {
    name: "Help & Support",
    icon: (
      <ContactSupportOutlinedIcon sx={{ color: "#000", fontSize: "20px" }} />
    ),
    path: "/syndicate-panel/help-support",
    children: [],
  },
];

const Sidebar = ({ window, children }: Props) => {
  // const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const currentPath = usePathname();

  //newWidth Updates
  let newWidth = drawerWidth;

  newWidth =
    currentPath === "/deal-details"
      ? 0
      : currentPath === "/syndicate/syndicate-details"
      ? 0
      : currentPath === "/syndicate-panel/syndicate-details"
      ? 0
      : currentPath === "/syndicate-panel/deal-details"
      ? 0
      : currentPath === "/on-boarding"
      ? 0
      : currentPath === "/login"
      ? 0
      : currentPath === "/sign-up"
      ? 0
      : 272;

  console.log(newWidth);

  //-----------

  const handleItemClick = (name: string, path: string) => {
    setSelectedItem(name);
    router.push(path, { scroll: false });
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // header - menu
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [syndicatePanel, setSyndicatePanel] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // const panelChange = options.map((item) => item);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (name: string, path: string) => {
    router.push(path, { scroll: false });
    setAnchorEl(null);
  };

  useEffect(() => {
    if (currentPath && currentPath.includes("/syndicate-panel/")) {
      setSyndicatePanel(true);
    } else {
      setSyndicatePanel(false);
    }
  }, [currentPath]);

  const options = [
    {
      name: "Profile settings",
      path: "/profile",
      icon: (
        <SettingsOutlinedIcon sx={{ color: "#484644", fontSize: "24px" }} />
      ),
    },
    {
      name:
        currentPath && currentPath.includes("/syndicate-panel/")
          ? "Switch as investor"
          : "Switch as syndicate lead",
      path:
        currentPath && currentPath.includes("/syndicate-panel/")
          ? "/"
          : "/syndicate-panel/overview",
      icon: (
        <SwitchAccountOutlinedIcon
          sx={{ color: "#484644", fontSize: "24px" }}
        />
      ),
    },
    {
      name: "Tax & documents",
      path: "/",
      icon: (
        <DescriptionOutlinedIcon sx={{ color: "#484644", fontSize: "24px" }} />
      ),
    },
    {
      name: "Disclosure",
      path: "/",
      icon: (
        <PrivacyTipOutlinedIcon sx={{ color: "#484644", fontSize: "24px" }} />
      ),
    },
    {
      name: "Logout",
      path: "/",
      icon: <LogoutOutlinedIcon />,
    },
  ];

  const drawer = (
    <Box style={{ background: "#FFFAF4", height: "100%" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "24px" }}
      >
        <a href="/">
          <img
            style={{
              width: "100%",
              maxWidth: "178px",
            }}
            src="/images/logo.png"
            alt=""
          />
        </a>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "48px",
          gap: "8px",
        }}
      >
        {syndicatePanel === true ? (
          syndicateNavItems.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: "8px",
                  maxWidth: "200px",
                  width: "100%",
                  alignItems: "center",
                  textAlign: "start",
                  justifyContent: "start",
                  cursor: "pointer",
                  background:
                    item.path === currentPath ? "#484644" : "transparent",
                  color: item.path === currentPath ? "#fff" : "#484644",
                  borderRadius: "8px",
                  outline: "none",
                  padding: "12px 16px",
                }}
                onClick={() => handleItemClick(item.name, item.path)}
              >
                <Typography
                  sx={{
                    background: "#FFFAF4",
                    borderRadius: "4px",
                    padding: "4px",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </Typography>
                <Typography textAlign={"start"} fontFamily={"mySecondFont"}>
                  {item.name}
                </Typography>
              </Box>
            );
          })
        ) : (
          <>
            {navItems.map((item, index) => {
              return (
                <>
                  {item?.children.length > 0 ? (
                    <Accordion
                      sx={{
                        bgcolor: "unset",
                        border: "none",
                        boxShadow: "none",
                        maxWidth: "200px",
                        width: "100%",
                        padding: "0px 16px",
                        margin: "0px 0px !important",
                        "&.MuiAccordion-root::before": { display: "none" },
                      }}
                    >
                      <AccordionSummary
                        sx={{ padding: "0px 0px" }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography
                          sx={{
                            background: "#FFFAF4",
                            borderRadius: "4px",
                            padding: "4px",
                            width: "24px",
                            height: "24px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {item.icon}
                        </Typography>
                        <Typography
                          ml={"8px"}
                          textAlign={"start"}
                          fontFamily={"mySecondFont"}
                        >
                          {item.name}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          ml: 1.3,
                          borderLeft: "1px solid #C0C0C0",
                          padding: "0px",
                        }}
                      >
                        {item.children.map((ch) => (
                          <Typography
                            key={ch.child}
                            onClick={() => handleItemClick(ch.child, ch.path)}
                            sx={{
                              cursor: "pointer",
                              ml: 1,
                              padding: "8px",
                              borderRadius: "8px",
                              fontFamily: " mySecondFont",
                              bgcolor:
                                selectedItem === ch.child ? "#484644" : "",
                              color: selectedItem === ch.child ? "#fff" : "",
                            }}
                          >
                            {ch.child}
                          </Typography>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  ) : (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        gap: "8px",
                        maxWidth: "200px",
                        width: "100%",
                        alignItems: "center",
                        textAlign: "start",
                        justifyContent: "start",
                        cursor: "pointer",
                        background:
                          item.path === currentPath ? "#484644" : "transparent",
                        color: item.path === currentPath ? "#fff" : "#484644",
                        borderRadius: "8px",
                        outline: "none",
                        padding: "12px 16px",
                      }}
                      onClick={() => handleItemClick(item.name, item.path)}
                    >
                      <Typography
                        sx={{
                          background: "#FFFAF4",
                          borderRadius: "4px",
                          padding: "4px",
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {item.icon}
                      </Typography>
                      <Typography
                        textAlign={"start"}
                        fontFamily={"mySecondFont"}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  )}
                </>
              );
            })}
          </>
        )}
      </Box>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            background: "#fff",
            display:
              currentPath === "/on-boarding"
                ? "none"
                : currentPath === "/login"
                ? "none"
                : currentPath === "/sign-up"
                ? "none"
                : "block",
            width: { sm: `calc(100% - ${newWidth}px)` },
            ml: { sm: `${newWidth}px` },
            borderBottom: " 1px solid #E8E8E8",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flex: "1",
              }}
            >
              <Box>
                {syndicatePanel === false ? (
                  <input
                    className="headerInput"
                    style={{
                      border: "1px solid #c0c0c0",
                      padding: "10px 16px",
                      borderRadius: "8px",
                      outline: "none",
                      color: "#9C9C9B",
                    }}
                    placeholder="Search by company name..."
                    type="text"
                  />
                ) : (
                  <Typography
                    //   sx={{
                    //   p:
                    //     currentPath === "/syndicate-panel/deal-details"
                    //       ? "0 0 0 20px"
                    //       : 3,
                    // }}
                    sx={{
                      p: {
                        md:
                          currentPath === "/syndicate-panel/deal-details"
                            ? "0 0 0 20px"
                            : 3,
                        xs:
                          currentPath === "/syndicate-panel/deal-details"
                            ? "0 0 0 0px"
                            : 3,
                      },
                    }}
                    color={"#161514"}
                    // fontSize={"18px" }
                    fontSize={{ md: "18px", xs: "12px" }}
                    fontFamily={"mySecondFont"}
                    letterSpacing={"1.5px"}
                  >
                    SYNDICATE ADMIN PANEL
                  </Typography>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: { md: "24px", xs: "16px" },
                  alignItems: "center",
                  padding: "12px 32px",
                }}
              >
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    background: "#f4f8ff",
                    borderRadius: "56px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NotificationsNoneIcon
                    sx={{ color: "#484644", fontSize: "24px" }}
                  />
                  {/* <span
                    style={{ color: "#2f2f2f", fontWeight: "300" }}
                    className="material-symbols-outlined"
                  >
                    notifications
                  </span> */}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: { md: "16px", xs: "8px" },
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "56px",
                      height: "56px",
                      background: "#f4f8ff",
                      borderRadius: "56px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src="/images/usericon.png" alt="" />
                  </Box>
                  <Box
                    sx={{
                      display: { md: "flex", xs: "none" },
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    <Typography
                      color={"#2f2f2f"}
                      fontFamily={"mySecondFont"}
                      fontSize={"16px"}
                      textAlign={"start"}
                    >
                      Shailesh Vickram
                    </Typography>
                    <Typography
                      color={"#2f2f2f"}
                      fontFamily={"myThirdFont"}
                      fontSize={"14px"}
                      textAlign={"start"}
                    >
                      Investor
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      sx={{ color: "#484644" }}
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <ExpandCircleDownOutlinedIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          padding: "24px",
                        }}
                      >
                        <img
                          style={{
                            width: "48px",
                            height: "48px",
                            objectFit: "cover",
                          }}
                          src="/images/userpic.png"
                          alt=""
                        />
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <Typography
                            color={"#2f2f2f"}
                            fontFamily={"mySecondFont"}
                            fontSize={"16px"}
                            textAlign={"start"}
                          >
                            Shailesh Vickram
                          </Typography>
                          <Typography
                            color={"#2f2f2f"}
                            fontFamily={"myThirdFont"}
                            fontSize={"14px"}
                            textAlign={"start"}
                          >
                            Investor
                          </Typography>
                        </Box>
                      </Box>
                      {options.map((option) => (
                        <MenuItem
                          sx={{
                            width: "320px",
                            padding: "16px 24px",
                            fontFamily: "myThirdFont",
                            color:
                              option.name === "Logout" ? "#720000" : "#484644",
                          }}
                          key={option.name}
                          onClick={() =>
                            handleOptionClick(option.name, option.path)
                          }
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                            }}
                          >
                            {option.icon}
                            {option.name}
                          </Box>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: newWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: { md: newWidth, xs: drawerWidth },
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: newWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p:
              currentPath === "/profile"
                ? "16px 0px 0px 0px"
                : currentPath === "/deal-details"
                ? { md: "0px 48px 48px 48px", xs: "24px" }
                : currentPath === "/syndicate/syndicate-details"
                ? { md: "0px 48px 48px 48px", xs: "24px" }
                : currentPath === "/syndicate-panel/syndicate-details"
                ? "20px"
                : currentPath === "/syndicate-panel/deal-details"
                ? "20px"
                : currentPath === "/on-boarding"
                ? "0px"
                : currentPath === "/login"
                ? "0px"
                : currentPath === "/sign-up"
                ? "0px"
                : 3,

            width: { sm: `calc(100% - ${newWidth}px)` },
          }}
        >
          <Toolbar
            sx={{
              minHeight: {
                md:
                  currentPath === "/on-boarding"
                    ? 0
                    : currentPath === "/login"
                    ? 0
                    : currentPath === "/sign-up"
                    ? 0
                    : "56px",
                xs:
                  currentPath === "/on-boarding"
                    ? 0
                    : currentPath === "/login"
                    ? 0
                    : currentPath === "/sign-up"
                    ? 0
                    : "56px",
              },
            }}
          />
          {/* {navItems[selectedItem].element} */}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
