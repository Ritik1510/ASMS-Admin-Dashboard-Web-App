import { User } from "lucide-react";

export const tabPageHeaderConfig = {
  overview: {
    title: "overview",
    des: "Glances of all modules",
    tags: [ // <-- TODO: for tags, for this consider building badge lib for the system
      {
        icon: User,
        label: "User",
      },
      {
        icon: User,
        label: "Apartments",
      },
      {
        icon: User,
        label: "Society",
      },
      {
        icon: User,
        label: "Complaints",
      },
      {
        icon: User,
        label: "Notices",
      },
    ]
  },
  user: {
    title: "Users",
    des: "Manage all residents, guards and administrators.",
    tags: [
      {
        icon: User,
        label: "Users",
      }
    ]
  },
  apartment: {
    title: "Users",
    des: "",
    tags: [
      {
        icon: User,
        label: "",
      }
    ]
  },
  complaint: {
    title: "Users",
    des: "",
    tags: [
      {
        icon: User,
        label: "",
      }
    ]
  },
  notice: {
    title: "Users",
    des: "",
    tags: [
      {
        icon: User,
        label: "",
      }
    ]
  },
  invitation: {
    title: "Users",
    des: "",
    tags: [
      {
        icon: User,
        label: "",
      }
    ]
  },
} 