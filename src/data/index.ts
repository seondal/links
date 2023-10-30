import { ASSETS } from "../assets";
import { DataI } from "../interface";

interface Data {
  [key: string]: DataI;
}
export const DATA: Data = {
  velog: {
    icon: ASSETS.velog,
    name: "Seondal.log",
    explain: "개발블로그",
    link: "https://velog.io/@seondal/about",
    color: "#1ec592",
  },
  tistory: {
    icon: ASSETS.tistory,
    name: "Seondalgorithm",
    explain: "문제풀이",
    link: "https://whkakrkr.tistory.com",
    color: "#e5511e",
  },
  notion: {
    icon: ASSETS.notion,
    name: "Dalchive",
    explain: "공부기록 & TIL",
    link: "https://suave-lilac-075.notion.site/Dalchive-ec0bc59746804968a085c2cf46151c80",
    color: "#000000",
  },
  insta: {
    icon: ASSETS.insta,
    name: "Instagram",
    explain: "@dev_seondal",
    link: "https://www.instagram.com/dev_seondal/",
    color: "#e4405f",
  },
  gmail: {
    icon: ASSETS.gmail,
    name: "Mail",
    explain: "sseondal@gmail.com",
    link: "mailto:sseondal@gmail.com",
    color: "#d14836",
  },
  github: {
    icon: ASSETS.github,
    name: "Github",
    explain: "@seondal",
    link: "https://github.com/seondal",
    color: "#892fa3",
  },
  projects: {
    name: "Projects",
    explain: "ReadMe",
    link: "https://suave-lilac-075.notion.site/fd0c2a204d8e4fd7b193800c20d5eda0?v=c62e2af146ed446a97b34c86c16d4835",
    color: "#892fa3",
  },
  toss: {
    icon: ASSETS.toss,
    name: "Toss",
    explain: "커피 한잔 사주기",
    link: "https://toss.me/seondal",
    color: "#0064ff",
  },
};
