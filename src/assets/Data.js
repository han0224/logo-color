import { Colors } from "./Colors";
import { IMG } from "./Image";

export const Data = [
  {
    id: 1,
    name: "naver",
    describe: "한국 포털 회사",
    image: IMG.NAVER,
    list: [
      { color: Colors.GREEN, code: "#2DB400" },
      { color: Colors.WHITE, code: "#fff" },
    ],
  },
  {
    id: 2,
    name: "kakao",
    describe: "메신저",
    image: IMG.KAKAO,
    list: [
      { color: Colors.YELLOW, code: "	#FEE500" },
      { color: Colors.BLACK, code: "	#191919" },
    ],
  },
  {
    id: 3,
    name: "coupang",
    describe: "쇼핑",
    image: IMG.COUPANG,
    list: [
      { color: Colors.RED, code: "#E32229" },
      { color: Colors.WHITE, code: "#FFFFFF" },
      { color: Colors.RED, code: "#E95562" },
      { color: Colors.YELLOW, code: "#F8B505" },
      { color: Colors.GREEN, code: "#A9CD24" },
      { color: Colors.BLUE, code: "#46B1E6" },
    ],
  },
];
