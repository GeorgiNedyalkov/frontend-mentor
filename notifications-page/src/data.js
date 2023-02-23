import ChessImage from "./assets/images/image-chess.webp";
import MarkWebber from "./assets/images/avatar-mark-webber.webp";
import AngelaGray from "./assets/images/avatar-angela-gray.webp";
import JacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import RizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import KimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import NathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "./assets/images/avatar-anna-kim.webp";

export const notificationsData = [
  {
    id: 1,
    avatar: MarkWebber,
    username: "Mark Webber",
    unread: true,
    notification: "reacted to your recent post",
    post: "My first tournamet today!",
    timestamp: "1m ago",
  },
  {
    id: 2,
    avatar: AngelaGray,
    username: "Angela Gray",
    unread: true,
    notification: "followed you",
    timestamp: "5 days ago",
  },
  {
    id: 3,
    avatar: JacobThompson,
    username: "Mark Webber",
    unread: true,
    notification: "has joined your group",
    group: "Chess Club",
    timestamp: "5 days ago",
  },
  {
    id: 4,
    avatar: RizkyHasanuddin,
    username: "Rizky Hasanuddin",
    unread: false,
    notification: "Sent your a private message",
    message:
      "Hello, thans for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun improving my game.",
    timestamp: "5 days ago",
  },
  {
    id: 5,
    avatar: KimberlySmith,
    username: "Kimberly Smith",
    unread: false,
    notification: "commented on your picture",
    photo: ChessImage,
    timestamp: "1 week ago",
  },
  {
    id: 6,
    avatar: NathanPeterson,
    username: "Nathan Peterson",
    unread: false,
    notification: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    timestamp: "2 weeks ago",
  },
  {
    id: 7,
    avatar: AnnaKim,
    username: "Anna Kim",
    unread: false,
    notification: "left the group",
    group: "Chess Club",
    timestamp: "2 weeks ago",
  },
];
