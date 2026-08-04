import { DoorOpen, Flag, Home, NotebookPen, Paperclip, User } from "lucide-react";

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
    title: "Apartments",
    des: "Manage all your apartments and activities",
    tags: [
      {
        icon: Home,
        label: "apartments",
      }
    ]
  },
  complaint: {
    title: "Complaints",
    des: "Manage resident's complaints and update status, ",
    tags: [
      {
        icon: Paperclip,
        label: "Complaints",
      }
    ]
  },
  notice: {
    title: "Notices",
    des: "Populate your notice to the all user of your society",
    tags: [
      {
        icon: Flag,
        label: "notices",
      }
    ]
  },
  invitation: {
    title: "Invitations",
    des: "Invite new users, see status of invitaion process",
    tags: [
      {
        icon: NotebookPen,
        label: "Invite",
      }
    ]
  },
  visitors: {
    title: "Visitors",
    des: "See all incoming entries, visiting status",
    tags: [
      {
        icon: DoorOpen,
        label: "Visitor",
      }
    ]
  },
} 